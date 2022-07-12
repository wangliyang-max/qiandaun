const express = require("express")
const app = express()


// http响应
app.use(express.static("./public"))
app.get("/",(req, res)=> {
    res.send({ok:1})
})

app.listen(3000)

// webSocket响应
const WebSocket = require("ws")
const WebSocketServer = WebSocket.WebSocketServer
const wss = new WebSocketServer({ port: 8080 });

// ws表示当前连接的客户端，wss表示当前创建的服务器
wss.on('connection', function connection(ws) {

    // 将数据从服务端发送到客户端
    ws.send('欢迎来到聊天室');
    // ws.send不会直接显示在页面上,在data数据中

    // 接收从客户端传过来的消息
    ws.on('message', function message(data) {
         console.log('received: %s', data);
         
         // 转发给其他客户端，遍历客户端给每个人发消息,并且排除自己
        wss.clients.forEach(function each(client) {
            // 判断当前客户端是否处于连接状态
            if (client!==ws&&client.readyState === WebSocket.OPEN) {
                client.send(data,{binary:false});
            }
        });

     });
    

});