const Koa = require("koa")
const app = new Koa()
const static = require("koa-static")
const path = require("path")
const bodyParser = require('koa-bodyparser')
const views = require("koa-views")
const session = require("koa-session-minimal")
const JWT = require("./utils/jwt")

// 链接数据库
require("./config/db.config")

// 先注册路由级中间件
const router = require("./routes")

//使用ctx.body解析中间件,获取post参数
app.use(bodyParser())
// 配置静态资源
app.use(static(path.join(__dirname,"public")))
// 配置模板引擎
app.use(views(path.join(__dirname, "views"), { extension: "ejs" }))

// token判断拦截
app.use(async (ctx, next) => {
    if (ctx.url.includes("login")) {
        await next()
        return
    }

    const token = ctx.headers["authorization"]?.split(" ")[1]
    if (token) {
        const payload = JWT.verify(token)
        if (payload) {
            // 重新计算token的过期时间
            const newToken = JWT.generate({
                _id: payload._id,
                username: payload.username
            }, "1d")
            // 将token返回在header中
            ctx.set("Authorization",token)
            
            await next()
        } else {
            ctx.status = 401,
            ctx.body = {errCode:-1,errInfo:"token过期"}
        }
    } else {
        await next()
    }
})

// 再注册应用级中间件
app.use(router.routes())
app.use(router.allowedMethods())



app.listen(3000)