// 导入 router
const Router = require("koa-router")
const { uploadImg, getGoodsLists, getGoodsInfo, getGoodsDtailsImage } = require("../../controller/appController/goodsController")
const { checkGoodsListQuery, checkGoodsIdIsNull } = require("../../middleware/appMiddleware/goodsMiddleware")
const { auth, checkIsAdmin } = require("../../middleware/auth/auth")

// 实例化对象,并添加前缀
const router = new Router({ prefix: "/goods" })

// 上传图片
router.post("/upload", auth, checkIsAdmin, uploadImg)

// 获取商品列表数据
router.get("/lists", checkGoodsListQuery, getGoodsLists)

// 获取单条商品信息
router.get("/info/:id", checkGoodsIdIsNull, getGoodsInfo)

// 获取单条商品的详情图片
router.get("/details/image/:id", checkGoodsIdIsNull, getGoodsDtailsImage)

// 导出
module.exports = router