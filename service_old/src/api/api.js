let api = ""
if (process.env.NODE_ENV === "development") {
  api = 'http://192.168.43.58:3000/'
} else {
  api = 'http://8.129.208.48:3000/'
}
module.exports = {
  api
}
