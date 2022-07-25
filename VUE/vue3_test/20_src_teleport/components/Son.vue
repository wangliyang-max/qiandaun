<template>
    <div class="son">
        <h2>我是son组件（孙组件）</h2>
        <Dialog></Dialog>
    </div>
</template>

<script>
import Dialog from './Dialog.vue'
export default {
    name: 'SonVue',
    components:{ Dialog }
}
</script>

<style>
.son {
    background: rgb(95, 24, 24);
    padding: 10px;
}
</style>