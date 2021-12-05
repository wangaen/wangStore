const { returnResBody } = require("../../utils/utils")

module.exports = {
  userInfoIsNull: returnResBody("10001", "用户名或密码为空", ""),
  userIsExist: returnResBody("10002", "用户已存在", ""),
  getUserInfoError: returnResBody("10003", "获取用户信息失败", ""),
  registerError: returnResBody("10004", "注册失败", ""),
  userNotExist: returnResBody("10005", "用户不存在", ""),
  passwordError: returnResBody("10006", "密码不匹配", ""),
  loginError: returnResBody("10007", "登录失败", ""),
}