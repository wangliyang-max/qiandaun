<template>
    <div>
        <h1>当前求和为{{sum}}</h1>
        <h1>数据放大10倍{{bigSum}}</h1>
        <select v-model="n">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>

        <h3 style="color:red">下方组件的总人数是：{{ personList.length }}</h3>
    </div>
</template>

<script>
import { mapState,mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    name: 'CountVue',
    data() {
        return {
            n: 1,//用户选择的数据
        }
    },
    methods: {

        // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(数组写法)
        ...mapMutations('countOptions',['increment', 'decrement']),
       // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(数组写法)
        ...mapActions('countOptions',['incrementOdd', 'incrementWait'])
    },
    computed: {
        // 借助mapState生成计算属性，从state中读取数据（数组写法）
        ...mapState('countOptions', ['sum']),
        ...mapState('personOptions', ['personList']),
       
        // 借助mapGetters生成计算属性，从Getters中读取数据（数组写法）
        ...mapGetters('countOptions',['bigSum']),

    },
    mounted() {
        console.log(this.$store)
    },
}
</script>

<style>
button{
    margin: 5px;
}
</style>