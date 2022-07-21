<template>
    <div class="demo">
        <h2>学校名字:{{ name }}</h2>
        <h2 class="fonty">地址:{{ address }}</h2>
        <hr>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name: 'SchoolVue',
    data() {
        return {
            name: "nefu",
            address: "哈尔滨",
        };
    },
    mounted() {
        // 订阅消息，编写回调函数
        this.pubsubId =  pubsub.subscribe('hello',(msgName,data)=>{
            console.log(`有人发布了${msgName}消息,消息内容是:${data}`)
        })
    },
    beforeDestroy() {
        pubsub.unsubscribe(this.pubsubId)
  
    }
}
</script>
<style scoped lang="less">
.demo{
    background: skyblue;
}
</style>