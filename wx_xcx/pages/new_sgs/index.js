// pages/new_sgs/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    searchtext: '',
    mydata: {
      "mobile": "",
      "nick_name": "",
      "username": "",
      "id": -1

    },
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

  inputsearch(e) {

    this.searchtext = e.detail.value;

  },
  tosearch(e) {
    let _this = this;
    console.log("tosearch");

    let u_id = wx.getStorageSync("userid");
    wx.showLoading({
      title: '请稍后...',
    })
    wx.request({
      url: 'http://app.uyu.com:7100/store/v1/api/eyesight',
      method: 'GET',
      data: {
        phone_num: _this.searchtext,
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
          _this.mydata = res.data.data;

          _this.setData({


            mydata: res.data.data
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
    if (_this.data.mydata.id == -1) {
      wx.showToast({
        title: '信息不正确',
        icon: 'none'
      })

      return;
    }
    console.log("tosearch");

    let u_id = wx.getStorageSync("userid");
    wx.showLoading({
      title: '请稍后...',
    })
    wx.request({
      url: 'http://app.uyu.com:7100/store/v1/api/eyesight',
      method: 'POST',
      data: {
        userid: _this.data.mydata.id,
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
          wx.showModal({
            title: '提示',
            showCancel:false,
            confirmColor: '#4185de',
            content: '添加成功',
            success(res) {
              if (res.confirm) {
                console.log('用户点击确定')
                wx.navigateBack({

                });
              } else if (res.cancel) {
                
              }
            }
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
  }
})