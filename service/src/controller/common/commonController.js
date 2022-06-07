const { returnResBody } = require("../../utils/utils");
const { setToken } = require("../../utils/token");
const { getAdminUserInfo } = require("../../service/adminService/user");
const { loginError } = require("../../middleware/common/commonConstant");

class commonController {
  // 登录
  async login(ctx, next) {
    try {
      const { type } = ctx.request.body;
      const { password, ...res } = type === 1 ? await getAdminUserInfo(ctx.request.body) : await getAdminUserInfo(ctx.request.body);
      const token = setToken(res);
      ctx.body = returnResBody(200, "登录成功", { ...res, token });
    } catch (err) {
      console.error("登录失败", err);
      ctx.body = loginError;
      ctx.app.emit("error", 500, ctx);
    }
  }
}

module.exports = new commonController();
