var http = require("http")

// 创建服务器
http.createServer((req, res) => {
    res.writeHead(200,{"Content-Type":"text/plain;charset:UTF-8"})
    // 接受浏览器传递的参数，返回渲染的内容
    res.write(`
    <html>
       <b>hello world</b>
       <p>我是一个段落</p>
    </html>
    `)
    res.end()

}).listen(3000, () => {
    console.log("server start")
})