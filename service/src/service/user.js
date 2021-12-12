const UserModel = require("../model/userModel")

class UserService {
  async createUserInfo(userName, password) {
    const res = await UserModel.create({ userName, password })
    return res.dataValues
  };
  async getUserInfo({ id, userName, phone, isAdmin, realName, department }) {
    const whereOpt = {};
    id && Object.assign(whereOpt, { id })
    userName && Object.assign(whereOpt, { userName })
    phone && Object.assign(whereOpt, { phone })
    isAdmin && Object.assign(whereOpt, { isAdmin })
    realName && Object.assign(whereOpt, { realName })
    department && Object.assign(whereOpt, { department })
    const res = await UserModel.findOne({
      attributes: ['id', 'userName', 'department', 'realName', 'phone', 'isAdmin', 'password'],
      where: whereOpt
    })
    return res ? res.dataValues : null
  }
}

module.exports = new UserService()