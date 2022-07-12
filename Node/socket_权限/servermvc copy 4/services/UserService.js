const UserModel = require('../model/UserModel');
const UserService = {
    addUser: (username, password, age ,avatar) => {
        // .create就相当于插入
        return UserModel.create({
            username: username,
            password: password,
            age: age,
            avatar:avatar
        }).then(data => {
            console.log(data)
        })
    },
    updateUser: (id,username,password,age) => {
        return UserModel.updateOne({ _id: id }, {
            username,password,age
        })
    },
    deleteUser: (id) => {
        return UserModel.deleteOne({ _id: id})
    },
    getUser: (page,limit) => {
        return UserModel.find ({},["username","age","avatar"]).sort({age:1}).skip((page-1)*limit).limit(limit)
    },
    login: (username, password) => {
        return UserModel.find({username,password})
    }

}

module.exports = UserService