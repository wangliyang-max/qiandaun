<template>
  <div>
    <div class="row">
      <Banner />
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">

          <!-- Vue中借助router-link标签实现路由的切换 -->
          <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- Vue中借助router-view指定组件的显示位置-->
            <router-view></router-view>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
export default {
  name: "App",
  components: {
    Banner
  }
}
</script>
<style lang="css" scoped>
</style>
