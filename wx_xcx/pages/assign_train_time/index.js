// pages/assign_train_time/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchtext: '',
    remainTrainTimes: 0,
    input_train_times: '',
    name: '',
    mobile: '',
    mydata: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

    this.getdata();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  cleardata() {
    this.data.searchtext = '';
    this.data.remainTrainTimes = 0;
    this.data.input_train_times = '';
    this.data.name = '';
    this.data.mobile = '';
    this.data.mydata = {};
    let _this=this;

    this.setData({
      searchtext: _this.data.searchtext,
      remainTrainTimes: _this.data.remainTrainTimes,
      name: _this.data.name,
      mobile: _this.data.mobile,
      input_train_times: _this.data.input_train_times,
    });
  },
  input_train_times(e) {
    this.data.input_train_times = e.detail.value;
  },
  inputsearch(e) {

    this.data.searchtext = e.detail.value;

  },

  search() {
    let _this = this;
    if (_this.data.searchtext == '') {
      return
    }
    console.log("tosearch");

    let u_id = wx.getStorageSync("userid");
    wx.showLoading({
      title: '请稍后...',
    })
    wx.request({
      url: app.url_config.HTTP_URL1+'/store/v1/api/load_consumer',
      method: 'POST',
      data: {
        mobile: _this.data.searchtext,
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
          _this.data.mydata = res.data.data;
          _this.setData({
            mobile: _this.data.mydata.mobile,
            name: _this.data.mydata.username,
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
  btn_confirm() {

    let _this = this;
    if (_this.data.input_train_times == '' || _this.data.mobile == '' || _this.data.name == '') {
      wx.showToast({
        title: '信息不正确',
        icon: 'none'
      })

      return;
    }
    console.log("btn_confirm");

    let u_id = wx.getStorageSync("userid");
    wx.showLoading({
      title: '请稍后...',
    })
    wx.request({
      url: app.url_config.HTTP_URL1 +'/store/v1/api/store_to_consumer',
      method: 'POST',
      data: {
        busicd: 'STORE_ALLOT_TO_COMSUMER',
        se_userid: u_id,
        consumer_mobile: _this.data.mobile,
        training_times: _this.data.input_train_times,
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
          wx.showModal({
            title: '提示',
            showCancel: false,
            confirmColor: '#4185de',
            content: '操作成功',
            success(res) {
              if (res.confirm) {
                console.log('用户点击确定')
                _this.cleardata();

                _this.getdata();
              } else if (res.cancel) {

              }
            }
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
  getdata() {

    let _this = this;
    console.log("getinfo");

    let u_id = wx.getStorageSync("userid");
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


          _this.data.remainTrainTimes = res.data.data.remain_times;

          _this.setData({
            remainTrainTimes: _this.data.remainTrainTimes,

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

        }else {
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
  }
})