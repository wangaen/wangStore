const { userInfoIsNull, userIsExist, getUserInfoError, userNotExist, passwordError } = require("./userConstant")
const { getUserInfo } = require("../../service/user")
const { encryptFun, decryptFun } = require("../../utils/secret")
const { getToken } = require("../../utils/token")

module.exports = {
  // 检查用户名或密码是否为空
  checkUserInfoIsNull: async (ctx, next) => {
    const { userName, password } = ctx.request.body;
    if (!userName || !password) {
      ctx.body = userInfoIsNull
      ctx.app.emit("error", 400, ctx)
      return;
    }
    await next()
  },
  // 检查用户是否存在
  checkUserIsExist: async (ctx, next) => {
    try {
      const res = await getUserInfo(ctx.request.body);
      if (res) {
        console.error("用户已存在", { userName: ctx.request.body.userName })
        ctx.body = userIsExist
        ctx.app.emit("error", 409, ctx)
        return;
      }
      await next();
    } catch (err) {
      console.error("获取用户信息失败", err)
      ctx.body = getUserInfoError
      ctx.app.emit("error", 500, ctx)
    }
  },
  // 密码加密
  encryptPassword: async (ctx, next) => {
    ctx.request.body.password = encryptFun(ctx.request.body.password)
    await next()
  },
  // 检查登录信息
  checkLoginInfo: async (ctx, next) => {
    try {
      const res = await getUserInfo(ctx.request.body);
      const dbPass = res && decryptFun(res.password)
      if (!res) {
        console.error("用户不存在", { userName: ctx.request.body.userName })
        ctx.body = userNotExist
        ctx.app.emit("error", 409, ctx)
        return;
      } else if (ctx.request.body.password !== dbPass) {
        console.error("密码不匹配")
        ctx.body = passwordError
        ctx.app.emit("error", 409, ctx)
        return;
      }
      await next();
    } catch (err) {
      console.error("获取用户信息失败", err)
      ctx.body = getUserInfoError
      ctx.app.emit("error", 500, ctx)
    }
  },
  checkTokenInfo: async (ctx, next) => {
    const { authorization } = ctx.request.header
    console.log(getToken(authorization));
    await next()
  }
}