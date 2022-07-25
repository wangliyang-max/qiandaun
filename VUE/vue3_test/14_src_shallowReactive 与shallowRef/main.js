// 引入的不再是Vue构造函数了，引入的是一个名为createApp工厂函数
// 工厂函数不用通过new就可以创建实例对象
import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实例对象—app(类似于之前Vue2中的vm，但applvm更“轻”)
// createApp(App).mount('#app')
// 可以展开写成
const app = createApp(App)
// 挂载
app.mount('#app')

/*
//vue3的写法
const vm = new Vue({
    render:h=>h(App)
})
vm.$mount('#app')*/
