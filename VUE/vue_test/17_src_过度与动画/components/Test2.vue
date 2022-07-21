<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group name="hello">
      <h1 v-show="isShow" key="1">你好呀</h1>
      <h1 v-show="isShow" key="2">yang</h1>
    </transition-group>

  </div>
</template>
<script>
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

    /* 谁变给谁配置transition */
    /* 定义变换时间 */
    /* transition: 0.5s; */
}
/* 进入的起点 */
.hello-enter{
  transform: translateX(-100%);
}
/* 进入的终点 */
.hello-enter-to {
  transform: translateX(0);
}
/* 离开的起点 */
.hello-leave {
  transform: translateX(0);
}

/* 离开的终点 */
.hello-leave-to {
  transform: translateX(-100%);
}
/* 进入的过程 */
.hello-enter-active{
transition: 0.5s;
}
/* 离开的过程 */
.hello-leave-active {
transition: 0.5s;
}

</style>