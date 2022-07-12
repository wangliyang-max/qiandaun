var http = require("http")
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
            res.end(`${JSON.stringify({
                name: "yang",
                age:18
            })}`)
    }
}).listen(3000, () => {
    console.log("服务器启动成功")
})