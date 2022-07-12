var fs = require("fs")

fs.writeFile("C:\\Users\\86198\\Desktophello.txt", "简单写入",{flag:"w"}, function (err) {
    if (!err) {
        console.log("写入成功")
    }
})