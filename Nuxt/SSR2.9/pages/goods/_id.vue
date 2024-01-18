<template>
    <div style="background:rgb(255, 255, 152)">
        <h2>商品{{ goodsId }}的详情页</h2>
        <h3>携带参数： a:{{ a }},b:{{ b }}</h3>
        <!-- <h4>款式</h4>
        <nuxt-link :to="`/goods/${goodsId}/1`">款式1</nuxt-link>
        <nuxt-link :to="`/goods/${goodsId}/2`">款式2</nuxt-link>
        <nuxt/> -->
        <h4>生产商</h4>
        <nuxt-link :to="`/goods/${goodsId}/producer`">生产商是：</nuxt-link>
        <nuxt/>
    </div>
</template>
<script>
export default {
    name: 'goods-detail',
    validate({ params, query }) {
      return typeof params.id === 'number'  
    },
    data() {
        return {
            goodsId: this.$route.params.id,
            a: this.$route.query.a,
            b: this.$route.query.b,
        }
    }
}
</script>
