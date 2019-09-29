//index.js
//获取应用实例
let currentApp = getApp()

Page({
  data: {

    src: '/assets/img/logo.png',
    xgcf_src: '/assets/img/xgcf.png',
    xlbg_src: '/assets/img/xlbg.png',
    jcbg_src: '/assets/img/jcbg.png',
    cfjl_src: '/assets/img/cfjl.png',
    ckgl_src: '/assets/img/ckgl.png',
    userInfo: {},


  },

  onReady: function() {


  },
  onLoad: function(option) {

    console.log(option.info);

    this.setData({
      userInfo: JSON.parse(option.info)
    })
    
    console.log("@@@@@@@@@@@@@@@@@@@@@@@")
    console.log(this.data.userInfo);
    wx.setNavigationBarTitle({
      title: this.data.userInfo.nick_name,
    })
    currentApp.globalData.selectedUserInfo = this.data.userInfo;

  },
  goCheckReport(){
  
    wx.navigateTo({
      url: '/pages/inspect/inspect',
    })
  },
  goAddPrescriprion: function() {
    wx.navigateTo({
      url: '/pages/add_prescription/index',
    })
  },
  goAlterRecord: function() {



    let _this=this;
    wx.navigateTo({
      url: '/pages/alter_record/index?userinfo=' + JSON.stringify(_this.data.userInfo),
    })
  },
  goTrainReport: function() {
    let _this = this;
    wx.navigateTo({
      url: '/pages/prescription_record/index?userid=' + _this.data.userInfo.userid,
    })
  },
  goAssignTrainTimes: function() {
    wx.navigateTo({
      url: '/pages/assign_train_time/index',
    })
  },
  tosearch(e) {
    let _this = this;
    console.log("tosearch");

    wx.onLoad;
    let u_id = wx.getStorageSync("userid");
    wx.request({
      url: app.url_config.HTTP_URL1 +'/store/v1/api/load_consumer_detail',
      method: 'POST',
      data: {
        mobile: this.searchtext,
        se_userid: u_id,
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
          _this.mydata = res.data.data.info;

          _this.setData({


            mydata: res.data.data.info
          })



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
      }

    });
  },

  getList() {
    let _this = this;
    console.log("getList");

    let u_id = wx.getStorageSync("userid");
    // console.log("u_id:" + u_id);
    // console.log("cookie:" + wx.getStorageSync("sessionid"));
    wx.request({
      url: app.url_config.HTTP_URL1 +'/store/v1/api/store_consumer_list',
      method: 'GET',
      data: {
        se_userid: u_id,
        store_userid: u_id,
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

          _this.mydata = res.data.data.info;

          _this.setData({


            mydata: res.data.data.info
          })




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
      }

    });
  }
})