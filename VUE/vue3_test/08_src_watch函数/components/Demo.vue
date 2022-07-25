<template>
    <h1>Demo组件</h1>
    <h2>当前求和为：{{sum}}</h2>
    <button @click="sum++">点我+1</button>
    <h2>当前信息为：{{msg}}</h2>
    <button @click="msg+='!'">修改信息</button>
    <hr />
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <h2>薪资：{{person.job.j1.salary}}</h2>
    <button @click="person.name+='~'">修改姓名</button>
    <button @click="person.age+=1">增长年龄</button>
    <button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
import {reactive, ref, watch} from 'vue'
export default {
    name: 'DemoVue',
    // vue2中的watch写法
    /*watch: {
        // sum(newValue,oldValue) {
        //     console.log("sum的值变化了",newValue,oldValue)
        // }
        sum: {
            immediate: true,
            deep:true,
            handler(newValue, oldValue) {
                console.log('sum的值变化了', newValue, oldValue)
            }
        }
    
    },*/
    setup() {
        //  数据
        let sum = ref(0)
        let msg = ref('你好呀')
        let person = reactive({
            name: 'yang',
            age: 18,
            job:{
                j1:{
                    salary:20
                }
            }
        })

        // 监视
        // 监视ref所定义的一个响应式数据
        // watch(sum, (newValue, oldValue) =>{
        //     console.log('sum的值变化了', newValue, oldValue)
        // },{immediate:true})
        //  // 监视ref所定义的多个响应式数据
        // watch([sum,msg], (newValue, oldValue) => {
        //     console.log('sum的值变化了', newValue, oldValue)
        // })

        /* 监视reactive所定义的一个响应式数据的全部属性
            1.注意:此处无法正确的获取oldValue
            2.注意:强制开启了深度监视（deep配置无效)
        */
        watch(person, (newValue, oldValue) => {
            console.log('person变换了', newValue, oldValue)
        })
        /* 
        监视reactive所定义的一个响应式数据的一个属性(需要使用函数包裹属性)
        */
        watch(()=>person.age, (newValue, oldValue) => {
            console.log('person变换了', newValue, oldValue)
        })
        /* 监视reactive所定义的一个响应式数据的某些属性(需要使用数组)
        */
        watch([() => person.age, () => person.name], (newValue, oldValue) => {
            console.log('person的age变化了', newValue, oldValue)
        })
        /*特殊情况：如果监视的reactive属性是一个对象，监视不到改变，因为他监视的是对象的地址 */
        watch(() => person.job, (newValue, oldValue) => {
            console.log('person的job发生变化了', newValue, oldValue)
        }, { deep: true })


        return {
            sum,
            msg,
            person
        }
    }
}
</script>


