const defaultApi = "http://192.168.43.58:3080"
const requestContent = (url, data, method, header = {
  'content-type': 'application/json'
}, timeout = 10000) => {
  return new Promise((resolve) => {
    wx.request({
      url: defaultApi + url,
      data,
      header,
      method,
      timeout,
      success: (res) => {
        console.log(res);
        if (res.statusCode === 200) {
          resolve(res.data)
        } else {
          wx.showToast({
            title: "网络异常",
            icon: 'error',
            duration: 2000
          })
          resolve(res)
        }
      },
      fail: (err) => {
        if (err.errMsg === "request:fail timeout") {
          wx.showToast({
            title: '请求超时',
            icon: 'error',
            duration: 2000
          })
        } else {
          wx.showToast({
            title: '网络异常',
            icon: 'error',
            duration: 2000
          })
        }
        resolve(err)
      },
    })
  })
}
const request = {
  get: (url, params) => {
    return requestContent(url, params, "GET")
  },
  post: (url, params) => {
    return requestContent(url, params, "POST")
  },
  put: (url, params) => {
    return requestContent(url, params, "PUT")
  },
  delete: (url, params) => {
    return requestContent(url, params, "DELETE")
  },
  options: (url, params) => {
    return requestContent(url, params, "OPTIONS")
  },
}

export default request