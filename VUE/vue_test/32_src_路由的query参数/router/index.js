// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

// 引入组件，作为key-value的value值
import AboutVue from '@/pages/About.vue'
import HomeVue from '@/pages/Home.vue'
import NewsVue from '@/pages/News.vue'
import MessageVue from '@/pages/Message.vue'
import DetailVue from '@/pages/Detail.vue'

// 创建并暴露一个路由器，管理路由
export default new VueRouter({
    // 路由
    routes: [
        {
            path: '/about',
            component: AboutVue,
        },
        {
            // 一级路由
            path: '/home',
            component: HomeVue,
            children: [
                {
                    // 二级路由,子路由的路径前面无需写/，vue的路由已经帮我们配置好了
                    path: 'news',
                    component:NewsVue
                },
                {
                    path: 'message',
                    component: MessageVue,
                    children: [
                        {
                            path: 'detail',
                            component: DetailVue,
                        },
                    ]
                },
            ]
        },
    ]
})