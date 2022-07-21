<template>
    <div class="row">
        <!-- 展示用户列表 -->
        <div v-show="info.users.length" class="card" v-for="user in info.users" :key="user.login">
            <a :href="user.html_url" target="_blank">
                <img :src="user.avatar_url" style="width:100px">
                <p class="card-text">{{user.login}}</p>
            </a>
        </div>

        <!-- 欢迎词 -->
        <h1 v-show="info.isFirst">欢迎使用</h1>
        <!-- 加载中 -->
        <h1 v-show="info.isLoading">加载中...</h1>
        <!-- 错误页面 -->
        <h1 v-show="info.errMsg">请求出错了:{{ info.errMsg}}</h1>

    </div>
</template>

<script>
export default {
    name: "ListVue",
    data() {
        return {
            info: {
                isFirst: true,
                isLoading: false,
                errMsg: '',
                users: []
            }
        }
    },
    mounted(){
        this.$bus.$on('getUsers', (dataObj) => {
            console.log("我是list组件,接收到了数据", dataObj)
            // ES6语法,将两个对象合并,求属性并集,如果有共有的属性值去后面那一个参数的
            this.info = { ...this.info, ...dataObj }
        })
    },
    beforeDestroy() {
        this.$bus.$off('getUsers')
    }
}
</script>

<style>

.album {
    min-height: 50rem;
    /* Can be removed; just added for demo purposes */
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #f7f7f7;
}

.card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
}

.card>img {
    margin-bottom: .75rem;
    border-radius: 100px;
}

.card-text {
    font-size: 85%;
}
</style>
