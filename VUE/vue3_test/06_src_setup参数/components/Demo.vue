<template>
    <h1>Demo组件</h1>
    <h2 v-show="person.name">姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="test">测试触发Hello事件</button>
    <slot></slot>
</template>

<script>
import { reactive } from 'vue'
export default {
    name: 'App',
    props: ['msg', 'school'],
    emits: ['hello'],
    setup(props,context) {
        // console.log("---setup----", context.attrs)
        // console.log("---setup----", context.emit)
        console.log("---setup----", context.slots)
        //数据 
        let person = reactive({
            name: 'yang',
            age: 18,
        })
        // 方法
        function test (){
           context.emit('hello',666)
        }
        return {
            person,
            test
        }
    }
}
</script>


