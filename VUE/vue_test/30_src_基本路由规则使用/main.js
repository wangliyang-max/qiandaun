/**
 * 该文件是整个项目的入口文件
 */

// 引入vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入VueRouter插件，进行配置
import VueRouter from 'vue-router' 
// 引入路由器
import router from './router'
// 关闭vue生产提示
Vue.config.productionTip = false

Vue.use(VueRouter)


// 创建vue实例对象
new Vue({
  el: "#root",
  render: h => h(App),
  router:router,
})


