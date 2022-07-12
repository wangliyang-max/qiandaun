const express = require("express")

const router = express.Router()

// 路由级别-响应get请求
router.get("/", (req, res) => {
    var list =["111","222","333"]
    res.render("home", { list: list })
})

module.exports = router