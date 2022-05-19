const grpc = require('@grpc/grpc-js')
const hello_proto = require('./proto')

let cnt = 1

// 简单gRPC调用
function sayHelloSimple(call, callback) {
    callback(null, { message: `[${cnt++}] echo: ` + call.request.name })
}

// 服务端流式调用
function sayHelloServer(call, callback) {

}

// 客户端流式调用
function sayHelloClient(call, callback) {

}

// 客户端服务端双向流
function sayHelloDouble(call, callback) {
    callback(null, {message: 'Hello ' + call.request.name});
}

  
function main() {
    var server = new grpc.Server()
    server.addService(hello_proto.Greeter.service, {sayHelloSimple: sayHelloSimple, sayHelloServer: sayHelloServer, sayHelloClient: sayHelloClient, sayHelloDouble: sayHelloDouble});
    server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
        server.start()
        console.log('grpc server started')        
    })
}

main()