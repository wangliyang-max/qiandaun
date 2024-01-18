import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _75dc62a6 = () => interopDefault(import('..\\pages\\goods\\index.vue' /* webpackChunkName: "pages/goods/index" */))
const _7977e8ef = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _4853281a = () => interopDefault(import('..\\pages\\reg.vue' /* webpackChunkName: "pages/reg" */))
const _42ff1096 = () => interopDefault(import('..\\pages\\user.vue' /* webpackChunkName: "pages/user" */))
const _46df0a9a = () => interopDefault(import('..\\pages\\goods\\comment.vue' /* webpackChunkName: "pages/goods/comment" */))
const _54d20b22 = () => interopDefault(import('..\\pages\\goods\\comment\\index.vue' /* webpackChunkName: "pages/goods/comment/index" */))
const _5453edf8 = () => interopDefault(import('..\\pages\\goods\\comment\\_uid.vue' /* webpackChunkName: "pages/goods/comment/_uid" */))
const _5b890bd9 = () => interopDefault(import('..\\pages\\test\\secondRouter.vue' /* webpackChunkName: "pages/test/secondRouter" */))
const _a05f7450 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _c36252e4 = () => interopDefault(import('..\\pages\\goods\\_id.vue' /* webpackChunkName: "pages/goods/_id" */))
const _d1f945c0 = () => interopDefault(import('..\\pages\\goods\\_id\\producer.vue' /* webpackChunkName: "pages/goods/_id/producer" */))
const _7f4c5e1d = () => interopDefault(import('..\\pages\\goods\\_id\\_sid.vue' /* webpackChunkName: "pages/goods/_id/_sid" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/goods",
    component: _75dc62a6,
    name: "goods"
  }, {
    path: "/login",
    component: _7977e8ef,
    name: "login"
  }, {
    path: "/reg",
    component: _4853281a,
    name: "reg"
  }, {
    path: "/user",
    component: _42ff1096,
    name: "user"
  }, {
    path: "/goods/comment",
    component: _46df0a9a,
    children: [{
      path: "",
      component: _54d20b22,
      name: "goods-comment"
    }, {
      path: ":uid",
      component: _5453edf8,
      name: "goods-comment-uid"
    }]
  }, {
    path: "/test/secondRouter",
    component: _5b890bd9,
    name: "test-secondRouter"
  }, {
    path: "/",
    component: _a05f7450,
    name: "index"
  }, {
    path: "/goods/:id",
    component: _c36252e4,
    name: "goods-id",
    children: [{
      path: "producer",
      component: _d1f945c0,
      name: "goods-id-producer"
    }, {
      path: ":sid?",
      component: _7f4c5e1d,
      name: "goods-id-sid"
    }]
  }, {
    path: "/index",
    component: _a05f7450,
    name: "home"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
