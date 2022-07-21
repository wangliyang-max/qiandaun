<template>
    <!-- 组件的结构,相当于非单文件中的  template配置-->
    <div class="demo1">
        <h2>学校名字:{{schoolName}}</h2>
        <h2>地址:{{ address }}</h2>
    </div>
</template>
<script>
// 组件交互的代码（数据、方法），相当于非单文件中的出了template的配置
export default {
    name:'SchoolVue',
    data() {
        return {
            schoolName: "nefu",
            address: "哈尔滨",
        };
    },
}

</script>
<style>

/* 组建的样式 */
.demo1{
    background: orangered;
}
</style>