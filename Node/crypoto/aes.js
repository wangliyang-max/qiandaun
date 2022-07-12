const crypto = require("crypto")

// 加密
function encrypt(key,iv,data) {
    // crypto.createCipheriv("加密算法", key, iv)
    let dep = crypto.createCipheriv("aes-128-cbc", key, iv)
    // dep.update(数据,输入数据的编码格式,输出数据的编码格式)
    // binary是二进制
    return dep.update(data,'binary','hex')+dep.final("hex")
}

// 解密
function decrypto(key, iv, cryp) {
    // 转化为Buffer对象，并转换成2进制
    cryp = Buffer.from(cryp, 'hex').toString("binary")
    let dep = crypto.createDecipheriv("aes-128-cbc", key, iv)
    return dep.update(cryp,'binary','utf-8')+dep.final("utf8")
}

// 128/8 = 16,（加密算法使用的是128位）所以key和iv设置成16位
let key = "abcdefghijklmnop"
let iv = "abcdef0123456789"

let data = "helloworld"

// 加密
let cryp = encrypt(key, iv, data)
console.log("加密结果：",cryp)

let decryp = decrypto(key, iv, cryp)
console.log("解密结果：",decryp)