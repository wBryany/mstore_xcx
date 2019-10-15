// var app = getApp();
// var that;
// var windowWidth = null;
// var ratio = null;
import * as echarts from '../../ec-canvas/echarts';

function initChar(chart) {
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'line' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      data: ['第一次', '第二次', '第三次'],
      show: false
    },
    grid: {
      width: '90%',
      left: '4%',
      height: '80%',
      top: '16%',
      containLabel: true,
    },
    dataZoom: [{
      type: 'inside',
      start: 0,
      end: 100,
      filterMode: 'fliter',
    }],
    xAxis: {
      type: 'category',
      boundaryGap: true,
      axisLabel: {
        color: '#666666'
      },
      axisLine: {
        lineStyle: {
          color: '#EEEEEE'
        }
      },
      data: [],
      axisPointer: {
        label: {
          formatter: function(params) {
            console.log(params)
            let current = getCurrentPages()[0];
            current.setData({
              selectDate: params.seriesData[0].dataIndex,
              seriesData: params.seriesData,
              showMess: true
            })
          }
        }
      }
    },
    yAxis: {
      type: 'value',
      name: '时长',
      nameLocation: 'end',
      nameTextStyle: {
        align: 'left'
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#666666'
      },
      splitLine: {
        lineStyle: {
          color: '#EEEEEE'
        }
      },
      nameGap: 10
    },
    seires: [

    ]
  };
  chart.setOption(option);
}
var wxCharts = require('../../utils/wxcharts.js');
var util = require('../../utils/util.js')
var app = getApp();
var lineChart = null;
var startPos = null;
var scrollTop = 0;
Page({
  data: {

    mydata: {},
    myuserid: '',
    ec: {
      lazyLoad: true
    },
    uyu_nick_name: '',
    userInfo: {},
    train_date: [],
    total_nums: 0,
    //总次数
    remain_nums: 0,
    //剩余次数
    use_nums: 0,
    //已使用次数
    total_times: 0,
    //总训练时长
    selectDate: 0,
    showMess: false,
    // hideScan:false,
    windowWidth: 320,
    lineChartHeight: 0,
    allScoreNodeWidth: 1000,
    scoreItemNodeArr: [],
    scoreType: 0,
    singleScoreOffetTop: '',
    //单项的分板块距离页面顶部距离
    singleScoreFiexd: false,
    //单项得分项目信息是否固定在页面顶部
    singleScoreScrollLeft: '',
    singleScoreScroll_timer: null,
    //滚动结束后自动调整位置
    singleScoreMaxLength: 0,
    //最多的训练次数
    singleScoreObj: {
      fanzhuan: {
        name: '调节',
        level: '',
        len: 3,
        classify: {
          fanzhuan_r: {
            name: '右眼',
            data: []
          },
          fanzhuan_l: {
            name: '左眼',
            data: []
          },
          fanzhuan_b: {
            name: '双眼',
            data: []
          }
        }
      },
      l_rgkebian: {
        name: '动态融像',
        level: '初级',
        levelColor: '#ffcc00',
        len: 2,
        classify: {
          l_rgkebian_bi: {
            name: 'BI',
            data: []
          },
          l_rgkebian_bo: {
            name: 'BO',
            data: []
          }
        }
      },
      h_rgkebian: {
        name: '动态融像',
        level: '高级',
        levelColor: '#ff3c00',
        len: 3,
        classify: {
          h_rgkebian_bi: {
            name: '散开',
            data: []
          },
          h_rgkebian_bo: {
            name: '集合',
            data: []
          },
          h_rgkebian_io: {
            name: '平衡',
            data: []
          }
        }
      },
      fushi: {
        name: '生理性复视',
        level: '',
        levelColor: '',
        len: 1,
        classify: {
          fushi: {
            name: '',
            data: []
          }
        }
      },
      l_liti: {
        name: '远融像',
        level: '初级',
        levelColor: '#ffcc00',
        len: 2,
        classify: {
          l_liti_bi: {
            name: 'BI',
            data: []
          },
          l_liti_bo: {
            name: 'BO',
            data: []
          }
        }
      },
      m_liti: {
        name: '远融像',
        level: '中级',
        levelColor: '#ff9600',
        len: 2,
        classify: {
          m_liti_bi: {
            name: 'BI',
            data: []
          },
          m_liti_bo: {
            name: 'BO',
            data: []
          }
        }
      },
      h_liti: {
        name: '远融像',
        level: '高级',
        levelColor: '#ff3c00',
        len: 3,
        classify: {
          h_liti_bi: {
            name: '散开',
            data: []
          },
          h_liti_bo: {
            name: '集合',
            data: []
          },
          h_liti_io: {
            name: '平衡',
            data: []
          }
        }
      },
      l_rgguding: {
        name: '静态融像',
        level: '初级',
        levelColor: '#ffcc00',
        len: 2,
        classify: {
          l_rgguding_bi: {
            name: 'BI',
            data: []
          },
          l_rgguding_bo: {
            name: 'BO',
            data: []
          }
        }
      },
      h_rgguding: {
        name: '静态融像',
        level: '高级',
        levelColor: '#ff3c00',
        len: 3,
        classify: {
          h_rgguding_bi: {
            name: '散开',
            data: []
          },
          h_rgguding_bo: {
            name: '集合',
            data: []
          },
          h_rgguding_io: {
            name: '平衡',
            data: []
          }
        }
      },
      liexi: {
        name: '近融像',
        level: '',
        levelColor: '',
        len: 2,
        classify: {
          liexi_bi: {
            name: 'BI',
            data: []
          },
          liexi_bo: {
            name: 'BO',
            data: []
          }
        }
      },
      l_rgread: {
        name: '脱抑制',
        level: '初级',
        levelColor: '#ffcc00',
        len: 1,
        classify: {
          l_rgread: {
            name: '',
            data: []
          }
        }
      },
      m_rgread: {
        name: '脱抑制',
        level: '中级',
        levelColor: '#ff9600',
        len: 1,
        classify: {
          m_rgread: {
            name: '',
            data: []
          }
        }
      },
      saoshi: {
        name: '扫视',
        level: '',
        levelColor: '',
        len: 1,
        classify: {
          saoshi: {
            name: '',
            data: []
          }
        }
      },
      tuijin: {
        name: '三联动',
        level: '',
        levelColor: '',
        len: 1,
        classify: {
          tuijin: {
            name: '',
            data: []
          }
        }
      },
      zhuisui: {
        name: '追随',
        level: '',
        len: 3,
        classify: {
          zhuisui_qu: {
            name: '曲线',
            data: []
          },
          zhuisui_xu: {
            name: '虚线',
            data: []
          },
          zhuisui_zhe: {
            name: '折线',
            data: []
          }
        }
      }
    }
  },
  emptyHandle: function() {
    // 空事件 屏蔽scroll-view的触摸事件 防止穿透
  },
  scanHandle: function() {
    wx.scanCode({
      success: (res) => {
        console.log(res);
        let newStr = res.result.replace('https://api.uyu.com/v1/wx/t/', 'https://api.uyu.com/v1/wp/t/');
        //线上
        // let newStr = res.result.replace('http://weixin.zmuchi.cn/v1/wx/t/','http://weiapp.zmuchi.cn/v1/wp/t/');
        //测试
        console.log(newStr);
        wx.request({
          url: newStr, //
          data: {
            userid: app.globalData.traincenter_userid
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: function(res) {
            // console.log(res.data);
            if (res.data.respcd == '0000') {
              wx.showToast({
                title: '开始训练',
                icon: 'success',
                duration: 2000
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
                title: '创建失败',
                image: '../../image/fail.png',
                duration: 2000
              });
            }
          }
        })
      }
    })
  },

  onReady: function() {
    // 获取组件
    // console.log('ready');
    var that = this;
    that.originOnReadyMethod();
    // if (!app.globalData.userId || !app.globalData.uyu_phone_num) {
    //   // 没有登录就没有获取到userId 尝试调用auth接口看是否能登录成功，不成功就跳登录页面
    //   wx.showLoading({
    //     title: '拼命登陆中',
    //     mask: true
    //   });
    //   wx.login({
    //     success: function (res) {
    //       wx.request({
    //         url: 'https://api.uyu.com/v1/wp/user_auth',//
    //         data: {
    //           code: res.code,
    //           baipai_id: '1'
    //         },
    //         method: 'POST',
    //         header: {
    //           'content-type': 'application/x-www-form-urlencoded'//
    //         },
    //         success: function (res) {
    //           wx.hideLoading();
    //           // console.log(res.data);
    //           app.globalData.openId = res.data.data.openid;
    //           // console.log(app.globalData.openId);
    //           app.getUserInfo(function (userInfo) {
    //             //更新数据
    //             that.setData({
    //               userInfo: userInfo
    //             })
    //           })
    //           if (res.data.respcd == '0000') {
    //             app.globalData.birth_day = res.data.data.birth_day;
    //             app.globalData.uyu_nick_name = res.data.data.nick_name;
    //             app.globalData.uyu_gender = res.data.data.sex;
    //             app.globalData.uyu_phone_num = res.data.data.phone_num;
    //             app.globalData.userId = res.data.data.id;
    //             wx.showToast({
    //               title: '登录成功',
    //               icon: 'success',
    //               duration: 1000
    //             });
    //             that.originOnReadyMethod();
    //           } else {
    //             wx.reLaunch({
    //               url: "/pages/login/login"
    //             })
    //             return;
    //           }
    //         }
    //       })
    //     }
    //   })
    // } else {
    //   that.originOnReadyMethod();
    // }
  },
  originOnReadyMethod: function() {
    let that = this;
    this.ecComponent = this.selectComponent('#mychart-dom-bar');
    wx.createSelectorQuery().select('.chart_container').fields({
      dataset: true,
      size: true,
      scrollOffset: true,
      properties: ['scrollX', 'scrollY']
    }, function(res) {
      that.setData({
        lineChartHeight: res.height
      })
      that.drawLineChart(['1-1'], [0])
      wx.request({
        url: 'https://api.uyu.com/v1/wp/user_record',
        // url: 'http://app.uyu.com:11000/v2/wp/user_record',
        data: {


          userid: app.globalData.traincenter_userid,
          // userid:1059935,
          datatype: that.data.scoreType
        },
        header: {
          'content-type': 'application/json' //
        },
        success: function(res) {
          // console.log(res)
          wx.hideLoading();
          that.data.mydata = res.data.data;

          if (res.data.data.all_single_scores.length > 0) {
            let obj = res.data.data.all_single_scores[res.data.data.all_single_scores.length - 1];
            let maxLength = that.data.singleScoreMaxLength;
            for (let i in obj) {
              // console.log(obj[i].length)
              maxLength = obj[i].length > maxLength ? obj[i].length : maxLength;
            }

            that.setData({
              singleScoreMaxLength: maxLength
            });
            that.setData({
              'singleScoreObj.fanzhuan.classify.fanzhuan_r.data': obj.fanzhuan_r,
              'singleScoreObj.fanzhuan.classify.fanzhuan_l.data': obj.fanzhuan_l,
              'singleScoreObj.fanzhuan.classify.fanzhuan_b.data': obj.fanzhuan_b,
              'singleScoreObj.l_rgkebian.classify.l_rgkebian_bi.data': obj.l_rgkebian_bi,
              'singleScoreObj.l_rgkebian.classify.l_rgkebian_bo.data': obj.l_rgkebian_bo,
              'singleScoreObj.h_rgkebian.classify.h_rgkebian_bi.data': obj.h_rgkebian_bi,
              'singleScoreObj.h_rgkebian.classify.h_rgkebian_bo.data': obj.h_rgkebian_bo,
              'singleScoreObj.h_rgkebian.classify.h_rgkebian_io.data': obj.h_rgkebian_io,
              'singleScoreObj.fushi.classify.fushi.data': obj.fushi,
              'singleScoreObj.l_liti.classify.l_liti_bi.data': obj.l_liti_bi,
              'singleScoreObj.l_liti.classify.l_liti_bo.data': obj.l_liti_bo,

              'singleScoreObj.m_liti.classify.m_liti_bo.data': obj.m_liti_bo,
              'singleScoreObj.m_liti.classify.m_liti_bi.data': obj.m_liti_bi,

              'singleScoreObj.h_liti.classify.h_liti_bo.data': obj.h_liti_bo,
              'singleScoreObj.h_liti.classify.h_liti_bi.data': obj.h_liti_bi,
              'singleScoreObj.h_liti.classify.h_liti_io.data': obj.h_liti_io,
              'singleScoreObj.l_rgguding.classify.l_rgguding_bi.data': obj.l_rgguding_bi,
              'singleScoreObj.l_rgguding.classify.l_rgguding_bo.data': obj.l_rgguding_bo,
              'singleScoreObj.h_rgguding.classify.h_rgguding_bi.data': obj.h_rgguding_bi,
              'singleScoreObj.h_rgguding.classify.h_rgguding_bo.data': obj.h_rgguding_bo,
              'singleScoreObj.h_rgguding.classify.h_rgguding_io.data': obj.h_rgguding_io,
              'singleScoreObj.liexi.classify.liexi_bi.data': obj.liexi_bi,
              'singleScoreObj.liexi.classify.liexi_bo.data': obj.liexi_bo,
              'singleScoreObj.l_rgread.classify.l_rgread.data': obj.l_rgread,
              'singleScoreObj.m_rgread.classify.m_rgread.data': obj.m_rgread,
              'singleScoreObj.saoshi.classify.saoshi.data': obj.saoshi,
              'singleScoreObj.tuijin.classify.tuijin.data': obj.tuijin,
              'singleScoreObj.zhuisui.classify.zhuisui_qu.data': obj.zhuisui_qu,
              'singleScoreObj.zhuisui.classify.zhuisui_xu.data': obj.zhuisui_xu,
              'singleScoreObj.zhuisui.classify.zhuisui_zhe.data': obj.zhuisui_zhe,
            })
          }

          let dateArr = res.data.data.all_score.ctime;
          let dataArr = res.data.data.all_score.score;
          that.drawLineChart(dateArr, dataArr)
        },
        complete: function() {
          wx.hideNavigationBarLoading(); //完成停止加载
          wx.stopPullDownRefresh(); //停止下拉刷新
        }
      })
    }).exec();
    //
    wx.createSelectorQuery().selectAll('.train_items_slider .item').boundingClientRect(function(rect) {
      // console.log(rect)
      let width = 0;
      for (let i = 0; i < rect.length; i++) {
        width += rect[i].width
      }
      for (let i = 0; i < rect.length - 1; i++) {
        width += (that.data.windowWidth / 750) * 55;
      }
      that.setData({
        allScoreNodeWidth: width,
        scoreItemNodeArr: rect
      })
    }).exec()
    //    获取所有项目的节点信息
    wx.createSelectorQuery().select('.singleScore_wrap').boundingClientRect(function(rect) {
      // console.log(rect)
      that.setData({
        singleScoreOffetTop: rect.top
      })
    }).exec()
  },
  toreportPage() {
    wx.navigateTo({
      url: '../report_webview/index?userid=' + this.data.myuserid
    })
  },
  /*
   * 页面scroll事件
   * */
  onPageScroll: function(e) {
    let num = e.scrollTop;
    if (num >= this.data.singleScoreOffetTop) {
      if (this.data.singleScoreFiexd == false) {
        this.setData({
          singleScoreFiexd: true
        })
      }
    } else {
      if (this.data.singleScoreFiexd == true) {
        this.setData({
          singleScoreFiexd: false
        })
      }
    }
    if (num <= 20) {
      this.setData({
        hideScan: false
      })
    } else {
      this.setData({
        hideScan: true
      })
    }
  },
  /*
   * 得分区横向滚动事件
   * */
  scoreScrollHandle: function(e) {
    this.setData({
      singleScoreScrollLeft: e.detail.scrollLeft
    })
  },
  touchHandler: function(e) {
    lineChart.scrollStart(e);
  },
  moveHandler: function(e) {
    lineChart.scroll(e);
  },
  touchEndHandler: function(e) {
    let _this = this;
    lineChart.scrollEnd(e);
    lineChart.showToolTip(e, {
      format: function(item, category) {
        _this.setsingleScoreData(category);

        return category + ' ' + item.name + ':' + item.data
      }
    });


  },
  setsingleScoreData(time) {
    let timearray = this.data.mydata.all_score.ctime;
    let index = -1;
    for (let i = 0; i < timearray.length; i++) {
      if (timearray[i] == time) {
        index = i;
        break;
      }
    }
    if (this.data.mydata.all_single_scores.length>0){
      let obj=this.data.mydata.all_single_scores[index];
      this.setData({
        'singleScoreObj.fanzhuan.classify.fanzhuan_r.data': obj.fanzhuan_r,
        'singleScoreObj.fanzhuan.classify.fanzhuan_l.data': obj.fanzhuan_l,
        'singleScoreObj.fanzhuan.classify.fanzhuan_b.data': obj.fanzhuan_b,
        'singleScoreObj.l_rgkebian.classify.l_rgkebian_bi.data': obj.l_rgkebian_bi,
        'singleScoreObj.l_rgkebian.classify.l_rgkebian_bo.data': obj.l_rgkebian_bo,
        'singleScoreObj.h_rgkebian.classify.h_rgkebian_bi.data': obj.h_rgkebian_bi,
        'singleScoreObj.h_rgkebian.classify.h_rgkebian_bo.data': obj.h_rgkebian_bo,
        'singleScoreObj.h_rgkebian.classify.h_rgkebian_io.data': obj.h_rgkebian_io,
        'singleScoreObj.fushi.classify.fushi.data': obj.fushi,
        'singleScoreObj.l_liti.classify.l_liti_bi.data': obj.l_liti_bi,
        'singleScoreObj.l_liti.classify.l_liti_bo.data': obj.l_liti_bo,

        'singleScoreObj.m_liti.classify.m_liti_bo.data': obj.m_liti_bo,
        'singleScoreObj.m_liti.classify.m_liti_bi.data': obj.m_liti_bi,

        'singleScoreObj.h_liti.classify.h_liti_bo.data': obj.h_liti_bo,
        'singleScoreObj.h_liti.classify.h_liti_bi.data': obj.h_liti_bi,
        'singleScoreObj.h_liti.classify.h_liti_io.data': obj.h_liti_io,
        'singleScoreObj.l_rgguding.classify.l_rgguding_bi.data': obj.l_rgguding_bi,
        'singleScoreObj.l_rgguding.classify.l_rgguding_bo.data': obj.l_rgguding_bo,
        'singleScoreObj.h_rgguding.classify.h_rgguding_bi.data': obj.h_rgguding_bi,
        'singleScoreObj.h_rgguding.classify.h_rgguding_bo.data': obj.h_rgguding_bo,
        'singleScoreObj.h_rgguding.classify.h_rgguding_io.data': obj.h_rgguding_io,
        'singleScoreObj.liexi.classify.liexi_bi.data': obj.liexi_bi,
        'singleScoreObj.liexi.classify.liexi_bo.data': obj.liexi_bo,
        'singleScoreObj.l_rgread.classify.l_rgread.data': obj.l_rgread,
        'singleScoreObj.m_rgread.classify.m_rgread.data': obj.m_rgread,
        'singleScoreObj.saoshi.classify.saoshi.data': obj.saoshi,
        'singleScoreObj.tuijin.classify.tuijin.data': obj.tuijin,
        'singleScoreObj.zhuisui.classify.zhuisui_qu.data': obj.zhuisui_qu,
        'singleScoreObj.zhuisui.classify.zhuisui_xu.data': obj.zhuisui_xu,
        'singleScoreObj.zhuisui.classify.zhuisui_zhe.data': obj.zhuisui_zhe,
      })



    }
  
  },
  /*
   * 绘制训练进度环
   * */
  drawRing: function(ctx, width, height, use_nums, total_times) {
    ctx.arc(width / 2, height / 2, width * 0.30, 0, 2 * Math.PI);
    ctx.setStrokeStyle('#f5f5f5');
    ctx.setLineWidth(width / 15);
    ctx.stroke();
    ctx.draw();
    var ratio = 0;
    if (use_nums == 0 && total_times == 0) {
      ratio = 0;
    } else {
      ratio = (use_nums / total_times);
    }
    let radian = (ratio * 360) * Math.PI / 180;
    ctx.arc(width / 2, height / 2, width * 0.30, -0.5 * Math.PI, radian - 0.5 * Math.PI);
    var gd = [
      // 100 / 2 * (1 - Math.cos(-0.5* Math.PI)), // x0
      // 100 / 2 * (1 + Math.sin(-0.5* Math.PI)), // y0
      // 100 / 2 * (1 + Math.cos(-0.5* Math.PI)), // x1
      // 100 / 2 * (1 - Math.sin(-0.5* Math.PI))  // y1
      0, 0, 90, 0
    ]
    var lg = ctx.createLinearGradient.apply(ctx, gd);
    lg.addColorStop(0, "#FFD3BE");
    lg.addColorStop(1, "#FF7548");
    ctx.setStrokeStyle(lg);
    ctx.setLineWidth(width / 15);
    ctx.setLineCap('round');
    ctx.stroke();
    ctx.draw(true);
    ctx.setFontSize(24);
    ctx.setFillStyle('#f26d3f');
    ctx.setTextAlign('center');
    ctx.setTextBaseline('middle');
    ctx.fillText((ratio.toFixed(2) * 100).toFixed() + '%', width / 2, height / 2 - 10);
    ctx.setFontSize(13);
    ctx.fillText('训练进度', width / 2, height / 2 + 12);
    ctx.draw(true);
  },
  onShow: function(e) {
    // if (!app.globalData.userId || !app.globalData.uyu_phone_num) {
    //   // 没有登录就没有获取到userId 跳转到登录页面
    //   wx.reLaunch({
    //     url: "/pages/login/login"
    //   })
    //   return;
    // }
    var that = this;
    // that.setData({
    //   uyu_nick_name: app.globalData.uyu_nick_name
    // })
  },
  onLoad: function(e) {





    var that = this;
    console.log(e);
    this.data.myuserid = e.userid;
    app.globalData.traincenter_userid = this.data.myuserid;




    wx.showNavigationBarLoading();
    wx.showLoading({
      title: '数据加载中',
    });
    // app.getUserInfo(function (userInfo) {
    //     //更新数据
    //     that.setData({
    //         userInfo: userInfo
    //     })
    // });
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }
    that.setData({
      windowWidth: windowWidth
    })
  },
  /*
   * 选择要查看的得分类型
   * */
  selectType: function(e) {
    console.log(e)
    console.log("userid:" + app.globalData.traincenter_userid)
    var that = this;
    that.setData({
      scoreType: e.currentTarget.dataset.type
    });
    let scoreType = e.currentTarget.dataset.type;

    wx.showLoading({
      title: '数据加载中',
    });
    wx.request({
      url: 'https://api.uyu.com/v1/wp/user_record',
      data: {
        userid: app.globalData.traincenter_userid,
        // userid:1059935,
        datatype: scoreType
      },
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res.data);


  
        that.data.mydata = res.data.data;

        if (res.data.data.all_single_scores.length > 0) {
          let obj = res.data.data.all_single_scores[res.data.data.all_single_scores.length - 1];
          let maxLength = that.data.singleScoreMaxLength;
          for (let i in obj) {
            // console.log(obj[i].length)
            maxLength = obj[i].length > maxLength ? obj[i].length : maxLength;
          }

          that.setData({
            singleScoreMaxLength: maxLength
          });
          that.setData({
            'singleScoreObj.fanzhuan.classify.fanzhuan_r.data': obj.fanzhuan_r,
            'singleScoreObj.fanzhuan.classify.fanzhuan_l.data': obj.fanzhuan_l,
            'singleScoreObj.fanzhuan.classify.fanzhuan_b.data': obj.fanzhuan_b,
            'singleScoreObj.l_rgkebian.classify.l_rgkebian_bi.data': obj.l_rgkebian_bi,
            'singleScoreObj.l_rgkebian.classify.l_rgkebian_bo.data': obj.l_rgkebian_bo,
            'singleScoreObj.h_rgkebian.classify.h_rgkebian_bi.data': obj.h_rgkebian_bi,
            'singleScoreObj.h_rgkebian.classify.h_rgkebian_bo.data': obj.h_rgkebian_bo,
            'singleScoreObj.h_rgkebian.classify.h_rgkebian_io.data': obj.h_rgkebian_io,
            'singleScoreObj.fushi.classify.fushi.data': obj.fushi,
            'singleScoreObj.l_liti.classify.l_liti_bi.data': obj.l_liti_bi,
            'singleScoreObj.l_liti.classify.l_liti_bo.data': obj.l_liti_bo,

            'singleScoreObj.m_liti.classify.m_liti_bo.data': obj.m_liti_bo,
            'singleScoreObj.m_liti.classify.m_liti_bi.data': obj.m_liti_bi,

            'singleScoreObj.h_liti.classify.h_liti_bo.data': obj.h_liti_bo,
            'singleScoreObj.h_liti.classify.h_liti_bi.data': obj.h_liti_bi,
            'singleScoreObj.h_liti.classify.h_liti_io.data': obj.h_liti_io,
            'singleScoreObj.l_rgguding.classify.l_rgguding_bi.data': obj.l_rgguding_bi,
            'singleScoreObj.l_rgguding.classify.l_rgguding_bo.data': obj.l_rgguding_bo,
            'singleScoreObj.h_rgguding.classify.h_rgguding_bi.data': obj.h_rgguding_bi,
            'singleScoreObj.h_rgguding.classify.h_rgguding_bo.data': obj.h_rgguding_bo,
            'singleScoreObj.h_rgguding.classify.h_rgguding_io.data': obj.h_rgguding_io,
            'singleScoreObj.liexi.classify.liexi_bi.data': obj.liexi_bi,
            'singleScoreObj.liexi.classify.liexi_bo.data': obj.liexi_bo,
            'singleScoreObj.l_rgread.classify.l_rgread.data': obj.l_rgread,
            'singleScoreObj.m_rgread.classify.m_rgread.data': obj.m_rgread,
            'singleScoreObj.saoshi.classify.saoshi.data': obj.saoshi,
            'singleScoreObj.tuijin.classify.tuijin.data': obj.tuijin,
            'singleScoreObj.zhuisui.classify.zhuisui_qu.data': obj.zhuisui_qu,
            'singleScoreObj.zhuisui.classify.zhuisui_xu.data': obj.zhuisui_xu,
            'singleScoreObj.zhuisui.classify.zhuisui_zhe.data': obj.zhuisui_zhe,
          })
        }



        let dateArr = res.data.data.all_score.ctime;
        let dataArr = res.data.data.all_score.score;
        that.drawLineChart(dateArr, dataArr)
      },

      complete: function() {
        wx.hideLoading();
      }
    });
  },
  /*
   * 绘制折线图
   * */
  drawLineChart: function(dateArr, dataArr) {
    var that = this;
    lineChart = new wxCharts({
      canvasId: 'lineCanvas',
      type: 'area',
      categories: dateArr,

      animation: true,
      series: [{

        type: 'line',
        name: '得分',
        data: dataArr,
        color: '#4a90e2',
        format: function(val, name) {
          return val.toFixed(0) + '分';
        }
      }],
      xAxis: {
        disableGrid: false
      },
      yAxis: {
        // title: '得分',
        format: function(val) {
          return val.toFixed(0);
        },
        gridColor: '#EEEEEE',
        disabled: false,
        // gridColor:'red',
        min: 0
      },
      width: that.data.windowWidth,
      height: that.data.lineChartHeight,
      dataLabel: false, //是否在图表中显示数据内容值
      dataPointShape: true, //是否在图表中显示数据点图形标识
      enableScroll: true,
      legend: false, // 是否显示图表下方各类别的标识
      extra: {
        lineStyle: 'straight',

      }
    });
  },
  /*
   * 绘制柱状图
   * */
  drawHistogram: function(data) {
    var that = this;
    // console.log(data)
    this.ecComponent.init((canvas, width, height) => {
      // 获取组件的 canvas、width、height 后的回调函数
      // 在这里初始化图表
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      initChar(chart);
      // console.log(data.train_time)
      that.setData({
        train_date: data.train_time
      });
      let colorArr = ['#4eb679', '#f48057', '#4e4eb6', '#f5446e'];
      let newArr = data.every_times.map(function(p1, p2, p3) {
        let obj = {
          type: 'bar',
          barWidth: 5,
          stack: 'train',
          color: colorArr[p2 % 4]
        };
        obj.name = '第' + (p2 + 1) + '次';
        obj.data = p1;
        return obj;
      })
      // console.log(newArr);
      chart.setOption({
        xAxis: {
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']
        },
        series: newArr
      })
      this.chart = chart;
      this.setData({
        isLoaded: true,
        isDisposed: false
      });
      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return chart;
    });
  },
  /*
   * 下拉刷新
   * */
  onPullDownRefresh: function() {
    wx.showNavigationBarLoading(); //在标题栏中显示加载
    this.onReady();
    wx.showLoading({
      title: '数据加载中',
    });
  }
});