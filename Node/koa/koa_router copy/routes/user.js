const Router = require("koa-router")
const JWT = require("../utils/jwt")
const router = new Router()
const multer = require("@koa/multer")
const UserModel = require("../model/UserModel")
// 文件存储地址
const upload = multer({dest:"public/uploads"})

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

        // 登陆成功设置token,插入到header中
        const token = JWT.generate({
            _id: "123456",
            username:"yang"
        }, "1d")
        // 将token返回在header中
        ctx.set("Authorization", token)

        ctx.body = {
            ok: 1,
        }
    } else {
        ctx.body = {
            ok: 0,
        }
    }
    
})

// upload.single("avatar")：接收文件
router.post("/upload", upload.single("avatar"),async (ctx) => {
    console.log(ctx.request.body, ctx.file)
    
    const { username, password, age } = ctx.request.body
    const avatar = ctx.file ? `/uploads/${ctx.file.filename}` : `/uploads/9f774d77e9072c2912efb7528249db42`
    
    // 利用UserModel模型进行存储操作 UserModel.create
    await UserModel.create({
        username,
        age,
        password,
        avatar
    })


    ctx.body={ok:1}
})

module.exports = router