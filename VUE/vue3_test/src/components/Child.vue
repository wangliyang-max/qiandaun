<template>
    <div class="child">
        <h2>我是child组件</h2>
        {{sum}}
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    name: 'ChildVue',
    async setup() {
        let sum = ref(0)
       const p = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({sum})
            },1000)
       })
        return await p;
    }
}
</script>
<style>

.child {
    background: rgb(225, 205, 148);
    padding: 10px;
}
</style>