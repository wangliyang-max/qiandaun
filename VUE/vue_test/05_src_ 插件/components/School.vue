<template>
    <div class="demo1">
        <h2>学校名字:{{ name }}</h2>
        <h2>地址:{{ address }}</h2>
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
