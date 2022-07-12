var sum = require("../sum")
// 内置断言
var assert = require("assert")

// 断定不传参结果为0
assert.strictEqual(sum(), 0)
assert.strictEqual(sum(1, 3), 4)
assert.strictEqual(sum(1, 2, 3), 6)

// describe 一组测试，嵌套
// it 一个测试
// 第一个属性可以显示在测试报告中
describe("大的组1测试", () => {
    describe("小的组1测试", () => {
        it("sum()结果应该返回0", () => {
            assert.strictEqual(sum(), 0)
        })
        it("sum(1)结果应该返回1", () => {
            assert.strictEqual(sum(1), 1)
        })
        it("sum(1,2)结果应该返回3", () => {
            assert.strictEqual(sum(1,2), 3)
        })
        it("sum(1,2,3)结果应该返回6", () => {
            assert.strictEqual(sum(1,2,3), 6)
        })
    })
    describe("小的组2测试", () => {
        
    })
})
describe("大的组2测试", () => {
    
})
