const { DataTypes } = require("sequelize")
const sequelize = require("../../db/sequelize")
const GoodsModel = require("./goodsModel")

const Seller = sequelize.define('Seller', {
    sellerId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        unique: true,
        primaryKey: true,
        comment: "卖家id；唯一的"
    },
    name: {
        type: DataTypes.STRING(20),
        allowNull: false,
        comment: "卖家姓名"
    },
    gender: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 1,
        comment: "性别"
    },
    storeName: {
        type: DataTypes.STRING,
        allowNull: false,
        allowNull: false,
        comment: "店铺名称"
    },
});

// 同步创建表； force:true 当表存在时，删除后再创建
// sequelize.sync({ force: true })

module.exports = Seller