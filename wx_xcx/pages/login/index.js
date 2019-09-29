//index.js
//获取应用实例
const app = getApp()
var MD5Util = require("../../assets/md5.js")

Page({
  data: {
    mInputaccount: '',
    mInputpwd: '',
    // mInputaccount: '10001010001',
    // mInputpwd: '010001',
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    src: '/assets/img/logo.png',
    tip_src: '/assets/img/login_tip.png',
    listen_input_account: '',
    listen_input_pwd: '',
    login_btn_enable: false
  },

  onReady: function() {

    this.data.listen_input_account = this.data.mInputaccount;
    this.data.listen_input_pwd = this.data.mInputpwd;
    if (this.data.mInputaccount !== '' && this.data.mInputpwd !== '') {
      this.data.login_btn_enable = true;
    } else {
      this.data.login_btn_enable = false;
    }

    let _this = this;
    _this.setData({
      login_btn_enable: _this.data.login_btn_enable

    });
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
  
    if (wx.getStorageSync("sessionid") !== '' && wx.getStorageSync("userid")!==''){
      //session 不等于空
      app.globalData.userId = wx.getStorageSync("userid");
      wx.switchTab({
        url: '../mine/index',
      })
    }


  },
  input_accout_listen(e) {
    this.data.listen_input_account = e.detail.value;

    // console.log("listen_input_account::::" + this.data.listen_input_account);
    // console.log("listen_input_pwd::::" + this.data.listen_input_pwd);
    if (this.data.listen_input_account !== '' && this.data.listen_input_pwd !== '') {

      this.data.login_btn_enable = true;
    } else {
      this.data.login_btn_enable = false;
    }

    console.log("input_accout_listen::::" + this.data.login_btn_enable);
    let _this = this;
    _this.setData({
      login_btn_enable: _this.data.login_btn_enable

    });
  },

  input_pwd_listen(e) {
    this.data.listen_input_pwd = e.detail.value;
    console.log("listen_input_account::::" + this.data.listen_input_account);
    console.log("listen_input_pwd::::" + this.data.listen_input_pwd);
    if (this.data.listen_input_account !== '' && this.data.listen_input_pwd !== '') {

      this.data.login_btn_enable = true;
    } else {
      this.data.login_btn_enable = false;
    }
    console.log("login_btn_enable::::" + this.data.login_btn_enable);
    let _this = this;
    _this.setData({
      login_btn_enable: _this.data.login_btn_enable

    });
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
      url: app.url_config.HTTP_URL1 + '/store/v1/api/login',
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
          app.globalData.userId = res.data.data.userid;
          // app.globalData.openId = res.data.data.openid;
          //登录成功
          wx.switchTab({
            url: '../mine/index',
          })
          wx.showToast({
            title: '登录成功',
            icon: 'none'
          });

        } else if (res.data.respcd == '2002') {
          //session 过期跳转到登录页

          wx.setStorageSync('sessionid', '');
          wx.setStorageSync('userid', '');
          wx.showToast({
            title: '登录信息已失效,请重新登录',
            icon: 'none'
          })
          wx.reLaunch({
            url: '../login/index'
          })

        }
      },

      complete() {
        console.log("complete");
        wx.hideLoading();
      }
    });
  }
})