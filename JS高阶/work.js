function fibonacci(number){
    // 1 1 2 3 5 8 13
    return number<=2 ? 1:fibonacci(number-1)+fibonacci(number-2)
}

console.log(this)
var onmessage = function (event) {
    var number = event.data
    console.log("分线程接收到主线程发送的数据：" + number)
    // 计算
    var result = fibonacci(number)
    postMessage(result)
    console.log("分线程向主线程返回的数据：" + result)
}