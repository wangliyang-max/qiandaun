<template>
    <!-- 组件的结构,相当于非单文件中的  template配置-->
    <div class="demo">
        <h2>名字:{{name}}</h2>
        <h2>年龄:{{ myAge }}</h2>
        <button @click="addAge">点击年龄修改</button>
    </div>
</template>
<script>


// 组件交互的代码（数据、方法），相当于非单文件中的出了template的配置
export default {
    name:'StudentVue',
    data() {
        console.log(this)
        return {
            myAge:this.age
        }
    },
    props: ['name','age'],
    methods: {
        addAge() {
            this.myAge++
        }
    }
}

</script>
<style>

/* 组建的样式 */
.demo{
    background: green;
}
</style>