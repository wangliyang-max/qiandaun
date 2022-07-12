// 1.引入fs模块
const fs = require('fs');

// 2.调用方法读取文件
// fs.readFile('./resources/为学.md', (err, data) => {
//     // 如果失败则抛出错误
//     if (err) throw err;
//     // 如果没出错则输出内容
//     console.log(data.toString());
    
// })

// 3. 使用Promise封装
const p = new Promise(function (resolve, reject) {
    //读取文件是异步的 
    fs.readFile('./resources/为学.md', (err, data) => {
    // 如果失败则抛出错误
    if (err) reject(err);
    // 如果成功
        resolve(data);
})
   
})

p.then(function (value){
   // 如果没出错则输出内容
    console.log(value.toString());
},function (reason){
   console.log('读取失败')
})
