var http = require("http")
var url = require("url")
http.createServer((req, res) => {
    var urlobj = url.parse(req.url, true)
    console.log(urlobj)
    switch (urlobj.pathname) {
        case "/hello":
            res.end(`${urlobj.query.callback}(${JSON.stringify({
                name: "yang",
                age:18
            })})`)
    }
}).listen(3000, () => {
    console.log("服务器启动成功")
})