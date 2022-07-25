<template>
    <div>
        <h1>人员列表</h1>
        请输入人员名字：<input v-model="name" />
        <button @click="personAdd">添加</button>
        <button @click="addPersonWang">添加一个姓王的人</button>
        <button @click="addPersonServer">添加一条语句</button>
        <ul>
            <li v-for="person in personList" :key="person.id">{{ person.name }}</li>
        </ul>
        <h3>列表中第一个人的名字是：{{firstPersonName}}</h3>
        <h3 style="color:red">上方组件的sum是：{{sum }}</h3>
    </div>
</template>

<script>
import { nanoid } from "nanoid"
export default {
    name: 'PersonVue',
    data() {
        return {
            name:''
        }
    },
    computed:{
        personList(){
            return this.$store.state.personOptions.personList
        },
        sum() {
            return this.$store.state.countOptions.sum
        },
        firstPersonName() {
            return this.$store.getters[`personOptions/firstPersonName`]
        }
    },
    methods:{
        personAdd(){
            const personObj = { id: nanoid(), name: this.name }
            this.$store.commit('personOptions/personAdd', personObj)
            this.name=''
        },
        addPersonWang() {
            const personObj = { id: nanoid(), name: this.name }
            this.$store.dispatch('personOptions/addPersonWang', personObj)
            this.name = ''
        },
        addPersonServer() {
            this.$store.dispatch('personOptions/addPersonServer')
        }
    }

}
</script>
