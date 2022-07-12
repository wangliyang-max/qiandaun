var http = require("http")
var https = require("https")
var url = require("url")
const { createBrotliCompress } = require("zlib")

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
            httppost((data) => {
                res.end(data)
            })
            break;
        default:
            res.end("404")
    }
}).listen(3000, () => {
    console.log("服务器启动成功")
})

function httppost(cb) {
    var data = ""

    var options = {
        // 域名
        hostname: "m.xiaomiyoupin.com",
        // 端口号
        port: "443",
        // http的默认端口号是80，https的默认端口号是443
        path: "/mtop/mf/resource/data/batchList",
        method: "POST",
        Headers: {
            "Content-Type":"application/json"
        }

    }
    // 没有直接.post，使用request进行配置
    var req = https.request(options, (res) => {
        // 请求结果
        res.on("data", (chunk) => {
            data+=chunk
        })
        res.on("end", () => {
            cb(data)
        })
    })
   
    // 发出请求
    // POST请求一般都是安全的，一般要携带数据，这里就是把携带的数据发送出去
    req.write(JSON.stringify([{}, ["newer_popup_ad", "download_options"]]))
    req.end()
}