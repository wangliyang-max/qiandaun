/**
 * 该文件是整个项目的入口文件
 */

// 引入vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入插件
import vueResource from 'vue-resource'
// 关闭vue生产提示
Vue.config.productionTip = false


Vue.use(vueResource)

// 创建vue实例对象
const vm =new Vue({
  el: "#root",
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  }
})

console.log(vm)

