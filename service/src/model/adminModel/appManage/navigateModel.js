const { DataTypes } = require("sequelize")
const sequelize = require("../../../db/sequelize")

const Navigate = sequelize.define('Navigate', {
  name: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
    comment: "导航名；唯一的"
  },
  imgUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: "图片url；唯一的"
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0,
    comment: "是否开启导航；0：关闭（默认）；1：开启"
  },
  sortCode: {
    type: DataTypes.INTEGER(100),
    allowNull: true,
    unique: true,
    comment: "导航排序码"
  },
});

// 同步创建表； force:true 当表存在时，删除后再创建
// sequelize.sync({ force: true })

module.exports = Navigate