const UserService = require('../services/UserService');
const UserController = {
  addUser: async (req, res) => {
  console.log(req.body)
  // 插入数据库
  const { username, password, age } = req.body
    
  await UserService.addUser( username, password, age)
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
      res.send({ok:0})
    } else {
      // 登录成功之后设置session
      req.session.user = data[0]
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