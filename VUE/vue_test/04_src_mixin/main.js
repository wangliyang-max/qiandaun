/**
 * 该文件是整个项目的入口文件
 */

// 引入vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 混合
import { mixin } from "./mixin"
Vue.mixin(mixin)
// 关闭vue生产提示
Vue.config.productionTip = false



// 创建vue实例对象
new Vue({
  el:"#root",
  render: h => h(App),
})
// .$mount('#app')是el:'#app'的另一种写法
