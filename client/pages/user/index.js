import request from "../../request/index"

Page({
  data: {},
  login: function () {
    wx.login({
      success(res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'http://192.168.43.58:3080/app/user/update_password',
            data: {
              code: res.code
            },
            method: 'GET'
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }
})