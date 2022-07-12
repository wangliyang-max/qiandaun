const fs = require("fs")
const fsp = fs.promises
var assert = require("assert")

describe('异步测试', () => {
    it("异步的去文件", (done) => {
        // ./1.txt是按测试的文件路径写的，而不是相对于当前文件写的
        fs.readFile("./1.txt", "utf-8", (err, data) => {
            if (err) {
                done(err)
            } else {
                assert.strictEqual(data, "hello,hello")
                // done表示测试用例调用结束之后再判断测试是否正确
                done()
            }
        })
    })
    
})

describe('异步测试2', () => {
    it("异步的去文件2",async () => {
        // ./1.txt是按测试的文件路径写的，而不是相对于当前文件写的
        var data = await fsp.readFile("./1.txt", "utf-8")
        assert.strictEqual(data,"hello,hello")
    }) 
})