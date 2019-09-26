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
        eye:"B",
        content: {
          "name": "FlipBeat_d",
          "params": [
            {
              "name": "l_positive_degree_level",
              "value": [
                {
                  "val": "1.50",
                  "text": "1.50"
                },
                {
                  "val": "2.50",
                  "text": "2.50"
                }
              ],
              "name_cn": "左眼正片等级"
            },
            {
              "name": "l_negative_degree_level",
              "value": [
                {
                  "text": "-1.50",
                  "val": "-1.50"
                },
                {
                  "text": "-2.50",
                  "val": "-2.50"
                },
                {
                  "text": "-3.50",
                  "val": "-3.50"
                },
                {
                  "text": "-4.50",
                  "val": "-4.50"
                },
                {
                  "text": "-6.00",
                  "val": "-6.00"
                },
                {
                  "text": "-8.00",
                  "val": "-8.00"
                }
              ],
              "name_cn": "左眼负片等级"
            },
            {
              "name": "l_loop_positive_num",
              "value": [
                {
                  "text": "1",
                  "val": "1"
                },
                {
                  "text": "2",
                  "val": "2"
                },
                {
                  "text": "3",
                  "val": "3"
                },
                {
                  "text": "4",
                  "val": "4"
                },
                {
                  "text": "5",
                  "val": "5"
                },
                {
                  "text": "6",
                  "val": "6"
                },
                {
                  "text": "7",
                  "val": "7"
                },
                {
                  "text": "8",
                  "val": "8"
                },
                {
                  "text": "9",
                  "val": "9"
                },
                {
                  "text": "10",
                  "val": "10"
                }
              ],
              "name_cn": "左眼正片次数"
            },
            {
              "name": "l_loop_negative_num",
              "value": [
                {
                  "text": "1",
                  "val": "1"
                },
                {
                  "text": "2",
                  "val": "2"
                },
                {
                  "text": "3",
                  "val": "3"
                },
                {
                  "text": "4",
                  "val": "4"
                },
                {
                  "text": "5",
                  "val": "5"
                },
                {
                  "text": "6",
                  "val": "6"
                },
                {
                  "text": "7",
                  "val": "7"
                },
                {
                  "text": "8",
                  "val": "8"
                },
                {
                  "text": "9",
                  "val": "9"
                },
                {
                  "text": "10",
                  "val": "10"
                }
              ],
              "name_cn": "左眼负片次数"
            },
            {
              "name": "r_positive_degree_level",
              "value": [
                {
                  "val": "1.50",
                  "text": "1.50"
                },
                {
                  "val": "2.50",
                  "text": "2.50"
                }
              ],
              "name_cn": "右眼正片等级"
            },
            {
              "name": "r_negative_degree_level",
              "value": [
                {
                  "text": "-1.50",
                  "val": "-1.50"
                },
                {
                  "text": "-2.50",
                  "val": "-2.50"
                },
                {
                  "text": "-3.50",
                  "val": "-3.50"
                },
                {
                  "text": "-4.50",
                  "val": "-4.50"
                },
                {
                  "text": "-6.00",
                  "val": "-6.00"
                },
                {
                  "text": "-8.00",
                  "val": "-8.00"
                }
              ],
              "name_cn": "右眼负片等级"
            },
            {
              "name": "r_loop_positive_num",
              "value": [
                {
                  "text": "1",
                  "val": "1"
                },
                {
                  "text": "2",
                  "val": "2"
                },
                {
                  "text": "3",
                  "val": "3"
                },
                {
                  "text": "4",
                  "val": "4"
                },
                {
                  "text": "5",
                  "val": "5"
                },
                {
                  "text": "6",
                  "val": "6"
                },
                {
                  "text": "7",
                  "val": "7"
                },
                {
                  "text": "8",
                  "val": "8"
                },
                {
                  "text": "9",
                  "val": "9"
                },
                {
                  "text": "10",
                  "val": "10"
                }
              ],
              "name_cn": "右眼正片次数"
            },
            {
              "name": "r_loop_negative_num",
              "value": [
                {
                  "text": "1",
                  "val": "1"
                },
                {
                  "text": "2",
                  "val": "2"
                },
                {
                  "text": "3",
                  "val": "3"
                },
                {
                  "text": "4",
                  "val": "4"
                },
                {
                  "text": "5",
                  "val": "5"
                },
                {
                  "text": "6",
                  "val": "6"
                },
                {
                  "text": "7",
                  "val": "7"
                },
                {
                  "text": "8",
                  "val": "8"
                },
                {
                  "text": "9",
                  "val": "9"
                },
                {
                  "text": "10",
                  "val": "10"
                }
              ],
              "name_cn": "右眼负片次数"
            }
          ]
        }
      },
      {
        name: "反转拍左眼训练",
        checked: false,
        eye: "L",
        content: {
          "name": "FlipBeat_l",
          "params": [
            {
              "name": "l_positive_degree_level",
              "value": [
                {
                  "val": "1.50",
                  "text": "1.50"
                },
                {
                  "val": "2.50",
                  "text": "2.50"
                }
              ],
              "name_cn": "左眼正片等级"
            },
            {
              "name": "l_negative_degree_level",
              "value": [
                {
                  "text": "-1.50",
                  "val": "-1.50"
                },
                {
                  "text": "-2.50",
                  "val": "-2.50"
                },
                {
                  "text": "-3.50",
                  "val": "-3.50"
                },
                {
                  "text": "-4.50",
                  "val": "-4.50"
                },
                {
                  "text": "-6.00",
                  "val": "-6.00"
                },
                {
                  "text": "-8.00",
                  "val": "-8.00"
                }
              ],
              "name_cn": "左眼负片等级"
            },
            {
              "name": "l_loop_positive_num",
              "value": [
                {
                  "text": "1",
                  "val": "1"
                },
                {
                  "text": "2",
                  "val": "2"
                },
                {
                  "text": "3",
                  "val": "3"
                },
                {
                  "text": "4",
                  "val": "4"
                },
                {
                  "text": "5",
                  "val": "5"
                },
                {
                  "text": "6",
                  "val": "6"
                },
                {
                  "text": "7",
                  "val": "7"
                },
                {
                  "text": "8",
                  "val": "8"
                },
                {
                  "text": "9",
                  "val": "9"
                },
                {
                  "text": "10",
                  "val": "10"
                }
              ],
              "name_cn": "左眼正片次数"
            },
            {
              "name": "l_loop_negative_num",
              "value": [
                {
                  "text": "1",
                  "val": "1"
                },
                {
                  "text": "2",
                  "val": "2"
                },
                {
                  "text": "3",
                  "val": "3"
                },
                {
                  "text": "4",
                  "val": "4"
                },
                {
                  "text": "5",
                  "val": "5"
                },
                {
                  "text": "6",
                  "val": "6"
                },
                {
                  "text": "7",
                  "val": "7"
                },
                {
                  "text": "8",
                  "val": "8"
                },
                {
                  "text": "9",
                  "val": "9"
                },
                {
                  "text": "10",
                  "val": "10"
                }
              ],
              "name_cn": "左眼负片次数"
            }
          ]
        }
      },
      {
        name: "反转拍右眼训练",
        checked: false,
        eye: "R",
        content: {
          "name": "FlipBeat_r",
          "params": [
            {
              "name": "r_positive_degree_level",
              "value": [
                {
                  "val": "1.50",
                  "text": "1.50"
                },
                {
                  "val": "2.50",
                  "text": "2.50"
                }
              ],
              "name_cn": "右眼正片等级"
            },
            {
              "name": "r_negative_degree_level",
              "value": [
                {
                  "text": "-1.50",
                  "val": "-1.50"
                },
                {
                  "text": "-2.50",
                  "val": "-2.50"
                },
                {
                  "text": "-3.50",
                  "val": "-3.50"
                },
                {
                  "text": "-4.50",
                  "val": "-4.50"
                },
                {
                  "text": "-6.00",
                  "val": "-6.00"
                },
                {
                  "text": "-8.00",
                  "val": "-8.00"
                }
              ],
              "name_cn": "右眼负片等级"
            },
            {
              "name": "r_loop_positive_num",
              "value": [
                {
                  "text": "1",
                  "val": "1"
                },
                {
                  "text": "2",
                  "val": "2"
                },
                {
                  "text": "3",
                  "val": "3"
                },
                {
                  "text": "4",
                  "val": "4"
                },
                {
                  "text": "5",
                  "val": "5"
                },
                {
                  "text": "6",
                  "val": "6"
                },
                {
                  "text": "7",
                  "val": "7"
                },
                {
                  "text": "8",
                  "val": "8"
                },
                {
                  "text": "9",
                  "val": "9"
                },
                {
                  "text": "10",
                  "val": "10"
                }
              ],
              "name_cn": "右眼正片次数"
            },
            {
              "name": "r_loop_negative_num",
              "value": [
                {
                  "text": "1",
                  "val": "1"
                },
                {
                  "text": "2",
                  "val": "2"
                },
                {
                  "text": "3",
                  "val": "3"
                },
                {
                  "text": "4",
                  "val": "4"
                },
                {
                  "text": "5",
                  "val": "5"
                },
                {
                  "text": "6",
                  "val": "6"
                },
                {
                  "text": "7",
                  "val": "7"
                },
                {
                  "text": "8",
                  "val": "8"
                },
                {
                  "text": "9",
                  "val": "9"
                },
                {
                  "text": "10",
                  "val": "10"
                }
              ],
              "name_cn": "右眼负片次数"
            }
          ]
        }
      },
      {
        name: "红绿固定初级训练",
        checked: false,
        content: {
          "name": "RedGreenFixed_j",
          "params": [
            {
              "name": "train_type",
              "value": [
                {
                  "val": 2,
                  "text": "BI"
                },
                {
                  "val": 1,
                  "text": "BO"
                }
              ],
              "name_cn": "BI/BO"
            }
          ]
        }
      },
      {
        name: "红绿固定高级训练",
        checked: false,
        content: {
          "name": "RedGreenFixed_h",
          "params": [
            {
              "name": "train_type",
              "value": [
                {
                  "val": 1,
                  "text": "侧重集合"
                },
                {
                  "val": 2,
                  "text": "侧重散开"
                },
                {
                  "val": 3,
                  "text": "聚散平衡"
                }
              ],
              "name_cn": "聚散重点"
            }
          ]
        }
      },
      {
        name: "红绿可变初级训练",
        checked: false,
        content: {
          "name": "RgVariable_j",
          "params": [
            {
              "name": "train_type",
              "value": [
                {
                  "val": 2,
                  "text": "BI"
                },
                {
                  "val": 1,
                  "text": "BO"
                }
              ],
              "name_cn": "BI/BO"
            },
            {
              "name": "move_level",
              "value": [
                {
                  "val": 1,
                  "text": 1
                },
                {
                  "val": 2,
                  "text": 2
                },
                {
                  "val": 3,
                  "text": 3
                },
                {
                  "val": 4,
                  "text": 4
                },
                {
                  "val": 5,
                  "text": 5
                }
              ],
              "name_cn": "移动等级"
            }
          ]
        }
      },
      {
        name: "红绿可变高级训练",
        checked: false,
        content: {
          "name": "RgVariable_h",
          "params": [
            {
              "name": "train_type",
              "value": [
                {
                  "val": 1,
                  "text": "侧重集合"
                },
                {
                  "val": 2,
                  "text": "侧重散开"
                },
                {
                  "val": 3,
                  "text": "聚散平衡"
                }
              ],
              "name_cn": "聚散重点"
            },
            {
              "name": "move_level",
              "value": [
                {
                  "val": 1,
                  "text": 1
                },
                {
                  "val": 2,
                  "text": 2
                },
                {
                  "val": 3,
                  "text": 3
                },
                {
                  "val": 4,
                  "text": 4
                },
                {
                  "val": 5,
                  "text": 5
                }
              ],
              "name_cn": "移动等级"
            }
          ]
        }
      },
      {
        name: "裂隙尺训练",
        checked: false,
        content: {
          "name": "SlitRuler",
          "params": [
            {
              "name": "train_type",
              "value": [
                {
                  "val": 2,
                  "text": "BI"
                },
                {
                  "val": 1,
                  "text": "BO"
                }
              ],
              "name_cn": "BI/BO"
            }
          ]
        }
      },
      {
        name: "立体镜初级训练",
        checked: false,
        content: {
          "name": "Stereoscopic_j",
          "params": [
            {
              "name": "train_type",
              "value": [
                {
                  "val": 2,
                  "text": "BI"
                },
                {
                  "val": 1,
                  "text": "BO"
                }
              ],
              "name_cn": "BI/BO"
            }
          ]
        }
      },
      {
        name: "立体镜中级训练",
        checked: false,
        content: {
          "name": "Stereoscopic_m",
          "params": [
            {
              "name": "train_type",
              "value": [
                {
                  "val": 2,
                  "text": "BI"
                },
                {
                  "val": 1,
                  "text": "BO"
                }
              ],
              "name_cn": "BI/BO"
            }
          ]
        }
      },
      {
        name: "立体镜高级训练",
        checked: false,
        content: {
          "name": "Stereoscopic_h",
          "params": [
            {
              "name": "train_type",
              "value": [
                {
                  "val": 1,
                  "text": "侧重集合"
                },
                {
                  "val": 2,
                  "text": "侧重散开"
                },
                {
                  "val": 3,
                  "text": "聚散平衡"
                }
              ],
              "name_cn": "聚散重点"
            }
          ]
        }
      },
      {
        name: "扫视训练",
        checked: false,
        content: {
          "name": "ToGlance",
          "params": [
            {
              "name": "fontLevel",
              "value": [
                {
                  "text": "1",
                  "val": "1"
                },
                {
                  "text": "2",
                  "val": "2"
                },
                {
                  "text": "3",
                  "val": "3"
                },
                {
                  "text": "4",
                  "val": "4"
                },
                {
                  "text": "5",
                  "val": "5"
                },
                {
                  "text": "6",
                  "val": "6"
                },
                {
                  "text": "7",
                  "val": "7"
                },
                {
                  "text": "8",
                  "val": "8"
                },
                {
                  "text": "9",
                  "val": "9"
                },
                {
                  "text": "10",
                  "val": "10"
                },
                {
                  "text": "11",
                  "val": "11"
                },
                {
                  "text": "12",
                  "val": "12"
                },
                {
                  "text": "13",
                  "val": "13"
                },
                {
                  "text": "14",
                  "val": "14"
                },
                {
                  "text": "15",
                  "val": "15"
                },
                {
                  "text": "16",
                  "val": "16"
                },
                {
                  "text": "17",
                  "val": "17"
                },
                {
                  "text": "18",
                  "val": "18"
                },
                {
                  "text": "19",
                  "val": "19"
                },
                {
                  "text": "20",
                  "val": "20"
                }
              ],
              "name_cn": "字体大小等级"
            }
          ]
        }
      },
      {
        name: "追随训练",
        checked: false,
        content: {
          "name": "Follow",
          "params": [
            {
              "name": "line_type",
              "value": [
                {
                  "text": "曲线",
                  "val": "1"
                },
                {
                  "text": "折线",
                  "val": "2"
                },
                {
                  "text": "虚线",
                  "val": "3"
                }
              ],
              "name_cn": "线条类型"
            }
          ]
        }
      },
      {
        name: "红绿阅读初级训练",
        checked: false,
        content: {
          "name": "RgReading_j",
          "params": [

          ]
        }
      },
      {
        name: "红绿阅读中级训练",
        checked: false,
        content: {
          "name": "RgReading_m",
          "params": [
            {
              "name": "fontLevel",
              "value": [
                {
                  "text": "1",
                  "val": "1"
                },
                {
                  "text": "2",
                  "val": "2"
                },
                {
                  "text": "3",
                  "val": "3"
                },
                {
                  "text": "4",
                  "val": "4"
                },
                {
                  "text": "5",
                  "val": "5"
                },
                {
                  "text": "6",
                  "val": "6"
                },
                {
                  "text": "7",
                  "val": "7"
                },
                {
                  "text": "8",
                  "val": "8"
                },
                {
                  "text": "9",
                  "val": "9"
                },
                {
                  "text": "10",
                  "val": "10"
                },
                {
                  "text": "11",
                  "val": "11"
                },
                {
                  "text": "12",
                  "val": "12"
                },
                {
                  "text": "13",
                  "val": "13"
                },
                {
                  "text": "14",
                  "val": "14"
                },
                {
                  "text": "15",
                  "val": "15"
                },
                {
                  "text": "16",
                  "val": "16"
                },
                {
                  "text": "17",
                  "val": "17"
                },
                {
                  "text": "18",
                  "val": "18"
                },
                {
                  "text": "19",
                  "val": "19"
                },
                {
                  "text": "20",
                  "val": "20"
                }
              ],
              "name_cn": "字体大小等级"
            }
          ]
        }
      },
      {
        name: "生理性复视训练",
        checked: false,
        content: {
          "name": "PhysiologicDiplopia",
          "params": [
            {
              "name": "stick_position",
              "value": [
                {
                  "text": "10",
                  "val": "10"
                },
                {
                  "text": "15",
                  "val": "15"
                },
                {
                  "text": "20",
                  "val": "20"
                },
                {
                  "text": "25",
                  "val": "25"
                },
                {
                  "text": "30",
                  "val": "30"
                }
              ],
              "name_cn": "引导棒位置"
            }
          ]
        }
      },
      {
        name: "推进训练",
        checked: false,
        content: {
          "name": "Advance",
          "params": [

          ]
        }
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