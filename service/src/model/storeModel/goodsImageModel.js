const { DataTypes } = require("sequelize")
const sequelize = require("../../db/sequelize")

const GoodsImage = sequelize.define('GoodsImage', {
    goodsId: {
        type: DataTypes.UUID,
        allowNull: false,
        comment: "商品ID"
    },
    imgType: {
        type: DataTypes.STRING(10),
        allowNull: false,
        comment: "图片类型"
    },
    imgUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "商品图片url"
    },
});

// 同步创建表； force:true 当表存在时，删除后再创建
// sequelize.sync({ force: true })

module.exports = GoodsImage