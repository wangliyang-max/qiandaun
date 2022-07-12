const http = require("http")
const route = require("./router")
const apiRouter = require("./api")

const Router = {}

// route 和 apiRouter合并在一个对象中，使用方法Object.assign
Object.assign(Router, route)
Object.assign(Router, apiRouter)

// express use
function use (obj){
   Object.assign(Router,obj)
}

function start (){
   http.createServer((req, res) => {
    const myURL = new URL(req.url, "http://127.0.0.1")
       
    try {
        Router[myURL.pathname](req,res)
    } catch (err) {
        Router["/404"](req,res)
    }

}).listen(3000, () => {
    console.log("服务器启动成功")
})
}

exports.start = start
exports.use = use