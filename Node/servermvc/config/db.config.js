// 连接数据库
const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/yang_project")
// 插入集合和数据，yang_project会自动创建
