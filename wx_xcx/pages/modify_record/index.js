// pages/modify_record/index.js

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

    mydata: [],
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

getdata(){
  let _this = this;
  console.log("getList");
  wx.showLoading({
    title: '请稍后...',
    mask: true
  })
  let u_id = wx.getStorageSync("userid");
  // console.log("u_id:" + u_id);
  // console.log("cookie:" + wx.getStorageSync("sessionid"));
  wx.request({
    url: app.url_config.HTTP_URL2 + '/store/v1/api/modify_record',
    method: 'GET',
    data: {
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


        _this.mydata = res.data.data;

        let temdata=_this.mydata;
        if(temdata.length>0){
          temdata[0].show_item=true;
        }


        _this.setData({
          mydata: temdata
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

      }
    },
 complete() {
      console.log("complete");
      wx.hideLoading();
    }
  });

 
},
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },
  clicktipitem(e) {
    console.log(this.data.mydata)
    let _this = this;
    console.log(e.currentTarget.dataset.index);
    let index = parseInt(e.currentTarget.dataset.index);

    let temdata = _this.data.mydata;
    if (temdata[index].show_item) {
      temdata[index].show_item = false;
    } else {
      temdata[index].show_item = true;

    }

    _this.setData({
      mydata: temdata

    });

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

  }
})