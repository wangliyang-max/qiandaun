var jwt = require("jsonwebtoken")
const secret ='yang-secret'

const JWT = {
    // 加密
    generate(value,expires) {
        return jwt.sign(value,secret,{expiresIn:expires})
    },
    // 解密
    verify(token) {
        try {
            return jwt.verify(token, secret)
        } catch (error) {
            return false
        }
    }
}


module.exports = JWT