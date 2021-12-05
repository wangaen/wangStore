const jwt = require('jsonwebtoken');
const { CITEXT } = require('sequelize/dist');
const { SECRET_KEY } = require("../config/default")

//生成token
const setToken = (userInfo) => {
  const token = jwt.sign(userInfo, SECRET_KEY, { expiresIn: '10h' });
  return token
};

//获取token
const getToken = (token) => {
  return new Promise((resolve, reject) => {
    try {
      let info = jwt.verify(token.split(' ')[1], SECRET_KEY);
      resolve(info);
    } catch (err) {
      reject(err)
    }
  })
}

const checkToken = (ctx, next) => {
  const { authorization } = ctx.request.header
  if (authorization == undefined) {
    return next();
  } else {
    getToken(authorization).then(async (data) => {
      ctx.request.info = data;
      await next();
    }).catch(async (err) => {
      await next();
    })
  }
}

module.exports = {
  setToken, getToken, checkToken
}