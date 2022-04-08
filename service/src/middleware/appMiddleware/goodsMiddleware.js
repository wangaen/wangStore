const Goods = require("../../model/storeModel/goodsModel")
const GoodsImageModel = require("../../model/storeModel/goodsImageModel")
const { goodsListParams, goodsIdIsNull, getGoodsInfoError } = require("./goodsConstant")

module.exports = {
    // 检查获取商品列表接口参数格式
    checkGoodsListQuery: async (ctx, next) => {
        let { type, status } = ctx.query
        if (type !== "spread" && type !== "sales" && type !== "createdAt" && type !== "price" && type !== "num") {
            console.error("type 参数有误！")
            ctx.body = goodsListParams("type")
            ctx.app.emit("error", 422, ctx)
            return;
        }
        if (status !== "0" && status !== "1") {
            console.error("status 参数有误！")
            ctx.body = goodsListParams("status")
            ctx.app.emit("error", 422, ctx)
            return;
        }
        await next()
    },

    // 检查商品ID是否存在
    checkGoodsIdIsNull: async (ctx, next) => {
        try {
            const url = ctx.request.url;
            const arr = url.split("/")
            const id = arr[arr.length - 1];
            const goods = await Goods.findOne({ where: { goodsId: id } })
            if (goods === null) {
                console.error("该商品不存在")
                ctx.body = goodsIdIsNull
                ctx.app.emit("error", 400, ctx)
                return;
            }
            ctx.state.goodsId = id
            await next()
        } catch (err) {
            console.error("获取商品信息失败", err)
            ctx.body = getGoodsInfoError
            ctx.app.emit("error", 500, ctx)
        }
    },
}