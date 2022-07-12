const Koa = require("koa")
const app = new Koa()

app.use((ctx, next) => {
    console.log("111111")
    next()
    console.log("444444")
})

app.use((ctx, next) => {
    console.log("22222")
    // 异步操作
    delay(1000)
    console.log("33333")
})

function delay(time) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve,time)
    })
}
app.listen(3000)