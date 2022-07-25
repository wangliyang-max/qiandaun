<template>
  <div class="container">
    <Category title="美食">
      <!-- <img src="./assets/1.jpg" /> -->
    </Category>
    <Category title="游戏">
      <!-- <ul>
        <li v-for="(game,index) in games" :key="index">{{game}}</li>
      </ul> -->
    </Category>
    <Category title="电影">
      <!-- <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video> -->
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
.container{
  display: flex;
  justify-content: space-around;
}
img{
  width: 100%;
}
video{
  width: 100%;
}
</style>


