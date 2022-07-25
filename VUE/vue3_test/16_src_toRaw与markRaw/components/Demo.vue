<template>
    <h2>姓名：{{name }}</h2>
    <h2>年龄：{{age }}</h2>
    <h2>薪资：{{job.j1.salary }}</h2>
    <h2 v-show="person.student">同学：{{ person.student }}</h2>
    <br />
    <button @click="showRawPerson">输出最原始的person</button>
    <button @click="addStudent">添加同学</button>
    <button @click="person.student.name += '~'">修改同学姓名</button>
    <button @click="person.student.age += 1">增长同学年龄</button>

</template>

<script>
import { reactive, toRefs, ref, toRaw, markRaw } from 'vue'
export default {
    name: 'DemoVue',
    setup() {
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

        function showRawPerson() {
            const p = toRaw(person)
           console.log(p)
        }
        function addStudent() {
            const student = {
                name: 'cheng',
                age:20
            }
            person.student = markRaw(student)
        }
        
        return {
            ...toRefs(person),
            showRawPerson,
            addStudent,
            person
        }
    }
}
</script>


