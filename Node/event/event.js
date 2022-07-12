const EventEmitter = require("events")
var http = require("http")
var https = require("https")

var event = null
var url = require("url")
http.createServer((req, res) => {
    var urlobj = url.parse(req.url, true)
    
    res.writeHead(200, {
        "Content-Type": "application/json;charset=utf-8",
        // cors头,允许跨域
        "access-control-allow-origin":"*"
    })

    switch (urlobj.pathname) {
        case "/hello":
            event = new EventEmitter()
            event.on("play", (data) => {
                console.log(data)
                res.end(data)
            })
            // httpget()中执行event.emit进行触发
            httpget()
            break;
        default:
            res.end("404")
    }
}).listen(3000, () => {
    console.log("服务器启动成功")
})

function httpget(cd) {
    var data = ""
    // http还是https视请求的网站而定
    https.get(`https://www.kuaikanmanhua.com/`, (res) => {
        // 获取数据的过程
        res.on("data", (chunk) => {
            data+=chunk
        })
        // end是获取的最终数据
        res.on("end", ()=>{
            console.log(data)
             // 将数据返回给前端
            event.emit("play",data)
        })
    })
   
}