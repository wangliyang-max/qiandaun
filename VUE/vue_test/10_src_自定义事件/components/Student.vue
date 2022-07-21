<template>
    <div class="demo">
        <h2>名字:{{ name}}</h2>
        <h2>性别:{{ sex }}</h2>
        <button @click="sendStudentName">把名字给app</button>
        <button @click="unbind">点击解绑getName事件</button>
        <button @click="dead">销毁当前实例</button>

        <hr>
    </div>
</template>
<script>
export default {
    name:'StudentVue',
    data() {
        console.log(this)
        return {
            name:"yang123",
            sex:"男"
        }
    },
    methods: {
        sendStudentName() {
            // 触发Student组件实例身上的getName事件
            this.$emit('getName', this.name)
        },
        unbind() {
            this.$off('getName')//解绑一个自定义事件
        },
        dead() {
            this.$destroy()
        }

    }
}

</script>
<style scoped>
.demo{
    background: lightsalmon;
}
</style>
