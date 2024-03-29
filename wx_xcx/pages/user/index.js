//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    src: '/assets/img/logo.png',
    searchtext: "",
    mydata: []
  },

  onReady: function() {

    this.getList();
  },
  onLoad: function() {


  },
  clickitem(e) {

    console.log(e.currentTarget.dataset.index);
    wx.navigateTo({
      url: '../user_detail/index?info=' + JSON.stringify(this.mydata[e.currentTarget.dataset.index])
    })
  },
  inputsearch(e) {

    this.searchtext = e.detail.value;

  },
  tocreate_new() {
    wx.navigateTo({
      url: '../new_user/index'
    })
  },
  tosearch(e) {
    let _this = this;
    console.log("tosearch");
   
    let u_id = wx.getStorageSync("userid");
    wx.showLoading({
      title: '请稍后...',
    })
    wx.request({
      url: 'http://app.uyu.com:7100/store/v1/api/load_consumer_detail',
      method: 'POST',
      data: {
        mobile: this.searchtext,
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
          _this.mydata = res.data.data.info;

          _this.setData({


            mydata: res.data.data.info
          })



        }
      },

      complete() {
        console.log("complete");
        wx.hideLoading();
      }

    });
  },

  getList() {
    
    let _this = this;
    console.log("getList");

    let u_id = wx.getStorageSync("userid");
    // console.log("u_id:" + u_id);
    // console.log("cookie:" + wx.getStorageSync("sessionid"));
    wx.showLoading({
      title: '数据加载中...',
      mask:true
    })
    wx.request({
      url: 'http://app.uyu.com:7100/store/v1/api/store_consumer_list',
      method: 'GET',
      data: {
        se_userid: u_id,
        store_userid: u_id,
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

          _this.mydata = res.data.data.info;

          _this.setData({


            mydata: res.data.data.info
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