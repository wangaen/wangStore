const { returnResBody } = require("../../utils/utils");

module.exports = {
  userInfoIsNull: returnResBody("c10001", "用户名、密码、type为空或存在不正确传值", ""),
  userNotExist: returnResBody("c10002", "用户不存在", ""),
  passwordError: returnResBody("c10003", "密码不匹配", ""),
  getUserInfoError: returnResBody("c10004", "获取用户信息失败", ""),
  loginError: returnResBody("c10005", "登录失败", ""),
};
