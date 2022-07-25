<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: 'AboutVue',
  mounted() {
    console.log("About组件挂载完毕",this)
    window.aboutRoute = this.route
      window.aboutRouter = this.router
    }
}
</script>

<style>

</style>