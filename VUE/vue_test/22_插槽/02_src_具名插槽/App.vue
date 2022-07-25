<template>
  <div class="container">
    <Category title="美食">
      <img slot="center" src="./assets/1.jpg" />
      <a slot="footer" href="https://www.baidu.com">点我查看更多</a>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(game,index) in games" :key="index">{{game}}</li>
      </ul>
      <a slot="footer" href="https://www.baidu.com">单机游戏</a>
      <a slot="footer" href="https://www.baidu.com">网络游戏</a>
    </Category>
    <Category title="电影">
      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>

      <template v-slot:footer>
        <div class="foot">
          <a href="https://www.baidu.com">经典</a>
          <a href="https://www.baidu.com">热门</a>
          <a href="https://www.baidu.com">推荐</a>
        </div>
        <h4>欢迎观看电影</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "@/components/Category";
export default {
  name: "App",
  data() {
    return {
      foods: ['烧烤', '火锅', '小龙虾', '螺蛳粉'],
      films: ['《当幸福来敲门》', '《泰坦尼克号》', '《阿甘正传》', '《海上钢琴师》'],
      games:['王者荣耀','我的世界','和平精英','穿越火线']
    }
  },
  components: {
    Category
  }
}
</script>
<style lang="css">
.container,.foot{
  display: flex;
  justify-content: space-around;
}
img{
  width: 100%;
  height: 50%;
}
video{
  width: 100%;
}
</style>


