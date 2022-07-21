<template>
    <div class="demo">
        <h2 @click="showName">名字:{{name}}</h2>
        <h2>性别:{{ sex }}</h2>
    </div>
</template>
<script>
import { mixin } from "../mixin"
export default {
    name:'StudentVue',
    data() {
        console.log(this)
        return {
            name:"yang",
            sex:"男"
        }
    },
    mixins: [mixin]
}

</script>
<style>

/* 组建的样式 */
.demo{
    background: green;
}
</style>