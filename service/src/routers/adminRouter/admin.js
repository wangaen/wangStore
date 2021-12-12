// 导入 router
const Router = require("koa-router")

// 实例化对象,并添加前缀
const router = new Router({ prefix: "/user" })

// 注册
router.post("/register", (ctx, next) => {
  ctx.body = "添加管理员成功"
})

// 登录
router.post("/login", (ctx, next) => {
  ctx.body = "管理员登录成功"
})



// 导出
module.exports = router