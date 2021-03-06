const jwt = require("jsonwebtoken")
const { SECRET_KEY } = require("../../config/default")
const { tokenIsNull, tokenIsExpired, tokenIsInvalid, notUploadImgPermission } = require("./authConstant")

const auth = async (ctx, next) => {
  const { authorization } = ctx.request.header
  if (!authorization) {
    console.error("token 为空");
    ctx.app.emit("error", 401, ctx)
    ctx.body = tokenIsNull
    return
  }
  try {
    const info = jwt.verify(authorization.split(' ')[1], SECRET_KEY);
    ctx.state.info = info
    await next()
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      console.error("token 已过期", JSON.stringify(err));
      ctx.app.emit("error", 401, ctx)
      ctx.body = tokenIsExpired
      return
    } else if (err.name === "JsonWebTokenError") {
      console.error("无效的 token", JSON.stringify(err));
      ctx.app.emit("error", 401, ctx)
      ctx.body = tokenIsInvalid
      return
    } else {
      console.error("token 存在异常", JSON.stringify(err));
      ctx.app.emit("error", 401, ctx)
      ctx.body = { err }
      return
    }
  }

}

const checkIsAdmin = async (ctx, next) => {
  const { isAdmin } = ctx.state.info;
  if (!isAdmin) {
    console.error("不是管理员，没权限上传图片");
    ctx.app.emit("error", 500, ctx)
    ctx.body = notUploadImgPermission
    return
  }
  await next()
}
module.exports = { auth, checkIsAdmin }