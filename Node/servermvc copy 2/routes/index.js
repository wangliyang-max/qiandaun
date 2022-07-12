var express = require('express');
var JWT =require('../utils/jwt')
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // 判断req.session.user
  if (req.session.user) {
     res.render('index', { title: 'Express' });
  } else {
    res.redirect("/login")
  }
 
});

module.exports = router;
