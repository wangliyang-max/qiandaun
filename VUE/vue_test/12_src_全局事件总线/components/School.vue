<template>
    <div class="demo">
        <h2>学校名字:{{ name }}</h2>
        <h2 class="fonty">地址:{{ address }}</h2>
        <hr>
    </div>
</template>

<script>
export default {
    name: 'SchoolVue',
    data() {
        return {
            name: "nefu",
            address: "哈尔滨",
        };
    },
    mounted() {
        // 绑定事件，编写回调函数
        this.$bus.$on('hello', (data) => {
            console.log('我是school组件，我接受到了数据:', data)
        })
    },
    beforeDestroy() {
        // 该组件销毁时记得解绑，避免占用$bus的资源
        this.$bus.off('hello')
    }
}
</script>
<style scoped lang="less">
.demo{
    background: skyblue;
}
</style>