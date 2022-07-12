const fs = require("fs")
function render(res, data, type = "") {
   res.writeHead(200, { "Content-Type": `${type?type:"application/json"};charset=utf8` })
    res.write(data)
    res.end()
}

const apiRouter = {
    "/api/login": (req, res) => {
        const myURL = new URL(req.url, "http://127.0.0.1")
        if (myURL.searchParams.get("username") === 'yang' && myURL.searchParams.get("password") === '123456') {
            render(res,`{"ok":1}`)
        } else {
            render(res,`{"ok":0}`)
        }
        
    },
    "/api/loginpost": (req, res) => {
    //    数据量一般比较大所以不能直接使用get获取数据
    //    使用req.on监听并接受数据
        var post=""
        req.on("data", chunk => {
            post += chunk
        })
        req.on("end", () => {
            post = JSON.parse(post)
            if (post.username === 'yang' && post.password === "123456") {
                render(res, `{"ok":1}`)
            } else {
                render(res, `{"ok":0}`)
            }
        })
        
    }
}

module.exports = apiRouter