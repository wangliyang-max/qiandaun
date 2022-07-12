const express = require("express")

const router = express.Router()

// 路由级别-响应get请求
router.get("/", (req, res) => {
    // 渲染模板之后返回给前端
    res.render("login",{error:""})//会自动找views下的login.ejs，因为配置了app.set('views', './views')
    
})

// 路由级别-响应post请求
router.post("/", (req, res) => {
    if (req.body.username === 'yang' && req.body.password === '123456') {
        // 重定向到home
        res.redirect("/home")
    } else {
        res.render("login",{error:"用户名密码错误！"})
    }
})

module.exports = router