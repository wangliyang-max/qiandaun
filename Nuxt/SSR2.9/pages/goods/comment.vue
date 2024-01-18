<template>
    <div>
        <h4>评论</h4>
        <nuxt-link :to="{ name: 'goods-comment-uid', params: { uid: 1 }}">评论1</nuxt-link>
        <nuxt-link to="/goods/comment/2">评论2</nuxt-link>
        <!-- 评论展示区 -->
        <nuxt/>

    </div>
</template>
<script>
export default {
    data() {
    }
}
</script>
