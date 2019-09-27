var app = getApp();
var lineChart0 = null;
var lineChart1 = null;
var lineChart2 = null;
var lineChart3 = null;
var that;
var globalss = null;
var medium = {};
var wxCharts = require('../../utils/wxcharts.js');
Page({
    data: {
        userInfo: {},
        uyu_nick_name:'',
        date: {
            bodyList: [],
            adjustArray: [],
            adjustHeight:0,
            activeIndex: 0,
            sliderOffset: 0,
            sliderLeft: 0,
            windowWidth: 320,
            canvasHeight:175,
            flag1: false,
            flag2: false,
            flag3: false,
            flag4: false,
            flag5: false,
            flag6: false,
            flag7: false,
            flag8: false,
            flag9: false,
            flag10: false,
            flag11: false,
            adjust_sensitive_r_flag: false,
            adjust_sensitive_l_flag: false,
            adjust_sensitive_b_flag: false
        },
        glasses: 0,//戴镜状态
        amplitude_result: 0,//调节幅度的参考值
        testData: {
            f_vision_r: '--',//远视力 右眼
            f_vision_l: '--',//左眼
            f_vision_b: '--',//双眼
            n_vision_r: '--',//近视力 右眼
            n_vision_l: '--',//左眼
            n_vision_b: '--',//双眼
            contrast_r: '--',//红绿对比 右
            contrast_l: '--',//左
            worth_f: '--',//worth4 远
            worth_n: '--',//近
            position_f: '--',//水平眼位 远
            position_n: '--',//近
            horizontal_dispersion_fbi: '--',//水平聚散 远bi
            horizontal_dispersion_fbo: '--',//远bo
            horizontal_dispersion_nbi: '--',//近bi
            horizontal_dispersion_nbo: '--',//近bo
            adjust_loss_r: '--',//负相对调节 右
            adjust_loss_l: '--',//左
            adjust_loss_b: '--',//双
            //正相对调节
            adjust_loss_pra_r:'--',
            adjust_loss_pra_l: '--',
            adjust_loss_pra_b: '--',
            adjust_range_r: '--',//调节幅度 右
            adjust_range_l: '--',//左
            adjust_range_b: '--',//双
            ac_a: '--',//ac/a
            overlapping: '--',//立体视交叉
            non_cross: '--',//立体视非交叉
            visual_acuity: '--',//立体视视锐度
            color_sense11: '--',//色觉红
            color_sense12: '--',//色觉绿
            adjust_sensitive_r: '',//调节灵活度 右眼周期数
            adjust_sensitive_l: '',//左眼周期数
            adjust_sensitive_b: '',//双眼周期数
            meetingparting: ''//聚散灵活度
        },
        flags: false
    },
    onPullDownRefresh: function () {
        wx.showNavigationBarLoading(); //在标题栏中显示加载
        this.onShow();
        wx.showLoading({
            title: '数据加载中',
        });
    },
    onPageScroll: function (e) {
        let num = e.scrollTop;
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
    onShow: function () {
      var that = this;

      that.originOnShowMethod();
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
      //           // app.globalData.openId = res.data.data.openid;
      //           // console.log(app.globalData.openId);
      //           // app.getUserInfo(function (userInfo) {
      //           //   //更新数据
      //           //   that.setData({
      //           //     userInfo: userInfo
      //           //   })
      //           // })
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
      //             that.originOnShowMethod();
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
      //   that.originOnShowMethod();
      // }
      
    },
    originOnShowMethod: function (){
      let that = this;
      that.setData({
        uyu_nick_name: app.globalData.uyu_nick_name,
      })

      wx.showLoading({
        title: '请稍后...',
        mask: true
      });
      wx.request({
        // url: 'https://api.uyu.com/v1/wp/insp_list', //一代检查结果
        url: 'https://api.uyu.com/v1/wp/second_result',
        data: {
          page: 1,
          size: 30,
          // userid: app.globalData.userId
          userid: 1036387
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log("66666666666666666666666666666666666666666")
          console.log(res);
          console.log("66666666666666666666666666666666666666666")
          if (res.statusCode == 200 && res.data.respcd == '0000' && res.data.data.trains.length > 0) {
            var apm = res.data.data.amplitude_result;
            that.setData({
              flags: true,
              amplitude_result: apm
            })
            wx.hideLoading();
            var allResult = res.data.data.trains;//区分是检查数据还是训练数据
            globalss = allResult;
            that.data.date.bodyList = [];//置空存放日期的数组 用于更新数据
            that.getDate(globalss);//生成日期
            that.renderData(globalss);//渲染数据
          } else {
            that.setData({
              flags: false
            });
            wx.showToast({
              title: '暂无数据',
              image: '/assets/img/fail.png',
              duration: 2000
            });
            return;
          }
        },
        fail: function (res) {
          wx.hideLoading();
          wx.showToast({
            title: '数据获取失败',
            image: '/assets/img/fail.png',
            duration: 2000
          });
          return;
        },
        complete: function () {
          wx.hideLoading();
          wx.hideNavigationBarLoading(); //完成停止加载
          wx.stopPullDownRefresh(); //停止下拉刷新
        }
      });
    },
    onLoad: function () {
        that = this;
        // app.getUserInfo(function (userInfo) {
        //     //更新数据
        //     that.setData({
        //         userInfo: userInfo
        //     })
        // });
        wx.getSystemInfo({
            success: function (res) {
                var dates = that.data.date;
                dates.windowWidth = res.windowWidth;
                that.setData({
                  date: dates
                });
            }
        });
        
    },//裸眼or戴镜    显示无数据or 表
    // onReady:function(){
    // },
    scanHandle:function () {
        wx.scanCode({
                success: (res) => {
                // console.log(res.result);
                let newStr = res.result.replace('http://app.uyu.com/v1/wx/t/','https://api.uyu.com/v1/wp/t/');
                //线上
                // let newStr = res.result.replace('http://weixin.zmuchi.cn/v1/wx/t/','http://weiapp.zmuchi.cn/v1/wp/t/');
                //测试
            console.log(newStr);
            wx.request({
                url: newStr,
                data: {
                    userid:app.globalData.userId
                },
                header: {
                    'content-type': 'application/json' // 默认值
                },
                success: function(res) {
                    // console.log(res.data);
                    if(res.data.respcd=='0000'){
                        wx.showToast({
                            title: '开始检查',
                            icon: 'success',
                            duration: 2000
                        })
                    }else {
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
    /*
    * 选择查看某个检查数据
    * */
    tabClick: function (e) {
        var id = e.currentTarget.id;
        var dates = that.data.date;
        dates.activeIndex = id;
        dates.sliderOffset = e.currentTarget.offsetLeft;
        that.setData({
          date: dates
        });
        that.renderData(globalss);
    },
    /*
    * 获取检查日期
    * */
    getDate: function (allResult) {
        var alldate = that.data.date;
        for (let i = 0; i < allResult.length; i++) {
            alldate.bodyList.push({
                'title': allResult[i].utime.substring(0, 10),
                'moment': allResult[i].utime.substring(11),
                'id': i
            });
        };
        that.setData({
          date: alldate
        })
    },
    date_scroll: function (e) {
        // console.log(e)
    },
    renderData: function (allResult) {
      that=this;
        that.setData({
            glasses: 0
        });//将戴镜状态重置
        //处理数据
        medium = {
          f_vision_r: '--',//远视力 右眼
          f_vision_l: '--',//左眼
          f_vision_b: '--',//双眼
          n_vision_r: '--',//近视力 右眼
          n_vision_l: '--',//左眼
          n_vision_b: '--',//双眼
          contrast_r: '--',//红绿对比 右
          contrast_l: '--',//左
          worth_f: '--',//worth4 远
          worth_n: '--',//近
          position_f: '--',//水平眼位 远
          position_n: '--',//近
          horizontal_dispersion_fbi: '--',//水平聚散 远bi
          horizontal_dispersion_fbo: '--',//远bo
          horizontal_dispersion_nbi: '--',//近bi
          horizontal_dispersion_nbo: '--',//近bo
          adjust_loss_r: '--',//负相对调节 右
          adjust_loss_l: '--',//左
          adjust_loss_b: '--',//双
          adjust_loss_pra_r: '--',//正相对调节 右
          adjust_loss_pra_l: '--',
          adjust_loss_pra_b: '--',

          adjust_range_r: '--',//调节幅度 右
          adjust_range_l: '--',//左
          adjust_range_b: '--',//双
          ac_a: '--',//ac/a
          overlapping: '--',//立体视交叉
          non_cross: '--',//立体视非交叉
          visual_acuity: '--',//立体视视锐度
          color_sense11: '--',//色觉红
          color_sense12: '--',//色觉绿
          adjust_sensitive_r: '',//调节灵活度 右眼周期数
          adjust_sensitive_l: '',//左眼周期数
          adjust_sensitive_b: '',//双眼周期数
          meetingparting: ''//聚散灵活度
        };
        let temp = {
          flag1: false,
          flag2: false,
          flag3: false,
          flag4: false,
          flag5: false,
          flag6: false,
          flag7: false,
          flag8: false,
          flag9: false,
          flag10: false,
          flag11: false
        }
        Object.assign(that.data.date, temp)
        var glasses = that.data.glasses;
        var nowData = allResult[that.data.date.activeIndex].result;
        var dates = that.data.date;
        console.log(nowData)
        for (let i = 0; i < nowData.length; i++) {
            if (nowData[i].name == '视力检查') {
              dates.flag1 = true;
              var gl=JSON.parse( nowData[i].result ).glasses;
              if (gl=='true'){
                glasses = 1;
              } else if (gl =='false'){
                glasses = 2;
              }
              var item_1 = JSON.parse(nowData[i].result).seq;
              for (let i = 0; i <item_1.length; i++){
                if (item_1[i].optic=='250'){
                  if (item_1[i].eye == 'r') {
                    medium.f_vision_r = item_1[i].vision;
                  }
                  if (item_1[i].eye == 'l') {
                    medium.f_vision_l = item_1[i].vision;
                  }
                  if (item_1[i].eye == 'b') {
                    medium.f_vision_b = item_1[i].vision;
                  }
                }
                if (item_1[i].optic == '0') {
                  if (item_1[i].eye == 'r') {
                    medium.n_vision_r = item_1[i].vision;
                  }
                  if (item_1[i].eye == 'l') {
                    medium.n_vision_l = item_1[i].vision;
                  }
                  if (item_1[i].eye == 'b') {
                    medium.n_vision_b = item_1[i].vision;
                  }
                }
              }
            };
            if (nowData[i].name == '红绿检查') {
              dates.flag2 = true;
              var item_2 = JSON.parse(nowData[i].result).seq;
              for (let i = 0; i < item_2.length; i++){
                if (item_2[i] && item_2[i].eye == 'r'){
                  medium.contrast_r = item_2[i].color;
                }
                if (item_2[i] && item_2[i].eye == 'l') {
                  medium.contrast_l = item_2[i].color;
                }
              }
            };
            if (nowData[i].name == 'worth4点') {
              dates.flag3 = true;
              var item_3 = JSON.parse(nowData[i].result).seq;
              for (let i = 0; i < item_3.length; i++) {
                if (item_3[i] && item_3[i].optic == '250'){
                  medium.worth_f = item_3[i].result_name ? item_3[i].result_name:'--';
                }
                if (item_3[i] && item_3[i].optic == '0') {
                  medium.worth_n = item_3[i].result_name ? item_3[i].result_name:'--';
                }
              }
            };
            if (nowData[i].name == '眼位测量') {
              dates.flag4 = true;
                var item_4 = JSON.parse(nowData[i].result).seq;
                medium.ac_a = JSON.parse(nowData[i].result).AC_A
                if (medium.ac_a){
                  dates.flag7 = true;
                }
                for (let m = 0; m < item_4.length; m++) {
                  if (item_4[m].overlap_dis && item_4[m].optic == '250') {
                    medium.position_f = item_4[m].overlap_dis;
                  }
                  if (item_4[m].overlap_dis && item_4[m].optic == '0') {
                    medium.position_n = item_4[m].overlap_dis;
                  }
                }
            };
            if (nowData[i].name == '融像检查') {
              dates.flag5 = true;
                var item_5 = JSON.parse(nowData[i].result).seq;
                for(let i=0; i<item_5.length; i++){
                  if (item_5[i] && item_5[i].optic =='250'){
                    if (item_5[i].base == 'BI'){
                      medium.horizontal_dispersion_fbi = item_5[i].pic_dis_blur + '/' + item_5[i].pic_dis_burst + '/' + item_5[i].pic_dis_recover;
                    }
                    if (item_5[i].base == 'BO') {
                      medium.horizontal_dispersion_fbo = item_5[i].pic_dis_blur + '/' + item_5[i].pic_dis_burst + '/' + item_5[i].pic_dis_recover;
                    }
                  }
                  if (item_5[i] && item_5[i].optic == '0') {
                    if (item_5[i].base == 'BI') {
                      medium.horizontal_dispersion_nbi = item_5[i].pic_dis_blur + '/' + item_5[i].pic_dis_burst + '/' + item_5[i].pic_dis_recover;
                    }
                    if (item_5[i].base == 'BO') {
                      medium.horizontal_dispersion_nbo = item_5[i].pic_dis_blur + '/' + item_5[i].pic_dis_burst + '/' + item_5[i].pic_dis_recover;
                    }
                  }
                }
            };
            if (nowData[i].name == '调节功能检查') {
              dates.flag6 = true;
              var item_6 = JSON.parse(nowData[i].result).seq;
              console.log("111111111111111111111111111111111111")
              console.log(nowData[i].result)
              for (let i=0; i<item_6.length; i++){
                if (item_6[i] && item_6[i].eye == 'r'){
                  medium.adjust_loss_r = item_6[i].nra ? item_6[i].nra : '--';
                  medium.adjust_loss_pra_r = item_6[i].pra ? item_6[i].pra : '--';
                  medium.adjust_range_r = item_6[i].amp ? item_6[i].amp : '--';
                }
                if (item_6[i] && item_6[i].eye == 'l') {
                  medium.adjust_loss_l = item_6[i].nra ? item_6[i].nra:'--';
                  medium.adjust_loss_pra_l = item_6[i].pra ? item_6[i].pra : '--';
                  medium.adjust_range_l = item_6[i].amp ? item_6[i].amp : '--';
                }
                if (item_6[i] && item_6[i].eye == 'b') {
                  medium.adjust_loss_b = item_6[i].nra ? item_6[i].nra : '--';
                  medium.adjust_loss_pra_b = item_6[i].pra ? item_6[i].pra : '--';
                  medium.adjust_range_b = item_6[i].amp ? item_6[i].amp : '--';
                }
              }
            };
            if (nowData[i].name == '立体视检查') {
              dates.flag8 = true;
              var item_7 = JSON.parse(nowData[i].result).seq;
              for (let i = 0; i < item_7.length; i++){
                if (item_7[i].transform_data && item_7[i].type == '1'){
                  medium.overlapping = item_7[i].transform_data +'″';
                }
                if (item_7[i].transform_data && item_7[i].type == '2') {
                  medium.non_cross = item_7[i].transform_data + '″';
                }
                if (item_7[i].transform_data && item_7[i].type == '3') {
                  medium.visual_acuity = item_7[i].transform_data + '″';
                }
              }
            };
            if (nowData[i].name == '色觉检查') { 
              dates.flag9 = true;
              var item_8 = JSON.parse(nowData[i].result).seq;
              for (let i = 0; i < item_8.length; i++){
                if (item_8[i].color_sense && item_8[i].color == 'r'){
                  medium.color_sense11 = item_8[i].color_sense;
                }
                if (item_8[i].color_sense && item_8[i].color == 'g') {
                  medium.color_sense12 = item_8[i].color_sense;
                }
              }
            };
            if (nowData[i].name == '调节灵敏度') {
              dates.flag10 = true;
              var item_9 = JSON.parse(nowData[i].result).seq;
              that.data.date.adjustArray = [];
              if (item_9.length>0){
                for(let k=0; k<item_9.length; k++){
                  if (item_9[k].eye == 'r'){
                    medium.adjust_sensitive_r = '右' + item_9[k].cycle + '(' + '正：' + item_9[k].odd_avg_time + '/负：' + item_9[k].even_avg_time + ')';
                    var odd_arr0 = item_9[k].odd_time || [];
                    var even_arr0 = item_9[k].even_time || [];
                    var max_num0 = Math.max(odd_arr0.length, even_arr0.length);
                    var len_arr0 = [];
                    for (let n = 1; n <= max_num0; n++) {
                      len_arr0.push('' + n + '')
                    }
                    max_num0 && that.data.date.adjustArray.push({ name: medium.adjust_sensitive_r, isShow: !!max_num0, cycle: 11, idx: 0});
                    max_num0 && that.adjustFlexibility0('lineCanvas_0', odd_arr0, even_arr0, len_arr0);

                  } else if (item_9[k].eye == 'l') {
                    medium.adjust_sensitive_l = '左' + item_9[k].cycle + '(' + '正：' + item_9[k].odd_avg_time + '/负：' + item_9[k].even_avg_time + ')';
                    var odd_arr1 = item_9[k].odd_time || [];
                    var even_arr1 = item_9[k].even_time || [];
                    var max_num1 = Math.max(odd_arr1.length, even_arr1.length);
                    var len_arr1 = [];
                    for (let n = 1; n <= max_num1; n++) {
                      len_arr1.push('' + n + '')
                    }
                    max_num1 && that.data.date.adjustArray.push({ name: medium.adjust_sensitive_l, isShow: !!max_num1, cycle:11 ,idx: 1});
                    max_num1 && that.adjustFlexibility1('lineCanvas_1', odd_arr1, even_arr1, len_arr1);
                  } else if (item_9[k].eye == 'b') {
                    medium.adjust_sensitive_b = '双' + item_9[k].cycle + '(' + '正：' + item_9[k].odd_avg_time + '/负：' + item_9[k].even_avg_time + ')';
                    var odd_arr2 = item_9[k].odd_time || [];
                    var even_arr2 = item_9[k].even_time || [];
                    var max_num2 = Math.max(odd_arr2.length, even_arr2.length);
                    var len_arr2 = [];
                    for (let n = 1; n <= max_num2; n++) {
                      len_arr2.push('' + n + '')
                    }
                    max_num2 && that.data.date.adjustArray.push({ name: medium.adjust_sensitive_b, isShow: !!max_num2, cycle: 8, idx: 2});
                    max_num2 && that.adjustFlexibility2('lineCanvas_2', odd_arr2, even_arr2, len_arr2);
                  }
                }
                console.log("22222222222222222222222222222222222222222222222222")
                console.log(that.data.date.adjustArray)
              //  that.data.date.adjustHeight = (that.data.date.adjustArray.length*430)+80;

                /*
                setTimeout(function () {
                  wx.createSelectorQuery().select('.item10-Chart').fields({
                    dataset: true,
                    size: true,
                    scrollOffset: true,
                    properties: ['scrollX', 'scrollY']
                  }, function (res) {
                    // console.log(res)
                    var dates = that.data.date;
                    dates.canvasHeight = res.height;
                    that.setData({
                      date: dates,
                    });
                  }).exec();
                }, 2000)
                */

              }
            };
            if (nowData[i].name == '聚散灵敏度') {
              dates.flag11 = true;
              var item_10 = JSON.parse(nowData[i].result).seq;
              if (item_10.length>0){
                medium.meetingparting = item_10[0].cycle + '(' + 'BI：' + item_10[0].odd_avg_time + '/B0：' + item_10[0].even_avg_time+')';
                var odd_arr = item_10[0].odd_time;
                var even_arr = item_10[0].even_time;
                var max_num = Math.max(odd_arr.length, even_arr.length);
                var len_arr = [];
                for (let n = 1; n<=max_num; n++){
                  len_arr.push(''+n+'')
                }
                max_num && that.adjustFlexibility3('lineCanvas_3', odd_arr, even_arr, len_arr);
              } 
            };
        }
        that.setData({
          glasses: glasses,
          testData: medium,
          date: dates
        })
    },
    // 新检查
    touchHandler0: function (e) {
      lineChart0.scrollStart(e);
    },
    moveHandler0: function (e) {
      lineChart0.scroll(e);
    },
    touchEndHandler0: function (e) {
      lineChart0.scrollEnd(e);
      lineChart0.showToolTip(e, {
        format: function (item, category) {
          return item.name + ':' + item.data
        }
      });
    },
    touchHandler1: function (e) {
      lineChart1.scrollStart(e);
    },
    moveHandler1: function (e) {
      lineChart1.scroll(e);
    },
    touchEndHandler1: function (e) {
      lineChart1.scrollEnd(e);
      lineChart1.showToolTip(e, {
        format: function (item, category) {
          return item.name + ':' + item.data
        }
      });
    },
    touchHandler2: function (e) {
      lineChart2.scrollStart(e);
    },
    moveHandler2: function (e) {
      lineChart2.scroll(e);
    },
    touchEndHandler2: function (e) {
      lineChart2.scrollEnd(e);
      lineChart2.showToolTip(e, {
        format: function (item, category) {
          return item.name + ':' + item.data
        }
      });
    },
    touchHandler3: function (e) {
      lineChart3.scrollStart(e);
    },
    moveHandler3: function (e) {
      lineChart3.scroll(e);
    },
    touchEndHandler3: function (e) {
      lineChart3.scrollEnd(e);
      lineChart3.showToolTip(e, {
        format: function (item, category) {
          return item.name + ':' + item.data
        }
      });
    },
    adjustFlexibility0: function (canvasId, odd_arr0, even_arr0, len_arr0){
      lineChart0=new wxCharts({
        canvasId: canvasId,
        type: 'line',
        categories: len_arr0,
        animation: true,
        background: '#fff',
        legend: {
          data: ['正片反应时间', '负片反应时间']
        },
        series: [
          {
            name: '正片反应时间',
            type: 'line',
            data: odd_arr0,
            color:'#4eb679'
          },
          {
            name: '负片反应时间',
            type: 'line',
            data: even_arr0,
            color: '#ed6741'
          }
        ],
        xAxis: {
          disableGrid: true
        },
        yAxis: {
          disabled:false,
          format: function (val) {
            return val.toFixed(0);
          },
        },
        width: that.data.date.windowWidth,
        height: that.data.date.canvasHeight,
        dataLabel: true, //是否在图表中显示数据内容值
        dataPointShape: true, //是否在图表中显示数据点图形标识
        enableScroll: true,
        legend: true, // 是否显示图表下方各类别的标识
        extra: {
          lineStyle: 'straight'
        }
      });
    },
    adjustFlexibility1: function (canvasId, odd_arr1, even_arr1, len_arr1) {
      lineChart1 = new wxCharts({
        canvasId: canvasId,
        type: 'line',
        categories: len_arr1,
        animation: true,
        background: '#fff',
        legend: {
          data: ['正片反应时间', '负片反应时间']
        },
        series: [
          {
            name: '正片反应时间',
            type: 'line',
            data: odd_arr1,
            color: '#4eb679'
          },
          {
            name: '负片反应时间',
            type: 'line',
            data: even_arr1,
            color: '#ed6741'
          }
        ],
        xAxis: {
          disableGrid: true
        },
        yAxis: {
          disabled: false,
          format: function (val) {
            return val.toFixed(0);
          },
        },
        width: that.data.date.windowWidth,
        height: that.data.date.canvasHeight,
        dataLabel: true, //是否在图表中显示数据内容值
        dataPointShape: true, //是否在图表中显示数据点图形标识
        enableScroll: true,
        legend: true, // 是否显示图表下方各类别的标识
        extra: {
          lineStyle: 'straight'
        }
      });
    },
    adjustFlexibility2: function (canvasId, odd_arr2, even_arr2, len_arr2) {
      lineChart2 = new wxCharts({
        canvasId: canvasId,
        type: 'line',
        categories: len_arr2,
        animation: true,
        background: '#fff',
        legend: {
          data: ['正片反应时间', '负片反应时间']
        },
        series: [
          {
            name: '正片反应时间',
            type: 'line',
            data: odd_arr2,
            color: '#4eb679'
          },
          {
            name: '负片反应时间',
            type: 'line',
            data: even_arr2,
            color: '#ed6741'
          }
        ],
        xAxis: {
          disableGrid: true
        },
        yAxis: {
          disabled: false,
          format: function (val) {
            return val.toFixed(0);
          },
        },
        width: that.data.date.windowWidth,
        height: that.data.date.canvasHeight,
        dataLabel: true, //是否在图表中显示数据内容值
        dataPointShape: true, //是否在图表中显示数据点图形标识
        enableScroll: true,
        legend: true, // 是否显示图表下方各类别的标识
        extra: {
          lineStyle: 'straight'
        }
      });
    },
    adjustFlexibility3: function (canvasId, odd_arr, even_arr, len_arr) {
      lineChart3 = new wxCharts({
        canvasId: canvasId,
        type: 'line',
        categories: len_arr,
        animation: true,
        background: '#fff',
        legend: {
          data: ['BI反应时间', 'BO反应时间']
        },
        series: [
          {
            name: 'BI反应时间',
            type: 'line',
            data: odd_arr,
            color: '#4eb679'
          },
          {
            name: 'BO反应时间',
            type: 'line',
            data: even_arr,
            color: '#ed6741'
          }
        ],
        xAxis: {
          disableGrid: true
        },
        yAxis: {
          disabled: false,
          format: function (val) {
            return val.toFixed(0);
          },
        },
        width: that.data.date.windowWidth,
        height: that.data.date.canvasHeight,
        dataLabel: true, //是否在图表中显示数据内容值
        dataPointShape: true, //是否在图表中显示数据点图形标识
        enableScroll: true,
        legend: true, // 是否显示图表下方各类别的标识
        extra: {
          lineStyle: 'straight'
        }
      });
    }
})