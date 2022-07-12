var express = require('express');
const UserModel = require('../model/UserModel');
const UserController = require('../controller/UserController');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// 响应post请求，增加用户
router.post("/user", UserController.addUser)

// 更新updateMany:修改多个,updateOne修改一个
// 动态路由获取id
router.put("/user",UserController.updateUser)

// 删除
router.delete("/user/:id", UserController.deleteUser)

// 查询
router.get("/user", UserController.getUser)

module.exports = router;
