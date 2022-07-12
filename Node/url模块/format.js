var url = require("url")
// const urlString = 'https://www.baidu.com:443/ad/index.html?id=8&name=mouse#tag=110'
// const parsedStr = url.parse(urlString)
// console.log(parsedStr)

// const obj ={
//   protocol: 'https:',
//   slashes: true,
//   auth: null,
//   host: 'www.baidu.com:443',
//   port: '443',
//   hostname: 'www.baidu.com',
//   hash: '#tag=110',
//   search: '?id=8&name=mouse',
//   query: 'id=8&name=mouse',
//   pathname: '/ad/index.html',
//   path: '/ad/index.html?id=8&name=mouse',
// }

// console.log(url.format(obj))

var a1 = url.resolve('/one/two/three/', 'four ')
var a2 = url.resolve('/one/two/three', 'four ')
console.log(a1,"\n",a2)

var b1 = url.resolve("http://example.com/", "/one")
// 会将域名之后的所有内容进行替换
var b2 = url.resolve("http://example.com/aaaa/1234","/one")
console.log(b1,"\n",b2)