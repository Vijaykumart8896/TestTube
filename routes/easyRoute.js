const express = require("express")
const {getEasyController, postEasyController, postnew} = require("../controllers/easyController")

router = express.Router()

router.get("/url",getEasyController)
router.post("/urldata", postEasyController)
// router.post("/urldata", postEasyController)


module.exports = router