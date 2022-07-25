<template>
  <div class="app">
    <h2>我是app组件</h2>
  </div>
</template>

<script>
import {ref, reactive, readonly, toRefs,isRef,isReactive,isReadonly,isProxy} from 'vue'
export default {
  name: 'AppVue',
  setup() {
    const student = reactive({
      name: 'yang',
      age:18
    })
    let sum = ref(0)
    let student2 = readonly(student)

    console.log(isRef(sum))
    console.log(isReactive(student))
    console.log(isReadonly(student2))
    console.log(isProxy(student))
    console.log(isProxy(student2))


    
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