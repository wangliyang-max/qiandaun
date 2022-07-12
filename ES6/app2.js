// 静态引入
// import * as m1 from "./hello.js"

const btn = document.getElementById('btn')
btn.onclick = function (){
    import('./hello.js').then(module => {
        module.hello()
    })
}