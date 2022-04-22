const express = require("express")
const router = express.Router()

router.get("/",function (req,res) {
    res.send("测试页面")
})

router.get("/action",function (req,res) {
    res.send("测试页面action")
})

module.exports = router