const GoodsModel = require("../../model/storeModel/goodsModel")
const SellerModel = require("../../model/storeModel/sellerModel")


class SellerService {
    async sellerInfoService(id, attr) {
        const res = await SellerModel.findOne({
            where: {
                sellerId: id,
            },
            attributes: attr,
        })
        return res
    }
}

module.exports = new SellerService()