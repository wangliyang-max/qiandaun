var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    console.log("hello")
   res.render("login");
});

module.exports = router;
