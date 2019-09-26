const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    selected: 0,
    mine_path: "/pages/mine/index",
    user_path: "/pages/user/index",
    mine_iconPath: "/assets/img/mine_dis_select.png",
    mine_selectedIconPath: "/assets/img/mine_selected.png",
    user_iconPath: "/assets/img/user_dis_select.png",
    user_selectedIconPath: "/assets/img/user_selected.png",
  },

  /**
   * 组件的方法列表
   */
  methods: {
   
    click_mine() {
      let _this = this;
      _this.data.selected = 0;
      console.log("click_mine:" + _this.data.selected);
      _this.setData({
        selected: _this.data.selected
      });
      wx.switchTab({
        url: _this.data.mine_path
      })
   
    },
    click_user() {
      let _this = this;
      _this.data.selected=1;
      console.log("click_user:" + _this.data.selected);
      _this.setData({

        selected: _this.data.selected
      });
      wx.switchTab({
        url: _this.data.user_path
      })
    
    }
  }
})