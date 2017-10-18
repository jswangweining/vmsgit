<style lang="scss">

.w-con {
    padding: 0 0.5rem;
}

.w-search {
    border: 1px solid #d7d7d7;
    background-color: #fff;
    padding: 0 1rem;
}

.w-searchs {
    margin: 0 5px;
}

.w-pannel {
    border: 1px solid #d7d7d7;
    background-color: #fff;
    margin-top: 0.5rem;
    padding: 1rem;
}

.xpdj-t {
    border-bottom: 1px solid #f3f3f3;
    display: flex;
    padding: 1rem 0 2rem 0;
}

.xpdj-ta {
    flex: 1;
    display: flex;
    flex-direction: column;
    line-height: 1rem;
    border-right: 1px solid #f3f3f3
}

.xpdj-tap1 {
    font-weight: 600;
    font-size: 0.7rem;
    text-align: center;
    span {
        font-size: 0.6rem;
        margin-left: 0.5rem;
    }
}

.xpdj-tap2 {
    color: #6c81b3;
    font-size: 1.1rem;
    padding: 0.5rem 0;
    text-align: center;
}

.xpdj-tap2red {
    color: #ff5555;
}

.xpdj-tap2org {
    color: #ff7700
}

.xpdj-tap3 {
    color: #999;
    font-size: 0.6rem;
    display: flex;
    .xpdj-tap3s1 {
        flex: 1;
        text-align: right;
    }
    .xpdj-tap3s2 {
        flex: 1;
        color: #6c81b3;
        text-align: left;
        margin-left: 0.5rem;
    }
}

.xpdj-m {
    display: flex;
    padding: 1rem 0.5rem;
    border-bottom: 1px solid #f3f3f3;
}

.xpdj-ml {
    flex: 1;
}

.xpdj-mr {
    flex: 1;
    vertical-align: middle;
    text-align: right;
}

.w-table {
    margin-top: 0.5rem;
}

.w-pages {
    padding: 1rem 0;
    text-align: center;
}

.el-input.is-disabled .w-dataactive {
    color: #ff5555;
}

// input.w-dataactive {
//
// }

</style>

<template>

<div v-loading.body='loadingall' style="width:100%; height:100%">
    <div class="w-pos">
        <span>首页</span>/<span>汇天眼</span>/<span class="w-pos-active">选品定价</span> {{formdata.endmonth}}
    </div>
    <div class="w-con">
        <div class="w-search">
            <wform :inline="true" :model="formdata" ref="formdata" label-position="right" class="demo-form-inline">
                <form-item label="对比方式：">
                    <radio-group v-model="formdata.radiovalue" @change='radiochange'>
                        <wradio label="1">月度</wradio>
                        <wradio label="2">年度</wradio>
                    </radio-group>
                </form-item>

                <form-item label="选择月度：" v-if='formdata.radiovalue==1' class="monthrange">
                    <date-picker type="month" v-model="formdata.startmonth" placeholder="选择开始月份" :disabled='mondisabled' :editable='false' :picker-options="pickerOptions" @change='monthchange1' style="width:250px;">
                    </date-picker>
                    <span class="w-searchs">至</span>
                    <date-picker type="month" v-model="formdata.endmonth" placeholder="选择结束月份" :disabled='mondisabled' :editable='false' :picker-options="pickerOptions1" @change='monthchange2' style="width:250px;">
                    </date-picker>

                    <wbutton type="info" icon="search" size="small" @click='searchMonth()'></wbutton>

                    <wbutton type="info" icon="close" size="small" @click='closeMonth()'>清空时间范围</wbutton>
                </form-item>

                <form-item label="选择年度：" v-if='formdata.radiovalue==2' class="yearrange">
                    <date-picker type="year" v-model="formdata.startyear" placeholder="选择开始年份" :disabled='yeardisabled' :editable='false' :picker-options="pickerOptions" @change='yearchange1' style="width:250px;">
                    </date-picker>
                    <span class="w-searchs">至</span>
                    <date-picker type="year" v-model="formdata.endyear" placeholder="选择结束年份" :disabled='yeardisabled' :editable='false' :picker-options="pickerOptions1" @change='yearchange2' style="width:250px;">
                    </date-picker>

                    <wbutton type="info" icon="search" size="small" @click='searchYear()'></wbutton>

                    <wbutton type="info" icon="close" size="small" @click='closeYear()'>清空时间范围</wbutton>
                </form-item>

            </wform>
        </div>
        <div class="w-pannel">
            <div class="xpdj-t">
                <div class="xpdj-ta">
                    <p class="xpdj-tap1">销售金额<span>（万元）</span></p>
                    <p class="xpdj-tap2">{{topdata.xsAmt}}</p>
                    <p class="xpdj-tap3"><span class="xpdj-tap3s1">上期金额</span><span class="xpdj-tap3s2">{{topdata.upperXsAmt}}</span></p>
                    <p class="xpdj-tap3"><span class="xpdj-tap3s1">上期同比</span><span class="xpdj-tap3s2">{{topdata.xsAmtAn}}%<svg class="icon" aria-hidden="true" v-if='topdata.xsAmtSort=="0"'>
                        <use xlink:href="#icon-jiantou1"></use>
                    </svg><svg class="icon" aria-hidden="true" v-if='topdata.xsAmtSort=="1"'>
                        <use xlink:href="#icon-jiantou2"></use>
                    </svg></span></p>
                </div>
                <div class="xpdj-ta">
                    <p class="xpdj-tap1">销售数量<span>（件）</span></p>
                    <p class="xpdj-tap2">{{topdata.xsQty}}</p>
                    <p class="xpdj-tap3"><span class="xpdj-tap3s1">上期金额</span><span class="xpdj-tap3s2">{{topdata.upperXsQty}}</span></p>
                    <p class="xpdj-tap3"><span class="xpdj-tap3s1">上期同比</span><span class="xpdj-tap3s2">{{topdata.xsQtyAn}}%<svg class="icon" aria-hidden="true" v-if='topdata.xsQtySort=="0"'>
                        <use xlink:href="#icon-jiantou1"></use>
                    </svg><svg class="icon" aria-hidden="true" v-if='topdata.xsQtySort=="1"'>
                        <use xlink:href="#icon-jiantou2"></use>
                    </svg></span></p>
                </div>
                <div class="xpdj-ta">
                    <p class="xpdj-tap1">销售毛利率</p>
                    <p class="xpdj-tap2 xpdj-tap2red">{{topdata.xsMl}}</p>
                    <p class="xpdj-tap3"><span class="xpdj-tap3s1">上期金额</span><span class="xpdj-tap3s2">{{topdata.upperXsMl}}</span></p>
                    <p class="xpdj-tap3"><span class="xpdj-tap3s1">上期同比</span><span class="xpdj-tap3s2">{{topdata.xsMlAn}}%<svg class="icon" aria-hidden="true" v-if='topdata.xsMlSort=="0"'>
                        <use xlink:href="#icon-jiantou1"></use>
                    </svg><svg class="icon" aria-hidden="true" v-if='topdata.xsMlSort=="1"'>
                        <use xlink:href="#icon-jiantou2"></use>
                    </svg></span></p>
                </div>
                <div class="xpdj-ta">
                    <p class="xpdj-tap1">销售净利润<span>（万元）</span></p>
                    <p class="xpdj-tap2 xpdj-tap2org">{{topdata.xsLr}}</p>
                    <p class="xpdj-tap3"><span class="xpdj-tap3s1">上期金额</span><span class="xpdj-tap3s2">{{topdata.upperXsLr}}</span></p>
                    <p class="xpdj-tap3"><span class="xpdj-tap3s1">上期同比</span><span class="xpdj-tap3s2">{{topdata.xsLrAn}}%<svg class="icon" aria-hidden="true" v-if='topdata.xsLrSort=="0"'>
                        <use xlink:href="#icon-jiantou1"></use>
                    </svg><svg class="icon" aria-hidden="true" v-if='topdata.xsLrSort=="1"'>
                        <use xlink:href="#icon-jiantou2"></use>
                    </svg></span></p>
                </div>
                <div class="xpdj-ta">
                    <p class="xpdj-tap1">销售金额排名</p>
                    <p class="xpdj-tap2 xpdj-tap2org">{{topdata.xsRanking}}</p>
                    <p class="xpdj-tap3"><span class="xpdj-tap3s1">上期金额</span><span class="xpdj-tap3s2">{{topdata.upperXsRanking}}</span></p>
                    <p class="xpdj-tap3"><span class="xpdj-tap3s1">上期同比</span><span class="xpdj-tap3s2">{{topdata.xsRankingAn}}%<svg class="icon" aria-hidden="true" v-if='topdata.xsRankingSort=="0"'>
                        <use xlink:href="#icon-jiantou1"></use>
                    </svg><svg class="icon" aria-hidden="true" v-if='topdata.xsRankingSort=="1"'>
                        <use xlink:href="#icon-jiantou2"></use>
                    </svg></span></p>
                </div>
            </div>
            <div class="xpdj-m">
                <div class="xpdj-ml">
                    <div class="w-ywxl-r-t">
                        公司与行业销售情况趋势图
                        <wselect v-model="selectvalue" placeholder="请选择" style="margin-left:50px;" @change='selectchange'>
                            <woption label='销售额' value='0'></woption>
                            <woption label='订单数' value='1'></woption>
                            <woption label='毛利率' value='2'></woption>
                        </wselect>
                    </div>
                </div>
                <div class="xpdj-mr">
                    <span class="w-ywxl-ddrdtbs1">当前数据</span>
                    <span class="w-ywxl-ddrdtbs2">对比数据</span>
                </div>
            </div>
            <div class="xpdj-c">
                <div id='main' style="width:100%; height:200px;">

                </div>
            </div>
        </div>

        <div class="w-pannel">
            <wtabs v-model="activeName" v-loading='loadtab' @tab-click="tabclick">



                <wtabpane label="品牌品类销售分析" name="0">

                    <div class="w-tab-search">
                        <wform :inline="true" :model="formdata2" label-position="right" class="demo-form-inline">
                            <form-item label="">
                              <radio-group v-model="formdata2.radiovalue" @change='radiochangepp'>
                                  <wradio label="0">品牌</wradio>
                                  <wradio label="1">品类</wradio>

                              </radio-group>
                            </form-item>
                        </wform>
                    </div>
                    <div class="w-table">
                        <wtable border :data="tableData">
                            <tablecolumn prop="ppName" label="品牌" width='200' fixed>
                            </tablecolumn>
                            <tablecolumn prop="plName" label="品类" show-overflow-tooltip min-width='300'>
                            </tablecolumn>
                            <tablecolumn prop="xsPrice" label="销售单价" width='150'>
                            </tablecolumn>
                            <tablecolumn prop="xsQty" label="销售数量" width='150'>
                            </tablecolumn>
                            <tablecolumn prop="xsAmt" label="销售金额" width='150' sortable>
                            </tablecolumn>
                            <tablecolumn prop="xsRatio" label="销售金额占比" width='150'>
                            </tablecolumn>
                            <tablecolumn prop="xsAvg" label="平均毛利" width='200'>
                            </tablecolumn>
                            <tablecolumn prop="xsAvgRatio" label="平均毛利率" fixed='right'>
                            </tablecolumn>
                        </wtable>
                    </div>
                    <div class="w-pages">
                        <wpager :total="pagetotle1" :current-page="cur_page1" layout="total, sizes, prev, pager, next, jumper" :page-sizes="[10, 15, 20]" :page-size="pagesize1" @current-change="handleCurrentChange1" @size-change="handleSizeChange1"></wpager>
                    </div>
                </wtabpane>
                <wtabpane label="在售商铺详情分析" name="1">
                    <div class="w-tab-search">
                        <wform :inline="true" :model="formdata3" label-position="right" class="demo-form-inline">
                            <form-item label="商品名称：">
                                <winput v-model="formdata3.inpName" placeholder='订单号/客户名称/联系方式'></winput>
                            </form-item>

                            <form-item label="品类：">
                                <wselect v-model="formdata3.selectvalue1" placeholder="请选择">
                                    <woption label='全部' value='0'></woption>
                                    <woption label='爆款' value='1'></woption>
                                    <woption label='滞款' value='2'></woption>
                                </wselect>
                            </form-item>

                            <form-item label="品牌：">
                                <wselect v-model="formdata3.selectvalue2" placeholder="请选择">
                                    <woption label='全部' value='0'></woption>
                                    <woption label='爆款' value='1'></woption>
                                    <woption label='滞款' value='2'></woption>
                                </wselect>
                            </form-item>

                            <form-item label="爆/滞款：">
                                <wselect v-model="formdata3.selectvalue3" placeholder="请选择" style="width:100px;">
                                    <woption label='全部' value='0'></woption>
                                    <woption label='爆款' value='1'></woption>
                                    <woption label='滞款' value='2'></woption>
                                </wselect>
                            </form-item>

                            <form-item>
                                <wbutton type="info" icon="search" size="small"></wbutton>
                            </form-item>
                        </wform>
                    </div>
                    <div class="w-table">
                        <wtable border :data="tableData">
                            <tablecolumn prop="orderId" label="订单编号" width='200' fixed>
                            </tablecolumn>
                            <tablecolumn prop="name" label="客户名称" show-overflow-tooltip min-width='300'>
                            </tablecolumn>
                            <tablecolumn prop="money" label="订单总金额" width='150'>
                            </tablecolumn>
                            <tablecolumn prop="num" label="商品总数" width='150'>
                            </tablecolumn>
                            <tablecolumn prop="orderTime" label="下单时间" width='150'>
                            </tablecolumn>
                            <tablecolumn prop="link" label="联系人" width='150'>
                            </tablecolumn>
                            <tablecolumn prop="phone" label="联系方式" width='200'>
                            </tablecolumn>
                            <tablecolumn prop="zt" label="状态" fixed='right'>
                            </tablecolumn>
                        </wtable>
                    </div>
                    <div class="w-pages">
                        <wpager :total="pagetotle2" :current-page="cur_page2" layout="total, sizes, prev, pager, next, jumper" :page-sizes="[10, 15, 20]" :page-size="pagesize2"></wpager>
                    </div>
                </wtabpane>
                <wtabpane label="爆款商品销售分析" name="2">
                    <div class="w-tab-search">
                        <wform :inline="true" :model="formdata4" label-position="right" class="demo-form-inline">


                            <form-item label="品类：">
                                <wselect v-model="formdata4.selectvalue1" placeholder="请选择">
                                    <woption label='全部' value='0'></woption>
                                    <woption label='爆款' value='1'></woption>
                                    <woption label='滞款' value='2'></woption>
                                </wselect>
                            </form-item>

                            <form-item label="品牌：">
                                <wselect v-model="formdata4.selectvalue2" placeholder="请选择">
                                    <woption label='全部' value='0'></woption>
                                    <woption label='爆款' value='1'></woption>
                                    <woption label='滞款' value='2'></woption>
                                </wselect>
                            </form-item>

                            <form-item label="是否经营：">
                                <wselect v-model="formdata4.selectvalue3" placeholder="请选择" style="width:100px;">
                                    <woption label='全部' value='0'></woption>
                                    <woption label='是' value='1'></woption>
                                    <woption label='否' value='2'></woption>
                                </wselect>
                            </form-item>

                            <form-item>
                                <wbutton type="info" icon="search" size="small"></wbutton>
                            </form-item>
                        </wform>
                    </div>
                    <div class="w-table">
                        <wtable border :data="tableData">
                            <tablecolumn prop="orderId" label="订单编号" width='200' fixed>
                            </tablecolumn>
                            <tablecolumn prop="name" label="客户名称" show-overflow-tooltip min-width='300'>
                            </tablecolumn>
                            <tablecolumn prop="money" label="订单总金额" width='150'>
                            </tablecolumn>
                            <tablecolumn prop="num" label="商品总数" width='150'>
                            </tablecolumn>
                            <tablecolumn prop="orderTime" label="下单时间" width='150'>
                            </tablecolumn>
                            <tablecolumn prop="link" label="联系人" width='150'>
                            </tablecolumn>
                            <tablecolumn prop="phone" label="联系方式" width='200'>
                            </tablecolumn>
                            <tablecolumn prop="zt" label="状态" fixed='right'>
                            </tablecolumn>
                        </wtable>
                    </div>
                    <div class="w-pages">
                        <wpager :total="pagetotle3" :current-page="cur_page3" layout="total, sizes, prev, pager, next, jumper" :page-sizes="[10, 15, 20]" :page-size="pagesize3"></wpager>
                    </div>
                </wtabpane>



            </wtabs>
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
import wtabs from 'element-ui/packages/tabs/src/tabs.vue'
import wtabpane from 'element-ui/packages/tabs/src/tab-pane.vue'
import winput from 'element-ui/packages/input/src/input.vue'
import wtable from 'element-ui/packages/table/src/table.vue'
import tablecolumn from 'element-ui/packages/table/src/table-column.js'
import wpager from 'element-ui/packages/pagination/src/pagination.js'


export default {
    name: "",
    data: () => ({
        userId: '',
        loadtab: false,
        loadingall: false,
        formdata: {
            'radiovalue': '1',
            'startmonth': '',
            'endmonth': '',
            'startyear': '',
            'endyear': '',
        },
        mondisabled: false,
        yeardisabled: false,

        startdatevalue: '',
        startyearvalue: '',
        enddatevalue: '',
        endyearvalue: '',
        pickerOptions: {
            disabledDate(time) {
                return time.getTime() > Date.now() - 8.64e7 || time.getTime() < new Date(2016, 0, 1, 0, 0, 0)
            }
        },
        pickerOptions1: {
            disabledDate(time) {
                return time.getTime() > Date.now() - 8.64e7 || time.getTime() < new Date(2016, 0, 1, 0, 0, 0)
            }
        },
        selectvalue: '0',

        myChart: '',
        wholeBottom: ["66.66", "66.66"],
        wholeBottomDate: ["201705", "201709"],
        wholeBottomPair: ["88.88", "88.88"],
        activeName: '0',
        formdata2: {
            radiovalue: '0',
        },
        formdata3: {
            inpName: '',
            selectvalue1: '',
            selectvalue2: '',
            selectvalue3: ''
        },
        formdata4: {
            selectvalue1: '',
            selectvalue2: '',
            selectvalue3: ''
        },
        tableData: [],
        topdata: {},
        pagetotle1: 0,
        cur_page1: 1,
        pagesize1: 10,
        pagetotle2: 100,
        cur_page2: 1,
        pagesize2: 10,
        pagetotle3: 100,
        cur_page3: 1,
        pagesize3: 10
    }),
    watch: {
        // formdata: {
        //     handler: function(val) {
        //     },
        //     deep: true
        // },
        //   formdata2: {
        //       handler: function(val) {
        //       },
        //       deep: true
        //   },
        //   formdata3: {
        //       handler: function(val) {
        //       },
        //       deep: true
        //   },
        //   formdata4: {
        //       handler: function(val) {
        //       },
        //       deep: true
        //   }
    },
    created() {
        let _this = this;
        _this.userId = _this.$store.state.userId;
    },
    mounted() {
        // var src='2017-01-31T16:00:00.000Z';
        // console.log(new Date(src).getTime())
        let _this = this;
        _this.$nextTick(function() {
            var url = 'http://199.168.3.98:8080/htyfctsaleorg/sale/all',
                data = {
                    'userId': '123',
                    'xzSort': _this.selectvalue,
                    'listSort':_this.activeName,
                    'prodSort':_this.formdata2.radiovalue
                },
                loading = function() {
                    _this.loadingall = true;
                },
                success = function(data) {
                    if (data.code == '1') {
                        console.log(JSON.stringify(data));
                        _this.topdata = data.data.saleCompareDTO;
                        _this.tableData=data.data.saleProdListDTO.saleProdDTOList;
                        _this.pagetotle1=data.data.saleProdListDTO.saleProdnum;
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
                                data: data.data.saleXzListDTO.xzBottomDate
                            }],
                            yAxis: [{
                                type: 'value'
                            }],
                            series: [{
                                name: '当前数据',
                                barWidth: 10,
                                type: 'bar',
                                data: data.data.saleXzListDTO.xzBottom
                            }, {
                                name: '对比数据',
                                type: 'bar',
                                barWidth: 10,
                                data: data.data.saleXzListDTO.xzBottomPair
                            }]
                        };
                        _this.myChart = echarts.init(document.getElementById('main'));
                        _this.myChart.setOption(option);
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
            // if (!_this.mondisabled) {
            //     _this.formdata.startmonth = '';
            //     _this.formdata.endmonth = '';
            // }
            // if (!_this.yeardisabled) {
            //     _this.formdata.startyear = '';
            //     _this.formdata.endyear = '';
            // }
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
        yearchange1: function(val) {
            let _this = this;
            _this.startyearvalue = new Date(val).getTime();
            if (_this.endyearvalue) {
                if (_this.startyearvalue > _this.endyearvalue) {
                    Message({
                        'message': '结束时间不能低于开始时间',
                        'type': 'error',
                    });
                    _this.formdata.startyear = '';
                }
            }

        },
        yearchange2: function(val) {
            let _this = this;
            _this.endyearvalue = new Date(val).getTime();;
            if (_this.startyearvalue) {
                if (_this.startyearvalue > _this.endyearvalue) {
                    Message({
                        'message': '结束时间不能低于开始时间',
                        'type': 'error',
                    });
                    _this.formdata.endyear = '';
                }
            }
        },
        tabclick: function(tab) {
            let _this = this;

            switch (_this.activeName) {
                case "0":
                    console.log('111')
                    break;
                case "1":
                    console.log('222')
                    break;
                case "2":
                    console.log('333')
                    break;
                default:

            }

        },
        searchMonth: function() {
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
            } else {
                $('.el-input__inner', '.el-date-editor--month').addClass('w-dataactive');
                      var starttime=$('.el-input__inner:eq(0)',".monthrange").val()+'01';
                      var endtime=$('.el-input__inner:eq(1)',".monthrange").val()+'31';
                var   data = {
                      'userId': '123',
                      'xzSort': _this.selectvalue,
                      'listSort':_this.activeName,
                      'startTime':starttime.replace('-',''),
                      'endTime':endtime.replace('-','')
                  };

                  if(data.listSort=='0'){
                    data.prodSort=_this.formdata2.radiovalue
                  }

                var url = 'http://199.168.3.98:8080/htyfctsaleorg/sale/all',

                    loading = function() {
                        _this.loadingall = true;
                    },
                    success = function(data) {
                        if (data.code == '1') {
                            _this.mondisabled = true;
                            _this.topdata = data.data.saleCompareDTO;
                            _this.tableData=data.data.saleProdListDTO.saleProdDTOList;
                            _this.pagetotle1=data.data.saleProdListDTO.saleProdnum;
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
                                    data: data.data.saleXzListDTO.xzBottomDate
                                }],
                                yAxis: [{
                                    type: 'value'
                                }],
                                series: [{
                                    name: '当前数据',
                                    barWidth: 10,
                                    type: 'bar',
                                    data: data.data.saleXzListDTO.xzBottom
                                }, {
                                    name: '对比数据',
                                    type: 'bar',
                                    barWidth: 10,
                                    data: data.data.saleXzListDTO.xzBottomPair
                                }]
                            };
                            _this.myChart = echarts.init(document.getElementById('main'));
                            _this.myChart.setOption(option);
                        }

                    },
                    complete = function() {
                        _this.loadingall = false;
                    }
                _this.adminApi.getJsonp(url, data, loading, success, complete)
            }
        },
        closeMonth: function() {
            let _this = this;
            $('.el-input__inner', '.el-date-editor--month').removeClass('w-dataactive');
            _this.mondisabled = false;
            _this.formdata.startmonth = '';
            _this.formdata.endmonth = '';
        },
        closeYear: function() {
            let _this = this;
            $('.el-input__inner', '.el-date-editor--year').removeClass('w-dataactive');
            _this.yeardisabled = false;
            _this.formdata.startyear = '';
            _this.formdata.endyear = '';
        },
        searchYear: function() {
            let _this = this;
            if (_this.formdata.startyear && !_this.formdata.endyear) {
                Message({
                    'message': '请选择结束时间',
                    'type': 'error',
                });

            } else if (!_this.formdata.startyear && _this.formdata.endyear) {
                Message({
                    'message': '请选择开始时间',
                    'type': 'error',
                });
            } else {
                $('.el-input__inner', '.el-date-editor--year').addClass('w-dataactive');
                var starttime=$('.el-input__inner:eq(0)',".yearrange").val()+"01"+'01';
                var endtime=$('.el-input__inner:eq(1)',".yearrange").val()+"12"+'31';
                var   data = {
                      'userId': '123',
                      'xzSort': _this.selectvalue,
                      'listSort':_this.activeName,
                      'startTime':starttime.replace('-',''),
                      'endTime':endtime.replace('-','')
                  };

                  if(data.listSort=='0'){
                    data.prodSort=_this.formdata2.radiovalue
                  }

                var url = 'http://199.168.3.98:8080/htyfctsaleorg/sale/all',

                    loading = function() {
                        _this.loadingall = true;
                    },
                    success = function(data) {
                        if (data.code == '1') {
                            _this.yeardisabled = true;
                            _this.topdata = data.data.saleCompareDTO;
                            _this.tableData=data.data.saleProdListDTO.saleProdDTOList;
                            _this.pagetotle1=data.data.saleProdListDTO.saleProdnum;
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
                                    data: data.data.saleXzListDTO.xzBottomDate
                                }],
                                yAxis: [{
                                    type: 'value'
                                }],
                                series: [{
                                    name: '当前数据',
                                    barWidth: 10,
                                    type: 'bar',
                                    data: data.data.saleXzListDTO.xzBottom
                                }, {
                                    name: '对比数据',
                                    type: 'bar',
                                    barWidth: 10,
                                    data: data.data.saleXzListDTO.xzBottomPair
                                }]
                            };
                            _this.myChart = echarts.init(document.getElementById('main'));
                            _this.myChart.setOption(option);
                        }

                    },
                    complete = function() {
                        _this.loadingall = false;
                    }
                _this.adminApi.getJsonp(url, data, loading, success, complete)
                //_this.yeardisabled = true
            }
        },
        selectchange: function(item) {
            let _this = this;
            var data = {
                'userId':'123',
                'xzSort':item
            };
            if(_this.mondisabled && _this.formdata.radiovalue=='1')
            {
              var starttime=$('.el-input__inner:eq(0)',".monthrange").val()+'01';
              var endtime=$('.el-input__inner:eq(1)',".monthrange").val()+'31';
              data.startTime=starttime.replace('-','');
              data.endTime=endtime.replace('-','')
            }
            if(_this.yeardisabled && _this.formdata.radiovalue=='2')
            {
              var starttime=$('.el-input__inner:eq(0)',".yearrange").val()+"01"+'01';
              var endtime=$('.el-input__inner:eq(1)',".yearrange").val()+"12"+'31';
              data.startTime=starttime.replace('-','');
              data.endTime=endtime.replace('-','')
            }
            var url = 'http://199.168.3.98:8080/htyfctsaleorg/sale/xz/list',
                loading = function() {
                  _this.myChart.showLoading({
                      'color': '#ff7700'
                  });
                },
                success = function(data) {
                    if (data.code == '1') {
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
                                data: data.data.xzBottomDate
                            }],
                            yAxis: [{
                                type: 'value'
                            }],
                            series: [{
                                name: '当前数据',
                                barWidth: 10,
                                type: 'bar',
                                data: data.data.xzBottom
                            }, {
                                name: '对比数据',
                                type: 'bar',
                                barWidth: 10,
                                data: data.data.xzBottomPair
                            }]
                        };
                        _this.myChart = echarts.init(document.getElementById('main'));
                        _this.myChart.setOption(option);
                    }
                },
                complete = function() {
                    _this.myChart.hideLoading();
                }
            _this.adminApi.getJsonp(url, data, loading, success, complete)

        },
        radiochangepp:function(item){
          let _this=this;
          _this.cur_page1=1;
          var data = {
              'userId': '123',
              'rows':_this.pagesize1,
              'prodSort':item,
              'page':_this.cur_page1
          };
          if(_this.mondisabled && _this.formdata.radiovalue=='1')
          {
            data.startTime=$('.el-input__inner:eq(0)',".monthrange").val()
            data.endTime=$('.el-input__inner:eq(1)',".monthrange").val()
          }
          if(_this.yeardisabled && _this.formdata.radiovalue=='2')
          {
            data.startTime=$('.el-input__inner:eq(0)',".yearrange").val()+"-01"
            data.endTime=$('.el-input__inner:eq(1)',".yearrange").val()+"-12"
          }
          var url = 'http://199.168.3.98:8080/htyfctsaleorg/sale/prod/list',

              loading = function() {
                   _this.loadtab = true;
              },
              success = function(data) {
                  if (data.code == '1') {

                    _this.tableData=data.data.saleProdDTOList;
                    _this.pagetotle1=data.data.saleProdnum;
                  }

              },
              complete = function() {
                _this.loadtab = false;
              }
          _this.adminApi.getJsonp(url, data, loading, success, complete)

        },
        handleCurrentChange1:function(val){
          let _this=this;
          _this.cur_page1=val;
          var data = {
              'userId': '123',
              'rows':_this.pagesize1,
              'page':_this.cur_page1,
              'prodSort':_this.formdata2.radiovalue,
          };
          if(_this.mondisabled && _this.formdata.radiovalue=='1')
          {
            data.startTime=$('.el-input__inner:eq(0)',".monthrange").val()
            data.endTime=$('.el-input__inner:eq(1)',".monthrange").val()
          }
          if(_this.yeardisabled && _this.formdata.radiovalue=='2')
          {
            data.startTime=$('.el-input__inner:eq(0)',".yearrange").val()+"-01"
            data.endTime=$('.el-input__inner:eq(1)',".yearrange").val()+"-12"
          }
          var url = 'http://199.168.3.98:8080/htyfctsaleorg/sale/prod/list',

              loading = function() {
                   _this.loadtab = true;
              },
              success = function(data) {
                  if (data.code == '1') {

                    _this.tableData=data.data.saleProdDTOList;
                    _this.pagetotle1=data.data.saleProdnum;
                  }

              },
              complete = function() {
                _this.loadtab = false;
              }
          _this.adminApi.getJsonp(url, data, loading, success, complete)
        },
        handleSizeChange1:function(val){
          let _this=this;
          _this.pagesize1 = val;
          var data = {
              'userId': '123',
              'rows':_this.pagesize1,
              'prodSort':_this.formdata2.radiovalue,
              'page':1
          };
          if(_this.mondisabled && _this.formdata.radiovalue=='1')
          {
            data.startTime=$('.el-input__inner:eq(0)',".monthrange").val()
            data.endTime=$('.el-input__inner:eq(1)',".monthrange").val()
          }
          if(_this.yeardisabled && _this.formdata.radiovalue=='2')
          {
            data.startTime=$('.el-input__inner:eq(0)',".yearrange").val()+"-01"
            data.endTime=$('.el-input__inner:eq(1)',".yearrange").val()+"-12"
          }
          var url = 'http://199.168.3.98:8080/htyfctsaleorg/sale/prod/list',

              loading = function() {
                   _this.loadtab = true;
              },
              success = function(data) {
                  if (data.code == '1') {

                    _this.tableData=data.data.saleProdDTOList;
                    _this.pagetotle1=data.data.saleProdnum;
                  }

              },
              complete = function() {
                _this.loadtab = false;
              }
          _this.adminApi.getJsonp(url, data, loading, success, complete)
        }
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
        woption,
        wtabs,
        wtabpane,
        winput,
        wtable,
        tablecolumn,
        wpager
    }
}

</script>
