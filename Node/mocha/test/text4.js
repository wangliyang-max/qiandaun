var axios = require("axios")
var assert = require("assert")
var supertest = require("supertest")
var app = require("../app")


// 手动启动故服务器的测试
// describe('测试接口1', () => {
//     it('返回html代码片段测试1', async() => {
//         // axios,后端也有 npm i axios
//         var res = await axios.get("http://localhost:3000/")
//         assert.strictEqual(res.data,"<h1>hello</h1>")
//     })
// })



// 自动启动服务器的测试 
describe('测试接口2', () => {
    let server
    it('返回html代码片段测试2', async() => {
        await supertest(server).get("/")
            .expect("Content-type", /text\/html/)
            .expect(200, "<h1>hello</h1>")

    })

    // 钩子函数，执行所有测试用例之前，执行该函数
    before(() => {
        console.log("执行所有测试用例之前，执行该函数")
        server = app.listen(3000)
    })

    // 钩子函数，执行完所有测试用例之后，执行该函数
    after(() => {
         console.log("执行完所有测试用例之后，执行该函数")
        server.close()
    })

    // 
    beforeEach(() => {
        console.log("每一个测试用例开始前执行")
    })
    afterEach(() => {
        console.log("每一个测试用例结束后执行")
    })

})