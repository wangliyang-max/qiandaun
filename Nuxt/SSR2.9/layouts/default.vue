<template>
  <div>
    <!-- 跳转区 nuxt-link -->
    <AppHeader></AppHeader>
    <!-- 展示区，相当于routerview -->
    <nuxt />
  </div>
</template>
<script>

import AppHeader from './app-header.vue'
export default {
  // // layout层级中间件
  // // 1. 引用外部中间件
  // middleware: 'auth',
  // // 2. 使用内部中间件
  // middleware() {
  //   console.log('layout middleware')
  // }
  components:{ AppHeader }
}
</script>

