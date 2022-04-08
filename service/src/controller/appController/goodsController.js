const GoodsModel = require("../../model/storeModel/goodsModel")
const GoodsImageModel = require("../../model/storeModel/goodsImageModel")
const SellerModel = require("../../model/storeModel/sellerModel")
const SkuModel = require("../../model/storeModel/skuModel")

const { isStringToNumber, returnResBody } = require("../../utils/utils")
const { getGoodsListError, getStoreInfoError, getGoodsAllInfoError, goodsDetailsImageError } = require("../../middleware/appMiddleware/goodsConstant")
const { goodsListsService, goodsInfoService } = require("../../service/storeService/goodsService")
const { sellerInfoService } = require("../../service/storeService/sellerService")
const { detailsImageService } = require("../../service/storeService/goodsImageService")

class GoodsController {
  // 上传图片
  async uploadImg(ctx, next) {
    // const goodsList = GoodsModel.findAll()
    // console.log("313", goodsList);
    // ctx.body = "" + goodsList
    // try {
    //   const { userName, password } = ctx.request.body
    //   const res = await createUserInfo(userName, password)
    //   ctx.body = returnResBody(200, "注册成功", { userName: res.userName })
    // } catch (err) {
    //   console.error("用户注册的信息写入数据库失败", err);
    //   ctx.body = registerError
    //   ctx.app.emit("error", 500, ctx)7v 
    // }
  }

  /**
   * 获取商品列表数据
   * 
   * type： 
   * |   spread ： 广告投放值
   * |   sales : 销量
   * |   createdAt ： 添加日期
   * |   price : 价格
   * |   num : 库存
   * status：
   * |   1 : 升序
   * |   0 ：降序
   */
  async getGoodsLists(ctx, next) {
    try {
      let { pageIndex, pageSize, type, status } = ctx.query
      pageIndex = isStringToNumber(pageIndex) ? +pageIndex : 1
      pageSize = isStringToNumber(pageSize) ? +pageSize : 10
      status = status === "1" ? "ASC" : "DESC"
      const offset = (pageIndex - 1) * pageSize
      const goodsInfo = await goodsListsService(offset, pageSize, type, status)
      ctx.body = returnResBody(200, "查询成功", goodsInfo)
    } catch (err) {
      console.error("获取商品列表数据失败", err);
      ctx.body = getGoodsListError
      ctx.app.emit("error", 500, ctx)
    }
  }

  /**
   * 获取单条商品信息
   */
  async getGoodsInfo(ctx, next) {
    try {
      const id = ctx.state.goodsId
      const goods = await goodsInfoService(id)
      const sellerInfo = await sellerInfoService(goods.sellerId)
      ctx.body = returnResBody(200, "查询成功", {
        ...goods.dataValues,
        ...sellerInfo?.dataValues
      })
    } catch (err) {
      console.error("查询商品详细信息失败", err);
      ctx.body = getGoodsAllInfoError;
      ctx.app.emit("error", 500, ctx)
    }
  }

  /**
   * 获取单条商品的详情图片
   */
  async getGoodsDtailsImage(ctx, next) {
    try {
      const id = ctx.state.goodsId
      const images = await detailsImageService(id, "details")
      let list = images.map(item => item.imgUrl)
      ctx.body = returnResBody(200, "查询成功", list)
    } catch (err) {
      console.error("查询商品详情图片失败", err);
      ctx.body = goodsDetailsImageError;
      ctx.app.emit("error", 500, ctx)
    }
  }
}

module.exports = new GoodsController()