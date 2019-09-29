// pages/device/index.js

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

    page: 1,
    show_underline: '1',
    device_type: '',
    mydata: []
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
    this.getdata();
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
  getdata() {

    console.log("device   getdata")
    let _this = this;
    console.log("getList");


    if (_this.data.page == 1) {
      _this.data.mydata = [];
    }

    if (this.data.show_underline == '1') {
      this.data.device_type = '';
    } else if (this.data.show_underline == '2') {
      this.data.device_type = '1';
    } else if (this.data.show_underline == '3') {
      this.data.device_type = '0';
    }
    let u_id = wx.getStorageSync("userid");
    wx.showLoading({
      title: '数据加载中...',
      mask: true
    })
    wx.request({
      url: app.url_config.HTTP_URL2 +'/store/v1/api/device_list',
      method: 'GET',
      data: {
        device_type: _this.data.device_type,
        se_userid: u_id,
        page: _this.data.page,
        maxnum: 15,
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
          if (res.data.data.info.length == 0) {

            wx.show
            wx.showToast({
              title: '没有数据了...',
              icon: 'none'
            })
          }


          _this.mydata = res.data.data.info;

          _this.setData({
            mydata: _this.data.mydata.concat(res.data.data.info)
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
        wx.stopPullDownRefresh();
      }
    });
  },
  swich_top_tab1() {
    this.show_underline == '1';
    // this.data.device_type='';
    this.data.page = 1;
    this.setData({
      show_underline: '1'
    });

    this.getdata();
  },
  swich_top_tab2() {
    this.show_underline == '2';
    this.data.page = 1;
    // this.data.device_type = '1';
    this.setData({
      show_underline: '2'
    });

    this.getdata();
  },
  swich_top_tab3() {
    this.show_underline == '3';
    this.data.page = 1;
    // this.data.device_type = '0';
    this.setData({
      show_underline: '3'
    });
    this.getdata();
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    console.log("onPullDownRefresh");
    this.data.page = 1;
    this.getdata();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log("onReachBottom");
    this.data.page = this.data.page + 1;
    this.getdata();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})