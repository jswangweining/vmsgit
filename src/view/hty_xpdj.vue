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

.xpdj-tap4 {
    color: #6c81b3;
    font-size: 0.6rem;
    text-align: center;
    span {
        color: #ff7700;
        margin: 0 0.25rem;
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

<div v-loading.body='loadingall' class="bodyscroll">
    <div class="w-pos">
        <span>首页</span>/<span>汇天眼</span>/<span class="w-pos-active">选品定价</span>
    </div>
    <div class="w-con">
        <div class="w-search">
            <wform :inline="true" :model="formdata" ref="formdata" label-position="right" class="demo-form-inline">
                <form-item label="对比方式：">
                    <radio-group v-model="formdata.radiovalue" @change='radiochange'>
                        <wradio label="0">月度</wradio>
                        <wradio label="1">年度</wradio>
                    </radio-group>
                </form-item>

                <form-item label="选择月度：" v-if='formdata.radiovalue==0' class="monthrange">
                    <date-picker type="month" v-model="formdata.startmonth" placeholder="选择开始月份" :disabled='mondisabled' :editable='false' :picker-options="pickerOptions" @change='monthchange1' style="width:250px;">
                    </date-picker>
                    <span class="w-searchs">至</span>
                    <date-picker type="month" v-model="formdata.endmonth" placeholder="选择结束月份" :disabled='mondisabled' :editable='false' :picker-options="pickerOptions1" @change='monthchange2' style="width:250px;">
                    </date-picker>

                    <wbutton type="info" icon="search" size="small" @click='searchMonth()' v-if='!mondisabled'></wbutton>

                    <wbutton type="info" icon="close" size="small" @click='closeMonth()' v-if='mondisabled'>清空月度范围</wbutton>
                </form-item>

                <form-item label="选择年度：" v-if='formdata.radiovalue==1' class="yearrange">
                    <date-picker type="year" v-model="formdata.startyear" placeholder="选择开始年份" :disabled='yeardisabled' :editable='false' :picker-options="pickerOptions" @change='yearchange1' style="width:250px;">
                    </date-picker>
                    <span class="w-searchs">至</span>
                    <date-picker type="year" v-model="formdata.endyear" placeholder="选择结束年份" :disabled='yeardisabled' :editable='false' :picker-options="pickerOptions1" @change='yearchange2' style="width:250px;">
                    </date-picker>

                    <wbutton type="info" icon="search" size="small" @click='searchYear()' v-if='!yeardisabled'></wbutton>

                    <wbutton type="info" icon="close" size="small" @click='closeYear()' v-if='yeardisabled'>清空时间范围</wbutton>
                </form-item>

            </wform>
        </div>
        <div class="w-pannel">
            <div class="xpdj-t">
                <div class="xpdj-ta">
                    <p class="xpdj-tap1">销售金额<span>（万元）</span></p>
                    <p class="xpdj-tap2">{{topdata.xsAmt || 0}}</p>
                    <p class="xpdj-tap3"><span class="xpdj-tap3s1">上期金额</span><span class="xpdj-tap3s2">{{topdata.upperXsAmt || 0}}</span></p>
                    <p class="xpdj-tap3"><span class="xpdj-tap3s1">上期同比</span><span class="xpdj-tap3s2">{{topdata.xsAmtAn || 0}}%<svg class="icon" aria-hidden="true" v-if='topdata.xsAmtSort=="0"'>
                        <use xlink:href="#icon-jiantou1"></use>
                    </svg><svg class="icon" aria-hidden="true" v-if='topdata.xsAmtSort=="1"'>
                        <use xlink:href="#icon-jiantou2"></use>
                    </svg></span></p>
                </div>
                <div class="xpdj-ta">
                    <p class="xpdj-tap1">销售数量<span>（件）</span></p>
                    <p class="xpdj-tap2">{{topdata.xsQty || 0}}</p>
                    <p class="xpdj-tap3"><span class="xpdj-tap3s1">上期金额</span><span class="xpdj-tap3s2">{{topdata.upperXsQty || 0}}</span></p>
                    <p class="xpdj-tap3"><span class="xpdj-tap3s1">上期同比</span><span class="xpdj-tap3s2">{{topdata.xsQtyAn || 0}}%<svg class="icon" aria-hidden="true" v-if='topdata.xsQtySort=="0"'>
                        <use xlink:href="#icon-jiantou1"></use>
                    </svg><svg class="icon" aria-hidden="true" v-if='topdata.xsQtySort=="1"'>
                        <use xlink:href="#icon-jiantou2"></use>
                    </svg></span></p>
                </div>
                <div class="xpdj-ta">
                    <p class="xpdj-tap1">销售毛利率</p>
                    <p class="xpdj-tap2 xpdj-tap2red">{{topdata.xsMl || 0}}</p>
                    <p class="xpdj-tap3"><span class="xpdj-tap3s1">上期金额</span><span class="xpdj-tap3s2">{{topdata.upperXsMl || 0}}</span></p>
                    <p class="xpdj-tap3"><span class="xpdj-tap3s1">上期同比</span><span class="xpdj-tap3s2">{{topdata.xsMlAn || 0}}%<svg class="icon" aria-hidden="true" v-if='topdata.xsMlSort=="0"'>
                        <use xlink:href="#icon-jiantou1"></use>
                    </svg><svg class="icon" aria-hidden="true" v-if='topdata.xsMlSort=="1"'>
                        <use xlink:href="#icon-jiantou2"></use>
                    </svg></span></p>
                </div>
                <div class="xpdj-ta">
                    <p class="xpdj-tap1">销售净利润<span>（万元）</span></p>
                    <p class="xpdj-tap2 xpdj-tap2org">{{topdata.xsLr || 0}}</p>
                    <p class="xpdj-tap3"><span class="xpdj-tap3s1">上期金额</span><span class="xpdj-tap3s2">{{topdata.upperXsLr || 0}}</span></p>
                    <p class="xpdj-tap3"><span class="xpdj-tap3s1">上期同比</span><span class="xpdj-tap3s2">{{topdata.xsLrAn || 0}}%<svg class="icon" aria-hidden="true" v-if='topdata.xsLrSort=="0"'>
                        <use xlink:href="#icon-jiantou1"></use>
                    </svg><svg class="icon" aria-hidden="true" v-if='topdata.xsLrSort=="1"'>
                        <use xlink:href="#icon-jiantou2"></use>
                    </svg></span></p>
                </div>
                <div class="xpdj-ta">
                    <p class="xpdj-tap1">销售金额排名</p>
                    <p class="xpdj-tap2 xpdj-tap2org">{{topdata.xsRanking || 0}}</p>
                    <p class="xpdj-tap3"><span class="xpdj-tap3s1">上期排名</span><span class="xpdj-tap3s2">{{topdata.upperXsRanking || 0}}</span></p>
                    <!-- <p class="xpdj-tap3"><span class="xpdj-tap3s1">上期同比</span><span class="xpdj-tap3s2">{{topdata.xsRankingAn}}%<svg class="icon" aria-hidden="true" v-if='topdata.xsRankingSort=="0"'>
                        <use xlink:href="#icon-jiantou1"></use>
                    </svg><svg class="icon" aria-hidden="true" v-if='topdata.xsRankingSort=="1"'>
                        <use xlink:href="#icon-jiantou2"></use>
                    </svg></span></p> -->
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
            <wtabs v-model="activeName" v-loading='loadtab' @tab-click='tabclick'>
                <wtabpane label="品牌品类销售分析" name="0" key="品牌品类销售分析">
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
                            <tablecolumn prop="ppName" label="品牌" width='200' fixed v-if='formdata2.radiovalue=="0"' :key='1'>
                            </tablecolumn>
                            <tablecolumn prop="plName" label="品类" show-overflow-tooltip min-width='300' v-if='formdata2.radiovalue=="0"' :key='2'>
                            </tablecolumn>


                            <tablecolumn prop="plName" label="品类" fixed width='200' v-if='formdata2.radiovalue=="1"' :key='3'>
                            </tablecolumn>
                            <tablecolumn prop="ppName" label="品牌" show-overflow-tooltip min-width='300' v-if='formdata2.radiovalue=="1"' :key='4'>
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
                <wtabpane label="在售商铺详情分析" name="1" key='在售商铺详情分析'>
                    <div class="w-tab-search">
                        <wform :inline="true" :model="formdata3" label-position="right" class="demo-form-inline">
                            <form-item label="商品名称：">
                                <winput v-model="formdata3.inpName" placeholder='订单号/客户名称/联系方式'></winput>
                            </form-item>

                            <form-item label="品类：">
                                <wselect v-model="formdata3.plvalue" placeholder="请选择" filterable clearable @change='plchange1'>
                                    <woption :label='item.brandName' :value='item.sortNum' v-for='(item,index) in formdata3.plarr'></woption>
                                </wselect>
                            </form-item>

                            <form-item label="品牌：">
                                <wselect v-model="formdata3.ppvalue" placeholder="请选择" filterable clearable>
                                    <woption :label='item.brandName' :value='item.sortNum' v-for='(item,index) in formdata3.pparr'></woption>
                                </wselect>
                            </form-item>

                            <form-item label="爆/滞款：">
                                <wselect v-model="formdata3.selectvalue3" placeholder="请选择" style="width:100px;">
                                    <woption label='爆款' value='0'></woption>
                                    <woption label='滞款' value='1'></woption>
                                </wselect>
                            </form-item>

                            <form-item>
                                <wbutton type="info" icon="search" size="small" @click='detailsearch()'></wbutton>
                            </form-item>
                        </wform>
                    </div>
                    <div class="w-table">
                        <wtable border :data="tableData2">
                            <tablecolumn prop="prodName" label="商品名称" show-overflow-tooltip min-width='300' fixed>
                            </tablecolumn>
                            <tablecolumn prop="plName" label="品类" width='200'>
                            </tablecolumn>
                            <tablecolumn prop="ppName" label="品牌" width='200'>
                            </tablecolumn>
                            <tablecolumn prop="sort" label="爆/滞款" width='200'>
                            </tablecolumn>
                            <tablecolumn prop="xsPrice" label="销售单价（元）" width='150'>
                            </tablecolumn>
                            <tablecolumn label="价格区间（元）" width='150'>
                                <template scope="scope">
                                    {{scope.row.minXsAmt}}-{{scope.row.maxXsAmt}}
                                </template>
                            </tablecolumn>
                            <tablecolumn prop="xsQty" label="销售数量" width='150'>
                            </tablecolumn>
                            <tablecolumn prop="mJcQty" label="库存数量" width='150'>
                            </tablecolumn>
                            <tablecolumn prop="xsAmt" label="销售金额" width='150' sortable>
                            </tablecolumn>
                            <tablecolumn prop="xsDd" label="订单数" width='150'>
                            </tablecolumn>
                            <tablecolumn prop="salesRing" label="销售额环比" width='150'>
                            </tablecolumn>

                        </wtable>
                    </div>
                    <div class="w-pages">
                        <wpager :total="pagetotle2" :current-page="cur_page2" layout="total, sizes, prev, pager, next, jumper" :page-sizes="[10, 15, 20]" :page-size="pagesize2" @current-change="handleCurrentChange2" @size-change="handleSizeChange2"></wpager>
                    </div>
                </wtabpane>
                <wtabpane label="爆款商品销售分析" name="2" key='爆款商品销售分析'>
                    <div class="w-tab-search">
                        <wform :inline="true" :model="formdata4" label-position="right" class="demo-form-inline" v-show='activeName=="2"'>
                            <form-item label="品类：">
                                <wselect v-model="formdata4.plvalue" placeholder="请选择" filterable clearable @change='plchange2'>
                                    <woption :label='item.brandName' :value='item.sortNum' v-for='(item,index) in formdata4.plarr'></woption>
                                </wselect>
                            </form-item>
                            <form-item label="品牌：">
                                <wselect v-model="formdata4.ppvalue" placeholder="请选择" filterable clearable>
                                    <woption :label='item.brandName' :value='item.sortNum' v-for='(item,index) in formdata4.pparr'></woption>
                                </wselect>
                            </form-item>

                            <form-item>
                                <wbutton type="info" icon="search" size="small" @click='hotsearch()'></wbutton>
                            </form-item>
                        </wform>
                    </div>
                    <div class="w-table">
                        <wtable border :data="tableData3">
                            <tablecolumn prop="prodName" label="商品名称" show-overflow-tooltip min-width='300' fixed>
                            </tablecolumn>
                            <tablecolumn prop="prodCode" label="型号" width='200'>
                            </tablecolumn>
                            <tablecolumn prop="plName" label="品类" width='200'>
                            </tablecolumn>
                            <tablecolumn prop="ppName" label="品牌" width='200'>
                            </tablecolumn>
                            <tablecolumn label="价格区间（元）" width='150'>
                                <template scope="scope">
                                    {{scope.row.minXsAmt}}-{{scope.row.maxXsAmt}}
                                </template>
                            </tablecolumn>
                            <tablecolumn prop="qtyAvg" label="平均月销量" width='150' sortable fixed='right'>
                            </tablecolumn>
                        </wtable>
                    </div>
                    <div class="w-pages">
                        <wpager :total="pagetotle3" :current-page="cur_page3" layout="total, sizes, prev, pager, next, jumper" :page-sizes="[10, 15, 20]" :page-size="pagesize3" @current-change="handleCurrentChange3" @size-change="handleSizeChange3"></wpager>
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
            'radiovalue': '0',
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
        tabAjax: false,
        ajax1: true,
        ajax2: true,
        ajax3: true,
        formdata2: {
            radiovalue: '0',
        },
        formdata3: {
            inpName: '',
            pparr: [],
            plarr: [],
            ppvalue: '',
            plvalue: '',
            selectvalue3: '0'
        },
        formdata4: {
            pparr: [],
            plarr: [],
            ppvalue: '',
            plvalue: '',
        },
        tableData: [],
        tableData2: [],
        tableData3: [],
        topdata: {},
        pagetotle1: 0,
        cur_page1: 1,
        pagesize1: 10,
        pagetotle2: 0,
        cur_page2: 1,
        pagesize2: 10,
        pagetotle3: 0,
        cur_page3: 1,
        pagesize3: 10
    }),
    watch: {
        activeName: function(val, oldVal) {
            let _this = this;
            if (val !== oldVal) {
                switch (val) {
                    case '0':

                        if (_this.ajax1) {

                            _this.cur_page1 = 1;
                            var data = {
                                'userId': _this.userId,
                                'dateType': _this.formdata.radiovalue,
                                'rows': _this.pagesize1,
                                'prodSort': _this.formdata2.radiovalue,
                                'page': _this.cur_page1
                            };
                            if (_this.mondisabled && _this.formdata.radiovalue == '0') {

                                var starttime = $('.el-input__inner:eq(0)', ".monthrange").val();
                                var endtime = $('.el-input__inner:eq(1)', ".monthrange").val();
                                data.startTime = starttime.replace('-', '');
                                data.endTime = endtime.replace('-', '')
                            }
                            if (_this.yeardisabled && _this.formdata.radiovalue == '1') {
                                var starttime = $('.el-input__inner:eq(0)', ".yearrange").val() + "01";
                                var endtime = $('.el-input__inner:eq(1)', ".yearrange").val() + "12";
                                data.startTime = starttime.replace('-', '');
                                data.endTime = endtime.replace('-', '')
                            }

                            var url =  _this.adminApi.host+'/htyfctsaleorg/sale/prod/list',

                                loading = function() {
                                    _this.loadtab = true;
                                },
                                success = function(data) {
                                    if (data.code == '1') {
                                        _this.tableData = data.data.saleProdDTOList;
                                        _this.pagetotle1 = data.data.saleProdnum;

                                    } else {
                                        Message({
                                            'message': data.msg,
                                            'type': 'error',
                                        });
                                    }

                                },
                                complete = function() {
                                    _this.loadtab = false;
                                }
                            _this.adminApi.getJsonp(url, data, loading, success, complete)
                            _this.ajax1 = false;
                        }

                        break;

                    case '1':
                        if (_this.ajax2) {
                            _this.cur_page2 = 1;
                            var data = {
                                'userId': _this.userId,
                                'dateType': _this.formdata.radiovalue,
                                'rows': _this.pagesize2,
                                'prodSort': _this.formdata2.radiovalue,
                                'page': _this.cur_page2,
                                'detailSort': _this.formdata3.selectvalue3
                            };
                            data.prodName = _this.formdata3.inpName ? _this.formdata3.inpName : '';
                            data.ppCode = _this.formdata3.ppvalue ? _this.formdata3.ppvalue : '';
                            data.plCode = _this.formdata3.plvalue ? _this.formdata3.plvalue : '';

                            if (_this.mondisabled && _this.formdata.radiovalue == '0') {

                                var starttime = $('.el-input__inner:eq(0)', ".monthrange").val();
                                var endtime = $('.el-input__inner:eq(1)', ".monthrange").val();
                                data.startTime = starttime.replace('-', '');
                                data.endTime = endtime.replace('-', '')
                            }
                            if (_this.yeardisabled && _this.formdata.radiovalue == '1') {
                                var starttime = $('.el-input__inner:eq(0)', ".yearrange").val() + "01";
                                var endtime = $('.el-input__inner:eq(1)', ".yearrange").val() + "12";
                                data.startTime = starttime.replace('-', '');
                                data.endTime = endtime.replace('-', '')
                            }
                            var url =  _this.adminApi.host+'/htyfctsaleorg/sale/detail/list',

                                loading = function() {
                                    _this.loadtab = true;
                                },
                                success = function(data) {
                                    if (data.code == '1') {
                                        _this.tableData2 = data.data.saleDetailDTOList;
                                        _this.pagetotle2 = data.data.detainum;
                                    } else {
                                        Message({
                                            'message': data.msg,
                                            'type': 'error',
                                        });
                                    }

                                },
                                complete = function() {
                                    _this.loadtab = false;
                                }
                            _this.adminApi.getJsonp(url, data, loading, success, complete)
                            _this.ajax2 = false;
                        }

                        break;

                    case '2':
                        if (_this.ajax3) {
                            _this.cur_page3 = 1;
                            var data = {
                                'userId': _this.userId,
                                'rows': _this.pagesize3,
                                'page': _this.cur_page3,
                            };
                            data.ppCode = _this.formdata3.ppvalue ? _this.formdata3.ppvalue : '';
                            data.plCode = _this.formdata3.plvalue ? _this.formdata3.plvalue : '';

                            if (_this.mondisabled && _this.formdata.radiovalue == '0') {

                                var starttime = $('.el-input__inner:eq(0)', ".monthrange").val();
                                var endtime = $('.el-input__inner:eq(1)', ".monthrange").val();
                                data.startTime = starttime.replace('-', '');
                                data.endTime = endtime.replace('-', '')
                            }
                            if (_this.yeardisabled && _this.formdata.radiovalue == '1') {
                                var starttime = $('.el-input__inner:eq(0)', ".yearrange").val() + "01";
                                var endtime = $('.el-input__inner:eq(1)', ".yearrange").val() + "12";
                                data.startTime = starttime.replace('-', '');
                                data.endTime = endtime.replace('-', '')
                            }
                            var url =  _this.adminApi.host+'/htyfctsaleorg/sale/hot/list',

                                loading = function() {
                                    _this.loadtab = true;
                                },
                                success = function(data) {
                                    if (data.code == '1') {
                                        _this.tableData3 = data.data.saleHotDTOList;
                                        _this.pagetotle3 = data.data.saleHostnum;
                                    } else {
                                        Message({
                                            'message': data.msg,
                                            'type': 'error',
                                        });
                                    }

                                },
                                complete = function() {
                                    _this.loadtab = false;
                                }
                            _this.adminApi.getJsonp(url, data, loading, success, complete)
                            _this.ajax3 = false;
                        }

                        break;
                    default:

                }
            }

        },
        mondisabled: function(val, oldVal) {
            let _this = this;
            if (val !== oldVal && _this.formdata.radiovalue == '0') {
                if (_this.activeName == '0') {
                    _this.ajax2 = true;
                    _this.ajax3 = true;
                }
                if (_this.activeName == '1') {
                    _this.ajax1 = true;
                    _this.ajax3 = true;
                }
                if (_this.activeName == '2') {
                    _this.ajax1 = true;
                    _this.ajax2 = true;
                }
            }

        },
        yeardisabled: function(val, oldVal) {
                let _this = this;
                if (val !== oldVal && _this.formdata.radiovalue == '1') {
                    if (_this.activeName == '0') {
                        _this.ajax2 = true;
                        _this.ajax3 = true;
                    }
                    if (_this.activeName == '1') {
                        _this.ajax1 = true;
                        _this.ajax3 = true;
                    }
                    if (_this.activeName == '2') {
                        _this.ajax1 = true;
                        _this.ajax2 = true;
                    }

                }

            }
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

            var url = _this.adminApi.host + '/htyfctsaleorg/sale/detail/query/category',
                data = {

                },
                loading = function() {
                    _this.loadingall = true;
                },
                success = function(data) {
                    if (data.code == '1') {

                        // _this.formdata3.pparr=data.data.detailBrand;
                        _this.formdata3.plarr = data.data;

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
            var url = _this.adminApi.host + '/htyfctsaleorg/sale/hot/query/category',
                data = {

                },
                loading = function() {
                    _this.loadingall = true;
                },
                success = function(data) {
                    if (data.code == '1') {
                        _this.formdata4.plarr = data.data;
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
            var url = _this.adminApi.host + '/htyfctsaleorg/sale/all',
                data = {
                    'userId': _this.userId,
                    'dateType': _this.formdata.radiovalue,
                    'xzSort': _this.selectvalue,
                    'listSort': _this.activeName,
                    'prodSort': _this.formdata2.radiovalue,
                    'detailSort': _this.formdata3.selectvalue3,
                    // 'endTime':'201707'
                },
                loading = function() {
                    _this.loadingall = true;
                },
                success = function(data) {
                    if (data.code == '1') {
                        //console.log(JSON.stringify(data));
                        _this.topdata = data.data.saleCompareDTO;
                        _this.tableData = data.data.saleProdListDTO.saleProdDTOList;
                        _this.pagetotle1 = data.data.saleProdListDTO.saleProdnum;
                        _this.ajax1 = false;
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

                    break;
                case "1":

                    break;
                case "2":

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
            } else if (!_this.formdata.startmonth && !_this.formdata.endmonth) {
                Message({
                    'message': '请选择时间段查询',
                    'type': 'error',
                });
            } else {
                $('.el-input__inner', '.el-date-editor--month').addClass('w-dataactive');
                var starttime = $('.el-input__inner:eq(0)', ".monthrange").val();
                var endtime = $('.el-input__inner:eq(1)', ".monthrange").val();

                var data = {
                    'userId': _this.userId,
                    'xzSort': _this.selectvalue,
                    'listSort': _this.activeName,
                    'startTime': starttime.replace('-', ''),
                    'endTime': endtime.replace('-', ''),
                    'dateType': _this.formdata.radiovalue,
                    'detailSort': _this.formdata3.selectvalue3,
                };
                if (data.listSort == '0') {
                    _this.cur_page1 = 1;
                    data.prodSort = _this.formdata2.radiovalue;
                    data.page = _this.cur_page1;
                    data.rows = _this.pagesize1;

                }

                if (data.listSort == '1') {
                    _this.cur_page2 = 1;
                    data.prodSort = _this.formdata2.radiovalue;
                    data.prodName = _this.formdata3.inpName ? _this.formdata3.inpName : '';
                    data.ppCode = _this.formdata3.ppvalue ? _this.formdata3.ppvalue : '';
                    data.plCode = _this.formdata3.plvalue ? _this.formdata3.plvalue : '';
                    data.page = _this.cur_page2;
                    data.rows = _this.pagesize2;

                }
                if (data.listSort == '2') {
                    _this.cur_page3 = 1;
                    data.prodSort = _this.formdata2.radiovalue;
                    data.ppCode = _this.formdata4.ppvalue ? _this.formdata4.ppvalue : '';
                    data.plCode = _this.formdata4.plvalue ? _this.formdata4.plvalue : '';
                    data.page = _this.cur_page3;
                    data.rows = _this.pagesize3;
                }

                var url =  _this.adminApi.host+'/htyfctsaleorg/sale/all',
                    loading = function() {
                        _this.loadingall = true;
                    },
                    success = function(data) {
                        if (data.code == '1') {
                            _this.mondisabled = true;
                            _this.topdata = data.data.saleCompareDTO;
                            if (_this.activeName == '0') {
                                _this.tableData = data.data.saleProdListDTO.saleProdDTOList;
                                _this.pagetotle1 = data.data.saleProdListDTO.saleProdnum;
                            }

                            if (_this.activeName == '1') {
                                _this.tableData2 = data.data.saleDetailListDTO.saleDetailDTOList;
                                _this.pagetotle2 = data.data.saleDetailListDTO.detainum;
                            }

                            if (_this.activeName == '2') {
                                _this.tableData3 = data.data.saleHotListDTO.saleHotDTOList;
                                _this.pagetotle3 = data.data.saleHotListDTO.saleHostnum;
                            }

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
                _this.adminApi.getJsonp(url, data, loading, success, complete);

            }
        },
        closeMonth: function() {
            let _this = this;

            var data = {
                'userId': _this.userId,
                'xzSort': _this.selectvalue,
                'listSort': _this.activeName,
                'dateType': _this.formdata.radiovalue,
                'detailSort': _this.formdata3.selectvalue3
            };
            if (data.listSort == '0') {
                _this.cur_page1 = 1;
                data.prodSort = _this.formdata2.radiovalue;
                data.page = _this.cur_page1;
                data.rows = _this.pagesize1;

            }

            if (data.listSort == '1') {
                _this.cur_page2 = 1;
                data.prodSort = _this.formdata2.radiovalue;
                data.prodName = _this.formdata3.inpName ? _this.formdata3.inpName : '';
                data.ppCode = _this.formdata3.ppvalue ? _this.formdata3.ppvalue : '';
                data.plCode = _this.formdata3.plvalue ? _this.formdata3.plvalue : '';
                data.page = _this.cur_page2;
                data.rows = _this.pagesize2;

            }
            if (data.listSort == '2') {
                _this.cur_page3 = 1;
                data.prodSort = _this.formdata2.radiovalue;
                data.ppCode = _this.formdata4.ppvalue ? _this.formdata4.ppvalue : '';
                data.plCode = _this.formdata4.plvalue ? _this.formdata4.plvalue : '';
                data.page = _this.cur_page3;
                data.rows = _this.pagesize3;
            }
            var url =  _this.adminApi.host+'/htyfctsaleorg/sale/all',

                loading = function() {
                    _this.loadingall = true;
                },
                success = function(data) {
                    if (data.code == '1') {
                        _this.mondisabled = false;
                        $('.el-input__inner', '.el-date-editor--month').removeClass('w-dataactive');
                        _this.formdata.startmonth = '';
                        _this.formdata.endmonth = '';

                        _this.topdata = data.data.saleCompareDTO;
                        if (_this.activeName == '0') {
                            _this.tableData = data.data.saleProdListDTO.saleProdDTOList;
                            _this.pagetotle1 = data.data.saleProdListDTO.saleProdnum;
                        }

                        if (_this.activeName == '1') {
                            _this.tableData2 = data.data.saleDetailListDTO.saleDetailDTOList;
                            _this.pagetotle2 = data.data.saleDetailListDTO.detainum;
                        }

                        if (_this.activeName == '2') {
                            _this.tableData3 = data.data.saleHotListDTO.saleHotDTOList;
                            _this.pagetotle3 = data.data.saleHotListDTO.saleHostnum;
                        }

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
        closeYear: function() {
            let _this = this;
            var data = {
                'userId': _this.userId,
                'xzSort': _this.selectvalue,
                'listSort': _this.activeName,
                'dateType': _this.formdata.radiovalue,
                'detailSort': _this.formdata3.selectvalue3
            };
            if (data.listSort == '0') {
                _this.cur_page1 = 1;
                data.prodSort = _this.formdata2.radiovalue;
                data.page = _this.cur_page1;
                data.rows = _this.pagesize1;

            }

            if (data.listSort == '1') {
                _this.cur_page2 = 1;
                data.prodSort = _this.formdata2.radiovalue;
                data.prodName = _this.formdata3.inpName ? _this.formdata3.inpName : '';
                data.ppCode = _this.formdata3.ppvalue ? _this.formdata3.ppvalue : '';
                data.plCode = _this.formdata3.plvalue ? _this.formdata3.plvalue : '';
                data.page = _this.cur_page2;
                data.rows = _this.pagesize2;

            }
            if (data.listSort == '2') {
                _this.cur_page3 = 1;
                data.prodSort = _this.formdata2.radiovalue;
                data.ppCode = _this.formdata4.ppvalue ? _this.formdata4.ppvalue : '';
                data.plCode = _this.formdata4.plvalue ? _this.formdata4.plvalue : '';
                data.page = _this.cur_page3;
                data.rows = _this.pagesize3;
            }

            var url =  _this.adminApi.host+'/htyfctsaleorg/sale/all',

                loading = function() {
                    _this.loadingall = true;
                },
                success = function(data) {
                    if (data.code == '1') {
                        $('.el-input__inner', '.el-date-editor--year').removeClass('w-dataactive');
                        _this.yeardisabled = false;
                        _this.formdata.startyear = '';
                        _this.formdata.endyear = '';
                        _this.topdata = data.data.saleCompareDTO;
                        if (_this.activeName == '0') {
                            _this.tableData = data.data.saleProdListDTO.saleProdDTOList;
                            _this.pagetotle1 = data.data.saleProdListDTO.saleProdnum;
                        }

                        if (_this.activeName == '1') {
                            _this.tableData2 = data.data.saleDetailListDTO.saleDetailDTOList;
                            _this.pagetotle2 = data.data.saleDetailListDTO.detainum;
                        }

                        if (_this.activeName == '2') {
                            _this.tableData3 = data.data.saleHotListDTO.saleHotDTOList;
                            _this.pagetotle3 = data.data.saleHotListDTO.saleHostnum;
                        }
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
            } else if (!_this.formdata.startyear && !_this.formdata.endyear) {
                Message({
                    'message': '请选择时间段查询',
                    'type': 'error',
                });
            } else {
                $('.el-input__inner', '.el-date-editor--year').addClass('w-dataactive');
                var starttime = $('.el-input__inner:eq(0)', ".yearrange").val() + "01";
                var endtime = $('.el-input__inner:eq(1)', ".yearrange").val() + "12";
                var data = {
                    'userId': _this.userId,
                    'dateType': _this.formdata.radiovalue,
                    'xzSort': _this.selectvalue,
                    'listSort': _this.activeName,
                    'startTime': starttime.replace('-', ''),
                    'endTime': endtime.replace('-', ''),
                    'detailSort': _this.formdata3.selectvalue3
                };

                if (data.listSort == '0') {
                    _this.cur_page1 = 1;
                    data.prodSort = _this.formdata2.radiovalue;
                    data.page = _this.cur_page1;
                    data.rows = _this.pagesize1;

                }

                if (data.listSort == '1') {
                    _this.cur_page2 = 1;
                    data.prodSort = _this.formdata2.radiovalue;
                    data.prodName = _this.formdata3.inpName ? _this.formdata3.inpName : '';
                    data.ppCode = _this.formdata3.ppvalue ? _this.formdata3.ppvalue : '';
                    data.plCode = _this.formdata3.plvalue ? _this.formdata3.plvalue : '';
                    data.page = _this.cur_page2;
                    data.rows = _this.pagesize2;

                }
                if (data.listSort == '2') {
                    _this.cur_page3 = 1;
                    data.prodSort = _this.formdata2.radiovalue;
                    data.ppCode = _this.formdata4.ppvalue ? _this.formdata4.ppvalue : '';
                    data.plCode = _this.formdata4.plvalue ? _this.formdata4.plvalue : '';
                    data.page = _this.cur_page3;
                    data.rows = _this.pagesize3;
                }

                var url =  _this.adminApi.host+'/htyfctsaleorg/sale/all',

                    loading = function() {
                        _this.loadingall = true;
                    },
                    success = function(data) {
                        if (data.code == '1') {
                            _this.yeardisabled = true;
                            _this.topdata = data.data.saleCompareDTO;
                            if (_this.activeName == '0') {
                                _this.tableData = data.data.saleProdListDTO.saleProdDTOList;
                                _this.pagetotle1 = data.data.saleProdListDTO.saleProdnum;
                            }

                            if (_this.activeName == '1') {
                                _this.tableData2 = data.data.saleDetailListDTO.saleDetailDTOList;
                                _this.pagetotle2 = data.data.saleDetailListDTO.detainum;
                            }

                            if (_this.activeName == '2') {
                                _this.tableData3 = data.data.saleHotListDTO.saleHotDTOList;
                                _this.pagetotle3 = data.data.saleHotListDTO.saleHostnum;
                            }
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
                    //_this.yeardisabled = true
            }
        },
        selectchange: function(item) {
            let _this = this;
            var data = {
                'userId': _this.userId,
                'xzSort': item,
                'dateType': _this.formdata2.radiovalue
            };
            if (_this.mondisabled && _this.formdata.radiovalue == '0') {
                var starttime = $('.el-input__inner:eq(0)', ".monthrange").val();
                var endtime = $('.el-input__inner:eq(1)', ".monthrange").val();
                data.startTime = starttime.replace('-', '');
                data.endTime = endtime.replace('-', '')
            }
            if (_this.yeardisabled && _this.formdata.radiovalue == '1') {
                var starttime = $('.el-input__inner:eq(0)', ".yearrange").val() + "01";
                var endtime = $('.el-input__inner:eq(1)', ".yearrange").val() + "12";
                data.startTime = starttime.replace('-', '');
                data.endTime = endtime.replace('-', '')
            }
            var url =  _this.adminApi.host+'/htyfctsaleorg/sale/xz/list',
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
                    } else {
                        Message({
                            'message': data.msg,
                            'type': 'error',
                        });
                    }
                },
                complete = function() {
                    _this.myChart.hideLoading();
                }
            _this.adminApi.getJsonp(url, data, loading, success, complete)

        },
        radiochangepp: function(item) {

            let _this = this;
            _this.cur_page1 = 1;
            var data = {
                'userId': _this.userId,
                'dateType': _this.formdata.radiovalue,
                'rows': _this.pagesize1,
                'prodSort': item,
                'page': _this.cur_page1
            };
            if (_this.mondisabled && _this.formdata.radiovalue == '0') {

                var starttime = $('.el-input__inner:eq(0)', ".monthrange").val();
                var endtime = $('.el-input__inner:eq(1)', ".monthrange").val();
                data.startTime = starttime.replace('-', '');
                data.endTime = endtime.replace('-', '')
            }
            if (_this.yeardisabled && _this.formdata.radiovalue == '1') {
                var starttime = $('.el-input__inner:eq(0)', ".yearrange").val() + "01";
                var endtime = $('.el-input__inner:eq(1)', ".yearrange").val() + "12";
                data.startTime = starttime.replace('-', '');
                data.endTime = endtime.replace('-', '')
            }
            var url =  _this.adminApi.host+'/htyfctsaleorg/sale/prod/list',

                loading = function() {
                    _this.loadtab = true;
                },
                success = function(data) {
                    if (data.code == '1') {

                        _this.tableData = data.data.saleProdDTOList;
                        _this.pagetotle1 = data.data.saleProdnum;
                    } else {
                        Message({
                            'message': data.msg,
                            'type': 'error',
                        });
                    }

                },
                complete = function() {
                    _this.loadtab = false;
                }
            _this.adminApi.getJsonp(url, data, loading, success, complete)

        },
        plchange1: function(item) {
            let _this = this;
            var url =  _this.adminApi.host+'/htyfctsaleorg/sale/query/brand',
                data = {
                    'type': _this.activeName,
                    'plCode': item
                },
                loading = function() {
                    _this.loading = true;
                },
                success = function(data) {
                    if (data.code == '1') {
                        _this.formdata3.ppvalue = '';
                        _this.formdata3.pparr = data.data;
                    } else {
                        Message({
                            'message': data.msg,
                            'type': 'error',
                        });
                    }
                },
                complete = function() {
                    _this.loading = false;
                }
            _this.adminApi.getJsonp(url, data, loading, success, complete)
        },
        plchange2: function(item) {
            let _this = this;
            var url =  _this.adminApi.host+'/htyfctsaleorg/sale/query/brand',
                data = {
                    'type': _this.activeName,
                    'plCode': item
                },
                loading = function() {
                    _this.loading = true;
                },
                success = function(data) {
                    if (data.code == '1') {
                        _this.formdata4.ppvalue = '';
                        _this.formdata4.pparr = data.data;
                    } else {
                        Message({
                            'message': data.msg,
                            'type': 'error',
                        });
                    }
                },
                complete = function() {
                    _this.loading = false;
                }
            _this.adminApi.getJsonp(url, data, loading, success, complete)
        },
        detailsearch: function() {
            let _this = this;
            _this.cur_page2 = 1;
            var data = {
                'userId': _this.userId,
                'dateType': _this.formdata.radiovalue,
                'rows': _this.pagesize2,
                'prodSort': _this.formdata2.radiovalue,
                'page': _this.cur_page2,
                'detailSort': _this.formdata3.selectvalue3
            };
            data.prodName = _this.formdata3.inpName ? _this.formdata3.inpName : '';
            data.ppCode = _this.formdata3.ppvalue ? _this.formdata3.ppvalue : '';
            data.plCode = _this.formdata3.plvalue ? _this.formdata3.plvalue : '';

            if (_this.mondisabled && _this.formdata.radiovalue == '0') {
                var starttime = $('.el-input__inner:eq(0)', ".monthrange").val();
                var endtime = $('.el-input__inner:eq(1)', ".monthrange").val();
                data.startTime = starttime.replace('-', '');
                data.endTime = endtime.replace('-', '')
            }
            if (_this.yeardisabled && _this.formdata.radiovalue == '1') {
                var starttime = $('.el-input__inner:eq(0)', ".yearrange").val() + "01";
                var endtime = $('.el-input__inner:eq(1)', ".yearrange").val() + "12";
                data.startTime = starttime.replace('-', '');
                data.endTime = endtime.replace('-', '')
            }
            var url =  _this.adminApi.host+'/htyfctsaleorg/sale/detail/list',

                loading = function() {
                    _this.loadtab = true;
                },
                success = function(data) {
                    if (data.code == '1') {
                        _this.tableData2 = data.data.saleDetailDTOList;
                        _this.pagetotle2 = data.data.detainum;
                    } else {
                        Message({
                            'message': data.msg,
                            'type': 'error',
                        });
                    }
                },
                complete = function() {
                    _this.loadtab = false;
                }
            _this.adminApi.getJsonp(url, data, loading, success, complete)
        },
        hotsearch: function() {
            let _this = this;
            _this.cur_page3 = 1;
            var data = {
                'userId': _this.userId,
                'rows': _this.pagesize3,
                'page': _this.cur_page3,
            };
            data.ppCode = _this.formdata4.ppvalue ? _this.formdata4.ppvalue : '';
            data.plCode = _this.formdata4.plvalue ? _this.formdata4.plvalue : '';

            if (_this.mondisabled && _this.formdata.radiovalue == '0') {

                var starttime = $('.el-input__inner:eq(0)', ".monthrange").val();
                var endtime = $('.el-input__inner:eq(1)', ".monthrange").val();
                data.startTime = starttime.replace('-', '');
                data.endTime = endtime.replace('-', '')
            }
            if (_this.yeardisabled && _this.formdata.radiovalue == '1') {
                var starttime = $('.el-input__inner:eq(0)', ".yearrange").val() + "01";
                var endtime = $('.el-input__inner:eq(1)', ".yearrange").val() + "12";
                data.startTime = starttime.replace('-', '');
                data.endTime = endtime.replace('-', '')
            }
            var url =  _this.adminApi.host+'/htyfctsaleorg/sale/hot/list',

                loading = function() {
                    _this.loadtab = true;
                },
                success = function(data) {
                    if (data.code == '1') {
                        _this.tableData3 = data.data.saleHotDTOList;
                        _this.pagetotle3 = data.data.saleHostnum;
                    } else {
                        Message({
                            'message': data.msg,
                            'type': 'error',
                        });
                    }

                },
                complete = function() {
                    _this.loadtab = false;
                }
            _this.adminApi.getJsonp(url, data, loading, success, complete)
        },
        handleCurrentChange1: function(val) {
            let _this = this;
            _this.cur_page1 = val;
            var data = {
                'userId': _this.userId,
                'dateType': _this.formdata.radiovalue,
                'rows': _this.pagesize1,
                'prodSort': _this.formdata2.radiovalue,
                'page': _this.cur_page1
            };

            if (_this.mondisabled && _this.formdata.radiovalue == '0') {
                var starttime = $('.el-input__inner:eq(0)', ".monthrange").val();
                var endtime = $('.el-input__inner:eq(1)', ".monthrange").val();
                data.startTime = starttime.replace('-', '');
                data.endTime = endtime.replace('-', '')
            }
            if (_this.yeardisabled && _this.formdata.radiovalue == '1') {
                var starttime = $('.el-input__inner:eq(0)', ".yearrange").val() + "01";
                var endtime = $('.el-input__inner:eq(1)', ".yearrange").val() + "12";
                data.startTime = starttime.replace('-', '');
                data.endTime = endtime.replace('-', '')
            }
            var url =  _this.adminApi.host+'/htyfctsaleorg/sale/prod/list',

                loading = function() {
                    _this.loadtab = true;
                },
                success = function(data) {
                    if (data.code == '1') {

                        _this.tableData = data.data.saleProdDTOList;
                        _this.pagetotle1 = data.data.saleProdnum;
                    } else {
                        Message({
                            'message': data.msg,
                            'type': 'error',
                        });
                    }
                },
                complete = function() {
                    _this.loadtab = false;
                }
            _this.adminApi.getJsonp(url, data, loading, success, complete)
        },
        handleSizeChange1: function(val) {
            let _this = this;
            _this.pagesize1 = val;
            _this.cur_page1 = 1;
            var data = {
                'userId': _this.userId,
                'dateType': _this.formdata.radiovalue,
                'rows': _this.pagesize1,
                'prodSort': _this.formdata2.radiovalue,
                'page': _this.cur_page1
            };
            if (_this.mondisabled && _this.formdata.radiovalue == '0') {
                var starttime = $('.el-input__inner:eq(0)', ".monthrange").val();
                var endtime = $('.el-input__inner:eq(1)', ".monthrange").val();
                data.startTime = starttime.replace('-', '');
                data.endTime = endtime.replace('-', '')
            }
            if (_this.yeardisabled && _this.formdata.radiovalue == '1') {
                var starttime = $('.el-input__inner:eq(0)', ".yearrange").val() + "01";
                var endtime = $('.el-input__inner:eq(1)', ".yearrange").val() + "12";
                data.startTime = starttime.replace('-', '');
                data.endTime = endtime.replace('-', '')
            }
            var url =  _this.adminApi.host+'/htyfctsaleorg/sale/prod/list',

                loading = function() {
                    _this.loadtab = true;
                },
                success = function(data) {
                    if (data.code == '1') {

                        _this.tableData = data.data.saleProdDTOList;
                        _this.pagetotle1 = data.data.saleProdnum;
                    } else {
                        Message({
                            'message': data.msg,
                            'type': 'error',
                        });
                    }
                },
                complete = function() {
                    _this.loadtab = false;
                }
            _this.adminApi.getJsonp(url, data, loading, success, complete)
        },
        handleCurrentChange2: function(val) {
            let _this = this;
            _this.cur_page2 = val;
            var data = {
                'userId': _this.userId,
                'dateType': _this.formdata.radiovalue,
                'rows': _this.pagesize2,
                'prodSort': _this.formdata2.radiovalue,
                'page': _this.cur_page2,
                'detailSort': _this.formdata3.selectvalue3
            };
            data.prodName = _this.formdata3.inpName ? _this.formdata3.inpName : '';
            data.ppCode = _this.formdata3.ppvalue ? _this.formdata3.ppvalue : '';
            data.plCode = _this.formdata3.plvalue ? _this.formdata3.plvalue : '';



            if (_this.mondisabled && _this.formdata.radiovalue == '0') {

                var starttime = $('.el-input__inner:eq(0)', ".monthrange").val();
                var endtime = $('.el-input__inner:eq(1)', ".monthrange").val();
                data.startTime = starttime.replace('-', '');
                data.endTime = endtime.replace('-', '')
            }
            if (_this.yeardisabled && _this.formdata.radiovalue == '1') {
                var starttime = $('.el-input__inner:eq(0)', ".yearrange").val() + "01";
                var endtime = $('.el-input__inner:eq(1)', ".yearrange").val() + "12";
                data.startTime = starttime.replace('-', '');
                data.endTime = endtime.replace('-', '')
            }
            var url =  _this.adminApi.host+'/htyfctsaleorg/sale/detail/list',

                loading = function() {
                    _this.loadtab = true;
                },
                success = function(data) {
                    if (data.code == '1') {
                        _this.tableData2 = data.data.saleDetailDTOList;
                        _this.pagetotle2 = data.data.detainum;
                    } else {
                        Message({
                            'message': data.msg,
                            'type': 'error',
                        });
                    }

                },
                complete = function() {
                    _this.loadtab = false;
                }
            _this.adminApi.getJsonp(url, data, loading, success, complete)
        },
        handleSizeChange2: function(val) {
            let _this = this;
            _this.pagesize2 = val;
            _this.cur_page2 = 1;
            var data = {
                'userId': _this.userId,
                'dateType': _this.formdata.radiovalue,
                'rows': _this.pagesize2,
                'prodSort': _this.formdata2.radiovalue,
                'page': _this.cur_page2,
                'detailSort': _this.formdata3.selectvalue3
            };
            data.prodName = _this.formdata3.inpName ? _this.formdata3.inpName : '';
            data.ppCode = _this.formdata3.ppvalue ? _this.formdata3.ppvalue : '';
            data.plCode = _this.formdata3.plvalue ? _this.formdata3.plvalue : '';

            if (_this.mondisabled && _this.formdata.radiovalue == '0') {

                var starttime = $('.el-input__inner:eq(0)', ".monthrange").val();
                var endtime = $('.el-input__inner:eq(1)', ".monthrange").val();
                data.startTime = starttime.replace('-', '');
                data.endTime = endtime.replace('-', '')
            }
            if (_this.yeardisabled && _this.formdata.radiovalue == '1') {
                var starttime = $('.el-input__inner:eq(0)', ".yearrange").val() + "01";
                var endtime = $('.el-input__inner:eq(1)', ".yearrange").val() + "12";
                data.startTime = starttime.replace('-', '');
                data.endTime = endtime.replace('-', '')
            }
            var url =  _this.adminApi.host+'/htyfctsaleorg/sale/detail/list',

                loading = function() {
                    _this.loadtab = true;
                },
                success = function(data) {
                    if (data.code == '1') {
                        _this.tableData2 = data.data.saleDetailDTOList;
                        _this.pagetotle2 = data.data.detainum;

                    } else {
                        Message({
                            'message': data.msg,
                            'type': 'error',
                        });
                    }

                },
                complete = function() {
                    _this.loadtab = false;
                }
            _this.adminApi.getJsonp(url, data, loading, success, complete)

        },
        handleCurrentChange3: function(val) {
            let _this = this;
            _this.cur_page3 = val;
            var data = {
                'userId': _this.userId,
                'rows': _this.pagesize3,
                'page': _this.cur_page3,
            };
            data.ppCode = _this.formdata3.ppvalue ? _this.formdata3.ppvalue : '';
            data.plCode = _this.formdata3.plvalue ? _this.formdata3.plvalue : '';

            if (_this.mondisabled && _this.formdata.radiovalue == '0') {

                var starttime = $('.el-input__inner:eq(0)', ".monthrange").val();
                var endtime = $('.el-input__inner:eq(1)', ".monthrange").val();
                data.startTime = starttime.replace('-', '');
                data.endTime = endtime.replace('-', '')
            }
            if (_this.yeardisabled && _this.formdata.radiovalue == '1') {
                var starttime = $('.el-input__inner:eq(0)', ".yearrange").val() + "01";
                var endtime = $('.el-input__inner:eq(1)', ".yearrange").val() + "12";
                data.startTime = starttime.replace('-', '');
                data.endTime = endtime.replace('-', '')
            }
            var url =  _this.adminApi.host+'/htyfctsaleorg/sale/hot/list',

                loading = function() {
                    _this.loadtab = true;
                },
                success = function(data) {
                    if (data.code == '1') {
                        _this.tableData3 = data.data.saleHotDTOList;
                        _this.pagetotle3 = data.data.saleHostnum;
                    } else {
                        Message({
                            'message': data.msg,
                            'type': 'error',
                        });
                    }

                },
                complete = function() {
                    _this.loadtab = false;
                }
            _this.adminApi.getJsonp(url, data, loading, success, complete)
        },
        handleSizeChange3: function(val) {
            let _this = this;
            _this.pagesize3 = val;
            _this.cur_page3 = 1;
            var data = {
                'userId': _this.userId,
                'rows': _this.pagesize3,
                'page': _this.cur_page3,
            };
            data.ppCode = _this.formdata3.ppvalue ? _this.formdata3.ppvalue : '';
            data.plCode = _this.formdata3.plvalue ? _this.formdata3.plvalue : '';

            if (_this.mondisabled && _this.formdata.radiovalue == '0') {

                var starttime = $('.el-input__inner:eq(0)', ".monthrange").val();
                var endtime = $('.el-input__inner:eq(1)', ".monthrange").val();
                data.startTime = starttime.replace('-', '');
                data.endTime = endtime.replace('-', '')
            }
            if (_this.yeardisabled && _this.formdata.radiovalue == '1') {
                var starttime = $('.el-input__inner:eq(0)', ".yearrange").val() + "01";
                var endtime = $('.el-input__inner:eq(1)', ".yearrange").val() + "12";
                data.startTime = starttime.replace('-', '');
                data.endTime = endtime.replace('-', '')
            }
            var url =  _this.adminApi.host+'/htyfctsaleorg/sale/hot/list',

                loading = function() {
                    _this.loadtab = true;
                },
                success = function(data) {
                    if (data.code == '1') {
                        _this.tableData3 = data.data.saleHotDTOList;
                        _this.pagetotle3 = data.data.saleHostnum;
                    } else {
                        Message({
                            'message': data.msg,
                            'type': 'error',
                        });
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
