<template>
  <demo @hello="showHelloMsg"  msg="hello" school="nefu">
  <h3>吃了吗</h3></demo>
</template>

<script>
import Demo from './components/Demo.vue'
export default {
  name: 'App',
  components: { Demo },
  setup() {
    function showHelloMsg (value){
      alert(`${value}`)
    }
    return {
      showHelloMsg
    }
  }
}
</script>


