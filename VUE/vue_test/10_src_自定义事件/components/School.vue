<template>
    <div class="demo">
        <h2>学校名字:{{ name }}</h2>
        <h2 class="fonty">地址:{{ address }}</h2>
        <button @click="sendSchoolName">把学校名给app</button>
        <hr>
    </div>
</template>

<script>
export default {
    name: 'SchoolVue',
    props: ['getSchoolName'],
    data() {
        return {
            name: "nefu",
            address: "哈尔滨",
        };
    },
    methods: {
        sendSchoolName() {
            this.getSchoolName(this.name)
        }
    }
}

</script>
<style scoped lang="less">
.demo{
    background: skyblue;
}
</style>