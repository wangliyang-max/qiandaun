const express = require("express")
const fs = require("fs")
const mime = require("mime")
const path =require("path")

const router = express.Router()

// 路由级别-响应get请求
router.get("/", (req, res) => {
    res.writeHead(200, {  "Content-Type": "text/html;charset=utf-8" })
    res.write(fs.readFileSync("C:/Users/86198/VScode/qianDuan/Node/express/public/login.html"), "utf-8")
    res.end()
})

module.exports = router