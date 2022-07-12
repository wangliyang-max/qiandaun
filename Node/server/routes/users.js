var express = require('express');
const UserModel = require('../model/UserModel');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// 响应post请求，增加用户
router.post("/user", (req, res) => {
  console.log(req.body)
  // 插入数据库
  //1.创建一个模型(user,限制filed类型),对应数据库的集合(users)
  const { username, password, age } = req.body
  // .create就相当于插入
  UserModel.create({
    username: username,
    password: password,
    age:age
  }).then(data => {
    console.log(data)
    res.send({ok:1})
  })

})

// 更新updateMany:修改多个,updateOne修改一个
// 动态路由获取id
router.put("/user", (req, res) => {
  console.log(req.body, req.query)
  const {username,password,age} = req.body
  UserModel.updateOne({ _id: req.query.id }, {
    username,password,age
  }).then(data => {
    res.send({
    ok:1
  })
  })
})
router.delete("/user/:id", (req, res) => {
  console.log(req.params)
  UserModel.deleteOne({ _id: req.params.id}).then(data => {
    res.send({
    ok:1
  })
  })
})

router.get("/user", (req, res) => {
  console.log(req.query)
  const {page,limit} = req.query
  UserModel.find ({},["username","age"]).sort({age:1}).skip((page-1)*limit).limit(limit).then(data => {
    res.send(data)
  })
})

module.exports = router;
