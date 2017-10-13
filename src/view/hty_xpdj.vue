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

</style>

<template>

<div v-loading.body='loadingall' style="width:100%; height:100%">
    <div class="w-pos">
        <span>首页</span>/<span>汇天眼</span>/<span class="w-pos-active">选品定价</span>
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

                <form-item label="选择月度：" v-if='formdata.radiovalue==1'>
                    <date-picker type="month" v-model="formdata.startmonth" placeholder="选择开始月份" :editable='false' :picker-options="pickerOptions" @change='monthchange1' style="width:250px;">
                    </date-picker>
                    <span class="w-searchs">至</span>
                    <date-picker type="month" v-model="formdata.endmonth" placeholder="选择结束月份" :editable='false' :picker-options="pickerOptions1" @change='monthchange2' style="width:250px;">
                    </date-picker>
                </form-item>

                <form-item label="选择年度：" v-if='formdata.radiovalue==2'>
                    <date-picker type="year" v-model="formdata.startyear" placeholder="选择开始年份" :editable='false' :picker-options="pickerOptions" @change='yearchange1' style="width:250px;">
                    </date-picker>
                    <span class="w-searchs">至</span>
                    <date-picker type="year" v-model="formdata.endyear" placeholder="选择结束年份" :editable='false' :picker-options="pickerOptions1" @change='yearchange2' style="width:250px;">
                    </date-picker>
                </form-item>
                <form-item>
                    <wbutton type="info" icon="search" size="small" @click='search1()'></wbutton>
                </form-item>
            </wform>
        </div>
        <div class="w-pannel">
            <div class="xpdj-t">
                <div class="xpdj-ta">
                    <p class="xpdj-tap1">销售金额<span>（万元）</span></p>
                    <p class="xpdj-tap2">666</p>
                    <p class="xpdj-tap3"><span class="xpdj-tap3s1">上期金额</span><span class="xpdj-tap3s2">1444</span></p>
                    <p class="xpdj-tap3"><span class="xpdj-tap3s1">上期同比</span><span class="xpdj-tap3s2">111%%<svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-jiantou1"></use>
                    </svg></span></p>
                </div>
                <div class="xpdj-ta">
                    <p class="xpdj-tap1">销售数量<span>（件）</span></p>
                    <p class="xpdj-tap2">111</p>
                    <p class="xpdj-tap3"><span class="xpdj-tap3s1">上期金额</span><span class="xpdj-tap3s2">1444</span></p>
                    <p class="xpdj-tap3"><span class="xpdj-tap3s1">上期同比</span><span class="xpdj-tap3s2">111%%<svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-jiantou2"></use>
                    </svg></span></p>
                </div>
                <div class="xpdj-ta">
                    <p class="xpdj-tap1">销售毛利率</p>
                    <p class="xpdj-tap2 xpdj-tap2red">111</p>
                    <p class="xpdj-tap3"><span class="xpdj-tap3s1">上期金额</span><span class="xpdj-tap3s2">1444</span></p>
                    <p class="xpdj-tap3"><span class="xpdj-tap3s1">上期同比</span><span class="xpdj-tap3s2">111%%<svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-jiantou2"></use>
                    </svg></span></p>
                </div>
                <div class="xpdj-ta">
                    <p class="xpdj-tap1">销售净利润<span>（万元）</span></p>
                    <p class="xpdj-tap2 xpdj-tap2org">111</p>
                    <p class="xpdj-tap3"><span class="xpdj-tap3s1">上期金额</span><span class="xpdj-tap3s2">1444</span></p>
                    <p class="xpdj-tap3"><span class="xpdj-tap3s1">上期同比</span><span class="xpdj-tap3s2">111%%<svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-jiantou2"></use>
                  </svg></span></p>
                </div>
                <div class="xpdj-ta">
                    <p class="xpdj-tap1">销售金额排名</p>
                    <p class="xpdj-tap2 xpdj-tap2org">111</p>
                    <p class="xpdj-tap3"><span class="xpdj-tap3s1">上期金额</span><span class="xpdj-tap3s2">1444</span></p>
                    <p class="xpdj-tap3"><span class="xpdj-tap3s1">上期同比</span><span class="xpdj-tap3s2">111%%<svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-jiantou2"></use>
                  </svg></span></p>
                </div>
            </div>
            <div class="xpdj-m">
                <div class="xpdj-ml">
                    <div class="w-ywxl-r-t">
                        公司与行业销售情况趋势图
                        <wselect v-model="selectvalue" placeholder="请选择" style="margin-left:50px;" @change='selectchange'>
                            <woption :label='item.label' :value='item.value' v-for='(item,index) in selectarr'>
                            </woption>
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
            <wtabs v-model="activeName"  v-loading='loadtab' @tab-click="tabclick">



                <wtabpane label="品牌品类销售分析" name="0">

                    <div class="w-tab-search">
                        <wform :inline="true" :model="formdata2" label-position="right" class="demo-form-inline">
                            <!-- <form-item label="商品名称：">
                                <winput v-model="formdata2.inpName" placeholder='订单号/客户名称/联系方式'></winput>
                            </form-item> -->

                            <form-item label="品类：">
                                <wselect v-model="formdata2.selectvalue1" placeholder="请选择">
                                    <woption label='全部' value='0'></woption>
                                    <woption label='爆款' value='1'></woption>
                                    <woption label='滞款' value='2'></woption>
                                </wselect>
                            </form-item>

                            <form-item label="品牌：">
                                <wselect v-model="formdata2.selectvalue2" placeholder="请选择">
                                    <woption label='全部' value='0'></woption>
                                    <woption label='爆款' value='1'></woption>
                                    <woption label='滞款' value='2'></woption>
                                </wselect>
                            </form-item>

                            <!-- <form-item label="爆/滞款：">
                                <wselect v-model="formdata2.selectvalue" placeholder="请选择">
                                    <woption label='全部' value='0'></woption>
                                    <woption label='爆款' value='1'></woption>
                                    <woption label='滞款' value='2'></woption>
                                </wselect>
                            </form-item> -->

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
                        <wpager :total="pagetotle1" :current-page="cur_page1" layout="total, sizes, prev, pager, next, jumper" :page-sizes="[10, 15, 20]" :page-size="pagesize1"></wpager>
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
        selectarr: [{
            'label': '全部',
            'value': '0'
        }, {
            'label': '销售额',
            'value': '1'
        }, {
            'label': '订单数',
            'value': '2'
        }, {
            'label': '毛利率',
            'value': '3'
        }],
        myChart: '',
        wholeBottom: ["66.66", "66.66"],
        wholeBottomDate: ["201705", "201709"],
        wholeBottomPair: ["88.88", "88.88"],
        activeName: '0',
        formdata2: {
            selectvalue1: '',
            selectvalue2: ''
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
        tableData: [{
            'orderId': '20149827169441',
            'name': '会员测试公司1会员测试公司1会员测试公司1会员测试公司1会员测试公司1会员测试公司1会员测试公司1',
            'money': '4000',
            'num': 50,
            'orderTime': '2014-02-21',
            'link': '王卫宁',
            'phone': '18652988561',
            'zt': '已支付'
        }, {
            'orderId': '20149827169442',
            'name': '会员测试公司2',
            'money': '4000',
            'num': 50,
            'orderTime': '2014-02-21',
            'link': '王卫宁',
            'phone': '18652988561',
            'zt': '已支付'
        }, {
            'orderId': '20149827169443',
            'name': '会员测试公司3',
            'money': '4000',
            'num': 50,
            'orderTime': '2014-02-21',
            'link': '王卫宁',
            'phone': '18652988561',
            'zt': '已支付'
        }, {
            'orderId': '20149827169444',
            'name': '会员测试公司4',
            'money': '4000',
            'num': 50,
            'orderTime': '2014-02-21',
            'link': '王卫宁',
            'phone': '18652988561',
            'zt': '已支付'
        }, {
            'orderId': '20149827169445',
            'name': '会员测试公司5',
            'money': '4000',
            'num': 50,
            'orderTime': '2014-02-21',
            'link': '王卫宁',
            'phone': '18652988561',
            'zt': '已支付'
        }, {
            'orderId': '20149827169446',
            'name': '会员测试公司6',
            'money': '4000',
            'num': 50,
            'orderTime': '2014-02-21',
            'link': '王卫宁',
            'phone': '18652988561',
            'zt': '已支付'
        }, {
            'orderId': '20149827169447',
            'name': '会员测试公司7',
            'money': '4000',
            'num': 50,
            'orderTime': '2014-02-21',
            'link': '王卫宁',
            'phone': '18652988561',
            'zt': '已支付'
        }, {
            'orderId': '20149827169448',
            'name': '会员测试公司8',
            'money': '4000',
            'num': 50,
            'orderTime': '2014-02-21',
            'link': '王卫宁',
            'phone': '18652988561',
            'zt': '已支付'
        }, {
            'orderId': '20149827169449',
            'name': '会员测试公司9',
            'money': '4000',
            'num': 50,
            'orderTime': '2014-02-21',
            'link': '王卫宁',
            'phone': '18652988561',
            'zt': '已支付'
        }, {
            'orderId': '20149827169440',
            'name': '会员测试公司0',
            'money': '4000',
            'num': 50,
            'orderTime': '2014-02-21',
            'link': '王卫宁',
            'phone': '18652988561',
            'zt': '已支付'
        }],
        pagetotle1: 100,
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
    mounted() {
        // var src='2017-01-31T16:00:00.000Z';
        // console.log(new Date(src).getTime())
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
            _this.myChart = echarts.init(document.getElementById('main'));
            _this.myChart.setOption(option);
        })
    },
    methods: {
        radiochange: function() {

        },
        monthchange1: function(val) {
            let _this = this;
            _this.startdatevalue = new Date(val).getTime();
            if (_this.enddatevalue) {
                if (_this.startdatevalue > _this.enddatevalue) {
                    Message({
                        'message': '终止时间不能低于起始时间',
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
                        'message': '终止时间不能低于起始时间',
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
                        'message': '终止时间不能低于起始时间',
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
                        'message': '终止时间不能低于起始时间',
                        'type': 'error',
                    });
                    _this.formdata.endyear = '';
                }
            }
        },
        tabclick: function(tab) {
          let _this=this;

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
        search1: function() {

        },
        search2: function() {

        },
        selectchange: function(item) {

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
