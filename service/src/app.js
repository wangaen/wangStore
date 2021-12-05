const app = require("./app/index")

const { APP_PORT, APP_BASE_API } = require("./config/default")

// 监听 3000 端口
app.listen(APP_PORT, () => {
  console.log(`服务器已开启: ${APP_BASE_API}:${APP_PORT}`);
})