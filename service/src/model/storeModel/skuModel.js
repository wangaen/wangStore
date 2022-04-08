const { DataTypes } = require("sequelize")
const sequelize = require("../../db/sequelize")

const Sku = sequelize.define('Sku', {
    skuId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        unique: true,
        primaryKey: true,
        comment: "skuId；唯一的"
    },
    goodsId: {
        type: DataTypes.UUID,
        allowNull: false,
        comment: "商品ID"
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: "sku名称"
    },
    skuImg: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "sku图片url"
    },
    num: {
        type: DataTypes.INTEGER,
        allowNull: false,
        default: 0,
        comment: "库存"
    },
    sales: {
        type: DataTypes.INTEGER,
        allowNull: false,
        default: 0,
        comment: "销量"
    },
});

// 同步创建表； force:true 当表存在时，删除后再创建
// sequelize.sync({ force: true })

module.exports = Sku