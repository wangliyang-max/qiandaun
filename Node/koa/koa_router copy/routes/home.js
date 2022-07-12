const Router = require("koa-router")

const router = new Router()

router.get("/", async (ctx, next) => {
    // 是异步的，需要等待模板解析完成之后再返回页面
    await ctx.render("home",{username:"yang"})// 自动去views下找home.ejs(入口index.js中配置了)
})
router.get("/", async (ctx, next) => {
    // 是异步的，需要等待模板解析完成之后再返回页面
    await ctx.render("home",{username:"yang"})// 自动去views下找home.ejs(入口index.js中配置了)
})

router.get("/list", async (ctx) => {
    ctx.body = [{
        _id: 1,
        username: "yang",
        age:18
    },
    {
        _id: 2,
        username: "yang",
        age:18
        },
    {
        _id: 3,
        username: "yang",
        age:18
        }]
    })


module.exports = router