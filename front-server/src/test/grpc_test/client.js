const hello_proto = require('./proto')
const grpc = require('@grpc/grpc-js')

function main() {
    var client = new hello_proto.Greeter('localhost:50051', grpc.credentials.createInsecure())
    client.sayHelloSimple({ name : 'Hello' }, function(err, response) {
        if (err) {
            console.error('Error: ', err)
        } else {
            console.log(response.message)
        }
    })

    //TODO:报错"Cannot read properties of undefined (reading 'name')",
    // let call = client.sayHelloDouble();
    // call.on('data', function (response) {
    //     console.log('客户端receive:', response)
    // })
    // call.on('end', function () {
    //     console.log('服务器发送end,客户端关闭')
    // })
    // call.write({ name : 'Eden1' })
    // call.write({ name : 'Eden2' })
    // call.write({ name : 'Eden3' })

    // call.end()
    
}

main()