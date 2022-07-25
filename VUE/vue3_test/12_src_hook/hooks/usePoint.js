import {onBeforeUnmount, onMounted, reactive} from 'vue'
export default function () {
        // 实现鼠标打点的数据
        let point = reactive({
            x: 0,
            y:0
        })

        // 实现鼠标打点的函数
        function savePoint(event){
            point.x = event.pageX
            point.y = event.pageY
        }

        // 实现鼠标打点的相关方法
         // 哪个组件调用，onMounted就是指的是那个组件的挂载
        onMounted(() => {
            console.log("---onMounted---")
            // 监视整个页面所以给windown绑定
            window.addEventListener('click', savePoint)
        })

        onBeforeUnmount(() => {
            window.removeEventListener('click', savePoint)
        })
    
    return point

}