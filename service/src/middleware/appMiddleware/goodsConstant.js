const { returnResBody } = require("../../utils/utils")
module.exports = {
    goodsListParams: (type) => { return returnResBody("20000", `${type} 参数有误！`, "") },
    goodsIdIsNull: returnResBody("20001", "该商品不存在", ""),
    getGoodsInfoError: returnResBody("20002", "查询商品信息失败", ""),
    getGoodsAllInfoError: returnResBody("20003", "查询商品详细信息失败", ""),
    getGoodsListError: returnResBody("20004", "查询商品列表数据失败", ""),
    getStoreInfoError: returnResBody("20005", "查询店铺信息失败", ""),
    goodsDetailsImageError: returnResBody("20006", "查询商品详情图片失败", "")
}