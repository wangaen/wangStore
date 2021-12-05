// 导入 router
const Router = require("koa-router")
const { login, register, updatePass } = require("../controller/user")
const { checkUserInfoIsNull, checkUserIsExist, encryptPassword, checkLoginInfo } = require("../middleware/user/user_middleware")

// 实例化对象,并添加前缀
const router = new Router({ prefix: "/user" })

// 注册
router.post("/register", checkUserInfoIsNull, checkUserIsExist, encryptPassword, register)

// 登录
router.post("/login", checkUserInfoIsNull, checkLoginInfo, login)

// 修改密码
router.patch("/update_password", updatePass)


// 导出
module.exports = router