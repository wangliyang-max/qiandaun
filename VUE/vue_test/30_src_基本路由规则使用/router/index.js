// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

// 引入组件，作为key-value的value值
import AboutVue from '@/components/About.vue'
import HomeVue from '@/components/Home.vue'

// 创建并暴露一个路由器，管理路由
export default new VueRouter({
    // 路由
    routes: [
        {
            path: '/about',
            component:AboutVue,
        },
        {
             path: '/home',
            component:HomeVue,
        }
    ]
})