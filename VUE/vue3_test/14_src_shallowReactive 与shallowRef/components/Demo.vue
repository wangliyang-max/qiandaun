<template>
    <h2>姓名：{{name }}</h2>
    <h2>年龄：{{age }}</h2>
    <h2>薪资：{{job.j1.salary }}</h2>
    <button @click="name += '~'">修改姓名</button>
    <button @click="age += 1">增长年龄</button>
    <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import {shallowReactive,reactive, toRefs } from 'vue'
export default {
    name: 'DemoVue',
    setup() {
        //  数据
        // let person = shallowReactive({
        let person = reactive({
            name: 'yang',
            age: 18,
            job: {
                j1: {
                    salary: 20
                }
            }
        })
        return {
            ...toRefs(person)
        }
    }
}
</script>


