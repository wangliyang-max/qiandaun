<template>
    <h1>Demo组件</h1>
    姓：<input type="text" v-model="person.firstName" />
    <br />
    名：<input type="text" v-model="person.lastName" />
    <br />
    <span>全名：{{person.fullName}}</span>
    <br />
    全名(可改)：<input type="text" v-model="person.fullNameChange" />
</template>

<script>
import { reactive,computed } from 'vue'
export default {
    name: 'DemoVue',
    // vue2实现
   /* computed:{
        fullName(){
          return this.person.firstName+"-"+this.person.lastName  
        }
    },*/
    setup() {
        //  数据
        let person = reactive({
            firstName: '张',
            lastName: '三',
        })
        // 计算属性
        // 计算属性-简写(没有考虑计算属性被修改的情况,只有get方法时）
        person.fullName = computed(() => {
            return person.firstName+"-"+person.lastName
        })
        // 计算属性-完整(计算属性可以被修改）
        person.fullNameChange = computed({
            get(){
                return person.firstName + "-" + person.lastName
            },
            set(value){
                const nameArr = value.split("-")
                person.firstName = nameArr[0]
                person.lastName = nameArr[1]
           }
        })

        // 方法

        return {
            person,
        }
    }
}
</script>


