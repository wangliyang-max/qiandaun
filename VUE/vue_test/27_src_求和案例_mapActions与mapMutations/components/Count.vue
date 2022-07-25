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
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
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
        // 手动写
       /* increment() {
           this.$store.commit('JIA',this.n)
        },
        decrement() {
           this.$store.commit('JIAN', this.n)
        },*/
        // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法)
        ...mapMutations({ increment: 'increment', decrement:'decrement'}),
        // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(数组写法)
        ...mapMutations(['increment', 'decrement']),

        /**************************************************************** */
        // 手动写
       /*
        incrementOdd() {
            this.$store.dispatch('jiaOdd', this.n)
        },
        incrementWait() {
            this.$store.dispatch('jiaWait', this.n)
        }*/

        // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(对象写法)
        ...mapActions({
            incrementOdd: 'incrementOdd', incrementWait: 'incrementWait'
        }),
       // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(数组写法)
        ...mapActions(['incrementOdd', 'incrementWait'])
    },
    computed: {
        // 借助mapState生成计算属性，从state中读取数据（对象写法）
        ...mapState({ sum: 'sum', name: 'name', age: 'age' }),
        // 借助mapState生成计算属性，从state中读取数据（数组写法）
        ...mapState(['sum', 'name', 'age']),

        /*************************************************************** */
        // 借助mapGetters生成计算属性，从Getters中读取数据（对象写法）
        ...mapGetters({bigSum:'bigSum'}),
        // 借助mapGetters生成计算属性，从Getters中读取数据（数组写法）
        ...mapGetters(['bigSum']),

    }
}
</script>

<style>
button{
    margin: 5px;
}
</style>