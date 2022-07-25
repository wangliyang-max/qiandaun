<template>
    <div class="category">
        <h3>{{title}}</h3>
        <!-- 插槽就相当于定义一个坑，等组件来填充 -->
        <!--slot将games传递给插槽的使用者  -->
        <slot :games="games">我是一个插槽</slot>
    </div>
</template>

<script>
export default {
    name: 'CategoryVue',
    props: ['title'],
    data() {
        return{
            games: ['王者荣耀', '我的世界', '和平精英', '穿越火线']
        }
    }
}
</script>

<style>

.category{
    width:200px;
    height: 300px;
    background: lightseagreen;
    overflow: hidden;
}
h3{
    text-align: center;
background: lightgoldenrodyellow;
}
</style>