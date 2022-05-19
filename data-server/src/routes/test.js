const express = require("express")
const router = express.Router()

router.get("/",function (req,res) {
    res.send("测试页面")
})

router.get("/action1",function (req,res) {
    res.send("测试页面action1")
})

router.post("/action2",function (req,res) {
    // JSON.parse()将json对象转成js数据;
    // JSON.stringify()将对象、数组转换成json对象。
})



module.exports = router