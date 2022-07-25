<template>
  <div class="app">
    <h2>我是app组件</h2>
    <Suspense>
      <template v-slot:default>
        <Child />
      </template>
      <template v-slot:fallback>
        <h3>加载中...</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
// import Child from './components/Child'//静态引入
// defineAsyncComponent定义一个异步组件
import { defineAsyncComponent } from 'vue'
const Child = defineAsyncComponent(()=>import('./components/Child'))//动态引入（异步引入）
export default { 
  name: 'AppVue',
  components: { Child },
}
</script>

<style>
.app {
  background: #333;
  padding: 10px;
}
</style>