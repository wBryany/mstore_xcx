// pages/prescription_setting/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    train_items: [
      {
        name: "反转拍双眼训练",
        checked: true,
        eye:"B"
      },
      {
        name: "反转拍左眼训练",
        checked: false,
        eye: "L"
      },
      {
        name: "反转拍右眼训练",
        checked: false,
        eye: "R"
      },
      {
        name: "红绿固定初级训练",
        checked: false
      },
      {
        name: "红绿固定高级训练",
        checked: false
      },
      {
        name: "红绿可变初级训练",
        checked: false
      },
      {
        name: "红绿可变高级训练",
        checked: false
      },
      {
        name: "裂隙尺训练",
        checked: false
      },
      {
        name: "立体镜初级训练",
        checked: false
      },
      {
        name: "立体镜中级训练",
        checked: false
      },
      {
        name: "立体镜高级训练",
        checked: false
      },
      {
        name: "扫视训练",
        checked: false
      },
      {
        name: "追随训练",
        checked: false
      },
      {
        name: "红绿阅读初级训练",
        checked: false
      },
      {
        name: "红绿阅读中级训练",
        checked: false
      },
      {
        name: "生理性复视训练",
        checked: false
      },
      {
        name: "推进训练",
        checked: false
      }
    ],
    item_select_index: 0,

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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  trainItemAction: function (e) {
    let that = this;
    console.log(e);
    let oldSelIndex = that.data.item_select_index;
    let oldSelKey = "train_items[" + oldSelIndex + "].checked";
    that.setData({
      [oldSelKey]: false
    })

    let index = e.currentTarget.dataset["bindex"];
    that.setData({
      item_select_index: index
    })
    let checked = !that.data.train_items[index].checked;
    let key = "train_items[" + index + "].checked";
    that.setData({
      [key] : checked
    })
  }
})