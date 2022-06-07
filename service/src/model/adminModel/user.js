const { DataTypes } = require("sequelize");
const sequelize = require("../../db/sequelize");

const Admin = sequelize.define("Admin", {
  userId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    unique: true,
    primaryKey: true,
    comment: "userId",
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: "用户名；唯一的",
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "密码",
  },
  roleName: {
    type: DataTypes.STRING,
    comment: "角色名称",
  },
  roleType: {
    type: DataTypes.ENUM('0', '1', '2', '3', '4'),
    allowNull: false,
    default: '1',
    comment: "角色类型。0：超级管理员 1：系统管理员 2：小程序管理员 3：商家管理员 4：安全管理员",
  },
  realName: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: "真实姓名",
  },
  phone: {
    type: DataTypes.CHAR(11),
    allowNull: true,
    unique: true,
    comment: "手机号码",
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: "电子邮箱",
  },
});

// 同步创建表； force:true 当表存在时，删除后再创建
// sequelize.sync({ force: true });

module.exports = Admin;
