<template>
  <h1>app组件</h1>
  <h2>姓名{{ name }}</h2>
  <h2>年龄{{ age }}</h2>
  <h2>工作种类{{ job.type }}</h2>
  <h2>薪资{{ job.salary }}</h2>
  <button @click="sayHello">hello</button>
  <br />
  <button @click="changeInfo">修改人的信息</button>
  <button @click="changeJob">修改工作信息</button>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'App',
  setup() {
    // 数据
    let name = ref('yang')
    let age = ref(18)
    let job = ref({
      type: '前端工程师',
      salary:'30k'
    })

    // 方法
    function sayHello() {
      alert(`你好呀,我叫${name.value}`)
    }
    function changeInfo() {
      console.log(name)
      name.value = 'cheng',
      age.value = 20
    }
    function changeJob() {
      job.value.type = 'UI设计师'
      job.value.salary = '100k'
    }

    return {
      name,
      age,
      job,
      sayHello,
      changeInfo,
      changeJob
    }
  }
}
</script>


