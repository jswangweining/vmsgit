<style lang="scss">



</style>

<template>

<div v-loading.body='loadingall' class="bodyscroll">
    <div class="w-pos">
        <span>首页</span>/<span>汇天眼</span>/<span class="w-pos-active">商城热点</span>
    </div>

    <div class="w-con">
        <div class="w-pannel" style="padding:0.5rem 1rem;">
            <wtabs v-model="activeName" v-loading='loadtab'>
                <wtabpane label="B2B商城" name="0">
                    <div class="w-tab-search">
                        <wform :inline="true" :model="formdata1" label-position="right" class="demo-form-inline">
                            <form-item label="周期" class="w-date-range">
                                <date-picker type="daterange" v-model="formdata1.date" :placeholder="monthPlaceHolder" :editable='false' :picker-options="pickerOptions">
                                </date-picker>
                            </form-item>

                            <form-item label="范围">
                                <radio-group v-model="formdata1.radiovalue">
                                    <wradio label="0">全国</wradio>
                                    <wradio label="1">本省</wradio>
                                    <wradio label="2">本市</wradio>
                                </radio-group>
                            </form-item>
                            <form-item>
                                <wbutton type="info" icon="search" size="small" @click='yhxwSearch()'></wbutton>
                            </form-item>
                        </wform>


                    </div>
                </wtabpane>

            </wtabs>
        </div>

        <div class="w-pannel">
            <div class="w-pannelitem">
                <div class="w-pannelitema">
                    <div class="w-ywxl-ddrdt">
                        <div class="w-ywxl-ddrdta">
                            落地页访问量前TOP10（次）
                        </div>
                        <!-- <div class="w-ywxl-ddrdtb">
                            <span class="w-ywxl-ddrdtbs1">当前数据</span>
                            <span class="w-ywxl-ddrdtbs2">对比数据</span>
                        </div> -->
                    </div>
                    <div class="w-pannelitemad">
                        <div class="" id="main1" style="width:100%; height:200px;">

                        </div>

                    </div>
                </div>

                <div class="w-pannelitema" style="margin-left:15px;">
                    <div class="w-ywxl-ddrdt">
                        <div class="w-ywxl-ddrdta">
                            搜索关键词TOP10（次）
                        </div>

                    </div>
                    <div class="w-pannelitemad">
                        <div class="" id="main2" style="width:100%; height:200px;">

                        </div>

                    </div>
                </div>

              </div>

              <div class="w-pannelitem">

                <div class="w-pannelitema">
                    <div class="w-ywxl-ddrdt">
                        <div class="w-ywxl-ddrdta">
                            单品访问排行TOP10（次）
                        </div>

                    </div>
                    <div class="w-pannelitemad">
                        <div class="" id="main3" style="width:100%; height:200px;">

                        </div>

                    </div>
                </div>

                <div class="w-pannelitema" style="margin-left:15px;">
                    <div class="w-ywxl-ddrdt">
                        <div class="w-ywxl-ddrdta">
                            成交单品排行TOP10（次）
                        </div>

                    </div>
                    <div class="w-pannelitemad">
                        <div class="" id="main4" style="width:100%; height:200px;">

                        </div>

                    </div>
                </div>

              </div>

              <div class="w-pannelitem">

                <div class="w-pannelitema">
                    <div class="w-ywxl-ddrdt">
                        <div class="w-ywxl-ddrdta">
                            用户购买漏斗TOP10（次）
                        </div>

                    </div>
                    <div class="w-pannelitemad">
                        <div class="" id="main5" style="width:100%; height:200px;">

                        </div>

                    </div>
                </div>

                <div class="w-pannelitema" style="margin-left:15px;">
                    <div class="w-ywxl-ddrdt">
                        <div class="w-ywxl-ddrdta">
                            用户复购漏斗TOP10（次）
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
import wtabs from 'element-ui/packages/tabs/src/tabs.vue'
import wtabpane from 'element-ui/packages/tabs/src/tab-pane.vue'
import wform from 'element-ui/packages/form/src/form.vue'
import FormItem from 'element-ui/packages/form/src/form-item.vue'
import RadioGroup from 'element-ui/packages/radio/src/radio-group.vue'
import wradio from 'element-ui/packages/radio/src/radio.vue'
import Message from 'element-ui/packages/Message/index.js'
import DatePicker from 'element-ui/packages/date-picker/src/picker/date-picker.js'
import wbutton from 'element-ui/packages/button/src/button.vue'

export default {
    name: "",
    data: () => ({
        userId: '',
        loadingall: false,
        loadtab: false,
        activeName: '0',
        formdata1: {
            'radiovalue': '0',
            'date': ''
        },
        pickerOptions: {
            disabledDate(time) {
                    return time.getTime() >Date.now() - 8.64e7 || time.getTime() < new Date(2016, 0, 1, 0, 0, 0)
                },
                shortcuts: [ {
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
        myChart1: '',
        myChart2: '',
        myChart3: '',
        myChart4: '',
        myChart5: '',
        myChart6: '',
        currentYear:'',
        currentMonth:'',
        monthPlaceHolder:''

    }),
    created() {
        let _this = this;
        if (!_this.$route.query.userId || !_this.$route.query.ticket || !_this.$route.query.userName) {
            _this.$router.push({
                name: 'NotFoundComponent'
            });
            return;
        }
        var curDate = new Date();
        _this.currentYear = curDate.getFullYear();
        _this.currentMonth = curDate.getMonth() + 1;
        _this.monthPlaceHolder = _this.currentYear + '-' + _this.currentMonth;
    },
    mounted() {
        let _this = this;
        var url = _this.adminApi.host + '/login/validate',
            data = {
                userId: _this.$route.query.userId,
                ticket: _this.$route.query.ticket
            },
            loading = function() {
                _this.loadingall = true;
            },
            success = function(data) {
                if (data.code == '2') {

                    _this.userId = _this.$route.query.userId;
                    _this.$emit('userInfo', _this.$route.query.userName, data.data.vmsUrl);
                    var data = {
                        'userId': _this.$route.query.userId,
                        'ticket': _this.$route.query.ticket,
                        'userName': _this.$route.query.userName,
                    }
                    _this.$store.commit('changeUserId', data)
                    _this.$nextTick(function() {
                        let _this = this;
                        var url = _this.adminApi.host + '/userBehavior/behavior/whole',
                            data = {
                                'userId': _this.userId,
                                'radio': _this.formdata1.radiovalue,
                                // 'startTime':'20170505',
                                // 'endTime':'20170506'
                            },
                            loading = function() {
                                _this.loadingall = true;
                            },
                            success = function(data) {
                                if (data.code == '1') {
                                    var option1 = {
                                        tooltip: {
                                            trigger: 'axis',
                                            axisPointer: {
                                                type: 'shadow'
                                            }
                                        },
                                        grid: {
                                            top: '0',
                                            left: '10',
                                            right: '10',
                                            bottom: '10',
                                            containLabel: true

                                        },
                                        xAxis: {
                                            type: 'value',
                                            boundaryGap: [0, 0.01],
                                            axisLine: {
                                                lineStyle: {
                                                    color: '#eee'
                                                }
                                            },
                                            axisLabel:{
                                              color:'#333'
                                            },

                                            splitLine: {
                                                lineStyle: {
                                                    color: ['#eee'],
                                                }
                                            }
                                        },
                                        yAxis: {
                                            type: 'category',
                                            data: data.data.b2bLndPageList,
                                            inverse: true,
                                            axisLine: {
                                                lineStyle: {
                                                    color: '#eee'
                                                }
                                            },
                                            axisLabel: {
                                                color: '#333'
                                            },

                                        },

                                        series: [{
                                            type: 'bar',
                                            itemStyle: {
                                                normal: {
                                                    color: new echarts.graphic.LinearGradient(
                                                        1, 0, 0, 0, [{
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
                                            },
                                            data: data.data.b2bLndPageNumList,
                                            barWidth: 5,
                                        }, ]
                                    };
                                    _this.myChart1 = echarts.init(document.getElementById('main1'));
                                    _this.myChart1.setOption(option1);
                                    var option2 = {
                                        tooltip: {
                                            trigger: 'axis',
                                            axisPointer: {
                                                type: 'shadow'
                                            }
                                        },
                                        grid: {
                                            top: '0',
                                            left: '10',
                                            right: '10',
                                            bottom: '10',
                                            containLabel: true

                                        },
                                        xAxis: {
                                            type: 'value',
                                            boundaryGap: [0, 0.01],
                                            axisLine: {
                                                lineStyle: {
                                                    color: '#eee'
                                                }
                                            },
                                            axisLabel:{
                                              color:'#333'
                                            },
                                            splitLine: {
                                                lineStyle: {
                                                    color: ['#eee'],
                                                }
                                            }
                                        },
                                        yAxis: {
                                            type: 'category',
                                            data: data.data.b2bSearchKeyList,
                                            inverse: true,
                                            axisLine: {
                                                lineStyle: {
                                                    color: '#eee'
                                                }
                                            },
                                            axisLabel: {
                                                color: '#333'
                                            },
                                        },
                                        series: [{
                                            type: 'bar',
                                            itemStyle: {
                                                normal: {
                                                    color: new echarts.graphic.LinearGradient(
                                                        1, 0, 0, 0, [{
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
                                            },
                                            data: data.data.b2bSearchKeyNumList,
                                            barWidth: 5,
                                        }, ]
                                    };
                                    _this.myChart2 = echarts.init(document.getElementById('main2'));
                                    _this.myChart2.setOption(option2);
                                    var option3 = {
                                        tooltip: {
                                            trigger: 'axis',
                                            axisPointer: {
                                                type: 'shadow'
                                            }
                                        },
                                        grid: {
                                            top: '0',
                                            left: '10',
                                            right: '10',
                                            bottom: '10',
                                            containLabel: true
                                        },
                                        xAxis: {
                                            type: 'value',
                                            boundaryGap: [0, 0.01],
                                            axisLine: {
                                                lineStyle: {
                                                    color: '#eee'
                                                }
                                            },
                                            axisLabel:{
                                              color:'#333'
                                            },
                                            splitLine: {
                                                lineStyle: {
                                                    color: ['#eee'],
                                                }
                                            }
                                        },
                                        yAxis: {
                                            type: 'category',
                                            data: data.data.b2bItemAccessList,
                                            inverse: true,
                                            axisLine: {
                                                lineStyle: {
                                                    color: '#eee'
                                                }
                                            },
                                            axisLabel: {
                                                color: '#333'
                                            },
                                        },
                                        series: [{
                                            type: 'bar',
                                            itemStyle: {
                                                normal: {
                                                    color: new echarts.graphic.LinearGradient(
                                                        1, 0, 0, 0, [{
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
                                            },
                                            data: data.data.b2bItemAccessNumList,
                                            barWidth: 5,
                                        }, ]
                                    };
                                    _this.myChart3 = echarts.init(document.getElementById('main3'));
                                    _this.myChart3.setOption(option3);
                                    var option4 = {
                                        tooltip: {
                                            trigger: 'axis',
                                            axisPointer: {
                                                type: 'shadow'
                                            }
                                        },
                                        grid: {
                                            top: '0',
                                            left: '10',
                                            right: '10',
                                            bottom: '10',
                                            containLabel: true

                                        },
                                        xAxis: {
                                            type: 'value',
                                            boundaryGap: [0, 0.01],
                                            axisLine: {
                                                lineStyle: {
                                                    color: '#eee'
                                                }
                                            },
                                            axisLabel:{
                                              color:'#333'
                                            },
                                            splitLine: {
                                                lineStyle: {
                                                    color: ['#eee'],
                                                }
                                            }
                                        },
                                        yAxis: {
                                            type: 'category',
                                            data: data.data.b2bSaleCityProdyList,
                                            inverse: true,
                                            axisLine: {
                                                lineStyle: {
                                                    color: '#eee'
                                                }
                                            },
                                            axisLabel: {
                                                color: '#333'
                                            },
                                        },
                                        series: [{
                                            type: 'bar',
                                            itemStyle: {
                                                normal: {
                                                    color: new echarts.graphic.LinearGradient(
                                                        1, 0, 0, 0, [{
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
                                            },
                                            data: data.data.b2bSaleCityProdNumList,
                                            barWidth: 5,
                                        }, ]
                                    };
                                    _this.myChart4 = echarts.init(document.getElementById('main4'));
                                    _this.myChart4.setOption(option4);
                                    var option5 = {
                                        tooltip: {
                                            trigger: 'axis',
                                            axisPointer: {
                                                type: 'shadow',

                                            }
                                        },
                                        grid: {
                                            top: '0',
                                            left: '10',
                                            right: '10',
                                            bottom: '10',
                                            containLabel: true
                                        },
                                        xAxis: {
                                            type: 'value',
                                            boundaryGap: [0, 0.01],
                                            axisLine: {
                                                lineStyle: {
                                                    color: '#eee'
                                                }
                                            },
                                            axisLabel:{
                                              color:'#333'
                                            },
                                            splitLine: {
                                                lineStyle: {
                                                    color: ['#eee'],
                                                }
                                            }
                                        },
                                        yAxis: {
                                            type: 'category',
                                            data: [data.data.b2bConvFunnelList[0]+','+data.data.b2bSaleCityProdperCentList[0],data.data.b2bConvFunnelList[1]+','+data.data.b2bSaleCityProdperCentList[1],data.data.b2bConvFunnelList[2]+','+data.data.b2bSaleCityProdperCentList[2],data.data.b2bConvFunnelList[3]+','+data.data.b2bSaleCityProdperCentList[3],data.data.b2bConvFunnelList[4]+','+data.data.b2bSaleCityProdperCentList[4]],
                                            inverse: true,
                                            axisLine: {
                                                lineStyle: {
                                                    color: '#eee'
                                                }
                                            },
                                            axisLabel: {
                                                color: '#333'
                                            },
                                        },
                                        series: [{
                                            type: 'bar',
                                            itemStyle: {
                                                normal: {
                                                    color: new echarts.graphic.LinearGradient(
                                                        1, 0, 0, 0, [{
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
                                            },
                                            data: [data.data.b2bConvFunnelNumList[0],data.data.b2bConvFunnelNumList[1],data.data.b2bConvFunnelNumList[2],data.data.b2bConvFunnelNumList[3],data.data.b2bConvFunnelNumList[4]],
                                            barWidth: 5,
                                        }, ]
                                    };
                                    _this.myChart5 = echarts.init(document.getElementById('main5'));
                                    _this.myChart5.setOption(option5);
                                    var option6 = {
                                        tooltip: {
                                            trigger: 'axis',
                                            axisPointer: {
                                                type: 'shadow'
                                            }
                                        },
                                        grid: {
                                            top: '0',
                                            left: '10',
                                            right: '10',
                                            bottom: '10',
                                            containLabel: true
                                        },
                                        xAxis: {
                                            type: 'value',
                                            boundaryGap: [0, 0.01],
                                            axisLine: {
                                                lineStyle: {
                                                    color: '#eee'
                                                }
                                            },
                                            axisLabel:{
                                              color:'#333'
                                            },
                                            splitLine: {
                                                lineStyle: {
                                                    color: ['#eee'],
                                                }
                                            }
                                        },
                                        yAxis: {
                                            type: 'category',
                                            data: data.data.b2bRepeatBuyList,
                                            // inverse: true,
                                            axisLine: {
                                                lineStyle: {
                                                    color: '#eee'
                                                }
                                            },
                                            axisLabel: {
                                                color: '#333'
                                            },
                                        },
                                        series: [{
                                            type: 'bar',
                                            itemStyle: {
                                                normal: {
                                                    color: new echarts.graphic.LinearGradient(
                                                        1, 0, 0, 0, [{
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
                                            },
                                            data: data.data.b2bRepeatBuyNumList,
                                            barWidth: 5,
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
                        $(window).resize(function() {
                            if (_this.myChart1) {
                                _this.myChart1.resize();
                            }
                            if (_this.myChart2) {
                                _this.myChart2.resize();
                            }
                            if (_this.myChart3) {
                                _this.myChart3.resize();
                            }
                            if (_this.myChart4) {
                                _this.myChart4.resize();
                            }
                            if (_this.myChart5) {
                                _this.myChart5.resize();
                            }
                            if (_this.myChart6) {
                                _this.myChart6.resize();
                            }


                        });
                    })
                } else {
                    Message({
                        'message': data.msg,
                        'type': 'error',
                        'onClose':function(){
                          window.location.href=data.data.vmsUrl+'/login';
                        }
                    });
                }
            },
            complete = function() {
                _this.loadingall = false;
            }
        _this.adminApi.getJsonp(url, data, loading, success, complete)

    },
    methods: {
        yhxwSearch: function() {
            let _this = this;
            var data = {
                'userId': _this.userId,
                'radio': _this.formdata1.radiovalue,
                // 'startTime':'20170505',
                // 'endTime':'20170506'
            };

            if (_this.formdata1.date) {
                var aaa = $('.el-input__inner', '.w-date-range').val();
                var bbb = aaa.slice(0, 10);
                var ccc = aaa.slice(13, 23)
                var startRange = bbb.replace(/-/g, "");
                var endRange = ccc.replace(/-/g, '');
                data.startTime = startRange;
                data.endTime = endRange;
            }
            var url = _this.adminApi.host + '/userBehavior/behavior/whole',

                loading = function() {
                    _this.loadingall = true;
                },
                success = function(data) {
                    if (data.code == '1') {
                        var option1 = {
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'shadow'
                                }
                            },
                            grid: {
                                top: '0',
                                left: '10',
                                right: '10',
                                bottom: '10',
                                containLabel: true

                            },
                            xAxis: {
                                type: 'value',
                                boundaryGap: [0, 0.01],
                                axisLine: {
                                    lineStyle: {
                                        color: '#eee'
                                    }
                                },
                                axisLabel:{
                                  color:'#333'
                                },
                                splitLine: {
                                    lineStyle: {
                                        color: ['#eee'],
                                    }
                                }
                            },
                            yAxis: {
                                type: 'category',
                                data: data.data.b2bLndPageList,
                                inverse: true,
                                axisLine: {
                                    lineStyle: {
                                        color: '#eee'
                                    }
                                },
                                axisLabel: {
                                    color: '#333'
                                },

                            },

                            series: [{
                                type: 'bar',
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(
                                            1, 0, 0, 0, [{
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
                                },
                                data: data.data.b2bLndPageNumList,
                                barWidth: 5,
                            }, ]
                        };
                        _this.myChart1 = echarts.init(document.getElementById('main1'));
                        _this.myChart1.setOption(option1);
                        var option2 = {
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'shadow'
                                }
                            },
                            grid: {
                                top: '0',
                                left: '10',
                                right: '10',
                                bottom: '10',
                                containLabel: true

                            },
                            xAxis: {
                                type: 'value',
                                boundaryGap: [0, 0.01],
                                axisLine: {
                                    lineStyle: {
                                        color: '#eee'
                                    }
                                },
                                axisLabel:{
                                  color:'#333'
                                },
                                splitLine: {
                                    lineStyle: {
                                        color: ['#eee'],
                                    }
                                }
                            },
                            yAxis: {
                                type: 'category',
                                data: data.data.b2bSearchKeyList,
                                inverse: true,
                                axisLine: {
                                    lineStyle: {
                                        color: '#eee'
                                    }
                                },
                                axisLabel: {
                                    color: '#333'
                                },
                            },
                            series: [{
                                type: 'bar',
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(
                                            1, 0, 0, 0, [{
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
                                },
                                data: data.data.b2bSearchKeyNumList,
                                barWidth: 5,
                            }, ]
                        };
                        _this.myChart2 = echarts.init(document.getElementById('main2'));
                        _this.myChart2.setOption(option2);
                        var option3 = {
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'shadow'
                                }
                            },
                            grid: {
                                top: '0',
                                left: '10',
                                right: '10',
                                bottom: '10',
                                containLabel: true
                            },
                            xAxis: {
                                type: 'value',
                                boundaryGap: [0, 0.01],
                                axisLine: {
                                    lineStyle: {
                                        color: '#eee'
                                    }
                                },
                                axisLabel:{
                                  color:'#333'
                                },
                                splitLine: {
                                    lineStyle: {
                                        color: ['#eee'],
                                    }
                                }
                            },
                            yAxis: {
                                type: 'category',
                                data: data.data.b2bItemAccessList,
                                inverse: true,
                                axisLine: {
                                    lineStyle: {
                                        color: '#eee'
                                    }
                                },
                                axisLabel: {
                                    color: '#333'
                                },
                            },
                            series: [{
                                type: 'bar',
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(
                                            1, 0, 0, 0, [{
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
                                },
                                data: data.data.b2bItemAccessNumList,
                                barWidth: 5,
                            }, ]
                        };
                        _this.myChart3 = echarts.init(document.getElementById('main3'));
                        _this.myChart3.setOption(option3);
                        var option4 = {
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'shadow'
                                }
                            },
                            grid: {
                                top: '0',
                                left: '10',
                                right: '10',
                                bottom: '10',
                                containLabel: true

                            },
                            xAxis: {
                                type: 'value',
                                boundaryGap: [0, 0.01],
                                axisLine: {
                                    lineStyle: {
                                        color: '#eee'
                                    }
                                },
                                splitLine: {
                                    lineStyle: {
                                        color: ['#eee'],
                                    }
                                }
                            },
                            yAxis: {
                                type: 'category',
                                data: data.data.b2bSaleCityProdyList,
                                inverse: true,
                                axisLine: {
                                    lineStyle: {
                                        color: '#eee'
                                    }
                                },
                                axisLabel: {
                                    color: '#333'
                                },
                            },
                            series: [{
                                type: 'bar',
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(
                                            1, 0, 0, 0, [{
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
                                },
                                data: data.data.b2bSaleCityProdNumList,
                                barWidth: 5,
                            }, ]
                        };
                        _this.myChart4 = echarts.init(document.getElementById('main4'));
                        _this.myChart4.setOption(option4);
                        var option5 = {
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'shadow'
                                }
                            },
                            grid: {
                                top: '0',
                                left: '10',
                                right: '10',
                                bottom: '10',
                                containLabel: true
                            },
                            xAxis: {
                                type: 'value',
                                boundaryGap: [0, 0.01],
                                axisLine: {
                                    lineStyle: {
                                        color: '#eee'
                                    }
                                },
                                axisLabel:{
                                  color:'#333'
                                },
                                splitLine: {
                                    lineStyle: {
                                        color: ['#eee'],
                                    }
                                }
                            },
                            yAxis: {
                                type: 'category',
                                data: [data.data.b2bConvFunnelList[0]+','+data.data.b2bSaleCityProdperCentList[0],data.data.b2bConvFunnelList[1]+','+data.data.b2bSaleCityProdperCentList[1],data.data.b2bConvFunnelList[2]+','+data.data.b2bSaleCityProdperCentList[2],data.data.b2bConvFunnelList[3]+','+data.data.b2bSaleCityProdperCentList[3],data.data.b2bConvFunnelList[4]+','+data.data.b2bSaleCityProdperCentList[4]],
                                inverse: true,
                                axisLine: {
                                    lineStyle: {
                                        color: '#eee'
                                    }
                                },
                                axisLabel: {
                                    color: '#333'
                                },
                            },
                            series: [{
                                type: 'bar',
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(
                                            1, 0, 0, 0, [{
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
                                },
                                data: data.data.b2bConvFunnelNumList,
                                barWidth: 5,
                            }, ]
                        };
                        _this.myChart5 = echarts.init(document.getElementById('main5'));
                        _this.myChart5.setOption(option5);
                        var option6 = {
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'shadow'
                                }
                            },
                            grid: {
                                top: '0',
                                left: '10',
                                right: '10',
                                bottom: '10',
                                containLabel: true
                            },
                            xAxis: {
                                type: 'value',
                                boundaryGap: [0, 0.01],
                                axisLine: {
                                    lineStyle: {
                                        color: '#eee'
                                    }
                                },
                                axisLabel:{
                                  color:'#333'
                                },
                                splitLine: {
                                    lineStyle: {
                                        color: ['#eee'],
                                    }
                                }
                            },
                            yAxis: {
                                type: 'category',
                                data: data.data.b2bRepeatBuyList,
                                inverse: true,
                                axisLine: {
                                    lineStyle: {
                                        color: '#eee'
                                    }
                                },
                                axisLabel: {
                                    color: '#333'
                                },
                            },
                            series: [{
                                type: 'bar',
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(
                                            1, 0, 0, 0, [{
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
                                },
                                data: data.data.b2bRepeatBuyNumList,
                                barWidth: 5,
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
        }
    },
    components: {
        wtabs,
        wtabpane,
        wform,
        FormItem,
        RadioGroup,
        wradio,
        DatePicker,
        Message,
        wbutton
    }
}

</script>
