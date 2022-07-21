<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>

    <transition name="hello">
      <h1 v-show="isShow">你好呀</h1>
    </transition>

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
}

.hello-enter-active {
  animation: yang 1s;
}

.hello-leave-active {
  animation: yang 1s reverse;
}

/* 定义动画 */
@keyframes yang {
  from{
    transform: translateX(-100%);
  }
  to {
      transform: translateX(0px);
    }
}

</style>