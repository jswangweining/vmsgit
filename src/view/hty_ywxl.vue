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
    margin: 10px;
    background-color: #fff;
    border: 1px solid #f3f3f3
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
    background-color: #fff;
    border: 1px solid #f3f3f3;
}

.w-ywxl-titem2item {
    flex: 1;
}

.w-ywxl-titem3item {
    display: flex;
    flex-pack: start;
    flex-wrap: wrap;
    align-items: center;
}

.w-ywxl-titem2itema {
    width: 50%;
    // padding: 0 2rem;
}

.w-ywxl-titem2itemas1 {
    display: block;
    font-size: 0.6rem;
}

.w-ywxl-titem2itemas2 {
    display: block;
    font-size: 0.9rem;
    color: #6c81b3;
}

.w-ywxl-titem2itemline {
    width: 1px;
    margin: 0.5rem;
    height: 5.5rem;
    background-color: #f3f3f3;
    float: left;
}

.w-ywxl-titem2itemcss3 {
    width: 4.4rem;
    height: 4.4rem;
    border: 1px solid #ff7700;
    border-radius: 100%;
    float: left;
    margin-top: 1rem;
    position: relative;
    left: 50%;
    margin-left: -2rem;
}

.w-ywxl-titem2itemcss3a {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 4.2rem;
    height: 4.2rem;
    margin-top: 0.1rem;
    margin-left: 0.1rem;
    border: 1px solid #ff7700;
    border-radius: 100%;
    animation: scaleout 1s infinite;
}

.w-ywxl-titem2itemcss3b {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 4.2rem;
    height: 4.2rem;
    margin-top: 0.1rem;
    margin-left: 0.1rem;
    border-radius: 100%;
}

.w-ywxl-titem2itemcss3bs1 {
    width: 100%;
    display: inline-block;
    line-height: 2rem;
    text-align: center;
}

.w-ywxl-titem2itemcss3bs2 {
    width: 100%;
    display: inline-block;
    text-align: center;
    font-size: 1.1rem;
    color: #ff7700
}

@keyframes scaleout {
    0% {
        transform: scale(1.0)
    }
    // 25% {
    //   transform: scale(1.1);
    //   opacity: 0.75;
    // }
    // 50% {
    //   transform: scale(1.2);
    //   opacity: 0.5;
    // }
    // 75% {
    //   transform: scale(1.3);
    //   opacity: 0.25;
    // }
    100% {
        transform: scale(1.4);
        opacity: 0;
    }
}

.w-ywxl-d {
    position: absolute;
    top: 10.2rem;
    bottom: 0.5rem;
    left: 0.5rem;
    right: 12rem;
    width: auto;
    height: auto;
    background-color: #fff;
    border: 1px solid #d7d7d7;
    display: flex;
    flex-direction: column;
}

.w-ywxl-dt {
    width: 100%;
    height: 3rem;
    border-bottom: 1px solid #d7d7d7;
    display: flex;
}

.w-ywxl-dt1 {
    padding-left: 1.5rem;
    line-height: 3rem;
}

.w-ywxl-dt2 {
    flex: 1;
    padding-left: 1.5rem;
    line-height: 3rem;
}

.w-ywxl-dd {
    flex: 1;
    display: flex;
}

.w-ywxl-ddl {
    width: 11.5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.w-ywxl-ddla {
    flex: 1;
    border-right: 1px solid #d7d7d7;
    border-bottom: 1px solid #d7d7d7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: #fcfcfc;
}

// .w-ywxl-ddla:hover {
//   border-right: 1px solid #fff
// }
.w-ywxl-ddlac {
    border-right: 1px solid #fff;
    background-color: #fff;
}

.w-ywxl-ddlap1 {
    font-weight: bold;
    span {
        font-size: 0.6rem;
        font-weight: normal;
    }
}

.w-ywxl-ddlap2 {
    font-size: 1.1rem;
    color: #ff7700;
    padding: 0.75rem 0;
}

.w-ywxl-ddlap3 {
    color: #999;
    font-size: 0.6rem;
}

.w-ywxl-ddr {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.w-ywxl-ddrt {
    flex: 1.2;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
}

.w-ywxl-ddrtd {
    flex: 1;
    border-bottom: 1px solid #f3f3f3;
    display: flex;
}

.w-ywxl-ddrtditem {
  flex: 1
}

.w-ywxl-ddrd {
    flex: 2;
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
        left: 0;
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
    margin-bottom: 0;
    border: 1px solid #fff;
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
                <div id="main" style=" height:6rem;">

                </div>
            </div>
            <div class="w-ywxl-titem2item">
                <div class="w-ywxl-titem2itemline">

                </div>
                <div class="w-ywxl-titem2itemcss3">

                    <div class="w-ywxl-titem2itemcss3a">

                    </div>
                    <div class="w-ywxl-titem2itemcss3b">
                        <span class="w-ywxl-titem2itemcss3bs1">综合能力</span>
                        <span class="w-ywxl-titem2itemcss3bs2">6.11</span>
                    </div>
                </div>

            </div>
            <div class="w-ywxl-titem2item w-ywxl-titem3item">
                <div class="w-ywxl-titem2itema">
                    <span class="w-ywxl-titem2itemas1">市盈率（万）</span>
                    <span class="w-ywxl-titem2itemas2">8.12</span>
                </div>
                <div class="w-ywxl-titem2itema">
                    <span class="w-ywxl-titem2itemas1">市净率（万）</span>
                    <span class="w-ywxl-titem2itemas2">2.44</span>
                </div>
                <div class="w-ywxl-titem2itema">
                    <span class="w-ywxl-titem2itemas1">市销率（万）</span>
                    <span class="w-ywxl-titem2itemas2">9.22</span>
                </div>
                <div class="w-ywxl-titem2itema">
                    <span class="w-ywxl-titem2itemas1">会员店价值（万）</span>
                    <span class="w-ywxl-titem2itemas2">50.2</span>
                </div>
            </div>
        </div>
    </div>

    <div class="w-ywxl-d">
        <div class="w-ywxl-dt">
            <div class="w-ywxl-dt1">
                请选择时间维度
            </div>
            <div class="w-ywxl-dt2">
                <radio-group v-model="radiovalue">
                    <wradio label="1">当月统计</wradio>
                    <wradio label="2">全年统计</wradio>
                </radio-group>
            </div>
        </div>
        <transition name="fade" mode="out-in">
            <div class="w-ywxl-dd" v-if="radiovalue=='1'" key='a1'>
                <div class="w-ywxl-ddl">
                    <div class="w-ywxl-ddla" @click='monthtabs(0,$event)'>
                        <p class="w-ywxl-ddlap1">总营业收入<span>（万元）</span></p>
                        <p class="w-ywxl-ddlap2">256</p>
                        <p class="w-ywxl-ddlap3">同比21%
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-jiantou1"></use>
                            </svg>
                        </p>
                    </div>
                    <div class="w-ywxl-ddla" @click='monthtabs(1,$event)'>
                        <p class="w-ywxl-ddlap1">总销售金额<span>（万元）</span></p>
                        <p class="w-ywxl-ddlap2">256</p>
                        <p class="w-ywxl-ddlap3">同比21%
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-jiantou2"></use>
                            </svg>
                        </p>
                    </div>
                    <div class="w-ywxl-ddla" style="border-bottom:0" @click='monthtabs(2,$event)'>
                        <p class="w-ywxl-ddlap1">新增会员总店<span>（家）</span></p>
                        <p class="w-ywxl-ddlap2">256</p>
                        <p class="w-ywxl-ddlap3">同比21%
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-jiantou1"></use>
                            </svg>
                        </p>
                    </div>
                </div>
                <transition name="fade" mode="out-in">
                    <div class="w-ywxl-ddr" v-if="monthtab==0" key='b1'>
                        <div class="w-ywxl-ddrt">
                            <div class="w-ywxl-r-t">
                                总营业收入占比
                            </div>
                            <div class="w-ywxl-ddrtd">
                              <div class="w-ywxl-ddrtditem">
                                <div id="main2" style=" height:100%">

                                </div>
                              </div>
                              <div class="w-ywxl-ddrtditem">
2
                              </div>
                              <div class="w-ywxl-ddrtditem">
3
                              </div>
                              <div class="w-ywxl-ddrtditem">
4
                              </div>

                                <!-- <div class="">
                                  1
                                </div>
                                <div class="">
                                  2
                                </div> -->
                            </div>
                        </div>
                        <div class="w-ywxl-ddrd">
                            下
                        </div>

                    </div>
                    <div class="w-ywxl-ddr" v-if="monthtab==1" key='b2'>
                        2

                    </div>
                    <div class="w-ywxl-ddr" v-if="monthtab==2" key='b3'>
                        3

                    </div>
                </transition>
            </div>
            <div class="w-ywxl-dd" v-if="radiovalue=='2'" key='a2'>
                222
            </div>
        </transition>


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

import $ from 'jquery'
import echarts from 'echarts'
import '../assets/fonts/iconfont'

//elementui
import rate from 'element-ui/packages/rate/src/main.vue'
import RadioGroup from 'element-ui/packages/radio/src/radio-group.vue'
import wradio from 'element-ui/packages/radio/src/radio.vue'

export default {
    name: "",
    data: () => ({
        statvalue: 3.7,
        radiovalue: '1',
        monthtab: 0,
        yeartab: 0
    }),
    mounted() {
        let _this = this;
        this.$nextTick(function() {
            var myChart = echarts.init(document.getElementById('main'));
            // 指定图表的配置项和数据
            var option = {
                radar: [{
                    indicator: [{
                        text: '综合能力',
                        color: '#ff7700'
                    }, {
                        text: '会员店价值'
                    }, {
                        text: '市盈率'
                    }, {
                        text: '市销率'
                    }, {
                        text: '市净率'
                    }],
                    center: ['50%', '50%'],
                    radius: '40%',
                    startAngle: 90,
                    splitNumber: 4,
                    name: {

                        formatter: '{value}',
                        textStyle: {
                            color: '#999'
                        }
                    }
                }],
                series: [{
                    type: 'radar',
                    tooltip: {
                        trigger: 'item'
                    },
                    itemStyle: {
                        normal: {
                            color: "rgba(255,199,1)", // 图表中各个图区域的边框线拐点颜色
                            lineStyle: {
                                color: "#ff7700" // 图表中各个图区域的边框线颜色
                            },
                            areaStyle: {
                                type: 'default',
                                opacity: 0.5, // 图表中各个图区域的透明度
                                color: "#ff7700" // 图表中各个图区域的颜色
                            }
                        }
                    },
                    data: [{
                        value: [6.11, 50.2, 8.12, 9.22, 2.44],
                        name: '综合能力'
                    }]
                }, ]
            }

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);


            var myChart2 = echarts.init(document.getElementById('main2'));
            var option2 = {
                series: [{

                    type: 'pie',
                    center: ['50%', '50%'],
                    radius: '50%',
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        // emphasis: {
                        //     show: true,
                        //     textStyle: {
                        //         fontSize: '30',
                        //         fontWeight: 'bold'
                        //     }
                        // }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [{
                        value: 335,
                        name: '直接访问'
                    }, {
                        value: 310,
                        name: '邮件营销'
                    }, {
                        value: 234,
                        name: '联盟广告'
                    }, {
                        value: 135,
                        name: '视频广告'
                    }, {
                        value: 1548,
                        name: '搜索引擎'
                    }]
                }]
            };
            myChart2.setOption(option2);
        })

    },
    methods: {
        monthtabs: function(index, event) {
            let _this = this;
            var el = event.target;
            $('.w-ywxl-ddlac').removeClass('w-ywxl-ddlac')
            $(el).hasClass('w-ywxl-ddla') ? $(el).addClass('w-ywxl-ddlac') : $(el).parentsUntil('w-ywxl-ddl').addClass('w-ywxl-ddlac')
            _this.monthtab = index;
        }
    },
    components: {
        rate,
        RadioGroup,
        wradio
    }
}

</script>
