var fs = require("fs")
var ws = fs.createWriteStream("hello.txt")
// 写内容
ws.write("可写流写入\n")
ws.write("不会被覆盖")
// 关闭流
ws.end()
// 不能用ws.close()


// 监听流的open和close时间来监听流的打开和关闭
// on是绑定长期有限的事件，once是绑定一次性事件
ws.once("open",function (){
   console.log("流打开了")
})
ws.on("close",function (){
   console.log("流关闭了")
})