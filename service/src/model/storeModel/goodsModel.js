const { DataTypes, Deferrable } = require("sequelize")
const sequelize = require("../../db/sequelize")

const GoodsImageModel = require("./goodsImageModel")
const SkuModel = require("./skuModel")
const SellerModel = require("./sellerModel")

const Goods = sequelize.define('Goods', {
    goodsId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        unique: true,
        primaryKey: true,
        comment: "商品id；唯一的"
    },
    sellerId: {
        type: DataTypes.UUID,
        references: {
            // 这是对另一个模型的参考
            model: SellerModel,
            // 这是引用模型的列名
            key: 'sellerId',
            // 使用 PostgreSQL,可以通过 Deferrable 类型声明何时检查外键约束.
            deferrable: Deferrable.INITIALLY_IMMEDIATE
            // 参数:
            // - `Deferrable.INITIALLY_IMMEDIATE` - 立即检查外键约束
            // - `Deferrable.INITIALLY_DEFERRED` - 将所有外键约束检查推迟到事务结束
            // - `Deferrable.NOT` - 完全不推迟检查(默认) - 这将不允许你动态更改事务中的规则
        },
        comment: "卖家ID"
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "标题"
    },
    price: {
        type: DataTypes.FLOAT(5),
        comment: "价格"
    },
    orginalPrice: {
        type: DataTypes.STRING(20),
        comment: "原价"
    },
    num: {
        type: DataTypes.INTEGER,
        allowNull: false,
        default: 0,
        comment: "库存"
    },
    detailUrl: {
        type: DataTypes.STRING(200),
        allowNull: false,
        comment: "商品链接"
    },
    picUrl: {
        type: DataTypes.STRING(200),
        allowNull: false,
        comment: "商品主图"
    },
    brand: {
        type: DataTypes.STRING(10),
        unique: true,
        comment: "品牌"
    },
    location: {
        type: DataTypes.STRING(30),
        allowNull: false,
        comment: "发货地"
    },
    postFee: {
        type: DataTypes.FLOAT(5),
        allowNull: false,
        default: 0,
        comment: "物流费用"
    },
    sales: {
        type: DataTypes.INTEGER,
        allowNull: false,
        default: 0,
        comment: "销量"
    },
    spread: {
        type: DataTypes.FLOAT(5),
        allowNull: false,
        default: 0,
        comment: "广告推广值"
    },
}, {
    paranoid: true,
    // 如果要为 deletedAt 列指定自定义名称
    deletedAt: 'delistTime'
});

// 一个商品多个图片, 以goodsId关联，输出别名：goodsImages
Goods.hasMany(GoodsImageModel, { foreignKey: 'goodsId', targetKey: 'goodsId', as: "goodsImages" })
// // 一个商品多个sku
Goods.hasMany(SkuModel, { foreignKey: 'goodsId', targetKey: 'goodsId', as: "skus" })
// 一个店铺多个商品
SellerModel.hasMany(Goods, { foreignKey: 'sellerId', targetKey: 'sellerId', as: "sellerInfo" })

// 同步创建表； force:true 当表存在时，删除后再创建
// sequelize.sync({ force: true })

module.exports = Goods