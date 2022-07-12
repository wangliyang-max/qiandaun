const { Socket } = require("socket.io");
const JWT = require("../utils/jwt")

// 服务端的io模块
function start(server) {
    const io = require("socket.io")(server);
    io.on("connection", (socket) => {
        // token
        // console.log("11111",socket.handshake.query.token)
        // 判断token是否过期
        const payload = JWT.verify(socket.handshake.query.token)
        if (payload) {
            socket.user = payload
            // 发送欢迎
            socket.emit(WebSocketType.GroupChat,createMessage(null,"欢迎来到聊天室"))

            // 发送所有用户列表
            sendAll(io)
        } else {
            socket.emit(WebSocketType.Error,createMessage(null,"token过期"))
        }

        socket.on(WebSocketType.GroupList, () => {
            // // io.sockets.sockets代表所有客户端
            // io.sockets.sockets是map结构，可以转化为数组结构(键的下标是0，值的下标是1)
            console.log(Array.from(io.sockets.sockets).map(item =>item[1].user))

        })

        socket.on(WebSocketType.GroupChat, (msg) => {
            
            //  群发消息用io.sockets
            io.sockets.emit(WebSocketType.GroupChat, createMessage(socket.user, msg.data))
            // 除了自己不发，给其他人发
            // socket.broadcast.emit(WebSocketType.GroupChat, createMessage(socket.user, msg.data))
              
        })

        socket.on(WebSocketType.SingleChat, (msg) => {
            // io.sockets.sockets代表所有客户端
            Array.from(io.sockets.sockets).forEach(item => {
                if (item[1].user.username === msg.to) {
                    item[1].emit(WebSocketType.SingleChat,createMessage(socket.user,msg.data))
                }
            })    
        })

        // 离线后重新发送用户列表(固定写法)
        socket.on("disconnect", () => {
            sendAll(io)
        })
    })
}


const WebSocketType = {
    Error: 0,
    GroupList: 1,
    GroupChat: 2,
    SingleChat:3
}
function createMessage(user, data) {
    return {
        user,
        data
 }
   
}

function sendAll(io) {
    // 群发消息，显示所有用户
    io.sockets.emit(WebSocketType.GroupList,createMessage(null,Array.from(io.sockets.sockets).map(item =>item[1].user).filter(item=>item)))
}

module.exports = start