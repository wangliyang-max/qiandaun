<template>
  <div>
    <h1 v-text="msg" ref="title" id="title"></h1>
    <button ref="btn" @click = "showDOM">点我输出dom元素</button>
    <School ref="sch" id="sch"/>
  </div>
</template>
<script>
//引入组件
import School from './components/School.vue'
export default {
  name: 'App',
  components: {
    School
  },
  data() {
    return {
      msg:"欢迎！！！"
    }
  },
  methods: {
    showDOM() {
      console.log(this.$refs.title)//真实DOM元素
      console.log(document.getElementById('title'))
      console.log(this.$refs.btn)//真实DOM元素
      console.log(this.$refs.sch)//school组件的真实对象
      console.log(document.getElementById('sch'))
    }
  }
}
</script>

<style>
</style>