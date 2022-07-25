<template>
    <div class="category">
        <h3>{{title}}</h3>
        <!-- 插槽就相当于定义一个坑，等组件来填充 -->
        <slot>我是一个插槽，如果组件标签中没有传递值时，我就显示，否则显示组件传递过来的内容</slot>
    </div>
</template>

<script>
export default {
    name: 'CategoryVue',
    props:['listData','title']
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