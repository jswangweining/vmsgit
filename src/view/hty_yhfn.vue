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
        <span>首页</span>/<span>汇天眼</span>/<span class="w-pos-active">用户分类</span>
    </div>
    <div class="w-con">
        <div class="w-search">
            <wform :inline="true" :model="formdata" label-position="right" class="demo-form-inline">
                <div class="">
                    <form-item label="转化时间：">
                        <date-picker type="month" v-model="formdata.startmonth" placeholder="选择开始月份" :editable='false' style="width:250px;">
                        </date-picker>
                        <span class="w-searchs">至</span>
                        <date-picker type="month" v-model="formdata.endmonth" placeholder="选择结束月份" :editable='false' style="width:250px;">
                        </date-picker>
                    </form-item>

                    <form-item>
                        <wbutton type="info" icon="search" size="small"></wbutton>
                    </form-item>
                </div>

                <div class="">
                    <form-item label="对比方式：" style="margin-top:0px;">
                        <radio-group v-model="formdata.radiovalue">
                            <wradio label="0">无对比</wradio>
                            <wradio label="1">时间段对比</wradio>
                            <wradio label="2">采购量对比</wradio>
                        </radio-group>
                    </form-item>

                    <form-item label="对比日期：" style="margin-top:0px;" v-if='formdata.radiovalue=="1"'>
                        <date-picker type="month" v-model="formdata.startmonth2" placeholder="选择开始月份" :editable='false' style="width:250px;">
                        </date-picker>
                        <span class="w-searchs">至</span>
                        <date-picker type="month" v-model="formdata.endmonth2" placeholder="选择结束月份" :editable='false' style="width:250px;">
                        </date-picker>

                        <wbutton type="info" size="small">对比</wbutton>
                    </form-item>

                    <form-item label="选择维度：" style="margin-top:0px;" v-if='formdata.radiovalue=="2"'>
                        <wselect v-model="formdata.selectvalue1" placeholder="请选择">
                            <woption label='全部' value='0'></woption>
                            <woption label='整体采购' value='1'></woption>
                        </wselect>
                        <wselect v-model="formdata.selectvalue2" placeholder="请选择" style="width:150px;">
                            <woption label='全部' value='0'></woption>
                            <woption label='50万以下' value='1'></woption>
                        </wselect>
                        对比
                        <wselect v-model="formdata.selectvalue3" placeholder="请选择" style="width:150px;">
                            <woption label='全部' value='0'></woption>
                            <woption label='1000万以上' value='1'></woption>
                        </wselect>
                        <wbutton type="info" size="small">对比</wbutton>
                    </form-item>

                </div>
            </wform>
        </div>
        <div class="w-pannel">
            <div class="w-pannelitem">
                <div class="w-pannelitema">
                    <div class="w-ywxl-ddrdt">
                        <div class="w-ywxl-ddrdta">
                            整体采购
                        </div>
                        <div class="w-ywxl-ddrdtb">
                            <span class="w-ywxl-ddrdtbs1">当前数据</span>
                            <span class="w-ywxl-ddrdtbs2">对比数据</span>
                        </div>
                    </div>
                    <div class="w-pannelitemad">
                        <div class="" id="main" style="width:100%; height:200px;">

                        </div>

                    </div>
                </div>

                <div class="w-pannelitema">
                    <div class="w-ywxl-ddrdt">
                        <div class="w-ywxl-ddrdta">
                            线上采购
                        </div>
                        <div class="w-ywxl-ddrdtb">
                            <span class="w-ywxl-ddrdtbs1">当前数据</span>
                            <span class="w-ywxl-ddrdtbs2">对比数据</span>
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
                            整体采购
                        </div>
                        <div class="w-ywxl-ddrdtb">
                            <span class="w-ywxl-ddrdtbs1">当前数据</span>
                            <span class="w-ywxl-ddrdtbs2">对比数据</span>
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
                            线上采购
                        </div>
                        <div class="w-ywxl-ddrdtb">
                            <span class="w-ywxl-ddrdtbs1">当前数据</span>
                            <span class="w-ywxl-ddrdtbs2">对比数据</span>
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
                            整体采购
                        </div>
                        <div class="w-ywxl-ddrdtb">
                            <span class="w-ywxl-ddrdtbs1">当前数据</span>
                            <span class="w-ywxl-ddrdtbs2">对比数据</span>
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
                            线上采购
                        </div>
                        <div class="w-ywxl-ddrdtb">
                            <span class="w-ywxl-ddrdtbs1">当前数据</span>
                            <span class="w-ywxl-ddrdtbs2">对比数据</span>
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
        loadingall: false,
        formdata: {
            'radiovalue': '0',
            'startmonth': '',
            'endmonth': '',
            'startmonth2': '',
            'endmonth2': '',
            'selectvalue1': '0',
            'selectvalue2': '0',
            'selectvalue3': '0'
        },
        wholeBottom: ["66.66", "66.66"],
        wholeBottomDate: ["201705", "201709"],
        wholeBottomPair: ["88.88", "88.88"],
        myChart:'',
        myChart2:'',
        myChart3:'',
        myChart4:'',
        myChart5:'',
        myChart6:'',
    }),
    mounted() {
        let _this = this;
        _this.$nextTick(function() {
            var option = {
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
                    data: _this.wholeBottomDate
                }],
                yAxis: [{
                    type: 'value'
                }],
                series: [{
                    name: '当前数据',
                    barWidth: 10,
                    type: 'bar',
                    data: _this.wholeBottom
                }, {
                    name: '对比数据',
                    type: 'bar',
                    barWidth: 10,
                    data: _this.wholeBottomPair
                }]
            };
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
                    data: _this.wholeBottomDate
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
                    data: _this.wholeBottom
                },
                {
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
                    data: _this.wholeBottomPair
                }]
            };
            _this.myChart = echarts.init(document.getElementById('main'));
            _this.myChart.setOption(option);
            _this.myChart2 = echarts.init(document.getElementById('main2'));
            _this.myChart2.setOption(option);
            _this.myChart3 = echarts.init(document.getElementById('main3'));
            _this.myChart3.setOption(option3);
            _this.myChart4 = echarts.init(document.getElementById('main4'));
            _this.myChart4.setOption(option3);
            _this.myChart5 = echarts.init(document.getElementById('main5'));
            _this.myChart5.setOption(option3);
            _this.myChart6 = echarts.init(document.getElementById('main6'));
            _this.myChart6.setOption(option3);
        })

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
