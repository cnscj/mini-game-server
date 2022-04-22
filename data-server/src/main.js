const http = require("http")
const express = require("express")
const routes = require("./routes")
const settings = require("./settings")

let app = express()
let server = http.createServer(app)


function start() {
    
    app.use(routes)
    server.listen(settings.port,settings.ip)

    // 终端打印如下信息
    console.log('Server running at http://%s:%s/',settings.ip,settings.port)
}

exports.start = start

