// pages/device/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    show_underline: '1',
    mydata: [{
      "username": "huanglongzhong",
      "phone_num": "18601033869",
      "nick_name": "\u9ec4\u9f99\u4e2d",
      "userid": 1015246,
      "email": "",
      "state": "\u6b63\u5e38",
      "create_time": "2017-07-07 10:51:36",
      "login_name": "huanglongzhong",
      "remain_times": 0
    }, {
      "username": "huanglongzhong",
      "phone_num": "18601033869",
      "nick_name": "\u9ec4\u9f99\u4e2d",
      "userid": 1015246,
      "email": "",
      "state": "\u6b63\u5e38",
      "create_time": "2017-07-07 10:51:36",
      "login_name": "huanglongzhong",
      "remain_times": 0
    }, {
      "username": "huanglongzhong",
      "phone_num": "18601033869",
      "nick_name": "\u9ec4\u9f99\u4e2d",
      "userid": 1015246,
      "email": "",
      "state": "\u6b63\u5e38",
      "create_time": "2017-07-07 10:51:36",
      "login_name": "huanglongzhong",
      "remain_times": 0
    }, {
      "username": "huanglongzhong",
      "phone_num": "18601033869",
      "nick_name": "\u9ec4\u9f99\u4e2d",
      "userid": 1015246,
      "email": "",
      "state": "\u6b63\u5e38",
      "create_time": "2017-07-07 10:51:36",
      "login_name": "huanglongzhong",
      "remain_times": 0
    },]
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

  swich_top_tab1() {
    this.show_underline =='1';
    this.setData({
      show_underline: '1'
    });
  },
  swich_top_tab2() {
    this.show_underline == '2';
    this.setData({
      show_underline: '2'
    });
  },
  swich_top_tab3() {
    this.show_underline == '3';
    this.setData({
      show_underline: '3'
    });
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

  }
})