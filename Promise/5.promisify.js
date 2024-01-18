/**
 * util.promisify 方法:
 * 接受一个第一个参数是错误的函数, 即(err，value)=>{}格式
 * 返回结果是一个promise对象
 */
let mineReadFile = require('util').promisify(require('fs').readFile)

mineReadFile('./resource/content.txt').then(value => {
    console.log('文件内容是：', value.toString());
}, (reason) => {
    console.log(reason);
})
