<template>
  <div>
    <Student/>
    <School></School>
  </div>
</template>
<script>
//引入组件
import Student from './components/Student'
import School from './components/School'
export default {
  name: 'App',
  components: {
    Student,
    School
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