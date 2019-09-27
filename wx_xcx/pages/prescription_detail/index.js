// pages/prescription_detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: "/assets/img/edit.png",
    icon_del_src: "/assets/img/icon_del.png",
    icon_down_src: "/assets/img/icon_down.png",
    icon_up_src: "/assets/img/icon_up.png",
    


    schemes:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.showLoading({
      title: '数据加载中...',
      mask: true
    })
    wx.request({
      url: 'http://app.uyu.com:7100/store/v1/api/obstacle_scheme/list',
      method: 'GET',
      data: {
        os: 'xiaochengxu',
        obstacle_id: '1',
        app_version: '1.0.0'
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'cookie': wx.getStorageSync("sessionid")
      },
      success(res) {
        console.log(res.data);
        if (res.data.respcd == '0000') {
          that.setData({
            schemes: res.data.data.schemes,
          })
        }
      },
      complete() {
        console.log("complete");
        wx.hideLoading();
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  goPrescSetting: function () {
    wx.navigateTo({
      url: '/pages/prescription_setting/index',
    })
  }
})