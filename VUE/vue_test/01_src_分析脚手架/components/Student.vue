<template>
    <!-- 组件的结构,相当于非单文件中的  template配置-->
    <div class="demo">
        <h2>学校名字:{{name}}</h2>
        <h2>地址:{{ age }}</h2>
    </div>
</template>
<script>
// 组件交互的代码（数据、方法），相当于非单文件中的出了template的配置
export default {
    name:'StudentVue',
    data() {
        return {
            name: "yang",
            age: 18,
        };
    },
}

</script>
<style>

/* 组建的样式 */
.demo{
    background: green;
}
</style>