<template>
    <div class="goods" style="background:rgb(152, 152, 254)">
        <h1>商品</h1>
        <nuxt-link to="/goods/1?a=1&b=11">商品01</nuxt-link>
        <nuxt-link to="/goods/2">商品02</nuxt-link>
        <nuxt-link :to="{name:'goods-id', params:{id:3}, query:{a:3,b:33}}">商品03</nuxt-link>
        <nuxt-link to="/goods/comment">评论</nuxt-link>

        <!-- 展示区 -->
        <nuxt/>
    </div>
</template>