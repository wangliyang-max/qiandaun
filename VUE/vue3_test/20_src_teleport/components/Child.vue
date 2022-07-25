<template>
    <div class="child">
        <h2>我是child组件（子组件）</h2>
        <Son/>
    </div>
</template>

<script>
import Son from './Son'
export default {
    name: 'ChildVue',
    components: {
        Son
    }
}
</script>
<style>

.child {
    background: rgb(225, 205, 148);
    padding: 10px;
}
</style>