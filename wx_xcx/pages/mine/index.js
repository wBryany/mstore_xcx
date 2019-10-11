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
    img_modify: '/assets/img/modify_icon.png',
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
  onShow: function () {
    console.log("onShow");
    this.getinfo();
  },
  //事件处理函数
  onLoad: function() {
   
  },
  onReady: function() {
    // console.log("onReady");
    // this.getinfo();

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
      url: app.url_config.HTTP_URL1 +'/store/v1/api/store_info',
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
  },
  loginout() {
    wx.setStorageSync('sessionid', "");
    wx.setStorageSync('userid', "");
    app.globalData.userId = "";
    wx.reLaunch({
      url: '../login/index'
    })
  },
  //分配记录
  to_fp_record(){
    wx.navigateTo({
      url: '../fp_record/index'
    });
  },
  //视光师
  to_sgs_page() {
    wx.navigateTo({
      url: '../sgs_page/index'
    });
  },
  //设备
  to_device_page() {
    wx.navigateTo({
      url: '../device/index'
    });
  },
  //修改记录
  to_modify_record_page() {
    wx.navigateTo({
      url: '../modify_record/index'
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

