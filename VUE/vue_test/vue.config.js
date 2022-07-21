//commonJS写法
module.exports = {
  pages: {
    index: {
      entry:'src/main.js'
    }
  },
  lintOnSave: false, // 关闭语法检查
  // 开启服务器代理（方法一）
  // devServer: {
  //   // 这里配置的是向哪台服务器发送请求
  //   proxy: 'http://localhost:5000'
  // }
  
  //  开启服务器代理（方法二）
  // devServer: {
  //   proxy: {
  //     '/api': {// '/api'请求前缀，表示只要请求前缀是/api就走代理
  //       target: '<http://localhost:5000>',
  //       // 将以api开头的请求，将开头的/api去掉，防止转发给目标服务器而请求不到资源
  //       pathRewrite: { '^/api': '' },
  //       ws: true,//用于支持webscoket

  //       //用与向目标服务器说明自己是哪台服务器（即配置请求头host）
  //       // 如果为false则自己是哪台服务器就说是哪台（host为8080）
  //       // 如果为true，则目标服务器是哪台就说自己是哪台服务器（host为5000）
  //       changeOrigin:true
  //     },
  //     // 可以设置多台服务器
  //     '/demo': {
  //       target: '<http://localhost:5001>',
  //       pathRewrite: { '^/demo': '' },
  //       ws: true,
  //       changeOrigin:true
  //     }
  //   }
  // }

}