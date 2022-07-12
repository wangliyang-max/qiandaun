var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// 配置模板引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 记录日志
app.use(logger('dev'));

// 配置解析post参数
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 对前端的cookie进行解析
app.use(cookieParser());
// 配置静态资源
app.use(express.static(path.join(__dirname, 'public')));

// 中间件
app.use('/', indexRouter);
app.use('/users', usersRouter);

// 错误
app.use(function (req, res, next) {
  // 将错误的具体内容传递个下一个中间件
  next(createError(404));
});

// 错误页面
app.use(function(err, req, res, next) {
  // 将错误信息挂载到res中
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
