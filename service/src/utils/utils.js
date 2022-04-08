module.exports = {
  // 响应返回体
  returnResBody: (code, msg, data) => {
    return {
      code, msg, data
    }
  },

  // 判断是否是整形字符串
  isStringToNumber: (strNum) => {
    if (!strNum) return false;
    if (typeof strNum === "number" || typeof strNum === "string") {
      let str = strNum.toString()
      if (isNaN(str)) return false
      return parseInt(str) === parseFloat(str)
    } else {
      return false
    }
  }
}