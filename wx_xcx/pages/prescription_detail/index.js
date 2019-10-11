// pages/prescription_detail/index.js

let currentApp = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: "/assets/img/edit.png",
    icon_del_src: "/assets/img/icon_del.png",
    icon_down_src: "/assets/img/icon_down.png",
    icon_up_src: "/assets/img/icon_up.png",
    prescription: {
      Advance: {
        "name": "推进训练",
        "name_en": "Advance",
      },
      PhysiologicDiplopia: {
        "name": "生理性复视训练",
        "name_en": "PhysiologicDiplopia",
        "stick_position": {
          "name_cn": "引导棒位置",
          "value": {
            "10": {
              "text": "10",
              "val": "10"
            },
            "15": {
              "text": "15",
              "val": "15"
            },
            "20": {
              "text": "20",
              "val": "20"
            },
            "25": {
              "text": "25",
              "val": "25"
            },
            "30": {
              "text": "30",
              "val": "30"
            }
          }
        }
      },
      RgReading_m: {
        "name": "红绿阅读中级训练",
        "name_en": "RgReading_m",
        "fontLevel": {
          "name_cn": "字体大小等级",
          "value": {
            "1": {
              "text": "1",
              "val": "1"
            },
            "2": {
              "text": "2",
              "val": "2"
            },
            "3": {
              "text": "3",
              "val": "3"
            },
            "4": {
              "text": "4",
              "val": "4"
            },
            "5": {
              "text": "5",
              "val": "5"
            },
            "6": {
              "text": "6",
              "val": "6"
            },
            "7": {
              "text": "7",
              "val": "7"
            },
            "8": {
              "text": "8",
              "val": "8"
            },
            "9": {
              "text": "9",
              "val": "9"
            },
            "10": {
              "text": "10",
              "val": "10"
            },
            "11": {
              "text": "11",
              "val": "11"
            },
            "12": {
              "text": "12",
              "val": "12"
            },
            "13": {
              "text": "13",
              "val": "13"
            },
            "14": {
              "text": "14",
              "val": "14"
            },
            "15": {
              "text": "15",
              "val": "15"
            },
            "16": {
              "text": "16",
              "val": "16"
            },
            "17": {
              "text": "17",
              "val": "17"
            },
            "18": {
              "text": "18",
              "val": "18"
            },
            "19": {
              "text": "19",
              "val": "19"
            },
            "20": {
              "text": "20",
              "val": "20"
            }
          }
        }
      },
      RgReading_j: {
        "name": "红绿阅读初级训练",
        "name_en": "RgReading_j",
      },
      Follow: {
        "name": "追随训练",
        "name_en": "Follow",
        "line_type": {
          "name_cn": "线条类型",
          "value": {
            "1": {
              "text": "曲线",
              "val": "1"
            },
            "2": {
              "text": "折线",
              "val": "2"
            },
            "3": {
              "text": "虚线",
              "val": "3"
            }
          }
        }
      },
      ToGlance: {
        "name": "扫视训练",
        "name_en": "ToGlance",
        "fontLevel": {
          "name_cn": "字体大小等级",
          "value": {
            "1": {
              "text": "1",
              "val": "1"
            },
            "2": {
              "text": "2",
              "val": "2"
            },
            "3": {
              "text": "3",
              "val": "3"
            },
            "4": {
              "text": "4",
              "val": "4"
            },
            "5": {
              "text": "5",
              "val": "5"
            },
            "6": {
              "text": "6",
              "val": "6"
            },
            "7": {
              "text": "7",
              "val": "7"
            },
            "8": {
              "text": "8",
              "val": "8"
            },
            "9": {
              "text": "9",
              "val": "9"
            },
            "10": {
              "text": "10",
              "val": "10"
            },
            "11": {
              "text": "11",
              "val": "11"
            },
            "12": {
              "text": "12",
              "val": "12"
            },
            "13": {
              "text": "13",
              "val": "13"
            },
            "14": {
              "text": "14",
              "val": "14"
            },
            "15": {
              "text": "15",
              "val": "15"
            },
            "16": {
              "text": "16",
              "val": "16"
            },
            "17": {
              "text": "17",
              "val": "17"
            },
            "18": {
              "text": "18",
              "val": "18"
            },
            "19": {
              "text": "19",
              "val": "19"
            },
            "20": {
              "text": "20",
              "val": "20"
            }
          }
        }
      },
      Stereoscopic_h: {
        "name": "立体镜高级训练",
        "name_en": "Stereoscopic_h",
        "train_type": {
          "name_cn": "聚散重点",
          "value": {
            "1": {
              "val": 1,
              "text": "侧重集合"
            },
            "2": {
              "val": 2,
              "text": "侧重散开"
            },
            "3": {
              "val": 3,
              "text": "聚散平衡"
            }
          }
        }
      },
      Stereoscopic_m: {
        "name": "立体镜中级训练",
        "name_en": "Stereoscopic_h",
        "train_type": {
          "name_cn": "BI/BO",
          "value": {
            "2": {
              "val": 2,
              "text": "BI"
            },
            "1": {
              "val": 1,
              "text": "BO"
            }
          }
        }
      },
      Stereoscopic_j: {
        "name": "立体镜初级训练",
        "name_en": "Stereoscopic_h",
        "train_type": {
          "name_cn": "BI/BO",
          "value": {
            "2": {
              "val": 2,
              "text": "BI"
            },
            "1": {
              "val": 1,
              "text": "BO"
            }
          }
        }
      },
      SlitRuler: {
        "name": "裂隙尺训练",
        "name_en": "SlitRuler",
        "train_type": {
          "name_cn": "BI/BO",
          "value": {
            "2": {
              "val": 2,
              "text": "BI"
            },
            "1": {
              "val": 1,
              "text": "BO"
            }
          }
        }
      },
      RgVariable_h: {
        "name": "红绿可变高级训练",
        "name_en": "RgVariable_h",
        "train_type": {
          "name_cn": "聚散重点",
          "value": {
            "1": {
              "val": 1,
              "text": "侧重集合"
            },
            "2": {
              "val": 2,
              "text": "侧重散开"
            },
            "3": {
              "val": 3,
              "text": "聚散平衡"
            }
          }
        },
        "move_level": {
          "name_cn": "移动等级",
          "value": {
            "1": {
              "text": "1",
              "val": "1"
            },
            "2": {
              "text": "2",
              "val": "2"
            },
            "3": {
              "text": "3",
              "val": "3"
            },
            "4": {
              "text": "4",
              "val": "4"
            },
            "5": {
              "text": "5",
              "val": "5"
            },
          }
        }
      },
      RgVariable_j: {
        "name": "红绿可变初级训练",
        "name_en": "RgVariable_j",
        "train_type": {
          "name_cn": "BI/BO",
          "value": {
            "2": {
              "val": 2,
              "text": "BI"
            },
            "1": {
              "val": 1,
              "text": "BO"
            }
          }
        },
        "move_level": {
          "name_cn": "移动等级",
          "value": {
            "1": {
              "text": "1",
              "val": "1"
            },
            "2": {
              "text": "2",
              "val": "2"
            },
            "3": {
              "text": "3",
              "val": "3"
            },
            "4": {
              "text": "4",
              "val": "4"
            },
            "5": {
              "text": "5",
              "val": "5"
            },
          }
        }
      },
      RedGreenFixed_h: {
        "name": "红绿固定高级训练",
        "name_en": "RedGreenFixed_h",
        "train_type": {
          "name_cn": "聚散重点",
          "value": {
            "1": {
              "val": 1,
              "text": "侧重集合"
            },
            "2": {
              "val": 2,
              "text": "侧重散开"
            },
            "3": {
              "val": 3,
              "text": "聚散平衡"
            }
          }
        }
      },
      RedGreenFixed_j: {
        "name": "红绿固定初级训练",
        "name_en": "RedGreenFixed_j",
        "train_type": {
          "name_cn": "BI/BO",
          "value": {
            "2": {
              "val": 2,
              "text": "BI"
            },
            "1": {
              "val": 1,
              "text": "BO"
            }
          }
        },
      },
      FlipBeat: {
        "name": "翻转拍右眼训练",
        "name_en": "FlipBeat",
        "l_positive_degree_level": {
          "name_cn": "左眼正片等级",
          "value": {
            "1.50": {
              "val": "1.50",
              "text": "1.50"
            },
            "2.50": {
              "val": "2.50",
              "text": "2.50"
            }
          }
        },
        "l_negative_degree_level": {
          "name_cn": "左眼负片等级",
          "value": {
            "-1.50": {
              "text": "-1.50",
              "val": "-1.50"
            },
            "-2.50": {
              "text": "-2.50",
              "val": "-2.50"
            },
            "-3.50": {
              "text": "-3.50",
              "val": "-3.50"
            },
            "-4.50": {
              "text": "-4.50",
              "val": "-4.50"
            },
            "-6.00": {
              "text": "-6.00",
              "val": "-6.00"
            },
            "-8.00": {
              "text": "-8.00",
              "val": "-8.00"
            }
          },
        },
        "l_loop_positive_num": {
          "name_cn": "左眼正片次数",
          "value": {
            "1": {
              "text": "1",
              "val": "1"
            },
            "2": {
              "text": "2",
              "val": "2"
            },
            "3": {
              "text": "3",
              "val": "3"
            },
            "4": {
              "text": "4",
              "val": "4"
            },
            "5": {
              "text": "5",
              "val": "5"
            },
            "6": {
              "text": "6",
              "val": "6"
            },
            "7": {
              "text": "7",
              "val": "7"
            },
            "8": {
              "text": "8",
              "val": "8"
            },
            "9": {
              "text": "9",
              "val": "9"
            },
            "10": {
              "text": "10",
              "val": "10"
            }
          }
        },
        "l_loop_negative_num": {
          "name_cn": "左眼负片次数",
          "value": {
            "1": {
              "text": "1",
              "val": "1"
            },
            "2": {
              "text": "2",
              "val": "2"
            },
            "3": {
              "text": "3",
              "val": "3"
            },
            "4": {
              "text": "4",
              "val": "4"
            },
            "5": {
              "text": "5",
              "val": "5"
            },
            "6": {
              "text": "6",
              "val": "6"
            },
            "7": {
              "text": "7",
              "val": "7"
            },
            "8": {
              "text": "8",
              "val": "8"
            },
            "9": {
              "text": "9",
              "val": "9"
            },
            "10": {
              "text": "10",
              "val": "10"
            }
          }
        },

        //////////////////////////////////////
        "r_positive_degree_level": {
          "name_cn": "右眼正片等级",
          "value": {
            "1.50": {
              "val": "1.50",
              "text": "1.50"
            },
            "2.50": {
              "val": "2.50",
              "text": "2.50"
            }
          }
        },
        "r_negative_degree_level": {
          "name_cn": "右眼负片等级",
          "value": {
            "-1.50": {
              "text": "-1.50",
              "val": "-1.50"
            },
            "-2.50": {
              "text": "-2.50",
              "val": "-2.50"
            },
            "-3.50": {
              "text": "-3.50",
              "val": "-3.50"
            },
            "-4.50": {
              "text": "-4.50",
              "val": "-4.50"
            },
            "-6.00": {
              "text": "-6.00",
              "val": "-6.00"
            },
            "-8.00": {
              "text": "-8.00",
              "val": "-8.00"
            }
          },
        },
        "r_loop_positive_num": {
          "name_cn": "右眼正片次数",
          "value": {
            "1": {
              "text": "1",
              "val": "1"
            },
            "2": {
              "text": "2",
              "val": "2"
            },
            "3": {
              "text": "3",
              "val": "3"
            },
            "4": {
              "text": "4",
              "val": "4"
            },
            "5": {
              "text": "5",
              "val": "5"
            },
            "6": {
              "text": "6",
              "val": "6"
            },
            "7": {
              "text": "7",
              "val": "7"
            },
            "8": {
              "text": "8",
              "val": "8"
            },
            "9": {
              "text": "9",
              "val": "9"
            },
            "10": {
              "text": "10",
              "val": "10"
            }
          }
        },
        "r_loop_negative_num": {
          "name_cn": "右眼负片次数",
          "value": {
            "1": {
              "text": "1",
              "val": "1"
            },
            "2": {
              "text": "2",
              "val": "2"
            },
            "3": {
              "text": "3",
              "val": "3"
            },
            "4": {
              "text": "4",
              "val": "4"
            },
            "5": {
              "text": "5",
              "val": "5"
            },
            "6": {
              "text": "6",
              "val": "6"
            },
            "7": {
              "text": "7",
              "val": "7"
            },
            "8": {
              "text": "8",
              "val": "8"
            },
            "9": {
              "text": "9",
              "val": "9"
            },
            "10": {
              "text": "10",
              "val": "10"
            }
          }
        },

      }
    },



    currentModel: "",
    originSchemes: [],
    modifyIndex: 0,
    modifyItem: {},
    schemes: [],
    total_train_time: 0,
    tj_train_time: 0,
    js_train_time: 0,
    other_train_time: 0,



  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this;
    console.log(options);
    wx.showLoading({
      title: '数据加载中...',
      mask: true
    })
    wx.request({
      url: currentApp.url_config.HTTP_URL2 + '/store/v1/api/obstacle_scheme/list',
      method: 'GET',
      data: {
        os: 'xiaochengxu',
        obstacle_id: options.presc_id,
        app_version: '1.0.0'
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'cookie': wx.getStorageSync("sessionid")
      },
      success(res) {
        console.log(res.data);
        if (res.data.respcd == '0000') {
          let schemesTempArray = [];
          let schemesTemp = res.data.data.schemes;
          that.setData({
            originSchemes: schemesTemp
          })
          that.handlePrescData(schemesTemp);
          // for (let i = 0; i < schemesTemp.length; i++){
          //   let item = JSON.parse(JSON.stringify(schemesTemp[i]));
          //   let params = JSON.parse(item.params);
          //   console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
          //   console.log(params);
          //   let name = params.name;
          //   let prescription = that.data.prescription[name];
          //   if (name.indexOf("FlipBeat") >= 0){
          //     prescription = that.data.prescription["FlipBeat"];
          //   }
          //   console.log("#############################")
          //   let prescAllKeys = Object.keys(params.presc);

          //   let index = prescAllKeys.indexOf("repeat_training_times")
          //   prescAllKeys.splice(index, 1);
          //   item.presc_item_keys = prescAllKeys;

          //   let descArray = [];
          //   console.log(prescAllKeys);
          //   for(let m = 0; m < prescAllKeys.length; m++){
          //     let key = prescAllKeys[m];
          //     let valueObj = prescription[key];
          //     console.log(valueObj);
          //     let val = params.presc[key] + '';
          //     console.log("val = " + val)
          //     let valueItemObj = valueObj.value[val];
          //     console.log(valueItemObj);
          //     let name_cn = valueObj.name_cn;
          //     descArray.push(name_cn + ": " + valueItemObj.text);
          //     console.log("------------------------------------")
          //   }
          //   item.presc_item_desc = descArray;
          //   schemesTempArray.push(item);
          // }
          // that.setData({
          //   schemes: schemesTempArray,
          // })
        }
      },
      complete() {
        console.log("complete");
        wx.hideLoading();
      }
    });
  },
  handlePrescData: function(schemesTemp) {
    let that = this;
    let schemesTempArray = [];
    // let schemesTemp = res.data.data.schemes;
    for (let i = 0; i < schemesTemp.length; i++) {
      let item = JSON.parse(JSON.stringify(schemesTemp[i]));
      let params = JSON.parse(item.params);
      console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
      console.log(params);
      let name = params.name;
      let prescription = that.data.prescription[name];
      if (name.indexOf("FlipBeat") >= 0) {
        prescription = that.data.prescription["FlipBeat"];
      }
      console.log("#############################")
      let prescAllKeys = Object.keys(params.presc);

      let index = prescAllKeys.indexOf("repeat_training_times")
      prescAllKeys.splice(index, 1);
      item.presc_item_keys = prescAllKeys;

      let descArray = [];
      console.log(prescAllKeys);
      for (let m = 0; m < prescAllKeys.length; m++) {
        let key = prescAllKeys[m];
        let valueObj = prescription[key];
        console.log(valueObj);
        let val = params.presc[key] + '';
        console.log("val = " + val)
        let valueItemObj = valueObj.value[val];
        console.log(valueItemObj);
        let name_cn = valueObj.name_cn;
        descArray.push(name_cn + ": " + valueItemObj.text);
        console.log("------------------------------------")
      }
      item.presc_item_desc = descArray;
      schemesTempArray.push(item);
    }

    // that.data.schemes = schemesTempArray
    that.setData({
      schemes: schemesTempArray,
    })

    that.calculateTime();


  },
  calculateTime() {


    console.log("#######------>");
    console.log(this.data.schemes);
    console.log("#######------>");

    /**
     * 调节项目包含调节右眼、调节左眼、调节双眼；聚散项目包括远融像初、中、高级；近融像；动态融像初、高级；静态融像初、高级；生理性复视和三联动
     * 
     * 项目itemid:
     * 11-调节双眼训练,12-调节左眼训练,13-调节右眼训练,14-静态融像初级训练,15-静态融像高级训练,16-动态融像初级训练,17-动态融像高级训练,18-近融像训练,19-远融像初级训练,20-远融像中级训练,21-远融像高级训练,22-扫视训练,23-追随训练,24-脱抑制初级训练,25-脱抑制中级训练,26-生理性复视训练,27-三联动训练,
     */






    this.data.total_train_time = 0;
    this.data.tj_train_time = 0;
    this.data.js_train_time = 0;
    this.data.other_train_time = 0;
    for (let i = 0; i < this.data.schemes.length; i++) {
      let item_data = this.data.schemes[i];

      let itemid = parseInt(item_data.item_id);
      switch (itemid) {
        case 11:

          this.data.total_train_time += item_data.count * 5;
          this.data.tj_train_time += item_data.count * 5;
          break;
        case 12:
          this.data.total_train_time += item_data.count * 5;
          this.data.tj_train_time += item_data.count * 5;
          break;
        case 13:
          this.data.total_train_time += item_data.count * 5;
          this.data.tj_train_time += item_data.count * 5;
          break;
        case 14:
          this.data.total_train_time += item_data.count * 5;

          this.data.js_train_time += item_data.count * 5;
          break;
        case 15:
          this.data.total_train_time += item_data.count * 5;
          this.data.js_train_time += item_data.count * 5;
          break;
        case 16:
          this.data.total_train_time += item_data.count * 5;
          this.data.js_train_time += item_data.count * 5;
          break;
        case 17:
          this.data.total_train_time += item_data.count * 5;
          this.data.js_train_time += item_data.count * 5;
          break;
        case 18:
          this.data.total_train_time += item_data.count * 5;
          this.data.js_train_time += item_data.count * 5;
          break;
        case 19:
          this.data.total_train_time += item_data.count * 5;
          this.data.js_train_time += item_data.count * 5;
          break;
        case 20:
          this.data.total_train_time += item_data.count * 5;
          this.data.js_train_time += item_data.count * 5;
          break;
        case 21:
          this.data.total_train_time += item_data.count * 5;
          this.data.js_train_time += item_data.count * 5;
          break;
        case 22:
          this.data.total_train_time += item_data.count * 2;
          break;
        case 23:
          this.data.total_train_time += item_data.count * 5;
          break;
        case 24:
          this.data.total_train_time += item_data.count * 5;
          break;
        case 25:
          this.data.total_train_time += item_data.count * 5;
          break;
        case 26:
          this.data.total_train_time += item_data.count * 5;
          this.data.js_train_time += item_data.count * 5;
          break;
        case 27:
          this.data.total_train_time += item_data.count * 3;
          this.data.js_train_time += item_data.count * 3;
          break;
        default:
          break;
      }



    }


    this.data.other_train_time = this.data.total_train_time - this.data.tj_train_time - this.data.js_train_time;

    this.setData({
      total_train_time: this.data.total_train_time,
      tj_train_time: this.data.tj_train_time,
      js_train_time: this.data.js_train_time,
      other_train_time: this.data.other_train_time,
    })

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
    console.log("$$$$$$$$$$$$$$$$$$$$$")
    if (this.data.currentModel == 'add') {
      let prescTemp = currentApp.globalData.tempAddPresciption;
      let name = prescTemp.params.name;
      let info = this.data.prescription[name];
      if (name.indexOf("FlipBeat") >= 0) {
        info = this.data.prescription["FlipBeat"];
        if (name.indexOf("FlipBeat_d") >= 0) {
          info.name = "调节双眼训练";
        } else if (name.indexOf("FlipBeat_l") >= 0) {
          info.name = "调节左眼训练";
        } else if (name.indexOf("FlipBeat_r") >= 0) {
          info.name = "调节右眼训练";
        }
      }
      let createPrescItem = {
        count: prescTemp.params.presc.repeat_training_times,
        obstacle_id: 1,
        item_name: info.name,
        order_num: 2,
        item_id: prescTemp.item_id,
        params: JSON.stringify(prescTemp.params)
      }
      let originScm = JSON.parse(JSON.stringify(this.data.originSchemes));
      originScm.push(createPrescItem);
      this.handlePrescData(originScm);
    } else if (this.data.currentModel == 'modify') {
      let prescTemp = currentApp.globalData.tempAddPresciption;
      let originScm = JSON.parse(JSON.stringify(this.data.originSchemes));
      let mIndex = this.data.modifyIndex;
      originScm[mIndex].count = prescTemp.params.presc.repeat_training_times;
      originScm[mIndex].params = JSON.stringify(prescTemp.params)
      this.handlePrescData(originScm);
    }
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

  },
  prescAllKeys: function(item) {
    let allKeys = Object.keys(item.params.presc);
    console.log(allKeys);
    return allKeys;
  },
  goPrescSetting: function() {
    this.setData({
      currentModel: "add",
    })
    wx.navigateTo({
      url: '/pages/prescription_setting/index',
    })
  },
  downAction: function(e) {
    console.log(e)
    let schemeIndex = e.currentTarget.dataset.schemeindex;
    console.log(schemeIndex);
    if (schemeIndex == this.data.schemes.length - 1) {
      wx.showToast({
        icon: 'none',
        title: '已经是最后一个训练项目',
      })
    } else {
      let schemes = JSON.parse(JSON.stringify(this.data.schemes));
      let scItem = JSON.parse(JSON.stringify(schemes[schemeIndex]));
      schemes.splice(schemeIndex, 1); //删除当前index对应的Item
      schemes.splice(schemeIndex + 1, 0, scItem);
      this.setData({
        schemes: schemes
      })
    }
  },
  upAction: function(e) {
    let schemeIndex = e.currentTarget.dataset.schemeindex;
    console.log(schemeIndex);
    if (schemeIndex == 0) {
      wx.showToast({
        icon: 'none',
        title: '已经是第一个训练项目',
      })
    } else {
      let schemes = JSON.parse(JSON.stringify(this.data.schemes));
      let scItem = JSON.parse(JSON.stringify(schemes[schemeIndex]));
      schemes.splice(schemeIndex, 1); //删除当前index对应的Item
      schemes.splice(schemeIndex - 1, 0, scItem);
      this.setData({
        schemes: schemes
      })
    }
  },
  deleteAction: function(e) {
    let schemeIndex = e.currentTarget.dataset.schemeindex;
    let schemes = JSON.parse(JSON.stringify(this.data.schemes));
    schemes.splice(schemeIndex, 1); //删除当前index对应的Item
    this.setData({
      schemes: schemes
    })
  },
  rowHeadAction: function(e) {
    console.log(e)
    let schemeIndex = e.currentTarget.dataset.schemeindex;
    let scheme = e.currentTarget.dataset.schemeitem;
    this.setData({
      modifyIndex: schemeIndex,
      modifyItem: scheme,
    })
    console.log(scheme);
    // 所有的属性key
    let keys = scheme.presc_item_keys;
    console.log(keys);
    // 详情
    let params = JSON.parse(scheme.params);
    console.log(params);

    let name = params.name;
    console.log(name);

    let presc = this.data.prescription[name];
    if (name.indexOf("FlipBeat") >= 0) {
      presc = this.data.prescription["FlipBeat"];
    }
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&");
    console.log(presc);
    let selectParam = {
      name: name
    }
    for (let i = 0; i < keys.length; i++) {
      let k = keys[i];
      let attrVal = params.presc[k] + "";
      console.log(attrVal);
      let select = presc[k].value[attrVal];
      selectParam[k] = select;
    }
    selectParam.repeat_training_times = scheme.count;
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&");
    console.log(selectParam);
    currentApp.globalData.selectPrescItem = selectParam;
    this.setData({
      currentModel: "modify",
    })
    wx.navigateTo({
      url: '/pages/prescription_setting/index',
    })
  },
  prescSaveRequest: function() {
    let that = this;
    console.log(this.data.schemes);
    let selectedCurUserid = currentApp.globalData.selectedUserInfo.userid;
    // if(this.data.schemes && this.data.schemes.length > 0){
    let paramsArray = new Array();
    for (let i = 0; i < this.data.schemes.length; i++) {
      let prescItem = {
        userid: selectedCurUserid,
      }
      let sc = this.data.schemes[i];
      prescItem.item_id = sc.item_id;
      prescItem.params = JSON.parse(sc.params);
      console.log(prescItem);
      paramsArray.push(prescItem);
    }
    // }
    console.log(paramsArray);
    let u_id = wx.getStorageSync("userid");
    wx.showLoading({
      title: '请稍后...',
    })
    wx.request({
      url: currentApp.url_config.HTTP_URL1 + '/store/v2/api/presc_info',
      method: 'POST',
      data: {
        prescriptions: JSON.stringify(paramsArray),
        op_userid: u_id,
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
          wx.showModal({
            title: '提示',
            showCancel: false,
            confirmColor: '#4185de',
            content: '保存成功',
            success(res) {
              if (res.confirm) {

              } else if (res.cancel) {

              }
            }
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

        } else {
          wx.showToast({
            title: res.data.resperr,
            icon: 'none'
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