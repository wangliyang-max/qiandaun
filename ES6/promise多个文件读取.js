// 引入fs模块
const fs = require('fs')

// fs.readFile('./resources/为学.md', (err, data1) => {
//     fs.readFile('./resources/插秧诗.md', (err, data2) => {
//         fs.readFile('./resources/观书有感.md', (err, data3) => {
//             let result = data1 +'\n'+ data2 +'\n'+ data3
//             console.log(result)
//         })
//     })
// })


const p = new Promise((resolve, reject) => {
    fs.readFile('./resources/为学.md', (err, data) => {
        resolve(data)
    })
})
p.then(value => {
    // value的值就是resolve或reject传过来的值
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/插秧诗.md', (err, data) => {
            resolve([value,data])//返回的是 为学的data和插秧诗的data
        })
    })
}).then(value => {
    // 根据Promise的特性,此时.then,就是读取完插秧诗.then
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/观书有感.md', (err, data) => {
            value.push(data)
            resolve(value)
        })
    })
}).then(value => {
    console.log(value.join('\n'))
})