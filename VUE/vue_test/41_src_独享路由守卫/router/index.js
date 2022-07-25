// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

// 引入组件，作为key-value的value值
import AboutVue from '@/pages/About.vue'
import HomeVue from '@/pages/Home.vue'
import NewsVue from '@/pages/News.vue'
import MessageVue from '@/pages/Message.vue'
import DetailVue from '@/pages/Detail.vue'

// 创建一个路由器，管理路由
const router =  new VueRouter({
    // 路由
    routes: [
        {
            name:'about',
            path: '/about',
            component: AboutVue,
            meta:{title:'关于'}
        },
        {
            // 一级路由
            name:'home',
            path: '/home',
            component: HomeVue,
            meta:{title:'主页'},
            children: [
                {
                    // 二级路由,子路由的路径前面无需写/，vue的路由已经帮我们配置好了
                    name:'news',
                    path: 'news',
                    component: NewsVue,
                    meta: { isAuth: true, title: '新闻' },
                    beforeEnter: (to,from,next) => {
                        // 进入NewsVue之前进行校验
                            if (to.meta.isAuth) {
                                if (localStorage.getItem('name') === 'yang') {
                                    // 放行
                                    next()
                                } else {
                                    alert('用户名不对无权限')
                                }
                            } else {
                                // 放行
                                next()
                            }
                    }
                },
                {
                    name:'message',
                    path: 'message',
                    component: MessageVue,
                    meta:{isAuth:true,title:'信息'},
                    children: [
                        {
                            name: 'detail',
                            path: 'detail/:id/:title',
                            component: DetailVue,
                            meta:{isAuth:true,title:'详情'},
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
/*
// 全局前置路由守卫——初始化调用，每次路由组件切换前别调用
router.beforeEach((to, from, next) => {
    
    // if (to.name === 'news' || to.path === '/home/message') {
    if (to.meta.isAuth) {
        if (localStorage.getItem('name') === 'yang') {
            // 放行
            next()
        } else {
            alert('用户名不对无权限')
        }
    } else {
        // 放行
        next()
    }
    
})

// 全局后置路由守卫——初始化调用，每次路由组件切换后调用
router.afterEach((to, from) => {
   console.log(to,from)
   document.title = to.meta.title||'路由系统'  
})*/

export default router 