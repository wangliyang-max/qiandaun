<template>
    <div class="demo1">
        <h2 @click="showName">学校名字:{{ name }}</h2>
        <h2>地址:{{ address }}</h2>
    </div>
</template>

<script>
import{mixin} from"../mixin"
export default {
    name:'SchoolVue',
    data() {
        return {
            name: "nefu",
            address: "哈尔滨",
        };
    },
    mixins: [mixin]
}

</script>
<style>

/* 组建的样式 */
.demo1{
    background: orangered;
}
</style>