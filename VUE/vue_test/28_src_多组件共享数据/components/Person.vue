<template>
    <div>
        <h1>人员列表</h1>
        请输入人员名字：<input v-model="name" />
        <button @click="personAdd">添加</button>
        <ul>
            <li v-for="person in personList" :key="person.id">{{ person.name }}</li>
        </ul>

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
            return this.$store.state.personList
        },
        sum() {
            return this.$store.state.sum
        }
    },
    methods:{
    personAdd(){
            const personObj = { id: nanoid(), name: this.name }
            this.$store.commit('personAdd', personObj)
        this.name=''
    }
    }

}
</script>
