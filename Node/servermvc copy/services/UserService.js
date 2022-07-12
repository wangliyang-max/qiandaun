const UserModel = require('../model/UserModel');
const UserService = {
    addUser: (username, password, age ) => {
        // .create就相当于插入
        return UserModel.create({
            username: username,
            password: password,
            age:age
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
        return UserModel.find ({},["username","age"]).sort({age:1}).skip((page-1)*limit).limit(limit)
    }

}

module.exports = UserService