<template>
   <input type="text" v-model="keyWord"/>
   <h3>{{keyWord}}</h3>
</template>

<script>
import {ref,customRef} from 'vue'
export default {
    name: 'DemoVue',
    setup() {
        // 自定义Ref——myRef
        function myRef(value,delay) {
            let timer 
            console.log('---myRef---', value)
            return customRef((track,trigger) => { 
                return {
                    // 有人读取该属性时调用
                    get() {
                        track()//追踪set修改value的变化
                        return value
                    },
                    // 有人修改该属性时调用
                    set(newValue) {
                        // clearTimeout(timer)
                        timer = setTimeout(() => {
                            value = newValue
                            trigger()//通知Vue去重新解析模板（重新调用get）
                        }, delay)
                    }
                }
            })
        }

        // let keyWord = ref("hello")//vue提供的ref
        let keyWord = myRef("hello",1000)//自己定义的ref

        return {keyWord}
    }
}
</script>


