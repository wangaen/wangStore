const GoodsModel = require("../../model/storeModel/goodsModel")
const GoodsImageModel = require("../../model/storeModel/goodsImageModel")
const SellerModel = require("../../model/storeModel/sellerModel")
const SkuModel = require("../../model/storeModel/skuModel")

class GoodsService {
    async goodsListsService(offset, pageSize, type, status) {
        const res = await GoodsModel.findAll({
            offset,
            limit: pageSize,
            order: [
                [type, status],//根据不同类型进行排序
            ]
        })
        return res
    };
    async goodsInfoService(id) {
        const res = await GoodsModel.findOne({
            where: {
                goodsId: id,
            },
            include: [
                { model: GoodsImageModel, as: "goodsImages", where: { goodsId: id, imgType: "list" }, required: false },
                { model: SkuModel, as: "skus", where: { goodsId: id }, required: false },
            ]
        })
        return res
    }
}

module.exports = new GoodsService()