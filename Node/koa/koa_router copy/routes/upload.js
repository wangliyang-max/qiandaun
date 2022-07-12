const Router = require("koa-router")

const router = new Router()

router.get("/", async (ctx, next) => {
    // 是异步的，需要等待模板解析完成之后再返回页面
    await ctx.render("upload")// 自动去views下找home.ejs(入口index.js中配置了)
})

module.exports = router