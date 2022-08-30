const express = require("express");
const {PORT}=require('./config/index')
const easyRouter = require("./routes/easyRoute")
let app = express();

let startServer = async () => {
  try {
    // injecting middlewares
    app.use(express.json({ extented: true }));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(__dirname + "/public"))

    // mounting the routes
    app.use("/easydownload", easyRouter)
   
    
    app.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`Server is listening port number ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();
