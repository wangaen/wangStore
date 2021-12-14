// 导入 router
const Router = require("koa-router")
const { uploadImg } = require("../../controller/goodsController")
const { login, register, updatePass } = require("../../controller/userController")
const { auth, checkIsAdmin } = require("../../middleware/auth/auth")

// 实例化对象,并添加前缀
const router = new Router({ prefix: "/goods" })

// 上传图片
router.post("/upload", auth, checkIsAdmin, uploadImg)


// 导出
module.exports = router