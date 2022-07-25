<template>
  <div class="app">
    <h2>我是app组件（父组件）</h2>
    <h3>{{name}}--{{age}}</h3>
    <Child/>
  </div>
</template>

<script>
import Child from './components/Child.vue'
import {provide, reactive, toRefs} from 'vue'
export default {
  name: 'AppVue',
  components: { Child },
  setup() {
    const student = reactive({
      name: 'yang',
      age:18
    })
    provide('student',student)//给自己的后代组件传递数据
    return {
      ...toRefs(student)
    }
  }
}
</script>

<style>
.app {
  background: #333;
  padding: 10px;
}
</style>