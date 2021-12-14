const Koa = require("koa")
const KoaBody = require("koa-body")
const path = require("path")
const router = require("../routers")
const KoaStatic = require("koa-static")

// 创建 koa 对象
const app = new Koa()

app.use(KoaBody({
  multipart: true, //开启上传文件
  parsedMethods: ['POST', 'PUT', 'PATCH', 'DELETE', 'GET'],
  formidable: {
    uploadDir: path.join(__dirname, "../upload"), // 上传文件路径
    keepExtensions: true, // 包含原始文件的扩展名
  }
}))
app.use(KoaStatic(path.join(__dirname, "../upload")))
app.use(router.routes()).use(router.allowedMethods())

// 统一处理状态码
app.on("error", (num, ctx) => { ctx.status = num })

// 导出
module.exports = app