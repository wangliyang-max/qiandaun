
const JWT = require("../utils/jwt")
// webSocket响应
const WebSocket = require("ws")
const WebSocketServer = WebSocket.WebSocketServer
const wss = new WebSocketServer({ port: 8080 });

// ws表示当前连接的客户端，wss表示当前创建的服务器
wss.on('connection', function connection(ws, req) {
    // 获取请求，检查token
    const myURL = new URL(req.url, "http://127.0.0.1:3000")
    // console.log(myURL.searchParams.get("token"))
    // 校验token
    const payload = JWT.verify(myURL.searchParams.get("token"))
    if (payload) {
        // 将数据从服务端发送到客户端
        ws.send(createMessage(WebSocketType.GroupChat, null, '欢迎来到聊天室'));
        ws.user = payload//将用户信息添加到ws中

        // 只要有用户登录，就会告知所有用户
        sendAll()
        
    } else {
         ws.send(createMessage(WebSocketType.Error,null,'未授权'));
    }


    // 接收从客户端传过来的消息
    ws.on('message', function message(data) {

        const msgObj = JSON.parse(data)
        switch (msgObj.type) {
            case WebSocketType.GroupList:
                // 在线用户
                // console.log(Array.from(wss.clients).map(item=>item.user))
                ws.send(createMessage(WebSocketType.GroupList,null,JSON.stringify(Array.from(wss.clients).map(item=>item.user))))
                break;
            case WebSocketType.GroupChat:
                // console.log(msgObj.data)
                // 群发消息，显示所有用户
                wss.clients.forEach(function each(client) {
                    if (client.readyState == WebSocket.OPEN) {
                        client.send(createMessage(WebSocketType.GroupChat, ws.user, msgObj.data), {binary: false})
                    }      
                 })
                break;
            case WebSocketType.Error:
                break;
            case WebSocketType.SingleChat:
                wss.clients.forEach(function each(client) {
                    if (client.user.username===msgObj.to && client.readyState == WebSocket.OPEN) {
                        client.send(createMessage(WebSocketType.SingleChat, ws.user, msgObj.data), {binary: false})
                    }      
                 })
                break;
        }

    });
    
    // 等有人离开时，也重新更新用户列表
    // 浏览器关闭自动触发
    ws.on("close", () => {
        wss.clients.delete(ws.user)
        sendAll()
        // console.log(ws.user)
    })
    

});

const WebSocketType = {
    Error: 0,
    GroupList: 1,
    GroupChat: 2,
    SingleChat:3
}
function createMessage(type, user, data) {
    return JSON.stringify({
        type,
        user,
        data
    })
   
}

function sendAll() {
    // 群发消息，显示所有用户
    wss.clients.forEach(function each(client) {
        if (client.readyState == WebSocket.OPEN) {
           client.send(createMessage(WebSocketType.GroupList,null,JSON.stringify(Array.from(wss.clients).map(item=>item.user))))
       }
      
   })
}