const { MYSQL_HOST, MYSQL_USER, MYSQL_PWD, MYSQL_DB } = require("../config/default");

const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
  host: MYSQL_HOST,
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("数据库连接成功");
  })
  .catch((err) => {
    console.log("数据库连接失败", JSON.stringify(err));
  });

module.exports = sequelize;
