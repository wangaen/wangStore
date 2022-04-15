const Koa = require("koa");
const KoaBody = require("koa-body");
const path = require("path");
const router = require("../routers");
// 开发文件夹
const KoaStatic = require("koa-static");

// 创建 koa 对象
const app = new Koa();

app.use(
  KoaBody({
    multipart: true, //开启上传文件
    parsedMethods: ["POST", "PUT", "PATCH", "DELETE", "GET"],
    formidable: {
      uploadDir: path.join(__dirname, "../upload"), // 上传文件路径
      keepExtensions: true, // 包含原始文件的扩展名
    },
  }),
);
// 解决跨域
// app.use(async (ctx, next) => {
//   // 必选。允许那个源地址可以发起请求
//   ctx.set("Access-Control-Allow-Origin", ctx.header.origin);
//   // 可选。是否允许浏览器发送Cookie，默认 false，false时可以直接删除
//   ctx.set("Access-Control-Allow-Credentials", true);
//   // 必选。用来列出浏览器的CORS请求会用到哪些HTTP方法
//   ctx.set("Access-Control-Request-Method", "PUT,POST,GET,DELETE,OPTIONS");
//   // 可选。XMLHttpRequest 对象的 getResponseHeader() 方法需额外多获取以下字段信息。
//   ctx.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, cc");
//   // "预检"请求用的请求方法是OPTIONS，表示这个请求是用来询问的
//   if (ctx.method === "OPTIONS") {
//     ctx.status = 204;
//     return;
//   }
//   await next();
// });
app.use(KoaStatic(path.join(__dirname, "../upload")));
app.use(router.routes()).use(router.allowedMethods());

// 统一处理状态码
app.on("error", (num, ctx) => {
  ctx.status = num;
});

// 导出
module.exports = app;
