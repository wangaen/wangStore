// 导入 router
const Router = require("koa-router")

// 实例化对象,并添加前缀
const router = new Router({ prefix: "/home" })

// 路由编写区域
router.get("/list", (ctx, next) => {
  ctx.body = "home"
})

// 导入
module.exports = router