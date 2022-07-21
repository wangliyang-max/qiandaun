<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group name="animate__animated animate__bounce"    enter-active-class="animate__wobble"
      leave-active-class="animate__backOutDown">
      <h1 v-show="isShow" key="1">你好呀</h1>
      <h1 v-show="isShow" key="2">yang</h1>
    </transition-group>
  </div>
</template>
<script>
import "animate.css"
export default {
    name: 'TestVue',
    data() {
        return {
            isShow:true
        }
    }
}
</script>
<style scoped>
h1{
    background: lightsalmon;
}
</style>