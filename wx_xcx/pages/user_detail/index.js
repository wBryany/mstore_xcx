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

    let _this = this;
    this.setData({
      userInfo: JSON.parse(option.info)
    })

    console.log("@@@@@@@@@@@@@@@@@@@@@@@")
    console.log(this.data.userInfo);
    wx.setNavigationBarTitle({
      title: this.data.userInfo.nick_name,
    })
    currentApp.globalData.selectedUserInfo = this.data.userInfo;

    this.setData({
      mydata: _this.data.userInfo
    });


  },
  goCheckReport() {

    wx.navigateTo({
      url: '/pages/inspect/inspect',
    })
  },
  goAddPrescriprion: function() {
    // wx.navigateTo({
    //   url: '/pages/add_prescription/index',
    // })

    this.getPrescriprionInfo();


  },
  getPrescriprionInfo() {


    let _this = this;
    console.log("getPrescriprionInfo");

    let u_id = wx.getStorageSync("userid");
    // console.log("u_id:" + u_id);
    // console.log("cookie:" + wx.getStorageSync("sessionid"));
    wx.showLoading({
      title: '请稍后...',
      mask: true
    })
    wx.request({
      url: currentApp.url_config.HTTP_URL1 + '/store/v2/api/presc_info',
      method: 'GET',
      data: {
        userid: _this.data.userInfo.userid,
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

          if (res.data.data.obstacle_id == 0 && res.data.data.presc_items.length == 0) {

            //没有存障碍obstacle_id和没有处方的直接跳到  障碍类型选择，否则跳到 处方列表修改
            wx.navigateTo({
              url: '/pages/add_prescription/index',
            })
          }else{
            wx.navigateTo({
              url: '/pages/prescription_detail/index?type=2&obstacle_id=' + res.data.data.obstacle_id+'&presc_info=' + JSON.stringify(res.data.data),
            })

          }

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

        } else {
          wx.showToast({
            title: res.data.resperr,
            icon: 'none'
          })

        }
      },
      complete() {
        console.log("complete");
        wx.hideLoading();
      }
    });

  },
  goAlterRecord: function() {



    let _this = this;
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
      url: '/pages/assign_train_time/index?userinfo=' + JSON.stringify(this.data.userInfo),
    })
  },

  scanHandle: function() {
    let _this = this;
    wx.scanCode({
      success: (res) => {
        console.log(res);
        let newStr = res.result.replace('http://app.uyu.com/v1/wx/t/', 'https://api.uyu.com/v1/wp/t/');
        //线上
        // let newStr = res.result.replace('http://weixin.zmuchi.cn/v1/wx/t/','http://weiapp.zmuchi.cn/v1/wp/t/');
        //测试
        console.log(newStr);
        wx.request({
          url: newStr, //
          data: {
            userid: _this.data.userInfo.userid
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: function(res) {
            // console.log(res.data);
            if (res.data.respcd == '0000') {
              wx.showToast({
                title: '开始训练',
                icon: 'success',
                duration: 2000
              })
            } else {
              wx.showToast({
                title: res.data.resperr,
                icon: 'none',
                duration: 2000
              });
            }
          }
        })
      }
    })
  },
  tosearch(e) {
    let _this = this;
    console.log("tosearch");

    wx.onLoad;
    let u_id = wx.getStorageSync("userid");
    wx.request({
      url: app.url_config.HTTP_URL1 + '/store/v1/api/load_consumer_detail',
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
      url: app.url_config.HTTP_URL1 + '/store/v1/api/store_consumer_list',
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