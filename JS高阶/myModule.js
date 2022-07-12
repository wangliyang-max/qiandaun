function myModule() {
    // 私有的数据，默认定义的都是private数据
    var msg = 'baiDu'
    function doSomething (){
        console.log('doSomthing():' + msg.toUpperCase())
    }
    function doOtherthing (){
        console.log('doOtherthing():' + msg.toLowerCase())
    }

    // 封装成对象就可以返回多个函数，到时候想调谁就调谁
    // 向外暴露对象，return了就相当于将该函数或属性变成public了的
    return {
        // 变量名：函数名
        doSomething: doSomething,
        doOtherthing: doOtherthing
    }
}