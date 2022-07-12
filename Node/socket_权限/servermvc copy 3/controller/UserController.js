const UserService = require('../services/UserService');
const JWT = require('../utils/jwt')
const UserController = {
  addUser: async (req, res) => {
  console.log(req.body,req.file)
  // 插入数据库
  const avatar = req.file?`/uploads/${req.file.filename}` :`/images/default.png`
  const { username, password, age } = req.body
    
  await UserService.addUser( username, password, age,avatar)
  res.send({ok:1})
  },
  updateUser:async (req, res) => {
        const {username,password,age} = req.body
        await UserService.updateUser(req.query.id,username,password,age)
        res.send({
            ok:1
            })
  },
  deleteUser: async (req, res) => {
    console.log(req.query.id)
     await UserService.deleteUser(req.query.id)
     res.send({
      ok:1
    })
  },
  getUser: async (req, res) => { 
    const { page, limit } = req.query
      const data = await UserService.getUser(page,limit)
      res.send(data)
  },
  login: async (req, res) => {
    const { username, password } = req.body
    const data = await UserService.login(username, password)
    if (data.length == 0) {
      console.log("login3")
      res.send({ok:0})
    } else {
      // 登录成功之后设置TOKEN
      const token = JWT.generate({
        _id: data[0]._id,
        username:data[0].username
      }, "1h")
      // 将生成的token放在header（建议）
      res.header("Authorization",token)
      res.send({ok:1})
    }
    
  },
  logout:(req, res) => {
    req.session.destroy(() => {
      res.send({ok:1})
    })
  }
}

module.exports = UserController