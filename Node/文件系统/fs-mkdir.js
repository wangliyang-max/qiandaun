const fs = require("fs")
// 创建目录
// fs.mkdir("./avatar", (err) => {
//     console.log(err)
//     if (err && err.code === 'EEXIST') {
//         console.log('目标已存在')
//     }
// })

// 重命名
// fs.rename("./avatar", "./avatar2", (err) => {
//     console.log(err)
//     if (err && err.code === 'ENOENT') {
//         console.log('目录不存在')
//     }
// })

// 删除
// fs.rmdir("./avatar2", err => {
//     console.log(err)
//     if (err && err.code === 'ENOENT') {
//         console.log('目录不存在')
//     }
// })

// fs.writeFile("./avatar/a.txt", "你好", (err) => {
//     console.log(err)
// })

// fs.appendFile("./avatar/a.txt", "\nhello",(err)=> {
//     console.log(err)
// })
// fs.readFile("./avatar/a.txt", "utf-8",(err, data) => {
//     if (!err) {
//         console.log(data)
//     } else {
//         console.log(err)
//     }
// })



// fs.unlink("./avatar/a.txt",err=> {
//     console.log(err)
// })

// fs.readdir("./avatar", (err, data) => {
//     if (!err) {
//         console.log(data)
//     }
//     console.log(err)
// })

// fs.stat("./avatar", (err, data) => {
//     console.log(data.isDirectory())
//     console.log(data.isFile())
// })

// fs.readdir("./avatar", (err, data) => {
//     data.forEach(item => {
//         // 使用同步方法进行删除，以为嫩文件删除完才能删除目录
//         fs.unlinkSync(`./avatar/${item}`)
//     })

//     fs.rmdir("./avatar",(err)=>{console.log(err)})
// })

