const express = require("express")

const router = express.Router()

// 路由级别-响应get请求
router.get("/home", (req, res) => {
    res.send("routerhome")
})
router.get("/home/list", (req, res) => {
    res.send(["111","222","333"])
})

// 路由级别-响应get请求
router.get("/login", (req, res) => {
    const { username, password } = req.query

    if (username === 'yang' && password === '123456') {
        // res.send("routerlogin")
        res.write("routerlogin")
        res.end()
    //    return [
    //       // 状态码
    //       200,
    //       // body
    //       {
    //         msg: 'routerlogin',
    //       },
    //     ]
    } else {
        res.send("登录失败")
    }
})

// 路由级别-响应post请求
router.post("/login", (req, res) => {
    const {username,password} = req.body
    //使用req.body必须配置中间件，解析post参数的中间件，在请求开始配置
    // app.use(express.urlencoded({extended:false}))

    if (username === 'yang' && password === '123456') {
        res.send({
            ok:1
        })
    } else {
        res.send({
            ok:0
        })
    }
})

module.exports = router