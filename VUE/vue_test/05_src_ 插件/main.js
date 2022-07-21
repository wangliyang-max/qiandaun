/**
 * 该文件是整个项目的入口文件
 */

// 引入vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 关闭vue生产提示
Vue.config.productionTip = false
import plugins from './plugins'

// 应用插件
Vue.use(plugins)
// 带参数
// Vue.use(plugins,1,2,3)


// 创建vue实例对象
new Vue({
  el:"#root",
  render: h => h(App),
})
// .$mount('#app')是el:'#app'的另一种写法
