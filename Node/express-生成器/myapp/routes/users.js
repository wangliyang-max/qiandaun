var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  // 读取前端cookie
  console.log(req.cookies)
  // 设置前端cookie
  res.cookie("gender","female")
  res.send('respond with a resource');
});

module.exports = router;
