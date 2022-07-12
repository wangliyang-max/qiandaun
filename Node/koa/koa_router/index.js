const Koa = require("koa")
const app = new Koa()
const static = require("koa-static")
const path = require("path")
const bodyParser = require('koa-bodyparser')
const views = require("koa-views")
const session = require("koa-session-minimal")

// 先注册路由级中间件
const router = require("./routes")

//使用ctx.body解析中间件,获取post参数
app.use(bodyParser())
// 配置静态资源
app.use(static(path.join(__dirname,"public")))
// 配置模板引擎
app.use(views(path.join(__dirname, "views"), { extension: "ejs" }))
// session配置
app.use(session({
    // 设置钥匙
    key: "yangsessionId",
    cookie:{
        maxAge:1000*60
    }
}))

// session判断拦截
app.use(async (ctx, next) => {
    if (ctx.url.includes("login")) {
        await next()
        return 
    }
    if (ctx.session.user) {
        ctx.session.date = Date.now()
        await next()
    }else{
        ctx.redirect("/login")
    }
})


// 再注册应用级中间件
app.use(router.routes())
app.use(router.allowedMethods())



app.listen(3000)