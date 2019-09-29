// pages/prescription_setting/index.js
let currentApp = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    train_items: [
      {
        name: "调节双眼训练",
        checked: true,
        eye:"B",
        content: {
          "name": "FlipBeat_d",
          "item_id": 11,
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
              "select": {
                "val": "1.50",
                "text": "1.50"
              },
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
              "select": {
                "text": "-1.50",
                "val": "-1.50"
              },
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
              "select": {
                "text": "1",
                "val": "1"
              },
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
              "select": {
                "text": "1",
                "val": "1"
              },
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
              "select": {
                "val": "1.50",
                "text": "1.50"
              },
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
              "select": {
                "text": "-1.50",
                "val": "-1.50"
              },
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
              "select": {
                "text": "1",
                "val": "1"
              },
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
              "select": {
                "text": "1",
                "val": "1"
              },
              "name_cn": "右眼负片次数"
            }
          ]
        }
      },
      {
        name: "调节左眼训练",
        checked: false,
        eye: "L",
        content: {
          "name": "FlipBeat_l",
          "item_id": 12,
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
              "select": {
                "val": "1.50",
                "text": "1.50"
              },
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
              "select": {
                "text": "-1.50",
                "val": "-1.50"
              },
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
              "select": {
                "text": "1",
                "val": "1"
              },
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
              "select": {
                "text": "1",
                "val": "1"
              },
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
              "select": {
                "val": "1.50",
                "text": "1.50"
              },
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
              "select": {
                "text": "-1.50",
                "val": "-1.50"
              },
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
              "select": {
                "text": "1",
                "val": "1"
              },
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
              "select": {
                "text": "1",
                "val": "1"
              },
              "name_cn": "右眼负片次数"
            }
          ]
        }
      },
      {
        name: "调节右眼训练",
        checked: false,
        eye: "R",
        content: {
          "name": "FlipBeat_r",
          "item_id": 13,
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
              "select": {
                "val": "1.50",
                "text": "1.50"
              },
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
              "select": {
                "text": "-1.50",
                "val": "-1.50"
              },
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
              "select": {
                "text": "1",
                "val": "1"
              },
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
              "select": {
                "text": "1",
                "val": "1"
              },
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
              "select": {
                "val": "1.50",
                "text": "1.50"
              },
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
              "select": {
                "text": "-1.50",
                "val": "-1.50"
              },
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
              "select": {
                "text": "1",
                "val": "1"
              },
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
              "select": {
                "text": "1",
                "val": "1"
              },
              "name_cn": "右眼负片次数"
            }
          ]
        }
      },
      {
        name: "静态融像初级训练",
        checked: false,
        content: {
          "name": "RedGreenFixed_j",
          "item_id": 14,
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
              "select": {
                "val": 2,
                "text": "BI"
              },
              "name_cn": "BI/BO"
            }
          ]
        }
      },
      {
        name: "静态融像高级训练",
        checked: false,
        content: {
          "name": "RedGreenFixed_h",
          "item_id": 15,
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
              "select": {
                  "val": 1,
                  "text": "侧重集合"
                },
              "name_cn": "聚散重点"
            }
          ]
        }
      },
      {
        name: "动态融像初级训练",
        checked: false,
        content: {
          "name": "RgVariable_j",
          "item_id": 16,
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
              "select": {
                "val": 2,
                "text": "BI"
              },
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
              "select": {
                "val": 1,
                "text": 1
              },
              "name_cn": "移动等级"
            }
          ]
        }
      },
      {
        name: "动态融像高级训练",
        checked: false,
        content: {
          "name": "RgVariable_h",
          "item_id": 17,
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
              "select": {
                "val": 1,
                "text": "侧重集合"
              },
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
              "select": {
                "val": 1,
                "text": 1
              },
              "name_cn": "移动等级"
            }
          ]
        }
      },
      {
        name: "近融像训练",
        checked: false,
        content: {
          "name": "SlitRuler",
          "item_id": 18,
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
              "select": {
                "val": 2,
                "text": "BI"
              },
              "name_cn": "BI/BO"
            }
          ]
        }
      },
      {
        name: "远融像初级训练",
        checked: false,
        content: {
          "name": "Stereoscopic_j",
          "item_id": 19,
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
              "select": {
                "val": 2,
                "text": "BI"
              },
              "name_cn": "BI/BO"
            }
          ]
        }
      },
      {
        name: "远融像中级训练",
        checked: false,
        content: {
          "name": "Stereoscopic_m",
          "item_id": 20,
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
              "select": {
                "val": 2,
                "text": "BI"
              },
              "name_cn": "BI/BO"
            }
          ]
        }
      },
      {
        name: "远融像高级训练",
        checked: false,
        content: {
          "name": "Stereoscopic_h",
          "item_id": 21,
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
              "select": {
                "val": 1,
                "text": "侧重集合"
              },
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
          "item_id": 22,
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
              "select": {
                "text": "1",
                "val": "1"
              },
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
          "item_id": 23,
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
              "select": {
                "text": "曲线",
                "val": "1"
              },
              "name_cn": "线条类型"
            }
          ]
        }
      },
      {
        name: "脱抑制初级训练",
        checked: false,
        content: {
          "name": "RgReading_j",
          "item_id": 24,
          "params": [
          ]
        }
      },
      {
        name: "脱抑制中级训练",
        checked: false,
        content: {
          "name": "RgReading_m",
          "item_id": 25,
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
              "select": {
                "text": "1",
                "val": "1"
              }, 
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
          "item_id": 26,
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
              "select": {
                "text": "10",
                "val": "10"
              },
              "name_cn": "引导棒位置"
            }
          ]
        }
      },
      {
        name: "三联动训练",
        checked: false,
        content: {
          "name": "Advance",
          "item_id": 27,
          "params": [

          ]
        }
      }
    ],

    // 选择相关
    item_select_index: 0,
    item_select_name: "FlipBeat_d",
    item_select: {},
    item_train_repeat_times: 1, //选择的项目重复的次数

    currentUserid: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 初始化 选择 训练的第一项
    this.setData({
      currentUserid: currentApp.globalData.selectedUserInfo.userid
    });
    console.log("wwwwwwwwwww");
    console.log(this.data.currentUserid);
    let selectPrescItem = currentApp.globalData.selectPrescItem;
    console.log("#####")
    console.log(selectPrescItem);
    if (selectPrescItem){
      console.log("#####")
      let name = selectPrescItem.name;
      let train_item = {};
      let index = 0;
      for (let i = 0; i < this.data.train_items.length; i++){
        let item = this.data.train_items[i];
        if(name == item.content.name){
          index = i;
          console.log("index = " + index);
          train_item = JSON.parse(JSON.stringify(item));
          break;
        }
      }
      console.log(train_item)
      this.setData({
        item_select_index: index,
        item_select_name: name,
        item_train_repeat_times: selectPrescItem.repeat_training_times
      })
      // 改造选中的item
      for (let m = 0; m < train_item.content.params.length; m++){
        let attriName = train_item.content.params[m].name;
        console.log(attriName);
        let selectValueItem = selectPrescItem[attriName];
        console.log(selectValueItem);
        if (selectValueItem){
          train_item.content.params[m].select = selectValueItem;
        }
      }
      train_item.checked = true;

      // 清除旧的选择项目
      let oldSelIndex = 0;
      let oldSelKey = "train_items[" + oldSelIndex + "].checked";
      this.setData({
        [oldSelKey]: false
      })

      // 选择新的训练项目
      // let index = e.currentTarget.dataset["bindex"];
      // that.setData({
      //   item_select_index: index
      // })
      let checked = !this.data.train_items[index].checked;
      let key = "train_items[" + index + "].checked";
      this.setData({
        [key]: checked
      })

      this.setData({
        item_select: train_item
      })
    }else{
      this.setData({
        item_select_index: 0,
        item_select_name: "FlipBeat_d",
      })
      let defaultSelTrainItem = this.data.train_items[0];
      // 字典拷贝 初始化选择项目
      let selTrainItemStr = JSON.stringify(defaultSelTrainItem);
      let trainItem = JSON.parse(selTrainItemStr);
      console.log(trainItem);
      this.setData({
        item_select: trainItem
      })
    }
    
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
  // 选择训练项目
  trainItemAction: function (e) {
    let that = this;
    // 清除旧的选择项目
    let oldSelIndex = that.data.item_select_index;
    let oldSelKey = "train_items[" + oldSelIndex + "].checked";
    that.setData({
      [oldSelKey]: false
    })
    
    // 选择新的训练项目
    let index = e.currentTarget.dataset["bindex"];
    that.setData({
      item_select_index: index
    })
    let checked = !that.data.train_items[index].checked;
    let key = "train_items[" + index + "].checked";
    that.setData({
      [key] : checked
    })

    //显示新的训练项目的属性
    //设置新的训练项目的名称
    console.log("index =" + index);

    let trainItemInfo = that.data.train_items[index];
    console.log(trainItemInfo)
    let trainItemStr = JSON.stringify(trainItemInfo);
    that.setData({
      item_select_name: trainItemInfo.content.name,
      item_select:JSON.parse(trainItemStr)
    })
  },
  // 重复次数
  repeatTimeReduceAction: function () {
    let times = this.data.item_train_repeat_times - 1;
    if(times < 1){
      times = 1;
      wx.showToast({
        icon: 'none',
        title: '重复次数不能小于1',
      })
      return;
    }
    this.setData({
      item_train_repeat_times: times
    })
  },
  repeatTimeAddAction: function () {
    let times = this.data.item_train_repeat_times + 1;
    this.setData({
      item_train_repeat_times: times
    })
  },
  // 底部按钮操作
  cancelAction: function (){
    wx.navigateBack({
      success: function (){
        console.log("点击取消")
      }
    })
  }, 


  //加减
  lPositiveDegreeLevelReduce: function (e) {
    //修改属性选项
    let timeStr = this.data.item_select.content.params[2].select.text;
    let time = parseInt(timeStr)
    if (time <= 1) {
      return;
    }
    let index = time - 2;
    let selectValue = this.data.item_select.content.params[2].value;
    let selectitem = this.data.item_select.content.params[2].value[index];
    console.log(selectitem);
    let key = "item_select.content.params[2].select";
    console.log(key);

    this.setData({
      [key]: selectitem
    })
  },
  lPositiveDegreeLevelAdd: function (e) {
    //修改属性选项
    let timeStr = this.data.item_select.content.params[2].select.text;
    let time = parseInt(timeStr)
    if (time >= 10) {
      return;
    }
    let index = time;
    let selectValue = this.data.item_select.content.params[2].value;
    let selectitem = this.data.item_select.content.params[2].value[index];
    console.log(selectitem);
    let key = "item_select.content.params[2].select";
    console.log(key);

    this.setData({
      [key]: selectitem
    })
  },

  lNegativeDegreeLevelReduce: function (e) {
    //修改属性选项
    let timeStr = this.data.item_select.content.params[3].select.text;
    let time = parseInt(timeStr)
    if (time <= 1) {
      return;
    }
    let index = time - 2;
    let selectValue = this.data.item_select.content.params[3].value;
    let selectitem = this.data.item_select.content.params[3].value[index];
    console.log(selectitem);
    let key = "item_select.content.params[3].select";
    console.log(key);

    this.setData({
      [key]: selectitem
    })
  },
  lNegativeDegreeLevelAdd: function (e) {
    //修改属性选项
    let timeStr = this.data.item_select.content.params[3].select.text;
    let time = parseInt(timeStr)
    if (time >= 10) {
      return;
    }
    let index = time;
    let selectValue = this.data.item_select.content.params[3].value;
    let selectitem = this.data.item_select.content.params[3].value[index];
    console.log(selectitem);
    let key = "item_select.content.params[3].select";
    console.log(key);

    this.setData({
      [key]: selectitem
    })
  },


  rPositiveDegreeLevelReduce: function(e){
    //修改属性选项
    let timeStr = this.data.item_select.content.params[6].select.text;
    let time = parseInt(timeStr)
    if (time <= 1) {
      return;
    }
    let index = time - 2;
    let selectValue = this.data.item_select.content.params[6].value;
    let selectitem = this.data.item_select.content.params[6].value[index];
    console.log(selectitem);
    let key = "item_select.content.params[6].select";
    console.log(key);

    this.setData({
      [key]: selectitem
    })
  },
  rPositiveDegreeLevelAdd: function (e) {
    //修改属性选项
    let timeStr = this.data.item_select.content.params[6].select.text;
    let time = parseInt(timeStr)
    if (time >= 10) {
      return;
    }
    let index = time;
    let selectValue = this.data.item_select.content.params[6].value;
    let selectitem = this.data.item_select.content.params[6].value[index];
    console.log(selectitem);
    let key = "item_select.content.params[6].select";
    console.log(key);

    this.setData({
      [key]: selectitem
    })
  },
  rNegativeDegreeLevelReduce: function (e) {
    //修改属性选项
    let timeStr = this.data.item_select.content.params[7].select.text;
    let time = parseInt(timeStr)
    if (time <= 1) {
      return;
    }
    let index = time - 2;
    let selectValue = this.data.item_select.content.params[7].value;
    let selectitem = this.data.item_select.content.params[7].value[index];
    console.log(selectitem);
    let key = "item_select.content.params[7].select";
    console.log(key);

    this.setData({
      [key]: selectitem
    })
  },
  rNegativeDegreeLevelAdd: function (e) {
    //修改属性选项
    let timeStr = this.data.item_select.content.params[7].select.text;
    let time = parseInt(timeStr)
    if (time >= 10) {
      return;
    }
    let index = time;
    let selectValue = this.data.item_select.content.params[7].value;
    let selectitem = this.data.item_select.content.params[7].value[index];
    console.log(selectitem);
    let key = "item_select.content.params[7].select";
    console.log(key);

    this.setData({
      [key]: selectitem
    })
  },



  // 处方属性选择事件
  lPositiveDegreeLevelAction: function (e){
    let selectitem = e.currentTarget.dataset["selectitem"];
    console.log(selectitem);
    this.selectPrescAttribute(0, selectitem);
  },
  lNegativeDegreeLevelAction: function (e) {
    let selectitem = e.currentTarget.dataset["selectitem"];
    console.log(selectitem);
    this.selectPrescAttribute(1, selectitem);
  },
  rPositiveDegreeLevelAction: function (e) {
    let selectitem = e.currentTarget.dataset["selectitem"];
    console.log(selectitem);
    this.selectPrescAttribute(4, selectitem);
  },
  rNegativeDegreeLevelAction: function (e) {
    let selectitem = e.currentTarget.dataset["selectitem"];
    console.log(selectitem);
    this.selectPrescAttribute(5, selectitem);
  },
  redGreenFixed_j_TrainTypeAction: function (e) {
    let selectitem = e.currentTarget.dataset["selectitem"];
    console.log(selectitem);
    this.selectPrescAttribute(0, selectitem);
  },
  redGreenFixed_h_TrainTypeAction: function (e) {
    let selectitem = e.currentTarget.dataset["selectitem"];
    console.log(selectitem);
    this.selectPrescAttribute(0, selectitem);
  },
  rgVariable_j_TrainTypeAction: function (e) {
    let selectitem = e.currentTarget.dataset["selectitem"];
    console.log(selectitem);
    this.selectPrescAttribute(0, selectitem);
  },
  rgVariable_j_MoveLevelAction: function (e) {
    let selectitem = e.currentTarget.dataset["selectitem"];
    console.log(selectitem);
    this.selectPrescAttribute(1, selectitem);
  },
  rgVariable_h_TrainTypeAction: function (e) {
    let selectitem = e.currentTarget.dataset["selectitem"];
    console.log(selectitem);
    this.selectPrescAttribute(0, selectitem);
  },
  rgVariable_h_MoveLevelAction: function(e){
    let selectitem = e.currentTarget.dataset["selectitem"];
    console.log(selectitem);
    this.selectPrescAttribute(1, selectitem);
  },
  slitRulerTrainTypeAction: function(e) {
    let selectitem = e.currentTarget.dataset["selectitem"];
    console.log(selectitem);
    this.selectPrescAttribute(0, selectitem);
  },
  stereoscopic_j_TrainTypeAction: function (e) {
    let selectitem = e.currentTarget.dataset["selectitem"];
    console.log(selectitem);
    this.selectPrescAttribute(0, selectitem);
  },
  stereoscopic_m_TrainTypeAction: function (e) {
    let selectitem = e.currentTarget.dataset["selectitem"];
    console.log(selectitem);
    this.selectPrescAttribute(0, selectitem);
  },
  stereoscopic_h_TrainTypeAction: function (e) {
    let selectitem = e.currentTarget.dataset["selectitem"];
    console.log(selectitem);
    this.selectPrescAttribute(0, selectitem);
  },
  toGlanceFontLevelAction: function (e) {
    let selectitem = e.currentTarget.dataset["selectitem"];
    console.log(selectitem);
    this.selectPrescAttribute(0, selectitem);
  },
  followLineTypeAction: function (e) {
    let selectitem = e.currentTarget.dataset["selectitem"];
    console.log(selectitem);
    this.selectPrescAttribute(0, selectitem);
  },
  rgReading_m_FontLevelAction: function (e) {
    let selectitem = e.currentTarget.dataset["selectitem"];
    console.log(selectitem);
    this.selectPrescAttribute(0, selectitem);
  },
  physiologicDiplopiaStickPositionAction: function (e) {
    let selectitem = e.currentTarget.dataset["selectitem"];
    console.log(selectitem);
    this.selectPrescAttribute(0, selectitem);
  },

  // 选择属性
  selectPrescAttribute: function (idx, selectitem) {
    //修改属性选项
    let key = "item_select.content.params[" + idx + "].select";
    console.log(key);

    this.setData({
      [key]: selectitem
    })
    console.log(this.data.item_select)
  },



  // 确定处方
  sureAction: function () {
    if (this.data.item_select_name == 'FlipBeat_d') {
      this.calculateFlipBeat_dResult();
    } else if (this.data.item_select_name == 'FlipBeat_l') {
      this.calculateFlipBeat_lResult();
    } else if (this.data.item_select_name == 'FlipBeat_r') {
      this.calculateFlipBeat_rResult();
    } else if (this.data.item_select_name == 'RedGreenFixed_j') {
      this.calculateRedGreenFixed_jResult();
    } else if (this.data.item_select_name == 'RedGreenFixed_h') {
      this.calculateRedGreenFixed_hResult();
    } else if (this.data.item_select_name == 'RgVariable_j') {
      this.calculateRgVariable_jResult();
    } else if (this.data.item_select_name == 'RgVariable_h') {
      this.calculateRgVariable_hResult();
    } else if (this.data.item_select_name == 'SlitRuler') {
      this.calculateSlitRulerResult();
    } else if (this.data.item_select_name == 'Stereoscopic_j') {
      this.calculateStereoscopic_jResult();
    } else if (this.data.item_select_name == 'Stereoscopic_m') {
      this.calculateStereoscopic_mResult();
    } else if (this.data.item_select_name == 'Stereoscopic_h') {
      this.calculateStereoscopic_hResult();
    } else if (this.data.item_select_name == 'ToGlance') {
      this.calculateFollowResult();
    } else if (this.data.item_select_name == 'Follow') {
      this.calculateFollowResult();
    } else if (this.data.item_select_name == 'RgReading_j') {
      this.calculateRgReading_jResult();
    } else if (this.data.item_select_name == 'RgReading_m') {
      this.calculateRgReading_mResult();
    } else if (this.data.item_select_name == 'PhysiologicDiplopia') {
      this.calculatePhysiologicDiplopiaResult();
    } else if (this.data.item_select_name == 'Advance') {
      this.calculateAdvanceResult();
    }
    // wx.navigateBack({
    //   success: function () {
    //     console.log("点击确定")
    //   }
    // })
  },
  // 翻转拍左眼训练 FlipBeat_d
  calculateFlipBeat_dResult: function () {
    let selTrainItem = this.data.item_select;
    this.calculateTrainPrescBody();
    // 填充 属性 值
    currentApp.globalData.tempAddPresciption.params.presc[selTrainItem.content.params[0].name] = selTrainItem.content.params[0].select.val;
    currentApp.globalData.tempAddPresciption.params.presc[selTrainItem.content.params[2].name] = selTrainItem.content.params[2].select.val;
    currentApp.globalData.tempAddPresciption.params.presc[selTrainItem.content.params[3].name] = selTrainItem.content.params[3].select.val;
    currentApp.globalData.tempAddPresciption.params.presc[selTrainItem.content.params[1].name] = selTrainItem.content.params[1].select.val;

    currentApp.globalData.tempAddPresciption.params.presc[selTrainItem.content.params[4].name] = selTrainItem.content.params[4].select.val;
    currentApp.globalData.tempAddPresciption.params.presc[selTrainItem.content.params[5].name] = selTrainItem.content.params[5].select.val;
    currentApp.globalData.tempAddPresciption.params.presc[selTrainItem.content.params[6].name] = selTrainItem.content.params[6].select.val;
    currentApp.globalData.tempAddPresciption.params.presc[selTrainItem.content.params[7].name] = selTrainItem.content.params[7].select.val;

    console.log('presc = ' + JSON.stringify(currentApp.globalData.tempAddPresciption));
  },
  // 翻转拍左眼训练 FlipBeat_l
  calculateFlipBeat_lResult: function () {
    let selTrainItem = this.data.item_select;
    this.calculateTrainPrescBody();
    // 填充 属性 值
    currentApp.globalData.tempAddPresciption.params.presc[selTrainItem.content.params[0].name] = selTrainItem.content.params[0].select.val;
    currentApp.globalData.tempAddPresciption.params.presc[selTrainItem.content.params[2].name] = selTrainItem.content.params[2].select.val;
    currentApp.globalData.tempAddPresciption.params.presc[selTrainItem.content.params[3].name] = selTrainItem.content.params[3].select.val;
    currentApp.globalData.tempAddPresciption.params.presc[selTrainItem.content.params[1].name] = selTrainItem.content.params[1].select.val;


    console.log('presc = ' + JSON.stringify(currentApp.globalData.tempAddPresciption));
  },

  // 翻转拍右眼训练 FlipBeat_r
  calculateFlipBeat_rResult: function () {
    let selTrainItem = this.data.item_select;
    this.calculateTrainPrescBody();
    // 填充 属性 值
    currentApp.globalData.tempAddPresciption.params.presc[selTrainItem.content.params[4].name] = selTrainItem.content.params[4].select.val;
    currentApp.globalData.tempAddPresciption.params.presc[selTrainItem.content.params[5].name] = selTrainItem.content.params[5].select.val;
    currentApp.globalData.tempAddPresciption.params.presc[selTrainItem.content.params[6].name] = selTrainItem.content.params[6].select.val;
    currentApp.globalData.tempAddPresciption.params.presc[selTrainItem.content.params[7].name] = selTrainItem.content.params[7].select.val;


    console.log('presc = ' + JSON.stringify(currentApp.globalData.tempAddPresciption));
  },

  // 红绿固定初级训练 RedGreenFixed_j
  calculateRedGreenFixed_jResult: function () {
    let selTrainItem = this.data.item_select;
    this.calculateTrainPrescBody();
    // 填充 属性 值
    currentApp.globalData.tempAddPresciption.params.presc[selTrainItem.content.params[0].name] = selTrainItem.content.params[0].select.val;

    console.log('presc = ' + JSON.stringify(currentApp.globalData.tempAddPresciption));
  },

  // 红绿固定高级训练 RedGreenFixed_h
  calculateRedGreenFixed_hResult: function () {
    let selTrainItem = this.data.item_select;
    this.calculateTrainPrescBody();
    // 填充 属性 值
    currentApp.globalData.tempAddPresciption.params.presc[selTrainItem.content.params[0].name] = selTrainItem.content.params[0].select.val;

    console.log('presc = ' + JSON.stringify(currentApp.globalData.tempAddPresciption));
  },

  // 红绿可变初级训练 RgVariable_j
  calculateRgVariable_jResult: function () {
    let selTrainItem = this.data.item_select;
    this.calculateTrainPrescBody();
    // 填充 属性 值
    currentApp.globalData.tempAddPresciption.params.presc[selTrainItem.content.params[0].name] = selTrainItem.content.params[0].select.val;
    currentApp.globalData.tempAddPresciption.params.presc[selTrainItem.content.params[1].name] = selTrainItem.content.params[1].select.val;

    console.log('presc = ' + JSON.stringify(currentApp.globalData.tempAddPresciption));
  },

  // 红绿可变高级训练 RgVariable_h
  calculateRgVariable_hResult: function () {
    let selTrainItem = this.data.item_select;
    this.calculateTrainPrescBody();
    // 填充 属性 值
    currentApp.globalData.tempAddPresciption.params.presc[selTrainItem.content.params[0].name] = selTrainItem.content.params[0].select.val;
    currentApp.globalData.tempAddPresciption.params.presc[selTrainItem.content.params[1].name] = selTrainItem.content.params[1].select.val;

    console.log('presc = ' + JSON.stringify(currentApp.globalData.tempAddPresciption));
  },

  // 裂隙尺训练 SlitRuler
  calculateSlitRulerResult: function () {
    let selTrainItem = this.data.item_select;
    this.calculateTrainPrescBody();
    // 填充 属性 值
    currentApp.globalData.tempAddPresciption.params.presc[selTrainItem.content.params[0].name] = selTrainItem.content.params[0].select.val;

    console.log('presc = ' + JSON.stringify(currentApp.globalData.tempAddPresciption));
  },
  // 立体镜初级训练 Stereoscopic_j
  calculateStereoscopic_jResult: function () {
    let selTrainItem = this.data.item_select;
    this.calculateTrainPrescBody();
    // 填充 属性 值
    currentApp.globalData.tempAddPresciption.params.presc[selTrainItem.content.params[0].name] = selTrainItem.content.params[0].select.val;

    console.log('presc = ' + JSON.stringify(currentApp.globalData.tempAddPresciption));
  },

  // 立体镜中级训练 Stereoscopic_m
  calculateStereoscopic_mResult: function () {
    let selTrainItem = this.data.item_select;
    this.calculateTrainPrescBody();
    // 填充 属性 值
    currentApp.globalData.tempAddPresciption.params.presc[selTrainItem.content.params[0].name] = selTrainItem.content.params[0].select.val;

    console.log('presc = ' + JSON.stringify(currentApp.globalData.tempAddPresciption));
  },

  // 立体镜高级训练 Stereoscopic_h
  calculateStereoscopic_hResult: function () {
    let selTrainItem = this.data.item_select;
    this.calculateTrainPrescBody();
    // 填充 属性 值
    currentApp.globalData.tempAddPresciption.params.presc[selTrainItem.content.params[0].name] = selTrainItem.content.params[0].select.val;

    console.log('presc = ' + JSON.stringify(currentApp.globalData.tempAddPresciption));
  },

  // 扫视训练 ToGlance
  calculateToGlanceResult: function () {
    let selTrainItem = this.data.item_select;
    this.calculateTrainPrescBody();
    // 填充 属性 值
    currentApp.globalData.tempAddPresciption.params.presc[selTrainItem.content.params[0].name] = selTrainItem.content.params[0].select.val;

    console.log('presc = ' + JSON.stringify(currentApp.globalData.tempAddPresciption));
  },
  // 追随训练 Follow
  calculateFollowResult: function () {
    let selTrainItem = this.data.item_select;
    this.calculateTrainPrescBody();
    // 填充 属性 值
    currentApp.globalData.tempAddPresciption.params.presc[selTrainItem.content.params[0].name] = selTrainItem.content.params[0].select.val;

    console.log('presc = ' + JSON.stringify(currentApp.globalData.tempAddPresciption));
  },

  // 红绿阅读初级训练 RgReading_j
  calculateRgReading_jResult: function () {
    this.calculateTrainPrescBody();
    console.log('presc = ' + JSON.stringify(currentApp.globalData.tempAddPresciption));
  },
  // 红绿阅读中级训练 RgReading_m
  calculateRgReading_mResult: function () {
    let selTrainItem = this.data.item_select;
    this.calculateTrainPrescBody();

    // 填充 属性 值
    currentApp.globalData.tempAddPresciption.params.presc[selTrainItem.content.params[0].name] = selTrainItem.content.params[0].select.val;

    console.log('presc = ' + JSON.stringify(currentApp.globalData.tempAddPresciption));
  },

  // 生理性复视训练 PhysiologicDiplopia
  calculatePhysiologicDiplopiaResult: function (){
    let selTrainItem = this.data.item_select;
    this.calculateTrainPrescBody();
    
    // 填充 属性 值
    currentApp.globalData.tempAddPresciption.params.presc[selTrainItem.content.params[0].name] = selTrainItem.content.params[0].select.val;

    console.log('presc = ' + JSON.stringify(currentApp.globalData.tempAddPresciption));
  },

  // 推进训练 Advance
  calculateAdvanceResult: function () {
    this.calculateTrainPrescBody();
    console.log('presc = ' + JSON.stringify(currentApp.globalData.tempAddPresciption));
  },
  // 装配训练处方体
  calculateTrainPrescBody: function () {
    let selTrainItem = this.data.item_select;
    console.log(selTrainItem);

    //装配 params
    let params = {
      name: selTrainItem.content.name,
      presc: {
        repeat_training_times: this.data.item_train_repeat_times,
      }
    }
    //装配 userid item_id params
    let prescription = {
      userid: this.data.currentUserid
    };

    prescription.item_id = selTrainItem.content.item_id;
    prescription.params = params;

    currentApp.globalData.tempAddPresciption = prescription;
  }
})
