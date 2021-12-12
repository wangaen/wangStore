const { returnResBody } = require("../../utils/utils")

module.exports = {
  tokenIsNull: returnResBody("10101", "token 为空", ""),
  tokenIsExpired: returnResBody("10102", "token 已过期", ""),
  tokenIsInvalid: returnResBody("10103", "无效的 token", ""),
  notUploadImgPermission: returnResBody("10104", "不是管理员，没权限上传图片", ""),
}