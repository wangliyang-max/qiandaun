<template>
    <div style="background:rgb(171, 255, 171)">
        <p>商品{{goodsId}}的生产商是:{{ goodsId==='1'?'百度':'google' }}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            goodsId: this.$route.params.id,
        }
    },
};
</script>
