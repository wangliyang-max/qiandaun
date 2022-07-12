const fs = require("fs")
const path = require("path")
const mime =require("mime")

function render (res,path,type=""){
   res.writeHead(200, { "Content-Type": `${type?type:"text/html"};charset=utf8` })
    res.write(fs.readFileSync(path), "utf-8")
    res.end()
}
const route = {
    "/login": (req,res) => {
        render (res,"./static/login.html")
    },
    "/home": (req,res) => {
         render (res,"./static/home.html")
    },
     "/": (req,res) => {
         render (res,"./static/home.html")
    },
    "/404": (req, res) => {
        if (readStaticFile(req, res)) {
            return 
        }
        res.writeHead(404, { "Content-Type": "text/html;charset=utf8" })
        res.write(fs.readFileSync("./static/404.html"), "utf-8")
        res.end()   
    },
    // "/favicon.ico": (req,res) => {
    //     render (res,"./static/favicon.ico","image/x-icon")
    // }

}

// 静态资源管理
function readStaticFile(req, res) {
    const myURL = new URL(req.url, "http://127.0.0.1:3000")
    // 获取绝对路径
    // __dirname代表的是当前执行命令的绝对路径
    const pathname = path.join(__dirname, "/static", myURL.pathname)

    console.log(pathname)
    if (fs.existsSync(pathname)) {

        render(res,pathname,mime.getType(myURL.pathname.split(".")[1]))
        return true
    } else {
        return false
    }
}
module.exports = route