var http = require("http")
var url = require("url")
var renderStatus = require("../http模块.js/module/renderStatus")
var renderHTML = require("../http模块.js/module/renderHTML")
const { CONNREFUSED } = require("dns")
const { REPLServer } = require("repl")

// 创建服务器
http.createServer((req, res) => {
    
    // 获取url，两个参数：一个url地址，一个url的端口号
    const myURL = new URL(req.url,'http://127.0.0.1:3000')
    var pathname = myURL.pathname
    var searchParams = myURL.searchParams
    console.log(searchParams)
    for (var obj of myURL.searchParams) {
        console.log(obj)
    }
    // 解构
    for (var [key,value] of myURL.searchParams) {
        console.log(key,value)
    }

    res.writeHead(renderStatus.renderStatus(pathname), { "Content-Type": "text/html;charset=utf-8" })
    res.write(renderHTML.renderHTML(pathname))
    res.end()

    // 路径拼接
    var b = new URL("/one", "http://example.com/aaa/bbb")
    console.log(b)
    console.log(b.href)

}).listen(3000, () => {
    console.log("server start")
})



const myURL = new URL('https://a:b@测试?abc#foo');
console.log(url.format(myURL))
console.log(url.format(myURL,{unicode:true, auth:false,fragment:false,search:false}));
