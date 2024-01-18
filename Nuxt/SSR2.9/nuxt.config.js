
export default {
  // 服务端渲染模式，同构
  mode: 'universal',
  /*
  ** 页面Head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /**
   * 路由配置
   */
  router: {
    middleware: 'auth',
    /**
     * nuxt每次启动都会执行extendRoutes函数
     * @param {*routes} routes 所有路由信息
     * @param {*resolve} resolve 磁盘上的所有函数
     */
    extendRoutes(routes, resolve) {
      console.log('route', routes);
      // 扩展路由
      // 添加路由
      routes.push({
        name: 'home',//路由别名
        path: '/index',//路由路径
        component: resolve(__dirname, 'pages/index.vue')//显示组件
      })
      
    }
  },

  /*
  ** loading样式
  */
  loading: { color: '#fff' },
  /*
  ** 全局样式
  */
  css: [
  ],
  /*
  ** 全局插件
  */
  plugins: [
  ],
  /*
  ** 开发模式的模块
  */
  devModules: [
  ],
  /*
  ** 模块
  */
  modules: [
  ],
  /*
  ** 打包配置
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
