// pages/report_webview/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

    url: '',
    myuserid:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    console.log(options);
    this.data.myuserid = options.userid;

    this.data.url = app.url_config.HTTP_URL1 + '/store/v1/page/new_train_head.html?userid=' + this.data.myuserid;
    this.setData({
      url: _this.data.url
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
    wx.redirectTo({
      url:'/pages/prescription_record/index'
    })
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

  }
})