//index.js
//获取应用实例
const app = getApp()
var MD5Util = require("../../assets/md5.js")

Page({
  data: {
    mInputaccount: '10001010001',
    mInputpwd: '010001',
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    src: '/assets/img/logo.png'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  login: function(e) {
    wx.showLoading({
      title: '请稍后...',
      mask: true
    })
    // 10001010001
    //010001
    let account = e.detail.value.account;
    let password = e.detail.value.password;
    console.log("login");
    console.log(password);
    console.log(MD5Util.hexMD5(password));
    wx.request({
      url: 'http://app.uyu.com:7100/store/v1/api/login',
      method: 'POST',
      data: {
        mobile: account,
        old_password: password,
        new_password: MD5Util.hexMD5(password)
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'

      },
      success(res) {
        console.log(res.data);

        if (res.data.respcd == '0000') {

          console.log("header:" + res.header["Set-Cookie"]);
          wx.setStorageSync('sessionid', res.header["Set-Cookie"]);
          wx.setStorageSync('userid', res.data.data.userid);

          //登录成功
          wx.switchTab({
            url: '../mine/index',
          })
          wx.showToast({
            title: '登录成功',
            icon: 'none'
          });

        }
      },

      complete() {
        console.log("complete");
        wx.hideLoading();
      }
    });
  }
})