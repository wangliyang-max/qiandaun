 // 使用mongos模块连接mongoDB
const mongoose = require("mongoose")
// 限制模型,必须和数据库一致
const UserType = {
    username: String,
    password: String,
    age:Number
}

// 创建user模型
const UserModel = mongoose.model("user",new mongoose.Schema(UserType))
// 模型user将会对应 users集合（自动创建users集合）

module.exports = UserModel