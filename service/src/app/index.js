const Koa = require("koa")
const KoaBody = require("koa-body")

const homeRouter = require("../routers/home")
const userRouter = require("../routers/user")
const { checkToken } = require("../utils/token")

// 创建 koa 对象
const app = new Koa()

app.use(KoaBody())
app.use(homeRouter.routes())
app.use(userRouter.routes())

// 统一处理状态码
app.on("error", (num, ctx) => { ctx.status = num })

// 导出
module.exports = app