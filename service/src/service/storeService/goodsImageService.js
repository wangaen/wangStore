const GoodsModel = require("../../model/storeModel/goodsModel")
const GoodsImageModel = require("../../model/storeModel/goodsImageModel")
const SellerModel = require("../../model/storeModel/sellerModel")


class GoodsImageService {
    async detailsImageService(id, type) {
        const res = await GoodsImageModel.findAll({
            where: {
                goodsId: id,
                imgType: type
            },
        })
        return res
    }
}

module.exports = new GoodsImageService()