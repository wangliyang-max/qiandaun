<template>
  <div class="container">
    <Category title="游戏">
      <!-- template利用scope属性接受插槽传过来的数据 -->
      <!-- scope接收的数据是一个对象 -->
      <template scope="youxi">
        <ul>
          <li v-for="(game,index) in youxi.games" :key="index">{{game}}</li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <!-- 支持解构赋值 -->
      <template scope="{games}">
        <ol>
          <li v-for="(game,index) in games" :key="index">{{game}}</li>
        </ol>
      </template>
    </Category>
    <Category title="游戏">
      <!-- 也可以使用slot-scope属性接受值 -->
      <template slot-scope="{games}">
        <h4 v-for="(game,index) in games" :key="index">{{game}}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "@/components/Category";
export default {
  name: "App",
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
</style>


