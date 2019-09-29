//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    icon_man_noselect_src: '/assets/img/icon_man_noselect.png',
    icon_man_selected_src: '/assets/img/icon_man_selected.png',
    icon_woman_noselect_src: '/assets/img/icon_woman_noselect.png',
    icon_woman_selected_src: '/assets/img/icon_woman_selected.png',
    select_date: "",
    select_sex_value: '1',
    input_name: "",
    input_phone_num: ""
  },

  onReady: function() {

  },
  onLoad: function() {


  },
  inputsearch(e) {

    this.searchtext = e.detail.value;

  },

  chooseman() {
    this.select_sex_value = "1";

    this.setData({
      select_sex_value: '1',

    });
  },
  choosewoman() {
    this.select_sex_value = "2"; 
    this.setData({
      select_sex_value: '2',

    });
  },
  bindTimeChange(e) {


    let data = e.detail.value;
    this.select_date = e.detail.value;
    this.setData({
      select_date: data

    });
  },

  inputname(e) {

    this.input_name = e.detail.value;
  },
  inputphoneNum(e) {
    this.input_phone_num = e.detail.value;
  },
  comfirm() {
    let _this = this;
    console.log("tosearch");

    wx.onLoad;
    let u_id = wx.getStorageSync("userid");
    let sess_id = wx.getStorageSync("sessionid");
    let ssid_arrays = sess_id.split(";")[0].split("=");
    console.log("ssid_arrays:" + ssid_arrays);
    wx.request({
      url: 'https://app.uyu.com/optometrist/api/v1/uyuuser?tk=' + ssid_arrays[1],
      method: 'POST',
      data: {
        sex: this.select_sex_value,
        birth_day: this.select_date,
        nick_name: this.input_name,
        phone_num: this.input_phone_num,
        uid: u_id,
        os: 'xiaochengxu',
        email: '',
        login_name: this.input_name,
        occupation: '',
        password: "1svDbQFfAMwL54argWQ6B3uvPkDMEDHL4YEz8OCajXJcd90PCJiEt1loZ+O2K/Uc8HUS+R2hesBiajliQ0HJJA\u003d\u003d",
        portrait_data: '',
        user_extra_infos: {
          temp_email: "",
          temp_phone_num: this.input_phone_num
        },
        appver: '1.0.20'
      },
      header: {
        'content-type': 'application/json',
        'cookie': wx.getStorageSync("sessionid")
      },
      success(res) {
        console.log(res.data);

        if (res.data.code == '0') {
          wx.navigateBack({

          });
          wx.showToast({
            title: res.data.message,
            icon: 'none'
          });


        }
      }

    });


  },


})