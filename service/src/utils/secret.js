const CryptoJS = require("crypto-js");
const { SECRET_KEY } = require("../config/default")

module.exports = {
  encryptFun: (str) => {
    const ciphertext = CryptoJS.AES.encrypt(str, SECRET_KEY).toString();
    return ciphertext
  },
  decryptFun: (str) => {
    const bytes = CryptoJS.AES.decrypt(str, SECRET_KEY);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText
  },
}
