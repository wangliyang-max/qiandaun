var fs = require("fs")

var fd = fs.open('hello.txt', 'w',function (err,fd){
    if (!err) {
        // 进行写入
        fs.write(fd,"这是异步写入的内容",function (err){
            if (!err) {
                console.log("写入成功")
            }
            // 关闭
            fs.close(fd,function (err){
                if (!err) {
                   console.log("文件关闭成功")
               }
            })
        })
    } else {
        console.log(err)
   }
})

console.log("程序向下执行")
