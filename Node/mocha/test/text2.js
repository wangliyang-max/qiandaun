// var chai = require("chai")
// var assert = chai.assert

// describe('assert Demo',function (){
//     it('use assert lib', function () {
//     //   模拟函数的返回值
//         var value = "hello"
//         assert.typeOf(value, 'string')
//         assert.equal(value, 'hello')
//         assert.lengthOf(value,5)
//   })
// })

// var chai = require("chai")
// chai.should()

// describe('should Demo',function (){
//     it('use should lib', function () {
//     //   模拟函数的返回值
//         var value = "hello"
//         value.should.be.a('string')
//         value.should.equal('hello')
//         value.should.not.equal('hello2')
//         value.should.have.length(5)
//         // 可以合并写
//         value.should.exist.and.equal('hello').and.have.length(5).and.be.a('string')
//   })
// })

var chai = require("chai")
var expect = chai.expect

describe('expect Demo',function (){
    it('use expect lib', function () {
    //   模拟函数的返回值
        var value = "hello"
        var number = 3

        expect(number).to.be.at.most(5)//小于等于5
        expect(number).to.be.at.least(3)//大于等于3
        expect(number).to.be.within(1, 4)//大于等于1，小于等于4
        
        expect(value).to.exist
        expect(value).to.be.a('string')
        expect(value).to.equal('hello')
        expect(value).to.not.equal('您好')
        expect(value).to.have.length(5)
    
  }) 
})