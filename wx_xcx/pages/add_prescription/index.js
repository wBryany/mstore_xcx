// pages/add_ prescription/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:"/assets/img/edit.png",
    selected_item:{},
    mydata:[],
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

    this.getdataList();
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
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);
    this.data.selected_item=this.data.mydata[e.detail.value-1];
    
  },
  getdataList() {
    let _this = this;
    console.log("getList");
    wx.showLoading({
      title: '数据加载中...',
      mask: true
    })
    wx.request({
      url: 'http://app.uyu.com:7100/store/v1/api/obstacle_type/list',
      method: 'GET',
      data: {
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

          _this.mydata = res.data.data.obstacles;

          _this.setData({


            mydata: res.data.data.obstacles
          })
        } else if (res.data.respcd == '2002'){
          //session 过期跳转到登录页

          wx.setStorageSync('sessionid','');
          wx.setStorageSync('userid','');
          wx.showToast({
            title: '登录信息已失效,请重新登录',
            icon:'none'
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
  goPrescDetail: function() {
    wx.navigateTo({
      url: '/pages/prescription_detail/index',
    })
  }
})