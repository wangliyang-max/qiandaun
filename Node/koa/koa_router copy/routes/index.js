const Router = require("koa-router")
const router = new Router()
const userRouter = require("./user")
const listRouter = require("./list")
const homeRouter = require("./home")
const loginRouter = require("./login")
const uploadRouter = require("./upload")
// 统一加前缀
// router.prefix("/api")

// 先注册路由级中间件
router.use("/user", userRouter.routes(),userRouter.allowedMethods())
router.use("/list", listRouter.routes(), listRouter.allowedMethods())

router.use("/home", homeRouter.routes(), homeRouter.allowedMethods())
router.use("/login", loginRouter.routes(), loginRouter.allowedMethods())
router.redirect("/", "/home")//重定向

router.use("/upload", uploadRouter.routes(), uploadRouter.allowedMethods())

module.exports = router