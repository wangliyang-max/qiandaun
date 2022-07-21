<template>
  <div>
    <Student name='张三' :age="20"/>
  </div>
</template>
<script>
//引入组件
import Student from './components/Student'
export default {
  name: 'App',
  components: {
    Student
  },
  data() {
    return {
      msg:"欢迎！！！"
    }
  },

}
</script>

<style>
</style>