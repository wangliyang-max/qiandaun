<template>
  <div class="app">
    <h2>我是app组件（父组件）</h2>
    <Child/>
  </div>
</template>

<script>
import Child from './components/Child'
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