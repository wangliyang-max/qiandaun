<template>
    <div>
        <h1>当前求和为{{sum}}</h1>
        <h1>数据放大10倍{{bigSum}}</h1>
        <h1>姓名：{{name}}</h1>
        <h1>年龄：{{age}}</h1>
        <select v-model="n">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex'

export default {
    name: 'CountVue',
    data() {
        return {
            n: 1,//用户选择的数据
        }
    },
    methods: {
        increment() {
           this.$store.commit('JIA',this.n)
        },
        decrement() {
           this.$store.commit('JIAN', this.n)
        },
        incrementOdd() {
            this.$store.dispatch('jiaOdd', this.n)
        },
        incrementWait() {
            this.$store.dispatch('jiaWait', this.n)
        }
    },
    computed: {
        // 手动获取数据
        /*sum(){
            return this.$store.state.sum
        },
        name(){
            return this.$store.state.name
        },
        age(){
            return this.$store.state.age
        }*/
        // 借助mapState生成计算属性，从state中读取数据（对象写法）
        // ...是ES6语法是说将mapState对象中的键值对直接放到中computed
        ...mapState({ sum: 'sum', name: 'name', age: 'age' }),
        // 借助mapState生成计算属性，从state中读取数据（数组写法）
        // 数组写法的前提是获取的计算属性名称和state中变量的名称一致
        ...mapState(['sum', 'name', 'age']),

        /*************************************************************** */
        // 手写
        bigSum() {
            return this.$store.getters.bigSum;
        },

        // // 对象写法
        ...mapGetters({bigSum:'bigSum'}),
        // // 数组写法
        ...mapGetters(['bigSum']),

    }
}
</script>

<style>
button{
    margin: 5px;
}
</style>