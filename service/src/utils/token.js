const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config/default");
const { tokenIsExpired, tokenIsInvalid } = require("../middleware/auth/authConstant");
const { returnResBody } = require("./utils");
const dayjs = require("dayjs");

//生成token
const setToken = (userInfo) => {
  const token = jwt.sign(userInfo, SECRET_KEY, { expiresIn: "30s" });
  return token;
};

//获取token
const getToken = (token) => {
  return new Promise((resolve, reject) => {
    try {
      let info = jwt.verify(token.split(" ")[1], SECRET_KEY);
      resolve(info);
    } catch (err) {
      reject(err);
    }
  });
};

// 检查token
const checkToken = (ctx, next) => {
  const { authorization } = ctx.request.header;
  if (authorization == undefined) {
    console.error("token为空");
    ctx.body = returnResBody("401", "token为空", "");
    ctx.app.emit("error", 401, ctx);
    return;
  } else {
    getToken(authorization)
      .then(async (data) => {
        ctx.request.info = data;
        await next();
      })
      .catch(async (err) => {
        if (err.name === "TokenExpiredError") {
          console.error("token 已过期", JSON.stringify(err));
          ctx.app.emit("error", 401, ctx);
          const time = dayjs(err.expiredAt).format("YYYY-MM-DD HH:mm:ss");
          ctx.body = returnResBody("32424", `token已过期，过期时间为：${time}`, "");
          return;
        } else if (err.name === "JsonWebTokenError") {
          console.error("无效的 token", JSON.stringify(err));
          ctx.app.emit("error", 401, ctx);
          ctx.body = tokenIsInvalid;
          return;
        } else {
          console.error("token 存在异常", JSON.stringify(err));
          ctx.app.emit("error", 401, ctx);
          ctx.body = returnResBody("3213", "token 存在异常", "");
          return;
        }
      });
  }
};

module.exports = {
  setToken,
  getToken,
  checkToken,
};
