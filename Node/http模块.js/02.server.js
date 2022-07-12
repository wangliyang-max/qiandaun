var http = require("http")

// 创建服务器
http.createServer((req, res) => {
    if (req.url == "/favicon.ico")
        return
    console.log(req.url)
    res.writeHead(renderStatus(req.url), { "Content-Type": "text/html;charset=utf-8" })
    res.write(renderHTML(req.url))
    res.end()

}).listen(3000, () => {
    console.log("server start")
})

function renderStatus(url) {
    var arr = ["/home","/list"]
   return arr.includes(url)?200:404
}
function renderHTML(url){
    switch(url){
        case "/home":
            return `
            <html>
                <b>hello world</b>
                <div>大家好，我是home</div>
            </html>
            `
        case "/list":
            return `
            <html>
                <b>hello world</b>
                <div>大家好，我是list</div>
            </html>
            `
        default:
             return `
            <html>
                <b>hello world</b>
                <div>404 not found</div>
            </html>
            `
   }
}