const express = require("express")
const app = express()

app.use(async (req, res, next) => {
    console.log("111111")
    await next()
    console.log("444444")
    res.send("hello world")
})

app.use(async (req, res, next) => {

    console.log("22222")
     // 异步操作
    await delay(1000)
    console.log("33333")
})

function delay(time) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve,time)
    })
}

app.listen(3000)