stream读取流
stream可写流
边读边写—管道

stream流模块时fs的一个子模块，主要用于大型文件的读取。
stream读取流
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

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
stream可写流
const fs = require("fs")
// 创建可写流

const ws = fs.createWriteStream("./b.txt", "utf-8")
ws.write("111111111111111111111111")
ws.write("222222222222222222222222")
ws.write("333333333333333333333333")

ws.end()
1
2
3
4
5
6
7
8
9
边读边写—管道
通关管道连接可读流和可写流

const fs = require("fs")

const readStream = fs.createReadStream("./a.txt")

const writeStream = fs.createWriteStream("./b.txt")

readStream.pipe(writeStream)

1
2
3
4
5
6
7
8
一般用于大文件的复制。
————————————————
版权声明：本文为CSDN博主「_洋」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/mantou_riji/article/details/125631852