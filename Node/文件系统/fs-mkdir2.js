const fs = require("fs").promises

// 读取文件
// fs.readFile("./文件读取.js", "utf-8").then(data => {
//     console.log(data)
// })

// 删除目录
fs.readdir("./avatar2").then(async (data) => {
    let arr=[]
    data.forEach(item => {
       arr.at.push(fs.unlink(`./avatar2/${item}`))
    })
    // Promise.all([]),等待数组中的内容都执行完才往下执行
    await Promise.all(arr)
    await fs.rmdir("./avatar2")
})