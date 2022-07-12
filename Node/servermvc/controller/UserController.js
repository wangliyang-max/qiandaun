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
    console.log(req.params.id)
     await UserService.deleteUser(req.params.id)
     res.send({
      ok:1
    })
  },
  getUser: async (req, res) => { 
    const { page, limit } = req.query
      const data = await UserService.getUser(page,limit)
      res.send(data)
    }
}

module.exports = UserController