// 1.引入express
const express = require('express');
// 2.创建应用对象
const app = express();
// 3.创建路由规则
// 如果请求行的路径是/server的GET请求就会执行回调函数里面的内容
app.get('/server', (request, response) => {
    // 设置响应头 设置允许跨越
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    response.send('HELLO AJAX GET')
})
// 如果请求行的路径是/server的POST请求就会执行回调函数里面的内容
app.all('/server', (request, response) => {
    // 设置响应头 设置允许跨越
    response.setHeader('Access-Control-Allow-Origin','*');
    // 响应头(接受所有响应头信息)
    response.setHeader('Access-Control-Allow-Headers','*')
    // 设置响应体
    response.send('HELLO AJAX POST')
})

app.all('/json-server', (request, response) => {
    // 设置响应头 设置允许跨越
    response.setHeader('Access-Control-Allow-Origin','*');
    // 响应头(接受所有响应头信息)
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 响应数据
    const data = {
        name: 'yang',
        // age:18
    }
    // 数据类型转化
    let str = JSON.stringify(data);
    // 设置响应体
    response.send(str)
})
// 4.监听端口启动服务
app.listen(8000, () => {
    console.log('服务已经启动，8000端口监听中……')
})