<template>
  <h1>app组件</h1>
  <h2>姓名{{ person.name }}</h2>
  <h2>年龄{{ person.age }}</h2>
  <h2>工作种类{{ person.job.type }}</h2>
  <h2>薪资{{ person.job.salary }}</h2>
  <h2>c:{{ person.job.a.b.c }}</h2>
  <h3>hobby:{{ person.hobby}}</h3>

  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import { ref,reactive } from 'vue'
export default {
  name: 'App',
  setup() {

    let person = reactive({
      name: 'yang',
      age: 18,
      job: {
        type: '前端工程师',
        salary: '30k',
        a: {
          b: {
            c: 6
          }
        }
      },
      hobby: ['吃饭', '睡觉', '打豆豆']
    })
   
    function changeInfo() {
      person.name = 'cheng',
      person.age = 18,
      person.job.type = 'UI设计师'
      person.job.salary = '100k'
      person.job.a.b.c = 666
      person.hobby[0] = 'study'
   }
  
    return {
      person,
      changeInfo
    }
  }
}
</script>


