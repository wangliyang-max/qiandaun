(function (window){
    var msg = 'baiDu'
    function doSomething (){
        console.log('doSomthing():' + msg.toUpperCase())
    }
    function doOtherthing (){
        console.log('doOtherthing():' + msg.toLowerCase())
    }

    window.myModule2 = {
        doSomething: doSomething,
        doOtherthing: doOtherthing
    }
})(window)
// 虽然不传递window也可以在定义域链上从内向外找到window
// 但是传递window参数有利于后面的压缩