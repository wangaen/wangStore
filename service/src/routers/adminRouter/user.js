// 导入 router
const Router = require("koa-router");
const { login, getUserInfo } = require("../../controller/common/commonController");
const { checkLoginInfo, checkUserInfoIsNull, checkUserIdIsNull } = require("../../middleware/common/commonMiddleware");
const { checkToken } = require("../../utils/token");

// 实例化对象,并添加前缀
const router = new Router({ prefix: "/user" });

// 登录
router.post("/login", checkUserInfoIsNull, checkLoginInfo, login);

// 获取用户信息
router.get("/getUserInfo", checkToken, checkUserIdIsNull, getUserInfo);

// 导出
module.exports = router;
