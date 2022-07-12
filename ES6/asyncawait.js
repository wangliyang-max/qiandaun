// 引入fs
const fs = require("fs")

// 读取为学，返回值是Promise函数
function readWeiXue (){
    return new Promise((resolve, reject) => {
        fs.readFile("./resources/为学.md", (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
   })
}

// 读取插秧诗
function readChaYangShi (){
    return new Promise((resolve, reject) => {
        fs.readFile("./resources/插秧诗.md", (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
   })
}

// 读取观书有感
function readGuanShu (){
    return new Promise((resolve, reject) => {
        fs.readFile("./resources/观书有感.md", (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
   })
}

async function main (){
    let weixue = await readWeiXue()
    let chayangshi = await readChaYangShi()
    let guanshu = await readGuanShu()

    console.log(weixue.toString())
    console.log(chayangshi.toString())
    console.log(guanshu.toString())
} 
main()