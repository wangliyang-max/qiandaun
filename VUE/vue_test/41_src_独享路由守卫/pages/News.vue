<template>
    <ul>
        <li :style="{opacity}">欢迎学习</li>
        <li>news001&nbsp;<input type="text" /></li>
        <li>news002&nbsp;<input type="text" /></li>
        <li>news003&nbsp;<input type="text" /></li>
    </ul>
</template>

<script>
export default {
    name: "NewsVue",
    data() {
        return {
            opacity:1
        }
    },
    // mounted() {
    //     this.timer = setInterval(()=> {
    //         this.opacity -= 0.01
    //         if (this.opacity <= 0)
    //             this.opacity = 1
    //     },16)
    // },
    // beforeDestroy() {
    //     clearInterval(this.timer)
    // },
    activated() {
        console.log("切换到news组件，news组件被激活了")
        this.timer = setInterval(()=> {
            this.opacity -= 0.01
            if (this.opacity <= 0)
                this.opacity = 1
        },16)
    },
    deactivated() {
        console.log("离开news组件，news组件失活了")
        clearInterval(this.timer)
    }
}
</script>

<style scoped>
</style>