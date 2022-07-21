/**
 * 该文件是整个项目的入口文件
 */

// 引入vue
import Vue from 'vue'
// import Vue from 'vue/dist/vue.js'
// 引入App文件，是所有组件的父组件
import App from './App.vue'

// 关闭vue生产提示
Vue.config.productionTip = false

// 创建vue实例对象
new Vue({

  // template: `<App></App>`,
  // components: {
  //   App
  // },
  // 完成将app组件放到容器中
  render: h => h(App),
  // render:createElement=>createElement('h1','你好')
  
}).$mount('#app')
// .$mount('#app')是el:'#app'的另一种写法
