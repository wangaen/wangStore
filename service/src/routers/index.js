// 路由自动加载
const Router = require("koa-router");
const router = new Router();
// 路由自动加载
const fs = require("fs");

fs.readdirSync(__dirname).forEach((file) => {
  if (file !== "index.js") {
    router.use(require("./" + file).routes());
  }
});

module.exports = router;
