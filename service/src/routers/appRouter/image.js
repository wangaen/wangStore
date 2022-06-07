const fs = require("fs");
const path = require("path");
// 导入 router
const Router = require("koa-router");
// 实例化对象,并添加前缀
const router = new Router({ prefix: "/image" });

// const { APP_BASE_API, APP_PORT } = require("../../config/default")
// const { returnResBody } = require("../../utils/utils")
// const navigateModel = require("../../model/adminModel/appManage/navigateModel")

// // 获取小程序首页轮播图图片列表
// router.get("/swiper", (ctx, next) => {
//     try {
//         const imagePath = path.resolve(__dirname, "../../upload/admin/swiper")
//         const list = fs.readdirSync(imagePath).map(item => `${APP_BASE_API}:${APP_PORT}/admin/swiper/${item}`)
//         ctx.body = returnResBody(200, "", { list })
//     } catch (err) {
//         ctx.body = {
//             msg: "获取轮播图图片异常",
//             data: ""
//         }
//     }
// })

// // 获取小程序导航区域图片信息列表
// router.get("/navigate", async (ctx, next) => {
//     try {
//         const list = await navigateModel.findAll()
//         ctx.body = returnResBody(200, "", { list })
//     } catch (err) {
//         ctx.body = {
//             msg: "获取轮播图图片异常",
//             data: ""
//         }
//     }
// })

// 导出
module.exports = router;
