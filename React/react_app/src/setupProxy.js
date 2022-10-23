// react脚手架已经下载
const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        // 如果请求路径中以'/api1'为请求前缀，就走该代理
        proxy('/api1', {
            // 请求转发给谁
            target: 'http://localhost:5000',
            // 能控制服务器收到的请求中的host字段的值
            // 默认值是false，为false就是说告诉服务器实际请求是哪发出的；为true代表欺骗服务器请求是从服务器自己的源发出的,一般改成true
            changeOrigin: true,
            // 重写请求路径（服务器的响应地址中没有/api1）
            pathRewrite: {'^/api1':''}
        }),
        proxy('/api2', {
            target: 'http://localhost:5001',
            changeOrigin: true,
            pathRewrite: {'^/api2':''}
        }),
    )
   
}