const express = require("express")
const router = express.Router()

router.use('/test',require("./test"))

router.get("/",function (req,res) {
    res.send("主页面")
})

module.exports = router