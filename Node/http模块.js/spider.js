var http = require("http")
var https = require("https")
var cheerio = require("cheerio")
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
                res.end(spider(data))
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
    https.get(`https://i.maoyan.com/`, (res) => {
        // 获取数据的过程
        res.on("data", (chunk) => {
            data+=chunk
        })
        // end是获取的最终数据
        res.on("end", ()=>{
            console.log(data)
             // 将数据返回给前端
            cb(data)
        })
    })
   
}

function spider(data) {
    // 使用cheerio将有用的数据进行过滤
    // cheerio是一个第三方模块

    // 获取数据
    let $ = cheerio.load(data)

    let $name = $(".column .content")
    let names = []
    $name.each((index, value) => {
        names.push(
            {
                titles: $(value).find(".title").text(),
                grades: $(value).find(".grade").text(),
                actors: $(value).find(".actor").text()
            }
        )
    })
    console.log(names)
    return JSON.stringify(names)
}