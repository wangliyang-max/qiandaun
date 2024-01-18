<template>
    <div>
        <p>商品{{`商品${goodsId}的款式${styleId}的详情页`}}的详情页</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            styleId: this.$route.params.sid,
            goodsId: this.$route.params.id,
        }
    },
};
</script>
