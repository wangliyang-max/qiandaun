const crypto = require("crypto")
const hash = crypto.createHash("sha1")
hash.update("hello world")

// 按16进制方式进行显示
console.log(hash.digest('hex'))
// 按base64进制方式进行显示
// console.log(hash.digest('base64'))
