const http = require("http");
const express = require("express");
const route = require("./routes/index");

let app = express();
let server = http.createServer(app);

app.get("/",(req,resp) => {
    //这样就相当于接收到前面发送的一个get请求
    resp.send("我是服务器返回的信息，我是小哥哥")
});

function start() {
    server.listen(8888);
    
    // 终端打印如下信息
    console.log('Server running at http://127.0.0.1:8888/');
}

exports.start = start;

