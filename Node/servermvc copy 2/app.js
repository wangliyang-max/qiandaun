var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');

// 引入session模块
var session = require("express-session")
var app = express();
const MongoStore = require("connect-mongo");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 注册session
app.use(session({
  name: "yang123456",
  secret: "1234567890",//密钥
  cookie: {
    maxAge: 1000 * 60 * 60,//过期时间
    secure:false,//为true时候表示只有https协议才能访问cookie
  },
  resave: true,//重新设置session，计时重新计算
  saveUninitialized: true,//开始访问就设置cookie，但是未登录之前是无效的
  store: MongoStore.create({
    // 将session放入到yang_session数据库中（新创建的）
    mongoUrl:'mongodb://127.0.0.1:27017/yang_session',
    ttl:1000*60*10//过期时间
  })
}))

// 设置中间件，验证session是否过期
app.use((req, res, next) => {
  // 排除login相关的接口
  if (req.url.includes("login")) {
    next();
    return
  }
  if (req.session.user) {
    // 重新设置时间
    req.session.date = Date.now()
    next()
  } else {
    // ajax请求返回的是json数据，所以ajax请求不可以在后端跳转，需要传回数据在前端进行跳转
    // 是接口返回错误码（此项目中是接口说明是ajax请求）
    // 不是接口，直接重定向
    if (req.url.includes("/api")) {
      res.status(401).send({ok:0})
    } else {
       res.redirect("/login")
    }
  }
})

app.use('/', indexRouter);
app.use('/api', usersRouter);
app.use('/login', loginRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
