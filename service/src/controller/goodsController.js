const { createUserInfo } = require("../service/user")
const { returnResBody } = require("../utils/utils")
const { registerError, loginError } = require("../middleware/user/userConstant")
const { getUserInfo } = require("../service/user")
const { setToken } = require("../utils/token")

class GoodsController {
  // 上传图片
  async uploadImg(ctx, next) {
    console.log(ctx.request.files.file);
    ctx.body = "上传成功"
    // try {
    //   const { userName, password } = ctx.request.body
    //   const res = await createUserInfo(userName, password)
    //   ctx.body = returnResBody(200, "注册成功", { userName: res.userName })
    // } catch (err) {
    //   console.error("用户注册的信息写入数据库失败", err);
    //   ctx.body = registerError
    //   ctx.app.emit("error", 500, ctx)
    // }
  }
}

module.exports = new GoodsController()