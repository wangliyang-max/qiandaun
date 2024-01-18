const { log } = require('console')
const fs = require('fs')

// 使用回调函数的方式实现
// fs.readFile("./resource/1.html", (err, data1) => {
//     if (err) throw err
//     fs.readFile("./resource/2.html", (err, data2) => {
//         if (err) throw err
//         fs.readFile("./resource/3.html", (err, data3) => {
//             if (err) throw err
//             console.log(data1 + data2 + data3);
//         })
//     })
// })


const util = require('util')
// util.promisify可以将API转换成返回值为Promise形式的格式
const mineReadFile = util.promisify(fs.readFile)
// async和await实现

function test() {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(2);
            resolve(1)
        }, 100)
    })

return "helo"
    

   
}
async function main() {
    try {
        console.log(1);
        // let data1 = await mineReadFile('./resource/1.html')
        // let data2 = await mineReadFile('./resource/2.html')
        // let data3 = await mineReadFile('./resource/3.html')
        await test()
        console.log(3);
        // console.log(data1 + data2 + data3);
    } catch (e) {
        console.log(e);
    }
    
}
main()