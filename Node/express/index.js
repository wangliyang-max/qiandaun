const express = require("express")
const app = express()
const indexRouter = require("./router/indexRouter")
const router = require("./router/router")
const func1 = (req, res, next) => {
    console.log("验证token")
    next()
}


// 配置模板引擎
app.set('views', './views')
app.set('view engine', 'ejs')

// 配置静态资源
app.use(express.static("public"))

// 配置解析post参数，不用下载第三方，内置
app.use(express.json())//处理post参数：{"name":"yang","password":"123456"}
app.use(express.urlencoded({ extended: false }))//处理post参数：username='yang'&password='123456

// 应用级别中间件
app.use(func1)

// 应用级别中间件
app.use("/api/", indexRouter)

app.use((req, res) => {
    res.status(404).send("出错了")
})
app.listen(3000, () => {
    console.log("server start")
})

