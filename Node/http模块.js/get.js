var http = require("http")
var https = require("https")
const { Http2ServerRequest } = require("http2")
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
            // 拿数据
            httpget((data) => {
                res.end(data)
            })
            break;
        default:
            res.end("404")
    }
}).listen(3000, () => {
    console.log("服务器启动成功")
})

function httpget(cb) {
    var data = ""
    // http还是https视请求的网站而定
    https.get(`https://monitor.maoyan.com/api/speed`, (res) => {
        // 获取数据的过程,数据流，数据一部分一部分返回
        res.on("data", (chunk) => {
            data+=chunk
        })
        // end是获取的最终数据，完整的数据
        res.on("end", ()=>{
            console.log(data)
             // 将数据返回给前端
            cb(data)
        })
    })
   
}