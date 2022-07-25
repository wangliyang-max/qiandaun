<template>
  <h1>app组件</h1>
  <h2>姓名{{name}}</h2>
  <h2>年龄{{age}}</h2>
  <button @click="sayHello">说话</button>
</template>

<script>
import {h} from 'vue'
export default {
  name: 'App',
  setup() {
    // 数据
    let name = "yang"
    let age = 18

    // 方法
    function sayHello() {
      alert(`你好呀,我叫${name}`)
    }

    // return {
    //   name,
    //   age,
    //   sayHello
    // }

    return () => h('h1','yang')

  }
}
</script>


