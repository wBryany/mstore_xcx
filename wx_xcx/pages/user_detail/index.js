//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

    src: '/assets/img/logo.png',
    userInfo: {},
  
    
  },

  onReady: function() {

   
  },
  onLoad: function(option) {

    // console.log(option.info);
    // this.userInfo=JSON.parse(option.info);
    // wx.setNavigationBarTitle({
    //   title: this.userInfo.nick_name,
    // })

  },

  tosearch(e) {
    let _this = this;
    console.log("tosearch");

    wx.onLoad;
    let u_id = wx.getStorageSync("userid");
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
      }

    });
  },

  getList() {
    let _this = this;
    console.log("getList");

    let u_id = wx.getStorageSync("userid");
    // console.log("u_id:" + u_id);
    // console.log("cookie:" + wx.getStorageSync("sessionid"));
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
      }

    });
  }
})