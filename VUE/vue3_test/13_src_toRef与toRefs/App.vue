<template>
  <button @click="isShowDemo = !isShowDemo ">显示/隐藏</button>
  <!-- 如果v-if的值为false直接将组件卸载掉 -->
  <demo v-if="isShowDemo" />
</template>

<script>
import Demo from './components/Demo.vue'
import {ref} from 'vue'
export default {
  name: 'AppVue',
  components: { Demo },
  setup() {
    let isShowDemo = ref(true)
    return {isShowDemo}
  }
}
</script>


