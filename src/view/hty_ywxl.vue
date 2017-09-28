<style lang="scss">

.w-pos {
    height: 2.2rem;
    line-height: 2.2rem;
    color: #999;
    font-size: 0.6rem;
    padding-left: 0.5rem;
}

.w-pos span {
    padding: 0 0.25rem;
}

.w-pos-active {
    color: #666;
    font-size: 0.7rem;
    font-weight: 600;
}

// .w-main {
//     position: absolute;
//     left: 0.5rem;
//     right: 0.5rem;
//     top: 2.2rem;
//     bottom: 0.5rem;
//     width: auto;
//     height: auto;
//     background-color: #f0f;
// }
.w-ywxl-t {
    position: absolute;
    top: 2.2rem;
    left: 0.5rem;
    right: 12rem;
    width: auto;
    height: 7.5rem;
    border: 1px solid #d7d7d7;
    background-color: #fcfcfc;
    display: flex;
    justify-content: space-between;
}

.w-ywxl-titem1 {
    flex: 1;
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
    background-color: #fff
}

.w-ywxl-titema {
    font-size: 0.7rem;
    font-weight: 600;
    height: 2.0rem;
    line-height: 2.0rem;
    text-align: center;
}

.w-ywxl-titemb {
    height: 2.0rem;
    line-height: 2.0rem;
    font-size: 1.6rem;
    font-weight: bold;
    text-align: center;
    color: #ff7700;
}

,
.w-ywxl-titemc {
    text-align: center;
    height: 2rem;
    line-height: 2rem;
    padding-top: 0.5rem;
}

.w-ywxl-titem2 {
    flex: 3;
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;

    display: flex;
}

.w-ywxl-titem2item {
    flex: 1;
}

.w-ywxl-d {
    position: absolute;
    top: 10.2rem;
    bottom: 0.5rem;
    left: 0.5rem;
    right: 12rem;
    width: auto;
    height: auto;
}

.w-ywxl-r {
    position: absolute;
    right: 0.5rem;
    top: 2.2rem;
    width: 11rem;
    bottom: 0.5rem;
    height: auto;
    border: 1px solid #d7d7d7;
    padding: 0 0.5rem;
    background-color: #fff;
}

.w-ywxl-r-t {
    height: 2.2rem;
    font-size: 0.7rem;
    color: #333;
    font-weight: bold;
    line-height: 2.2rem;
    position: relative;
    padding-left: 10px;
    &:before {
        content: '';
        position: absolute;
        left: 0px;
        top: 0.75rem;
        display: block;
        width: 0.25rem;
        height: 0.6rem;
        background-color: #ff7700;
    }
}

.w-ywxl-r-d {
    position: absolute;
    top: 2.2rem;
    bottom: 0.5rem;
    left: 0.5rem;
    right: 0.5rem;
    height: auto;
    display: flex;
    flex-direction: column;
    align-content: space-between;
}

.w-ywxl-r-ditem {
    flex: 1;
    justify-content: space-between;
    margin: 5px;
    border: 1px solid #f3f3f3;
    display: flex;
    align-items: center;
    justify-content: center;
    // flex-direction: column;
}

.w-ywxl-r-ditema {
    flex: 1;
    height: 5rem;
}

.w-ywxl-r-ditemb {
    padding-left: 2rem;
    font-size: 0.6rem;
    color: #333;
    font-weight: bolder;
}

.w-ywxl-r-ditemc {
    margin-top: 10px;
    padding-left: 1.5rem;
    font-size: 0.7rem;
}

.w-ywxl-r-ditemcbtn {
    margin-bottom: 0px;
    border: 1px solid #fff;
    ;
    background: none;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        border: 1px solid #c6d7ff;
        background-color: #fafbff;
    }
}

.w-ywxl-r-ditemcbtns1 {
    font-size: 0.8rem;
    font-weight: 500;
    color: #ff7700;
}

.w-ywxl-r-ditemcbtns2 {
    font-size: 0.8rem;
    font-weight: bold;
    color: #6c81b3;
}

// .w-ywxl-r-ditema {
//     justify-content:center;
//     flex: 1;
//     margin: 5px;
//     display: flex;
//     align-items:center;
//     // align-items:flex-end;
//     // align-items: baseline;
//     justify-content: flex-start;
//     background-color: #f0f;
// }
//
//

</style>

<template>

<div>
    <div class="w-pos">
        <span>首页</span>/<span>汇天眼</span>/<span class="w-pos-active">业务效率</span>
    </div>

    <div class="w-ywxl-t">
        <div class="w-ywxl-titem1">
            <div class="w-ywxl-titema">
                当前平台估值（万）
            </div>
            <div class="w-ywxl-titemb">
                8050
            </div>
            <div class="w-ywxl-titemc">
                <rate v-model="statvalue" disabled>
                </rate>
            </div>
        </div>
        <div class="w-ywxl-titem2">
            <div class="w-ywxl-titem2item">
                <div id="main">

                </div>
            </div>
            <div class="w-ywxl-titem2item">
                2
            </div>
            <div class="w-ywxl-titem2item">
                3
            </div>
        </div>
    </div>

    <div class="w-ywxl-d">

    </div>

    <div class="w-ywxl-r">
        <div class="w-ywxl-r-t">
            平台公司名称
        </div>
        <div class="w-ywxl-r-d">
            <div class="w-ywxl-r-ditem">
                <div class="w-ywxl-r-ditema">
                    <div class="w-ywxl-r-ditemb">
                        当前平台排名
                    </div>
                    <div class="w-ywxl-r-ditemc">
                        <button type="button" name="button" class="w-ywxl-r-ditemcbtn">
                            分布排名&nbsp;&nbsp;<span class="w-ywxl-r-ditemcbtns1">5</span>名
                        </button>
                        <button type="button" name="button" class="w-ywxl-r-ditemcbtn">
                            总部排名&nbsp;&nbsp;<span class="w-ywxl-r-ditemcbtns2">30</span>名
                        </button>
                    </div>
                </div>
            </div>
            <div class="w-ywxl-r-ditem">
                <div class="w-ywxl-r-ditema">
                    <div class="w-ywxl-r-ditemb">
                        当前收入
                    </div>
                    <div class="w-ywxl-r-ditemc">
                        <button type="button" name="button" class="w-ywxl-r-ditemcbtn">
                            分布排名&nbsp;&nbsp;<span class="w-ywxl-r-ditemcbtns1">5</span>名
                        </button>
                        <button type="button" name="button" class="w-ywxl-r-ditemcbtn">
                            总部排名&nbsp;&nbsp;<span class="w-ywxl-r-ditemcbtns2">30</span>名
                        </button>
                    </div>
                </div>
            </div>
            <div class="w-ywxl-r-ditem">
                <div class="w-ywxl-r-ditema">
                    <div class="w-ywxl-r-ditemb">
                        总销售金额
                    </div>
                    <div class="w-ywxl-r-ditemc">
                        <button type="button" name="button" class="w-ywxl-r-ditemcbtn">
                            分布排名&nbsp;&nbsp;<span class="w-ywxl-r-ditemcbtns1">5</span>名
                        </button>
                        <button type="button" name="button" class="w-ywxl-r-ditemcbtn">
                            总部排名&nbsp;&nbsp;<span class="w-ywxl-r-ditemcbtns2">30</span>名
                        </button>
                    </div>
                </div>
            </div>
            <div class="w-ywxl-r-ditem">
                <div class="w-ywxl-r-ditema">
                    <div class="w-ywxl-r-ditemb">
                        新增会员
                    </div>
                    <div class="w-ywxl-r-ditemc">
                        <button type="button" name="button" class="w-ywxl-r-ditemcbtn">
                            分布排名&nbsp;&nbsp;<span class="w-ywxl-r-ditemcbtns1">5</span>名
                        </button>
                        <button type="button" name="button" class="w-ywxl-r-ditemcbtn">
                            总部排名&nbsp;&nbsp;<span class="w-ywxl-r-ditemcbtns2">30</span>名
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>

</template>

<script>

import echarts from 'echarts'

//elementui
import rate from 'element-ui/packages/rate/src/main.vue'

export default {
    name: "",
    data: () => ({
        statvalue: 3.7
    }),
    mounted() {
        let _this = this;
        this.$nextTick(function() {
            var myChart = echarts.init(document.getElementById('main'));

            // 指定图表的配置项和数据
            var option = {
                // title: {
                //     text: '自定义雷达图'
                // },
                // legend: {
                //     data: ['图一', '图二', '张三', '李四']
                // },
                radar: [{
                    indicator: [{
                        text: '指标一'
                    }, {
                        text: '指标二'
                    }, {
                        text: '指标三'
                    }, {
                        text: '指标四'
                    }, {
                        text: '指标五'
                    }],
                    center: ['25%', '50%'],
                    radius: 120,
                    startAngle: 90,
                    splitNumber: 4,
                    shape: 'circle',
                    name: {
                        formatter: '【{value}】',
                        textStyle: {
                            color: '#72ACD1'
                        }
                    },
                    splitArea: {
                        areaStyle: {
                            color: ['rgba(114, 172, 209, 0.2)',
                                'rgba(114, 172, 209, 0.4)', 'rgba(114, 172, 209, 0.6)',
                                'rgba(114, 172, 209, 0.8)', 'rgba(114, 172, 209, 1)'
                            ],
                            shadowColor: 'rgba(0, 0, 0, 0.3)',
                            shadowBlur: 10
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.5)'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.5)'
                        }
                    }
                }],
                series: [{
                    name: '雷达图',
                    type: 'radar',
                    itemStyle: {
                        emphasis: {
                            // color: 各异,
                            lineStyle: {
                                width: 4
                            }
                        }
                    },
                    data: [{
                        value: [100, 8, 0.40, -80, 2000],
                        name: '图一',
                        symbol: 'rect',
                        symbolSize: 5,
                        lineStyle: {
                            normal: {
                                type: 'dashed'
                            }
                        }
                    }, {
                        value: [60, 5, 0.30, -100, 1500],
                        name: '图二',
                        areaStyle: {
                            normal: {
                                color: 'rgba(255, 255, 255, 0.5)'
                            }
                        }
                    }]
                }]
            }

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);

        })

    },
    components: {
        rate
    }
}

</script>
