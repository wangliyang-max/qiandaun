const fs = require("fs")

// 打开stream读取流
const rs = fs.createReadStream("./a.txt", "utf-8")
// 读取数据
rs.on("data", (chunk) => {
    console.log(chunk)
})

// 读取结束
rs.on("end", () => {
    console.log("end")
})

// 出错处理
rs.on("err", (err) => {
    console.log(err)
})


// 创建可写流

const ws = fs.createWriteStream("./b.txt", "utf-8")
ws.write("111111111111111111111111")
ws.write("222222222222222222222222")
ws.write("333333333333333333333333")

ws.end()
