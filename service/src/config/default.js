// dotenv 会把 .env 文件里面的键值对 添加 到 环境变量 process.env 中
const dotenv = require("dotenv")
const path = require('path')

// 添加配置
dotenv.config({ path: path.resolve(__dirname, '../../.env') })

// 导入环境变量
module.exports = process.env

