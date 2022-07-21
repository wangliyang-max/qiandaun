<template>
  <div class="app">
    <h1>app组件</h1>
    <h1>你好呀{{studentName}}</h1>
    <!--通过父组件给子组件传递函数类型的props实现: 子给父传递数据-->
    <School :getSchoolName="getSchoolName" />

    <!--通过父组件给子组件绑定一个自定义事件实现:子给父传递数据（使用v-on）-->
    <!-- <Student v-on:getName="getStudentName" /> -->

    <!--通过父组件给子组件传递函数类型的props实现: 子给父传递数据（使用ref）-->
    <Student ref="student" />
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
      msg: "欢迎！！！",
      studentName:''
    }
  },
  methods: {
    getSchoolName(name) {
      console.log("App收到了学校的名字:",name)
    },
    getStudentName(name) {
      console.log("App收到了学生的名字:", name)
      this.studentName = name
    }  
  },
  mounted() {
    this.$refs.student.$on('getName', (name)=>{
        console.log("App收到了学生的名字:", name)
        this.studentName = name
    })
      // this.$refs.student.$once('getName', this.getStudentName)
  }

}
</script>

<style>
.app{
  background: lightgoldenrodyellow;
}
</style>