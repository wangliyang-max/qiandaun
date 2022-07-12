const Router = require("koa-router")

const router = new Router()

router.post("/", (ctx, next) => {
    console.log(ctx.request.body)
    ctx.body = {
        ok: 1,
        info:"add user success"
   }
})

router.get("/",(ctx, next) => {
   ctx.body = ["111","222","333"]
})

router.put("/:id", (ctx, next) => {
    console.log(ctx.params)
    ctx.body = {
        ok: 1,
        info:"put user success"
    }
})

router.del("/:id", (ctx, next) => {
    ctx.body = {
        ok: 1,
        info:"del user success"
    }
})

router.post("/login", (ctx) => {
    console.log(ctx.request.body)
    const { username, password } = ctx.request.body
    if (username === 'yang' && password === "123456") {

        // 登陆成功设置session,给session赋值
        ctx.session.user = {
            username:"yang"
        }
        ctx.body = {
            ok: 1,
        }
    } else {
        ctx.body = {
            ok: 0,
        }
    }
    
})

module.exports = router