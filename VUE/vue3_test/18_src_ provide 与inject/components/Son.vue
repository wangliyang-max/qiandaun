<template>
    <div class="son">
        <h2>我是son组件（孙组件）</h2>
        <h3>{{student.name}}--{{ student.age}}</h3>
    </div>
</template>

<script>
import { inject } from '@vue/runtime-core'
export default {
    name: 'SonVue',
    setup() {
        let student = inject('student')
        return {
            student
        }
    }
}
</script>

<style>
.son {
    background: rgb(95, 24, 24);
    padding: 10px;
}
</style>