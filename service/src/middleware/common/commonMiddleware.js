const { userInfoIsNull, userNotExist, passwordError, getUserInfoError, userIdIsNull } = require("./commonConstant");
const { getAdminUserInfo } = require("../../service/adminService/user");
const { decryptFun } = require("../../utils/secret");

module.exports = {
  // 检查用户名、密码、type是否为空或传值异常
  checkUserInfoIsNull: async (ctx, next) => {
    const { userName, password, type } = ctx.request.body;
    if (!userName || !password || !type || (type !== 1 && type !== 2)) {
      ctx.body = userInfoIsNull;
      return;
    }
    await next();
  },
  // 检查登录信息
  checkLoginInfo: async (ctx, next) => {
    try {
      const { type } = ctx.request.body;
      const res = type === 1 ? await getAdminUserInfo(ctx.request.body) : await getAdminUserInfo(ctx.request.body);
      //   const dbPass = res && decryptFun(res.password);
      const dbPass = res && res.password;
      if (!res) {
        console.error("用户不存在", { userName: ctx.request.body.userName });
        ctx.body = userNotExist;
        return;
      } else if (ctx.request.body.password !== dbPass) {
        console.error("密码不匹配");
        ctx.body = passwordError;
        return;
      }
      await next();
    } catch (err) {
      console.error("获取用户信息失败", err);
      ctx.body = getUserInfoError;
      ctx.app.emit("error", 500, ctx);
    }
  },
  // 检查用户id是否为空
  checkUserIdIsNull: async (ctx, next) => {
    const { userId } = ctx.query;
    if (!userId) {
      ctx.body = userIdIsNull;
      return;
    }
    const res = await getAdminUserInfo({ userId });
    if (!res) {
      console.error("用户不存在", { userName: ctx.request.body.userName });
      ctx.body = userNotExist;
      return;
    }
    await next();
  },
};
