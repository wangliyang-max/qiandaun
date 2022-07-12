var http = require("http")
var url = require("url")
var renderStatus = require("../http模块.js/module/renderStatus")
var renderHTML = require("../http模块.js/module/renderHTML")

// 创建服务器
http.createServer((req, res) => {
    if (req.url == "/favicon.ico")
        return
    var urlobjt = url.parse(req.url, true)
    console.log(urlobjt.query.a)
    var pathname =urlobjt.pathname
    res.writeHead(renderStatus.renderStatus(pathname), { "Content-Type": "text/html;charset=utf-8" })
    res.write(renderHTML.renderHTML(pathname))
    res.end()

}).listen(3000, () => {
    console.log("server start")
})

