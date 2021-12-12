// 导入 router
const Router = require("koa-router")

// 实例化对象,并添加前缀
const router = new Router({ prefix: "/user" })

// 注册
router.post("/register", (ctx, next) => {
  ctx.body = "注册店铺成功"
})

// 登录
router.post("/login", (ctx, next) => {
  ctx.body = "店铺登录成功"
})


// 导出
module.exports = router