var str = "name=yang&age=18&url = http://www.baidu.com"
var querystring = require("querystring")

var escaped = querystring.escape(str)
console.log(escaped)

var escaped1 = querystring.unescape(escaped)
console.log(escaped1)



// var obj = querystring.parse(str)
// console.log(obj)

// var number = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// var myNumber = querystring.stringify(number)
// console.log(myNumber)