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
// IE缓存
app.get('/IE', (request, response) => {
    // 设置响应头 设置允许跨越
    response.setHeader('Access-Control-Allow-Origin','*');
    // 响应头(接受所有响应头信息)
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 设置响应体
    response.send('HELLO IE -- 3')
})
// 延时
app.all('/delay', (request, response) => {
    // 设置响应头 设置允许跨越
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    setTimeout(()=>{
       response.send('延时响应')
    },3000)
})

// jQuery服务
app.all('/jquery-server', (request, response) => {
    // 设置响应头 设置允许跨越
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers','*')
    const data = {name:'yang'}
    response.send(JSON.stringify(data));
})

// Anxios服务
app.all('/axios-server', (request, response) => {
       // 设置响应头 设置允许跨越
    response.setHeader('Access-Control-Allow-Origin','*');
    // 响应头(接受所有响应头信息)
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = {name:'yang'}
    response.send(JSON.stringify(data));
})

// Fetch服务
app.all('/fetch-server', (request, response) => {
       // 设置响应头 设置允许跨越
    response.setHeader('Access-Control-Allow-Origin','*');
    // 响应头(接受所有响应头信息)
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = {name:'yang'}
    response.send(JSON.stringify(data));
})

// jsonp服务
app.all('/jsonp-server', (request, response) => {
    const data = {
        name:'hello yang'
    }
    let str = JSON.stringify(data)
    response.end(`handle(${str})`)
})

// 用户名检测
app.all('/check-username', (request, response) => {
    const data = {
        exist: 1,
        msg:'用户名已存在'
    }
    let str = JSON.stringify(data)
    response.end(`handle(${str})`)
})

// iquery发送jsonp
app.all('/jquery-jsonp-server', (request, response) => {
    const data = {
        name: 'yang',
        city:'beijing'
    }
    // 将数据转换成字符串
    let str = JSON.stringify(data)
    // 接收callback参数
    let cb = request.query.callback;

    // 返回结果
    response.end(`${cb}(${str})`)
})

// cors-server
app.all('/cors-server', (request, response) => {
    // 设置响应头 设置允许跨越，*代表可以跨域到所有网页
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置允许自定义请求头信息
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 设允许所有请求类型
    response.setHeader('Access-Control-Allow-Method','*');
    response.send('Hello CORS')
})
// 4.监听端口启动服务
app.listen(8000, () => {
    console.log('服务已经启动，8000端口监听中……')
})