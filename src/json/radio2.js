switch (_this.radiovalue) {
    case "0":
        if(_this.monthtab==0 || _this.monthtab==1)
        {
          var option2 = {
              tooltip: {
                  trigger: 'item',
                  formatter: "{a} <br/>{b}: {c} ({d}%)"
              },
              series: [{
                  name: _this.myChart2title,
                  type: 'pie',
                  radius: ['50%', '70%'],
                  center: ['50%', '50%'],
                  avoidLabelOverlap: false,
                  color: ['#6c81b3', '#ff7700', '#2cc689'],
                  label: {
                      normal: {
                          show: false,
                          position: 'center'
                      },
                  },
                  labelLine: {
                      normal: {
                          show: false
                      }
                  },
                  data: data.data.wholePic
              }]
          };
          _this.myChart2.clear();
          _this.myChart2 = echarts.init(document.getElementById('main2'));
          _this.myChart2.setOption(option2);
        }
        else {
          var option2 = {
              tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                      type: 'shadow'
                  }
              },
              grid: {
                  top: '0',
                  left: '40',
                  right: '0',
                  bottom: '0',

              },
              xAxis: {
                  type: 'value',
                  boundaryGap: [0, 0.01]
              },
              yAxis: {
                  type: 'category',
                  data: ['VIP', '活跃', '交易', '总数'],
              },
              series: [{
                  type: 'bar',
                  data: [{
                      value: data.data.wholePic[3].value,
                      itemStyle: {
                          normal: {
                              color: '#2cc689'
                          }
                      }
                  }, {
                      value: data.data.wholePic[2].value,
                      itemStyle: {
                          normal: {
                              color: '#ff7700'
                          }
                      }
                  }, {
                      value: data.data.wholePic[1].value,
                      itemStyle: {
                          normal: {
                              color: '#6c81b3'
                          }
                      }
                  }, {
                      value: data.data.wholePic[0].value,
                      itemStyle: {
                          normal: {
                              color: '#ff7700'
                          }
                      }
                  }],
                  barWidth: 10,
              }, ]
          };
          _this.myChart2.clear();
          _this.myChart2 = echarts.init(document.getElementById('main2'));
          _this.myChart2.setOption(option2);
        }
        var option3 = {
            title: {
                show: false
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            grid: {
                top: 20,
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                data: data.data.wholeBottomDate
            }],
            yAxis: [{
                type: 'value'
            }],
            series: [{
                name: '收入',
                type: 'line',
                stack: '总量',
                itemStyle: {
                    normal: {
                        color: 'rgb(255, 119, 0)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: 'rgb(255, 119, 0)',
                        opacity: 0.2 // 图表中各个图区域的透明度

                    }
                },
                data: data.data.wholeBottom
            }]
        };
        _this.myChart3.clear();
        _this.myChart3 = echarts.init(document.getElementById('main3'));
        _this.myChart3.setOption(option3);

        break;
    case "1":
          if(_this.monthtab==0 || _this.monthtab==1)
          {
            var option2 = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                series: [{
                    name: _this.myChart2title,
                    type: 'pie',
                    radius: ['50%', '70%'],
                    center: ['50%', '50%'],
                    avoidLabelOverlap: false,
                    color: ['#6c81b3', '#ff7700', '#2cc689'],
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: data.data.wholePic
                }]
            };
            _this.myChart2.clear();
            _this.myChart2 = echarts.init(document.getElementById('main2'));
            _this.myChart2.setOption(option2);
          }
          else {
            var option2 = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    top: '0',
                    left: '40',
                    right: '0',
                    bottom: '0',

                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    type: 'category',
                    data: ['VIP', '活跃', '交易', '总数'],
                },
                series: [{
                    type: 'bar',
                    data: [{
                        value: data.data.wholePic[3].value,
                        itemStyle: {
                            normal: {
                                color: '#2cc689'
                            }
                        }
                    }, {
                        value: data.data.wholePic[2].value,
                        itemStyle: {
                            normal: {
                                color: '#ff7700'
                            }
                        }
                    }, {
                        value: data.data.wholePic[1].value,
                        itemStyle: {
                            normal: {
                                color: '#6c81b3'
                            }
                        }
                    }, {
                        value: data.data.wholePic[0].value,
                        itemStyle: {
                            normal: {
                                color: '#ff7700'
                            }
                        }
                    }],
                    barWidth: 10,
                }, ]
            };
            _this.myChart2.clear();
            _this.myChart2 = echarts.init(document.getElementById('main2'));
            _this.myChart2.setOption(option2);
          }
          var option3 = {
              tooltip: {
                  trigger: 'axis',
                  axisPointer: { // 坐标轴指示器，坐标轴触发有效
                      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                  }
              },
              color: ['#ff7700', '#6c81b3'],
              grid: {
                  top: '10',
                  left: '3%',
                  right: '4%',
                  bottom: '3%',
                  containLabel: true
              },
              xAxis: [{
                  type: 'category',
                  data: data.data.wholeBottomDate
              }],
              yAxis: [{
                  type: 'value'
              }],
              series: [{
                  name: '当前数据',
                  barWidth: 10,
                  type: 'bar',
                  data:data.data.wholeBottom
              }, {
                  name: '对比数据',
                  type: 'bar',
                  barWidth: 10,
                  stack: '广告',
                  data: data.data.wholeBottomPair
              }]
          };
          _this.myChart3.clear();
          _this.myChart3 = echarts.init(document.getElementById('main3'));
          _this.myChart3.setOption(option3);
        break;
    default:

}
