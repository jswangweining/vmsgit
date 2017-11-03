<style lang="scss">

.atext {
    text-decoration: underline;
    cursor: pointer;
}

</style>

<template>

<div v-loading.body='loadingall' class="bodyscroll">
    <div class="w-pos">
        <span>首页</span>/<span>汇天眼</span>/<span class="w-pos-active">目标用户管理</span>
    </div>

    <div class="w-con">
        <div class="w-pannel" style="padding:0.5rem 1rem;">
            <wtabs v-model="activeName" v-loading='loadtab'>
                <wtabpane label="活跃会员店分析" name="0">
                    <div class="w-tab-search">
                        <wform :inline="true" :model="formdata1" label-position="right" class="demo-form-inline">
                            <div class="">
                                <form-item label="分析类型">
                                    <radio-group v-model="formdata1.radiovalue">
                                        <wradio label="0">活跃会员店TOP10</wradio>
                                        <wradio label="1">高潜会员店TOP10</wradio>
                                    </radio-group>
                                </form-item>
                                <form-item style="float:right; color:#6c81b3">
                                    <i class="el-icon-information"></i>
                                    <span class="atext">什么是活跃会员店</span>
                                </form-item>
                            </div>
                            <div class="">
                                <form-item label="显示字段" style="margin:0px;">
                                    <wcheckboxgroup v-model='formdata1.checkList'>
                                        <wcheckbox label="整体采购"></wcheckbox>
                                        <wcheckbox label="线上采购"></wcheckbox>
                                        <wcheckbox label="商城登录"></wcheckbox>
                                        <wcheckbox label="商品上架"></wcheckbox>
                                        <wcheckbox label="贷款金额"></wcheckbox>
                                        <wcheckbox label="有效粉丝"></wcheckbox>
                                    </wcheckboxgroup>
                                </form-item>
                                <form-item style="float:right;">
                                    <wbutton type="info" size="small">导出</wbutton>
                                </form-item>
                            </div>
                        </wform>
                    </div>
                    <div class="w-table">
                        <wtable border :data="tableData">
                          <tablecolumn prop="pm" label="排名" width='200' fixed>
                          </tablecolumn>
                          <tablecolumn prop="mc" label="会员店名称" show-overflow-tooltip min-width='200'>
                          </tablecolumn>
                          <tablecolumn prop="ztcg" label="整体采购（元）" width='200' v-if='formdata1.checkList.indexOf("整体采购")>=0'>
                          </tablecolumn>
                          <tablecolumn prop="xscg" label="线上采购（元）" width='200' v-if='formdata1.checkList.indexOf("线上采购")>=0'>
                          </tablecolumn>
                          <tablecolumn prop="scdl" label="商城登录" width='200' v-if='formdata1.checkList.indexOf("商城登录")>=0'>
                          </tablecolumn>
                          <tablecolumn prop="lbdl" label="超级老板登录" width='200' >
                          </tablecolumn>
                          <tablecolumn prop="spsj" label="商品上架" width='100' v-if='formdata1.checkList.indexOf("商品上架")>=0'>
                          </tablecolumn>
                          <tablecolumn prop="dkje" label="贷款金额" width='100' v-if='formdata1.checkList.indexOf("贷款金额")>=0'>
                          </tablecolumn>
                          <tablecolumn prop="yxfs" label="有效粉丝" width='100' v-if='formdata1.checkList.indexOf("有效粉丝")>=0'>
                          </tablecolumn>
                        </wtable>
                    </div>
                    <div class="w-pages">
                        <wpager :total="pagetotle1" :current-page="cur_page1" layout="total, sizes, prev, pager, next, jumper" :page-sizes="[10, 15, 20]" :page-size="pagesize1"></wpager>
                    </div>
                </wtabpane>

                <wtabpane label="VIP会员分析" name="1">
                    <div class="w-tab-search">
                        <wform :inline="true" :model="formdata1" label-position="right" class="demo-form-inline">
                            <div class="">
                                <form-item label="分析类型">
                                    <radio-group v-model="formdata1.radiovalue">
                                        <wradio label="0">活跃会员店TOP10</wradio>
                                        <wradio label="1">高潜会员店TOP10</wradio>
                                    </radio-group>
                                </form-item>
                                <form-item style="float:right; color:#6c81b3">
                                    <i class="el-icon-information"></i>
                                    <span class="atext">什么是活跃会员店</span>
                                </form-item>
                            </div>
                            <div class="">
                                <form-item label="显示字段" style="margin:0px;">
                                    <wcheckboxgroup v-model='formdata1.checkList'>
                                        <wcheckbox label="整体采购"></wcheckbox>
                                        <wcheckbox label="线上采购"></wcheckbox>
                                        <wcheckbox label="商城登录"></wcheckbox>
                                        <wcheckbox label="商品上架"></wcheckbox>
                                        <wcheckbox label="贷款金额"></wcheckbox>
                                        <wcheckbox label="有效粉丝"></wcheckbox>
                                    </wcheckboxgroup>
                                </form-item>
                                <form-item style="float:right;">
                                    <wbutton type="info" size="small">导出</wbutton>
                                </form-item>
                            </div>
                        </wform>
                    </div>
                    <div class="w-table">
                        <wtable border :data="tableData">
                          <tablecolumn prop="pm" label="排名" width='200' fixed>
                          </tablecolumn>
                          <tablecolumn prop="mc" label="会员店名称" show-overflow-tooltip min-width='200'>
                          </tablecolumn>
                          <tablecolumn prop="ztcg" label="整体采购（元）" width='200' v-if='formdata1.checkList.indexOf("整体采购")>=0'>
                          </tablecolumn>
                          <tablecolumn prop="xscg" label="线上采购（元）" width='200' v-if='formdata1.checkList.indexOf("线上采购")>=0'>
                          </tablecolumn>
                          <tablecolumn prop="scdl" label="商城登录" width='200' v-if='formdata1.checkList.indexOf("商城登录")>=0'>
                          </tablecolumn>
                          <tablecolumn prop="lbdl" label="超级老板登录" width='200' >
                          </tablecolumn>
                          <tablecolumn prop="spsj" label="商品上架" width='100' v-if='formdata1.checkList.indexOf("商品上架")>=0'>
                          </tablecolumn>
                          <tablecolumn prop="dkje" label="贷款金额" width='100' v-if='formdata1.checkList.indexOf("贷款金额")>=0'>
                          </tablecolumn>
                          <tablecolumn prop="yxfs" label="有效粉丝" width='100' v-if='formdata1.checkList.indexOf("有效粉丝")>=0'>
                          </tablecolumn>
                        </wtable>
                    </div>
                    <div class="w-pages">
                        <wpager :total="pagetotle1" :current-page="cur_page1" layout="total, sizes, prev, pager, next, jumper" :page-sizes="[10, 15, 20]" :page-size="pagesize1"></wpager>
                    </div>
                </wtabpane>

                <wtabpane label="月度分析" name="2">
                    <div class="w-tab-search">
                        <wform :inline="true" :model="formdata1" label-position="right" class="demo-form-inline">
                            <div class="">
                                <form-item label="分析类型">
                                    <radio-group v-model="formdata1.radiovalue">
                                        <wradio label="0">销售占比TOP10</wradio>
                                        <wradio label="1">购买频次TOP10</wradio>
                                        <wradio label="1">购买市场间隔TOP10</wradio>
                                    </radio-group>
                                </form-item>

                                <form-item label="选择月份">
                                  <date-picker type="month" v-model="formdata3.startmonth" placeholder="选择开始月份" :editable='false' style="width:250px;">
                                  </date-picker>
                                    <wbutton type="info" icon="search" size="small"></wbutton>
                                </form-item>

                                <form-item style="float:right;">
                                    <wbutton type="info" size="small">导出</wbutton>
                                </form-item>
                            </div>

                        </wform>
                    </div>
                    <div class="w-table">
                        <wtable border :data="tableData">
                          <tablecolumn prop="pm" label="排名" width='200' fixed>
                          </tablecolumn>
                          <tablecolumn prop="mc" label="会员店名称" show-overflow-tooltip min-width='200'>
                          </tablecolumn>
                          <tablecolumn prop="ztcg" label="整体采购（元）" width='200'>
                          </tablecolumn>
                          <tablecolumn prop="xscg" label="线上采购（元）" width='200'>
                          </tablecolumn>
                          <tablecolumn prop="scdl" label="商城登录" width='200'>
                          </tablecolumn>
                          <tablecolumn prop="lbdl" label="超级老板登录" width='200' >
                          </tablecolumn>
                          <tablecolumn prop="spsj" label="商品上架" width='100'>
                          </tablecolumn>
                          <tablecolumn prop="dkje" label="贷款金额" width='100'>
                          </tablecolumn>
                          <tablecolumn prop="yxfs" label="有效粉丝" width='100'>
                          </tablecolumn>
                          <tablecolumn  label="近六个月趋势" width='200' align='center'>
                            <template scope="scope">
                              <wbutton type="info" size="small" icon='view' @click='tableView(scope.$index)'>查看</wbutton>
                            </template>
                          </tablecolumn>
                        </wtable>
                    </div>
                    <div class="w-pages">
                        <wpager :total="pagetotle1" :current-page="cur_page1" layout="total, sizes, prev, pager, next, jumper" :page-sizes="[10, 15, 20]" :page-size="pagesize1"></wpager>
                    </div>
                </wtabpane>
            </wtabs>
        </div>


    </div>


    <wdialog v-model="tabledialog">
      <div class="rankingt" slot='title'>
          <div class="rankingta">
              <div class="w-ywxl-r-t">
                  销售占比会员店TOP近6个月趋势
              </div>
          </div>
      </div>
      <div class="rankingc" v-loading='dialogload'>
          <div class="rankingcb">
              <div class="rankingcbt">
                  <div class="rankingcbta">
                      排名
                  </div>
                  <div class="rankingcbtb">
                      会员店
                  </div>
                  <div class="rankingcbtc">
                      销售占比
                  </div>
              </div>
              <div class="rankingcbd">
                <div class="rankingcbda" style="height:1.5rem;">
                    <div class="rankingcbda1">
                      1
                    </div>
                    <div class="rankingcbda2">
                      资金阳光会员测试01
                    </div>
                    <div class="rankingcbda3">
                      10%
                    </div>
                </div>
                <div class="rankingcbda w-active2" style="height:1.5rem;" >
                    <div class="rankingcbda1">
                      2
                    </div>
                    <div class="rankingcbda2">
                      资金阳光会员测试02

                    </div>
                    <div class="rankingcbda3">
                      10%
                    </div>
                </div>
                <div class="rankingcbda" style="height:1.5rem;">
                    <div class="rankingcbda1">
                      3
                    </div>
                    <div class="rankingcbda2">
                      资金阳光会员测试03
                    </div>
                    <div class="rankingcbda3">
                      10%
                    </div>
                </div>
                <div class="rankingcbda" style="height:1.5rem;">
                    <div class="rankingcbda1">
                      4
                    </div>
                    <div class="rankingcbda2">
                      资金阳光会员测试04
                    </div>
                    <div class="rankingcbda3">
                      10%
                    </div>
                </div>
                <div class="rankingcbda" style="height:1.5rem;">
                    <div class="rankingcbda1">
                      5
                    </div>
                    <div class="rankingcbda2">
                      资金阳光会员测试05
                    </div>
                    <div class="rankingcbda3">
                      10%
                    </div>
                </div>
                <div class="rankingcbda" style="height:1.5rem;">
                    <div class="rankingcbda1">
                      6
                    </div>
                    <div class="rankingcbda2">
                      资金阳光会员测试06
                    </div>
                    <div class="rankingcbda3">
                      10%
                    </div>
                </div>
                <div class="rankingcbda" style="height:1.5rem;">
                    <div class="rankingcbda1">
                      7
                    </div>
                    <div class="rankingcbda2">
                      资金阳光会员测试07



                    </div>
                    <div class="rankingcbda3">
                      10%
                    </div>
                </div>
                <div class="rankingcbda" style="height:1.5rem;">
                    <div class="rankingcbda1">
                      8
                    </div>
                    <div class="rankingcbda2">
                      资金阳光会员测试08
                    </div>
                    <div class="rankingcbda3">
                      10%
                    </div>
                </div>
                <div class="rankingcbda" style="height:1.5rem;">
                    <div class="rankingcbda1">
                      9
                    </div>
                    <div class="rankingcbda2">
                      资金阳光会员测试09
                    </div>
                    <div class="rankingcbda3">
                      10%
                    </div>
                </div>
                <div class="rankingcbda" style="height:1.5rem;">
                    <div class="rankingcbda1">
                      10
                    </div>
                    <div class="rankingcbda2">
                      资金阳光会员测试10
                    </div>
                    <div class="rankingcbda3">
                      10%
                    </div>
                </div>
              </div>
          </div>
          <div class="rankingcb" style="margin-left:0.5rem; border:1px solid #d7d7d7;">
            <div id="main" style="width:100%; height:100%"></div>
          </div>
      </div>
    </wdialog>
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
import wbutton from 'element-ui/packages/button/src/button.vue'
import wcheckboxgroup from 'element-ui/packages/checkbox/src/checkbox-group.vue'
import wcheckbox from 'element-ui/packages/checkbox/src/checkbox.vue'
import wtable from 'element-ui/packages/table/src/table.vue'
import tablecolumn from 'element-ui/packages/table/src/table-column.js'
import wpager from 'element-ui/packages/pagination/src/pagination.js'
import DatePicker from 'element-ui/packages/date-picker/src/picker/date-picker.js'
import wdialog from 'element-ui/packages/dialog/src/component.vue'

export default {
    name: "",
    data: () => ({
        loadingall: false,
        dialogload:false,
        loadtab: false,
        tabledialog:false,
        activeName: '0',
        formdata1: {
            'radiovalue': '0',
            'checkList': ['整体采购','线上采购','商城登录','商品上架','贷款金额','有效粉丝']
        },
        formdata3:{
          'startmonth':'',
          'endmonth':'',
        },
        tableData:[{
          'pm':'1',
          'mc':'会员测试公司01',
          'ztcg':'4000',
          'xscg':'4000',
          'scdl':'500',
          'lbdl':'500',
          'spsj':'500',
          'dkje':'500',
          'yxfs':'500'
        },{
          'pm':'2',
          'mc':'会员测试公司02',
          'ztcg':'4000',
          'xscg':'4000',
          'scdl':'500',
          'lbdl':'500',
          'spsj':'500',
          'dkje':'500',
          'yxfs':'500'
        },{
          'pm':'3',
          'mc':'会员测试公司03',
          'ztcg':'4000',
          'xscg':'4000',
          'scdl':'500',
          'lbdl':'500',
          'spsj':'500',
          'dkje':'500',
          'yxfs':'500'
        },{
          'pm':'4',
          'mc':'会员测试公司04',
          'ztcg':'4000',
          'xscg':'4000',
          'scdl':'500',
          'lbdl':'500',
          'spsj':'500',
          'dkje':'500',
          'yxfs':'500'
        },{
          'pm':'5',
          'mc':'会员测试公司05',
          'ztcg':'4000',
          'xscg':'4000',
          'scdl':'500',
          'lbdl':'500',
          'spsj':'500',
          'dkje':'500',
          'yxfs':'500'
        },{
          'pm':'6',
          'mc':'会员测试公司06',
          'ztcg':'4000',
          'xscg':'4000',
          'scdl':'500',
          'lbdl':'500',
          'spsj':'500',
          'dkje':'500',
          'yxfs':'500'
        },{
          'pm':'7',
          'mc':'会员测试公司07',
          'ztcg':'4000',
          'xscg':'4000',
          'scdl':'500',
          'lbdl':'500',
          'spsj':'500',
          'dkje':'500',
          'yxfs':'500'
        },{
          'pm':'8',
          'mc':'会员测试公司08',
          'ztcg':'4000',
          'xscg':'4000',
          'scdl':'500',
          'lbdl':'500',
          'spsj':'500',
          'dkje':'500',
          'yxfs':'500'
        },{
          'pm':'9',
          'mc':'会员测试公司09',
          'ztcg':'4000',
          'xscg':'4000',
          'scdl':'500',
          'lbdl':'500',
          'spsj':'500',
          'dkje':'500',
          'yxfs':'500'
        },{
          'pm':'10',
          'mc':'会员测试公司10',
          'ztcg':'4000',
          'xscg':'4000',
          'scdl':'500',
          'lbdl':'500',
          'spsj':'500',
          'dkje':'500',
          'yxfs':'500'
        }],
        pagetotle1: 100,
        cur_page1: 1,
        pagesize1: 10,
          myChart:'',
        wholeBottomPair: ["88.88", "88.88"],
        wholeBottom: ["66.66", "66.66"],
        wholeBottomDate: ["201705", "201709"],
    }),
    mounted() {
        let _this = this;
        _this.$nextTick(function() {

        })
    },
    methods: {
      tableView(index) {
        let _this=this;
        _this.tabledialog=true;
          _this.$nextTick(function() {
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
            _this.myChart.setOption(option3);
          })
      }
    },
    components: {
        wtabs,
        wtabpane,
        wform,
        FormItem,
        RadioGroup,
        wradio,
        wbutton,
        wcheckboxgroup,
        wcheckbox,
        wtable,
        tablecolumn,
        wpager,
        DatePicker,
        wdialog
    }
}

</script>
