// pages/sgs_page/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: '/assets/img/logo.png',
    delete_icon_src: '/assets/img/delete_test.png',
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
  onLoad: function (options) {

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
  tocreate_new(){
    wx.navigateTo({
      url: '../new_sgs/index'
    });


    // wx.showModal({
    //   title: '提示',
    //   content: '这是一个模态弹窗',
    //   success(res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定')
    //     } else if (res.cancel) {
    //       console.log('用户点击取消')
    //     }
    //   }
    // })
    
  },
  longpressbtn(e){
    console.log(e.currentTarget.dataset.index);
      console.log("长按事件");
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})