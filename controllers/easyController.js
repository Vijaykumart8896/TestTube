const fs = require('fs')
const ytdl = require("ytdl-core")
const express = require("express")

const app = express();

// get requests
exports.getEasyController = (req, res) => {
    res.setHeader("content-type", "text/html")
    res.status = 200
    fs.createReadStream("./public/index.html", "utf-8").pipe(res)
}


// post requests
exports.postEasyController = async (req, res) => {
    let URL = req.body.url
    let videoID = URL.slice(17)
    let formats = req.body.format;
    let info = await ytdl.getInfo(videoID)
    let avail = ytdl.filterFormats(info.formats, 'videoandaudio');
    let availresolution;
    console.log(avail.length)

    avail.forEach(ele => {
        if (ele.itag == req.body.resolution) {
            console.log(ele.itag)
            availresolution = true
        } else {
            availresolution = false
        }
    })

    if (formats == "audio") {
        ytdl(URL, { filter: format => format.itag == req.body.audiobitrate }).pipe(res)
        res.header("content-disposition", `attachment;filename=audio.mp3`);
    } else {
        if (availresolution) {
            ytdl(req.body.url, { filter: format => format.itag == req.body.resolution }).pipe(res)
        }else{
            ytdl(req.body.url).pipe(res)
        }
        res.header("content-disposition", 'attachment;filename=video.mp4');
    }
}

exports.postnew = async (req, res) => {
    ytdl(req.body.url).pipe(res)
    res.header("content-disposition", `attachment;filename=video.mp4`);

}
