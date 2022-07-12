var fs = require("fs")

fs.watchFile("hello.txt", {interval:1000},function (prev,curr){
    console.log("文件发生变化了")
    console.log("修改前文件的大小：" + prev.size)
    console.log("修改后文件的大小："+curr.size)
})