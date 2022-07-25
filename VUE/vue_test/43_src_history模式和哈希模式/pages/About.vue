<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: 'AboutVue',

  // 通过路由规则，进入该组件时被调用（通过路由规则即通过普通路由的页面标签进入的不算）
  beforeRouteEnter(to,from,next) {
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
  },
 // 通过路由规则，离开该组件时被调用
  afterRouterLeave(to, from, next) {
    next()
  }
}
</script>

<style>

</style>