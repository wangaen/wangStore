const AdminUserModel = require("../../model/adminModel/user");

class AdminUserService {
  async createAdminUserInfo(userName, password) {
    const res = await UserModel.create({ userName, password });
    return res.dataValues;
  }
  async getAdminUserInfo({ userId, userName, phone, realName, email, roleType, roleName }) {
    const whereOpt = {};
    userId && Object.assign(whereOpt, { userId });
    userName && Object.assign(whereOpt, { userName });
    phone && Object.assign(whereOpt, { phone });
    realName && Object.assign(whereOpt, { realName });
    email && Object.assign(whereOpt, { email });
    roleType && Object.assign(whereOpt, { roleType });
    roleName && Object.assign(whereOpt, { roleName });
    const res = await AdminUserModel.findOne({
      attributes: ["userId", "userName", "email", "realName", "phone", "roleType", "roleName", "password"],
      where: whereOpt,
    });
    return res ? res.dataValues : null;
  }
}

module.exports = new AdminUserService();
