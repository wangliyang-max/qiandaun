<template>
    <div>
        <ul>
            <li v-for="message in messageList" :key="message.id">
                <!-- params参数，to的字符串写法 -->
                <!-- <router-link :to="`/home/message/detail/${message.id}/${message.title}`">{{message.title}}
                </router-link>
                &nbsp;&nbsp; -->
                <!-- query参数，to的对象写法 -->
                <router-link :to="{
                    name: 'detail',
                    query: {
                        id: message.id,
                        title:message.title
                    }
                }">
                    {{message.title}}
                </router-link>
            </li>
        </ul>
        <hr />
        <router-view></router-view>

    </div>
</template>

<script>
export default {
    name: "MessageVue",
    data() {
        return {
            messageList:[
                { id: '001', title: '消息001' },
                { id: '002', title: '消息002' },
                { id: '003', title: '消息003' },
            ]
        }
    }
}
</script>

<style scoped>
</style>