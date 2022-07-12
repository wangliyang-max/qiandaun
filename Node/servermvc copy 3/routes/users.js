var express = require('express');
const UserModel = require('../model/UserModel');
const UserController = require('../controller/UserController');
var router = express.Router();

const multer  = require('multer')
const upload = multer({ dest: 'public/uploads/' })



router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/**
 * 
 * @api {post} /api/user 添加用户
 * @apiName addUser
 * @apiGroup usergroup
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {String} username 用户名
 * @apiParam  {String} password 密码
 * @apiParam  {Number} age 年龄
 * @apiParam  {File} avatar 头像
 * 
 * @apiSuccess (200) {number} ok 表示成功字段
 * 
 * @apiParamExample  {type} Request-Example:
 * {
 *     username : "yang",
 *     password:"123456",
 *     age:100,
 *     avatar:File
 * } 
 * 
 * @apiSuccessExample {type} Success-Response:
 * {
 *      ok:1
 * }
 * 
 */
// 响应post请求，增加用户
router.post("/user",upload.single("avatar"),UserController.addUser)


/**
 * 
 * @api {put} /api/user 更新用户
 * @apiName updateUser
 * @apiGroup usergroup
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {String} username 用户名
 * @apiParam  {String} password 密码
 * @apiParam  {Number} age 年龄
 * 
 * @apiSuccess (200) {number} ok 表示成功字段
 * 
 * @apiParamExample  {type} Request-Example:
 * {
 *     username : "yang",
 *     password:"123456",
 *     age:100,
 * } 
 * 
 * @apiSuccessExample {type} Success-Response:
 * {
 *      ok:1
 * }
 * 
 */
// 更新updateMany:修改多个,updateOne修改一个
// 动态路由获取id
router.put("/user",UserController.updateUser)


/**
 * 
 * @api {delete} /api/user/:id 删除用户
 * @apiName deleteUser
 * @apiGroup usergroup
 * @apiVersion  1.0.0
 * 
 * @apiSuccess (200) {number} ok 表示成功字段
 * 
 * @apiSuccessExample {type} Success-Response:
 * {
 *      ok:1
 * }
 * 
 */
// 删除
router.delete("/user", UserController.deleteUser)

// 查询
router.get("/user", UserController.getUser)

// 登录校验
router.post("/login", UserController.login)

router.get("/logout",UserController.logout)

module.exports = router;
