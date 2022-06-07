// 导入 router
const Router = require("koa-router");
const { login } = require("../../controller/common/commonController");
const { checkLoginInfo, checkUserInfoIsNull } = require("../../middleware/common/commonMiddleware");

// 实例化对象,并添加前缀
const router = new Router({ prefix: "/user" });

// 登录
router.post("/login", checkUserInfoIsNull, checkLoginInfo, login);

// 导出
module.exports = router;
