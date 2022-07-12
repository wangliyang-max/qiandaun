const Koa = require("koa")


const app = new Koa()

// ctx=context 相当于res和req的合并
app.use((ctx, next) => {
    // ctx.req//node原生的request对象
    // ctx.res//node原生的response对象
    // cts.request//koa封装好的的request对象
    console.log(ctx.request.path)
    // 返回代码片段
    ctx.response.body = "<b>hello world</b>"
     ctx.response.body = "<b>hello yang</b>"
    // 返回json数据
    
    //koa封装好的的response对象
})

app.listen(3000)