<style lang="scss">

.w-pannelitem {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.w-pannelitema {
    width: 49%;
    border: 1px solid #d7d7d7;
    margin-bottom: 1rem;
}

</style>

<template>

<div v-loading.body='loadingall' style="width:100%; height:100%">
    <div class="w-pos">
        <span>首页</span>/<span>汇天眼</span>/<span class="w-pos-active">用户分类</span> {{formdata.date}}
    </div>
    <div class="w-con">
        <div class="w-search">
            <wform :inline="true" :model="formdata" label-position="right" class="demo-form-inline">


                <div class="">
                    <form-item label="对比方式：">
                        <radio-group v-model="formdata.radiovalue" @change='radiochange'>
                            <wradio label="0">无对比</wradio>
                            <wradio label="1">时间段对比</wradio>
                            <wradio label="2">采购量对比</wradio>
                        </radio-group>
                    </form-item>
                </div>

                <div class="" v-if='formdata.radiovalue=="0"'>
                    <form-item label="转化时间" style="margin-top:0px;" class="radio0Month">
                        <date-picker type="month" v-model="formdata.startmonth" placeholder="选择开始月份" :editable='false' :picker-options="pickerOptions1" @change='monthchange1' style="width:250px;">
                        </date-picker>
                        <span class="w-searchs">至</span>
                        <date-picker type="month" v-model="formdata.endmonth" placeholder="选择结束月份" :editable='false' :picker-options="pickerOptions1" @change='monthchange2' style="width:250px;">
                        </date-picker>
                    </form-item>

                    <form-item style="margin-top:0px;">
                        <wbutton type="info" icon="search" size="small" @click='yhfnSearch1()'></wbutton>
                    </form-item>
                </div>

                <div class="" v-if='formdata.radiovalue=="1"'>
                    <form-item label="会员时间" style="margin-top:0px;" class="w-date-range">
                        <date-picker type="daterange" v-model="formdata.date" placeholder="选择周期" :editable='false' :picker-options="pickerOptions3">
                        </date-picker>
                    </form-item>

                    <form-item label="时间段：" style="margin-top:0px;" class="radio1Month">
                        <date-picker type="month" v-model="formdata.startmonth2" placeholder="选择开始月份" :editable='false' :picker-options="pickerOptions1" style="width:250px;">
                        </date-picker>
                        <span class="w-searchs">至</span>
                        <date-picker type="month" v-model="formdata.endmonth2" placeholder="选择结束月份" :editable='false' :picker-options="pickerOptions1" style="width:250px;">
                        </date-picker>

                        <wbutton type="info" size="small" @click='yhfnSearch2()'>对比</wbutton>
                    </form-item>
                </div>

                <div class="" v-if='formdata.radiovalue=="2"'>
                    <form-item label="选择维度：" style="margin-top:0px;" v-if='formdata.radiovalue=="2"'>
                        <wselect v-model="formdata.selectvalue1" placeholder="请选择">
                            <woption label='全部' value='0'></woption>
                            <woption label='整体采购' value='1'></woption>
                        </wselect>

                        <form-item label="查询时间" style="margin-top:0px;">
                            <date-picker type="month" v-model="formdata.startmonth" placeholder="选择开始月份" :editable='false' style="width:250px;">
                            </date-picker>
                            <span class="w-searchs">至</span>
                            <date-picker type="month" v-model="formdata.endmonth" placeholder="选择结束月份" :editable='false' style="width:250px;">
                            </date-picker>
                        </form-item>

                        <form-item label="维度：" style="margin-top:0px;">
                            <date-picker type="month" v-model="formdata.startmonth2" placeholder="选择开始月份" :editable='false' style="width:250px;">
                            </date-picker>
                            <span class="w-searchs">至</span>
                            <date-picker type="month" v-model="formdata.endmonth2" placeholder="选择结束月份" :editable='false' style="width:250px;">
                            </date-picker>

                            <wbutton type="info" size="small">对比</wbutton>
                        </form-item>
                    </form-item>
                </div>
            </wform>
        </div>
        <div class="w-pannel">
            <div class="w-pannelitem">
                <div class="w-pannelitema">
                    <div class="w-ywxl-ddrdt">
                        <div class="w-ywxl-ddrdta">
                            整体采购<span>（单位：万元）</span>
                        </div>
                        <div class="w-ywxl-ddrdtb">
                            <span class="w-ywxl-ddrdtbs1">当前数据</span>
                            <span class="w-ywxl-ddrdtbs2" v-if='dispair'>对比数据</span>
                        </div>
                    </div>
                    <div class="w-pannelitemad">
                        <div class="" id="main1" style="width:100%; height:200px;">

                        </div>

                    </div>
                </div>

                <div class="w-pannelitema">
                    <div class="w-ywxl-ddrdt">
                        <div class="w-ywxl-ddrdta">
                            线上采购<span>（单位：万元）</span>
                        </div>
                        <div class="w-ywxl-ddrdtb">
                            <span class="w-ywxl-ddrdtbs1">当前数据</span>
                            <span class="w-ywxl-ddrdtbs2" v-if='dispair'>对比数据</span>
                        </div>
                    </div>
                    <div class="w-pannelitemad">
                        <div class="" id="main2" style="width:100%; height:200px;">

                        </div>

                    </div>
                </div>

                <div class="w-pannelitema">
                    <div class="w-ywxl-ddrdt">
                        <div class="w-ywxl-ddrdta">
                            商城登录频次<span>（单位：次）</span>
                        </div>
                        <div class="w-ywxl-ddrdtb">
                            <span class="w-ywxl-ddrdtbs1">当前数据</span>
                            <span class="w-ywxl-ddrdtbs2" v-if='dispair'>对比数据</span>
                        </div>
                    </div>
                    <div class="w-pannelitemad">
                        <div class="" id="main3" style="width:100%; height:200px;">

                        </div>

                    </div>
                </div>

                <div class="w-pannelitema">
                    <div class="w-ywxl-ddrdt">
                        <div class="w-ywxl-ddrdta">
                            超级老板登录频次<span>（单位：次）</span>
                        </div>
                        <div class="w-ywxl-ddrdtb">
                            <span class="w-ywxl-ddrdtbs1">当前数据</span>
                            <span class="w-ywxl-ddrdtbs2" v-if="dispair">对比数据</span>
                        </div>
                    </div>
                    <div class="w-pannelitemad">
                        <div class="" id="main4" style="width:100%; height:200px;">

                        </div>

                    </div>
                </div>

                <div class="w-pannelitema">
                    <div class="w-ywxl-ddrdt">
                        <div class="w-ywxl-ddrdta">
                            上架商品数<span>（单位：件）</span>
                        </div>
                        <div class="w-ywxl-ddrdtb">
                            <span class="w-ywxl-ddrdtbs1">当前数据</span>
                            <span class="w-ywxl-ddrdtbs2" v-if="dispair">对比数据</span>
                        </div>
                    </div>
                    <div class="w-pannelitemad">
                        <div class="" id="main5" style="width:100%; height:200px;">

                        </div>

                    </div>
                </div>

                <div class="w-pannelitema">
                    <div class="w-ywxl-ddrdt">
                        <div class="w-ywxl-ddrdta">
                            贷款金额<span>（单位：万元）</span>
                        </div>
                        <div class="w-ywxl-ddrdtb">
                            <span class="w-ywxl-ddrdtbs1">当前数据</span>
                            <span class="w-ywxl-ddrdtbs2" v-if="dispair">对比数据</span>
                        </div>
                    </div>
                    <div class="w-pannelitemad">
                        <div class="" id="main6" style="width:100%; height:200px;">

                        </div>

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

import Loading from 'element-ui/packages/loading/index.js'
import wform from 'element-ui/packages/form/src/form.vue'
import FormItem from 'element-ui/packages/form/src/form-item.vue'
import RadioGroup from 'element-ui/packages/radio/src/radio-group.vue'
import wradio from 'element-ui/packages/radio/src/radio.vue'
import DatePicker from 'element-ui/packages/date-picker/src/picker/date-picker.js'
import Message from 'element-ui/packages/Message/index.js'
import wbutton from 'element-ui/packages/button/src/button.vue'
import wselect from 'element-ui/packages/select/src/select.vue'
import woption from 'element-ui/packages/select/src/option.vue'

export default {
    data: () => ({
        userId: '',
        loadingall: false,
        formdata: {
            'radiovalue': '0',
            'date': '',
            'startmonth': '',
            'endmonth': '',
            'startmonth2': '',
            'endmonth2': '',
            'selectvalue1': '0',
            'selectvalue2': '0',
            'selectvalue3': '0'
        },
        dispair: false,
        pickerOptions1: {
            disabledDate(time) {
                return time.getTime() > Date.now() - 8.64e7 || time.getTime() < new Date(2016, 0, 1, 0, 0, 0)
            }
        },

        pickerOptions3: {
            disabledDate(time) {
                    return time.getTime() >= Date.now() || time.getTime() < new Date(2016, 0, 1, 0, 0, 0)
                },
                shortcuts: [{
                    text: '本日',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一周',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近三个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit('pick', [start, end]);
                    }
                }]
        },
        wholeBottom: ["66.66", "66.66"],
        wholeBottomDate: ["201705", "201709"],
        wholeBottomPair: ["88.88", "88.88"],
        myChart1: '',
        myChart2: '',
        myChart3: '',
        myChart4: '',
        myChart5: '',
        myChart6: '',
        startdatevalue: '',
        enddatevalue: ''
    }),
    computed: {},
    created() {
        let _this = this;
        _this.userId = _this.$store.state.userId;
    },
    mounted() {
        let _this = this;
        _this.$nextTick(function() {
            var url = _this.adminApi.host + '/htycustall/cust/kind',
                data = {
                    'userId': _this.userId,
                    'type': _this.formdata.radiovalue
                },
                loading = function() {
                    _this.loadingall = true;
                },
                success = function(data) {
                    if (data.code == '1') {
                        var option1 = {
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
                                data: data.data.chartBottom1
                            }],
                            yAxis: [{
                                type: 'value'
                            }],
                            series: [{
                                name: '当前数据',
                                barWidth: 5,
                                type: 'bar',
                                data: data.data.chartDate1,
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(
                                            0, 0, 0, 1, [{
                                                offset: 0,
                                                color: '#ff7700'
                                            }, {
                                                offset: 0.5,
                                                color: '#ff9e48'
                                            }, {
                                                offset: 1,
                                                color: '#ffbb7f'
                                            }]
                                        )
                                    },
                                }
                            }]
                        };
                        _this.myChart1 = echarts.init(document.getElementById('main1'));
                        _this.myChart1.setOption(option1);
                        var option2 = {
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
                                data: data.data.chartBottom2
                            }],
                            yAxis: [{
                                type: 'value'
                            }],
                            series: [{
                                name: '当前数据',
                                barWidth: 5,
                                type: 'bar',
                                data: data.data.chartDate2,
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(
                                            0, 0, 0, 1, [{
                                                offset: 0,
                                                color: '#ff7700'
                                            }, {
                                                offset: 0.5,
                                                color: '#ff9e48'
                                            }, {
                                                offset: 1,
                                                color: '#ffbb7f'
                                            }]
                                        )
                                    },
                                }
                            }]
                        };
                        _this.myChart2 = echarts.init(document.getElementById('main2'));
                        _this.myChart2.setOption(option2);
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
                                data: data.data.chartBottom3
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

                                data: data.data.chartDate3
                            }]
                        };
                        _this.myChart3 = echarts.init(document.getElementById('main3'));
                        _this.myChart3.setOption(option3);
                        var option4 = {
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
                                data: data.data.chartBottom4
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

                                data: data.data.chartDate4
                            }]
                        };
                        _this.myChart4 = echarts.init(document.getElementById('main4'));
                        _this.myChart4.setOption(option4);
                        var option5 = {
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
                                data: data.data.chartBottom5
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
                                data: data.data.chartDate5
                            }, ]
                        };
                        _this.myChart5 = echarts.init(document.getElementById('main5'));
                        _this.myChart5.setOption(option5);
                        var option6 = {
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
                                data: data.data.chartBottom6
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
                                data: data.data.chartDate6
                            }, ]
                        };
                        _this.myChart6 = echarts.init(document.getElementById('main6'));
                        _this.myChart6.setOption(option6);
                    } else {
                        Message({
                            'message': data.msg,
                            'type': 'error',
                        });
                    }
                },
                complete = function() {
                    _this.loadingall = false;
                }
            _this.adminApi.getJsonp(url, data, loading, success, complete)
        })

    },
    methods: {
        radiochange: function() {
            let _this = this;
            _this.$nextTick(function() {
                $('.el-date-range-picker').css({
                    'width': '625px'
                })
            })

        },
        monthchange1: function(val) {
            let _this = this;
            _this.startdatevalue = new Date(val).getTime();
            if (_this.enddatevalue) {
                if (_this.startdatevalue > _this.enddatevalue) {
                    Message({
                        'message': '结束时间不能低于开始时间',
                        'type': 'error',
                    });
                    _this.formdata.startmonth = '';
                }
            }
        },
        monthchange2: function(val) {
            let _this = this;
            _this.enddatevalue = new Date(val).getTime();;
            if (_this.startdatevalue) {
                if (_this.startdatevalue > _this.enddatevalue) {
                    Message({
                        'message': '结束时间不能低于开始时间',
                        'type': 'error',
                    });
                    _this.formdata.endmonth = '';
                }
            }
        },
        yhfnSearch1: function() {
            let _this = this;
            if (_this.formdata.startmonth && !_this.formdata.endmonth) {
                Message({
                    'message': '请选择结束时间',
                    'type': 'error',
                });

            } else if (!_this.formdata.startmonth && _this.formdata.endmonth) {
                Message({
                    'message': '请选择开始时间',
                    'type': 'error',
                });
            }
            // else if (!_this.formdata.startmonth && !_this.formdata.endmonth) {
            //     Message({
            //         'message': '请选择时间段查询',
            //         'type': 'error',
            //     });
            // }
            else {
                var data = {
                    'userId': _this.userId,
                    'type': _this.formdata.radiovalue
                };
                var starttime = $('.el-input__inner:eq(0)', ".radio0Month").val();
                var endtime = $('.el-input__inner:eq(1)', ".radio0Month").val();
                data.custStartTime = starttime.replace('-', '');
                data.custEndTime = endtime.replace('-', '');
                var url = _this.adminApi.host + '/htycustall/cust/kind',

                    loading = function() {
                        _this.loadingall = true;
                    },
                    success = function(data) {
                        if (data.code == '1') {
                          _this.dispair = false;
                            var option1 = {
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
                                    data: data.data.chartBottom1
                                }],
                                yAxis: [{
                                    type: 'value'
                                }],
                                series: [{
                                    name: '当前数据',
                                    barWidth: 5,
                                    type: 'bar',
                                    data: data.data.chartDate1,
                                    itemStyle: {
                                        normal: {
                                            color: new echarts.graphic.LinearGradient(
                                                0, 0, 0, 1, [{
                                                    offset: 0,
                                                    color: '#ff7700'
                                                }, {
                                                    offset: 0.5,
                                                    color: '#ff9e48'
                                                }, {
                                                    offset: 1,
                                                    color: '#ffbb7f'
                                                }]
                                            )
                                        },
                                    }
                                }]
                            };
                            _this.myChart1.clear();
                            _this.myChart1 = echarts.init(document.getElementById('main1'));
                            _this.myChart1.setOption(option1);
                            var option2 = {
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
                                    data: data.data.chartBottom2
                                }],
                                yAxis: [{
                                    type: 'value'
                                }],
                                series: [{
                                    name: '当前数据',
                                    barWidth: 5,
                                    type: 'bar',
                                    data: data.data.chartDate2,
                                    itemStyle: {
                                        normal: {
                                            color: new echarts.graphic.LinearGradient(
                                                0, 0, 0, 1, [{
                                                    offset: 0,
                                                    color: '#ff7700'
                                                }, {
                                                    offset: 0.5,
                                                    color: '#ff9e48'
                                                }, {
                                                    offset: 1,
                                                    color: '#ffbb7f'
                                                }]
                                            )
                                        },
                                    }
                                }]
                            };
                            _this.myChart2.clear();
                            _this.myChart2 = echarts.init(document.getElementById('main2'));
                            _this.myChart2.setOption(option2);
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
                                    data: data.data.chartBottom3
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

                                    data: data.data.chartDate3
                                }]
                            };
                            _this.myChart3.clear();
                            _this.myChart3 = echarts.init(document.getElementById('main3'));
                            _this.myChart3.setOption(option3);
                            var option4 = {
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
                                    data: data.data.chartBottom4
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

                                    data: data.data.chartDate4
                                }]
                            };
                            _this.myChart4.clear();
                            _this.myChart4 = echarts.init(document.getElementById('main4'));
                            _this.myChart4.setOption(option4);
                            var option5 = {
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
                                    data: data.data.chartBottom5
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
                                    data: data.data.chartDate5
                                }, ]
                            };
                            _this.myChart5.clear();
                            _this.myChart5 = echarts.init(document.getElementById('main5'));
                            _this.myChart5.setOption(option5);
                            var option6 = {
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
                                    data: data.data.chartBottom6
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
                                    data: data.data.chartDate6
                                }, ]
                            };
                            _this.myChart6.clear();
                            _this.myChart6 = echarts.init(document.getElementById('main6'));
                            _this.myChart6.setOption(option6);
                        } else {
                            Message({
                                'message': data.msg,
                                'type': 'error',
                            });
                        }
                    },
                    complete = function() {
                        _this.loadingall = false;
                    }
                _this.adminApi.getJsonp(url, data, loading, success, complete)
            }
        },
        yhfnSearch2: function() {
            let _this = this;
            var data = {
                'userId': _this.userId,
                'type': _this.formdata.radiovalue
            };
            if (_this.formdata.date) {
                var aaa = $('.el-input__inner', '.w-date-range').val();
                var bbb = aaa.slice(0, 10);
                var ccc = aaa.slice(13, 23)
                var startRange = bbb.replace(/-/g, "");
                var endRange = ccc.replace(/-/g, '');
                data.custStartTime = startRange;
                data.custEndTime = endRange;
            }
            if (_this.formdata.startmonth2) {
                var starttime = $('.el-input__inner:eq(0)', ".radio1Month").val();
                data.pairFirstTime = starttime.replace('-', '');
            }
            if (_this.formdata.endmonth2) {

                var endtime = $('.el-input__inner:eq(1)', ".radio1Month").val();
                data.pairSecondTime = endtime.replace('-', '');
            }

            var url = _this.adminApi.host + '/htycustall/cust/kind',

                loading = function() {
                    _this.loadingall = true;
                },
                success = function(data) {
                    if (data.code == '1') {

                        _this.dispair = true;
                        var option1 = {
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
                                data: data.data.chartBottom1
                            }],
                            yAxis: [{
                                type: 'value'
                            }],
                            series: [{
                                name: '当前数据',
                                barWidth: 5,
                                type: 'bar',
                                data: data.data.chartDate1,
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(
                                            0, 0, 0, 1, [{
                                                offset: 0,
                                                color: '#ff7700'
                                            }, {
                                                offset: 0.5,
                                                color: '#ff9e48'
                                            }, {
                                                offset: 1,
                                                color: '#ffbb7f'
                                            }]
                                        )
                                    },
                                }
                            }, {
                                name: '对比数据',
                                type: 'bar',
                                barWidth: 5,
                                data: data.data.chartPair1,
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(
                                            0, 0, 0, 1, [{
                                                offset: 0,
                                                color: '#6c81c3'
                                            }, {
                                                offset: 0.5,
                                                color: '#91a1c6'
                                            }, {
                                                offset: 1,
                                                color: '#b5bfd9'
                                            }]
                                        )
                                    },
                                }
                            }]
                        };
                        _this.myChart1.clear();
                        _this.myChart1 = echarts.init(document.getElementById('main1'));
                        _this.myChart1.setOption(option1);
                        var option2 = {
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
                                data: data.data.chartBottom2
                            }],
                            yAxis: [{
                                type: 'value'
                            }],
                            series: [{
                                name: '当前数据',
                                barWidth: 5,
                                type: 'bar',
                                data: data.data.chartDate2,
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(
                                            0, 0, 0, 1, [{
                                                offset: 0,
                                                color: '#ff7700'
                                            }, {
                                                offset: 0.5,
                                                color: '#ff9e48'
                                            }, {
                                                offset: 1,
                                                color: '#ffbb7f'
                                            }]
                                        )
                                    },
                                }
                            }, {
                                name: '对比数据',
                                type: 'bar',
                                barWidth: 5,
                                data: data.data.chartPair2,
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(
                                            0, 0, 0, 1, [{
                                                offset: 0,
                                                color: '#6c81c3'
                                            }, {
                                                offset: 0.5,
                                                color: '#91a1c6'
                                            }, {
                                                offset: 1,
                                                color: '#b5bfd9'
                                            }]
                                        )
                                    },
                                }
                            }]
                        };
                        _this.myChart2.clear();
                        _this.myChart2 = echarts.init(document.getElementById('main2'));
                        _this.myChart2.setOption(option2);
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
                                data: data.data.chartBottom3
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

                                data: data.data.chartDate3
                            }, {
                                name: '收入',
                                type: 'line',
                                stack: '总量',
                                itemStyle: {
                                    normal: {
                                        color: 'rgb(108, 129, 179)'
                                    }
                                },

                                data: data.data.chartPair3
                            }]
                        };
                        _this.myChart3.clear();
                        _this.myChart3 = echarts.init(document.getElementById('main3'));
                        _this.myChart3.setOption(option3);
                        var option4 = {
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
                                data: data.data.chartBottom4
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

                                data: data.data.chartDate4
                            }, {
                                name: '收入',
                                type: 'line',
                                stack: '总量',
                                itemStyle: {
                                    normal: {
                                        color: 'rgb(108, 129, 179)'
                                    }
                                },

                                data: data.data.chartPair4
                            }]
                        };
                        _this.myChart4.clear();
                        _this.myChart4 = echarts.init(document.getElementById('main4'));
                        _this.myChart4.setOption(option4);
                        var option5 = {
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
                                data: data.data.chartBottom5
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
                                data: data.data.chartDate5
                            }, {
                                name: '收入',
                                type: 'line',
                                stack: '总量',
                                itemStyle: {
                                    normal: {
                                        color: 'rgb(108, 129, 179)'
                                    }
                                },
                                areaStyle: {
                                    normal: {
                                        color: 'rgb(108, 129, 179)',
                                        opacity: 0.2 // 图表中各个图区域的透明度

                                    }
                                },
                                data: data.data.chartPair5
                            }]
                        };
                        _this.myChart5.clear();
                        _this.myChart5 = echarts.init(document.getElementById('main5'));
                        _this.myChart5.setOption(option5);
                        var option6 = {
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
                                data: data.data.chartBottom6
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
                                data: data.data.chartDate6
                            }, {
                                name: '收入',
                                type: 'line',
                                stack: '总量',
                                itemStyle: {
                                    normal: {
                                        color: 'rgb(108, 129, 179)'
                                    }
                                },
                                areaStyle: {
                                    normal: {
                                        color: 'rgb(108, 129, 179)',
                                        opacity: 0.2 // 图表中各个图区域的透明度

                                    }
                                },
                                data: data.data.chartPair6
                            }]
                        };
                        _this.myChart6.clear();
                        _this.myChart6 = echarts.init(document.getElementById('main6'));
                        _this.myChart6.setOption(option6);
                    } else {
                        Message({
                            'message': data.msg,
                            'type': 'error',
                        });
                    }
                },
                complete = function() {
                    _this.loadingall = false;
                }
            _this.adminApi.getJsonp(url, data, loading, success, complete)
        },
    },
    components: {
        wform,
        FormItem,
        RadioGroup,
        wradio,
        DatePicker,
        Message,
        wbutton,
        wselect,
        woption
    }
}

</script>
