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
            name:'about',
            path: '/about',
            component: AboutVue,
        },
        {
            // 一级路由
            name:'home',
            path: '/home',
            component: HomeVue,
            children: [
                {
                    // 二级路由,子路由的路径前面无需写/，vue的路由已经帮我们配置好了
                    name:'news',
                    path: 'news',
                    component:NewsVue
                },
                {
                    name:'message',
                    path: 'message',
                    component: MessageVue,
                    children: [
                        {
                            name: 'detail',
                            path: 'detail/:id/:title',
                            component: DetailVue,
                            // props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给 DetailVue的组件。
                            // props: { a: 1, b: 'hello' }
                            // props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有`params参数`，以props的形式传给 DetailVue的组件
                            // props: true

                            // 第三种写法函数写法，将传递的参数以对象的形式返回
                            // props($route) {
                            //     return {
                            //         id: $route.query.id,
                            //         title:$route.query.title
                            //     }
                            // }
                            props({query:{id,title}}) {
                                return {id,title}
                            }

                        }
                       
                    ]
                },
            ]
        },
    ]
})