<template>
    <div class="demo">
        <h2>名字:{{ name}}</h2>
        <h2>性别:{{ sex }}</h2>
        <button @click="sendStudentName">把学生姓名给school</button>
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
            // 触发事件
            this.$bus.$emit('hello',this.name)
        }
    }
}

</script>
<style scoped>
.demo{
    background: lightsalmon;
}
</style>
