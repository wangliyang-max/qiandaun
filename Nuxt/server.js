const Vue = require('vue')
const server = require('express')();

// express响应
server.get("/", (req, res) => {
    // 创建vue实例
    const app = new Vue({
        template: '<div>Hello</div>'
    })

    // 创建渲染函数
    const renderer = require('vue-server-renderer').createRenderer()

    // 将vue实例渲染为HTML页面
    // renderer.renderToString(vue实例, (错误, 渲染后的html) => { })
    renderer.renderToString(app, (err, html) => {
        if (err) throw err
        res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            ${html}
        </body>
        </html>`)
        })

    // 在vue-server-renderer2.5.0+中，如果没有传入回调函数就会返回Promise对象
    // Promise对象的成功的结果就是渲染后的html代码
    // renderer.renderToString(app).then(html => {
    //     console.log(html);
    // }).catch(err => {
    //     console.log(err);
    // })
})

server.listen(3001)