const { DataTypes } = require("sequelize")
const sequelize = require("../db/sequelize")

const User = sequelize.define('User', {
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: "用户名；唯一的"
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "密码"
  },
  department: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: "部门"
  },
  realName: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: "真实姓名"
  },
  phone: {
    type: DataTypes.CHAR(11),
    allowNull: true,
    unique: true,
    comment: "手机号码"
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0,
    comment: "是否管理员；0：不是（默认）；1：是"
  }
});

// 同步创建表； force:true 当表存在时，删除后再创建
// sequelize.sync({ force: true })

module.exports = User