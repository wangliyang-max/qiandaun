const server = require("./server")
const router = require("./router")
const apiRouter = require("./api")

// 合并路由
server.use(router)
server.use(apiRouter)

server.start()