var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var uploadRouter = require('./routes/upload');
var JWT = require('./utils/jwt')

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
  const token = req.headers["authorization"]?.split(" ")[1]
  // token为 null字符串 时可以进入if(token)语句，但是为undefine就不可以了
  if (token) {
    console.log(token)
    const payload = JWT.verify(token)
    if (payload) {
      // 重新计算过期时间
      const newToken = JWT.generate({
        _id: payload._id,
        username:payload.username
      }, "1h")
      // 返回给前端，让前端更新
      res.header("Authorization",newToken)
      next()
    } else {
      res.status(401).send({ errCose: -1, errInfo: "token过期" })
    }
  } else {
    console.log(token)
    next()
    // 当token=undefined时（即token没有时）会跳转到这里
    // 这里为什么直接放过去而不直接返回401，是因为放过去之后跳转到index页面
    // 跳转到index页面需要请求数据，index页面的拦截器就会封装一个token（但是这个token是null），再次执行到该函数，会跳转到if (token) 中，但是解析后返回false，进而跳转到res.status(401)。

    // res.status(401).send({ errCose: -1, errInfo: "token不存在" })
  }
  
})

app.use('/', indexRouter);
app.use('/api', usersRouter);
app.use('/login', loginRouter);
app.use('/upload', uploadRouter);


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
