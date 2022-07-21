<template>
    <div class="demo">
        <h2>学校名字:{{ name }}</h2>
        <h2 class="fonty">地址:{{ address }}</h2>
        <hr>
    </div>
</template>

<script>
export default {
    name:'SchoolVue',
    data() {
        return {
            name: "nefu",
            address: "哈尔滨",
        };
    },
}

</script>
<style scoped lang="less">
.demo{
    background: skyblue;
    .fonty{
        font-size: 50px;
    }
}
</style>