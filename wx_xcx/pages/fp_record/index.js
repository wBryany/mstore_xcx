// pages/fp_record/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

    page: 1,
    src: '/assets/img/logo.png',
    mydata: [],
    temdata:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getdata();
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
    console.log("onPullDownRefresh");
    this.data.page = 1;
    this.getdata();

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log("onReachBottom");
    this.data.page =this.data.page+1;
    this.getdata();
  },

  getdata() {

    let _this = this;
    if(_this.data.page == 1){
      _this.data.mydata=[];
      _this.data.temdata = [];
    }
    console.log("getList：" + _this.data.page);
    wx.showLoading({
      title: '请稍后...',
      mask: true
    })
    let u_id = wx.getStorageSync("userid");
    // console.log("u_id:" + u_id);
    // console.log("cookie:" + wx.getStorageSync("sessionid"));
    wx.request({
      url: app.url_config.HTTP_URL1 +'/store/v1/api/store_allocate_list',
      method: 'GET',
      data: {
        page: _this.data.page,
        maxnum: 10,
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

          // _this.data.temdata.push(res.data.data.info);
  
          // let temdata = _this.data.mydata;
          // temdata.concat(res.data.data.info);
         

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
 
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})