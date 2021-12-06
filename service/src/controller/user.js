const { createUserInfo } = require("../service/user")
const { returnResBody } = require("../utils/utils")
const { registerError, loginError } = require("../middleware/user/user_constant")
const { getUserInfo } = require("../service/user")
const { setToken } = require("../utils/token")

class UserController {
  // 注册
  async register(ctx, next) {
    try {
      const { userName, password } = ctx.request.body
      const res = await createUserInfo(userName, password)
      ctx.body = returnResBody(200, "注册成功", { userName: res.userName })
    } catch (err) {
      console.error("用户注册的信息写入数据库失败", err);
      ctx.body = registerError
      ctx.app.emit("error", 500, ctx)
    }
  }

  // 登录
  async login(ctx, next) {
    try {
      const { password, ...res } = await getUserInfo(ctx.request.body)
      const token = setToken(res)
      ctx.body = returnResBody(200, "登录成功", { ...res, token })
    } catch (err) {
      console.error("登录失败", err);
      ctx.body = loginError
      ctx.app.emit("error", 500, ctx)
    }
  }

  // 修改密码
  async updatePass(ctx, next) {
    console.log(ctx.state.info, ctx.request.body);
    ctx.body = returnResBody(200, "修改密码成功")
  }
}

module.exports = new UserController()