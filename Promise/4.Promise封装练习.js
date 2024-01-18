const { resolve } = require('path')

function mineReadFile(path) {
    return new Promise((resolve, reject) => {
        // 读取文件
        require('fs').readFile(path, (err, data) => {
            if (err) reject()
            resolve(data)
        })
    })
}

mineReadFile('./resource/content.txt').then((value) => {
    console.log("文件内容是", value.toString());
}, (reason) => {
    console.log(reason);
})