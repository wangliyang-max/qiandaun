<template>
  <h1>app组件</h1>
  <h2>姓名{{name}}</h2>
  <h2>年龄{{age}}</h2>
  <button @click="changeInfo">修改人的信息</button>
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
    function changeInfo() {
      name = 'cheng',
      age = 20
    }

    return {
      name,
      age,
      changeInfo
    }


  }
}
</script>


