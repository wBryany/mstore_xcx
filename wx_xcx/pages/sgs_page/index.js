// pages/sgs_page/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 1,
    src: '/assets/img/logo.png',
    unbindsrc: '/assets/img/unbind.png',
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

  getdata() {

    let _this = this;
    if (_this.data.page == 1) {
      _this.data.mydata = [];
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
      url: 'http://app.uyu.com:7100/store/v1/api/eyesight_list',
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


          if (res.data.data.info.length == 0) {

            wx.show
            wx.showToast({
              title: '没有数据了...',
              icon: 'none'
            })
          }

          _this.setData({
            mydata: _this.data.mydata.concat(res.data.data.info)
          });




        }
      },
      complete() {
        console.log("complete");
        wx.hideLoading();
        wx.stopPullDownRefresh();
      }
    });


  },

  tocreate_new() {
    wx.navigateTo({
      url: '../new_sgs/index'
    });




  },
  longpressbtn(e) {
    console.log(e.currentTarget.dataset.index);
    console.log("长按事件");
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  deleteItem(e) {
    let _this = this;
    console.log(e.currentTarget.dataset.index);
    let item = this.data.mydata[e.currentTarget.dataset.index];
    wx.showModal({
      title: '提示',
      cancelColor: '#4185de',
      confirmColor: '#4185de',
      content: '视光师:' + item.username + '将从本店解绑',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          _this.tounbind(item.eyesight_id);
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  tounbind(id) {
    let _this=this;
    wx.showLoading({
      title: '请稍后...',
      mask: true
    })
    let u_id = wx.getStorageSync("userid");
    wx.request({
      url: 'http://app.uyu.com:7100/store/v1/api/eyesight_unbind',
      method: 'POST',
      data: {
        se_userid: u_id,
        eyesight_id: id,
        os: 'xiaochengxu',
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'cookie': wx.getStorageSync("sessionid")

      },
      success(res) {
        console.log(res.data);

        if (res.data.respcd == '0000') {

      
          wx.showToast({
            title: '解绑成功',
            icon: 'none'
          });

          _this.data.page=1;
          _this.getdata();

        }
      },

      complete() {
        console.log("complete");
        wx.hideLoading();
      }
    });
  }
})