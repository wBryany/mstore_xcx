//index.js
//获取应用实例
const app = getApp()
var MD5Util = require("../../assets/md5.js")

Page({
  data: {

    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    src: '/assets/img/logo.png',
    img_fpjl: '/assets/img/fpjl.png',
    img_sgs: '/assets/img/sgs.png',
    img_device: '/assets/img/device.png',

    name: "",
    m_train: '0',
    d_train: '0',
    remain_times: '0',

    mydata: [{

        'num': 0,
        'border_style': 'nums_left'
      },
      {
        'num': 0,
        'border_style': 'nums_right'
      },


    ],
  },
  //事件处理函数
  onLoad: function() {
   
  },
  onReady: function() {
    console.log("onReady");
    this.getinfo();

  },

  getinfo() {

    let _this = this;
    console.log("getinfo");

    let u_id = wx.getStorageSync("userid");
    // console.log("u_id:" + u_id);
    // console.log("cookie:" + wx.getStorageSync("sessionid"));
    wx.showLoading({
      title: '请稍后...',
    })
    wx.request({
      url: 'http://app.uyu.com:7100/store/v1/api/store_info',
      method: 'GET',
      data: {
        se_userid: u_id,
        userid: u_id,
        os: 'xiaochengxu',
        app_version: '1.0.0'
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'cookie': wx.getStorageSync("sessionid")


      },
      success(res) {
        console.log(res.data);
        if (res.data.respcd == '0000') {

          _this.name = res.data.data.login_nickname
          _this.m_train = res.data.data.m_train;
          _this.d_train = res.data.data.d_train;

          _this.setData({
            name: res.data.data.login_nickname,
            m_train: res.data.data.m_train,
            d_train: res.data.data.d_train
          })

          _this.dealRemaintimes(res.data.data.remain_times);


        }
      },
    complete() {
        console.log("complete");
        wx.hideLoading();
      }
    });
  },
  dealRemaintimes(data) {
    let tem_data = [];
    if (data > 0) {
      let nums = "" + data;
      for (let i = 0; i < nums.length; i++) {

        if (i == 0) {
          tem_data[i] = {

            'num': nums[i],
            'border_style': 'nums_left'
          };
        } else if (i == nums.length - 1) {
          tem_data[i] = {

            'num': nums[i],
            'border_style': 'nums_right'

          };
        } else {
          tem_data[i] = {

            'num': nums[i],
            'border_style': 'nums'

          };
        }

      }


      this.setData({
        mydata: tem_data
      });
    } else {
      tem_data[0] = {

        'num': 0,
        'border_style': 'nums_left'
      };
      tem_data[1] = {

        'num': 0,
        'border_style': 'nums_right'

      };
    }
    this.setData({
      mydata: tem_data
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
})