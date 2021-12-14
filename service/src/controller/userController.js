const { createUserInfo } = require("../service/user")
const { returnResBody } = require("../utils/utils")
const { registerError, loginError } = require("../middleware/user/userConstant")
const { getUserInfo } = require("../service/user")
const { setToken } = require("../utils/token")
const http = require("http")

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
    let code = ctx.query.code
    var body_request = {
      hostname: 'https://api.weixin.qq.com',
      path: `/sns/jscode2session?appid=wx095ef69ad17b5a59&secret=4c76604d52f5e3b22fd832c61956ce4a&js_code=${code}&grant_type=authorization_code`,
    };
    http.request(body_request, (res) => {
      console.log(res);
    })
    ctx.body = "123"
  }
}

module.exports = new UserController()