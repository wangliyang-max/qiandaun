<template>
    <div class="demo">
        <h2>名字:{{ name | mySlice }}</h2>
        <h2>性别:{{ sex }}</h2>
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
    }
}

</script>
