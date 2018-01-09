<style lang="scss">

.atext {
    text-decoration: underline;
    cursor: pointer;
}

.w-ywxl-r-t span.span1 {
    margin-left: 0.5rem;
    font-size: 12px;
}

.w-tipa {
    font-size: 0.8rem;
    color: #f1f1f1;
}

.w-tipb {
    color: #ababab;
    font-size: 0.7rem;
    margin-top: 20px;
}

.w-tipc {
    color: #eee;
    font-size: 0.7rem;
    margin-top: 5px;
}

</style>

<template>

<div v-loading.body='loadingall' class="bodyscroll">
    <div class="w-pos">
        <span>首页</span>/<span>汇天眼</span>/<span class="w-pos-active">质量提升</span>
    </div>

    <div class="w-con2flex" v-loading='loadtab'>
        <div class="w-pannel" style="padding:0.5rem 1rem; flex:1; margin-bottom:10px;">
            <wtabs v-model="activeName"  @tab-click='tabclick'>
                <wtabpane label="活跃会员店分析" name="0">
                    <div class="w-tab-search">
                        <wform :inline="true" :model="formdata1" label-position="right" class="demo-form-inline">
                            <div class="">
                                <form-item label="分析类型">
                                    <radio-group v-model="formdata1.radiovalue" @change='mbyhglChange'>
                                        <wradio label="0">高潜活跃会员店TOP10</wradio>
                                        <wradio label="1">活跃会员店TOP10</wradio>
                                    </radio-group>
                                </form-item>
                                <wtooltip class="item" effect="dark" placement="bottom">
                                    <div slot="content" style=" margin-right:20px;">
                                        <div class="w-tipa">
                                            同时满足以下条件即为活跃会员店:
                                        </div>
                                        <div class="w-tipb">

                                        </div>
                                        <div class="w-tipc">
                                          1、倒推365天，实际交易金额累计≥1万元
                                        </div>
                                        <div class="w-tipb">

                                        </div>
                                        <div class="w-tipc">
                                            2、汇掌柜网店开设，累计上架SKU≥10个
                                        </div>
                                        <div class="w-tipb">

                                        </div>
                                        <div class="w-tipc">
                                          3、累计发展有效在线粉丝≥10个
                                        </div>
                                    </div>
                                    <form-item style="float:right; color:#6c81b3">

                                        <i class="el-icon-information"></i>
                                        <span class="atext">活跃会员店定义</span>

                                    </form-item>
                                </wtooltip>

                            </div>
                            <div class="" >
                                <form-item label="不活跃原因" style="margin:0px;" v-if='formdata1.radiovalue=="0"'>
                                        <wcheckbox label="整体采购额" v-model="amtType" @change='checkChange'></wcheckbox>
                                        <wcheckbox label="商品上架数" v-model="hzgType" @change='checkChange'></wcheckbox>
                                        <wcheckbox label="有效粉丝数" v-model="fsType" @change='checkChange'></wcheckbox>
                                </form-item>
                                <form-item style="float:right;">
                                    <wbutton type="info" size="small" @click='outE1()'>导出</wbutton>
                                </form-item>
                            </div>
                        </wform>
                    </div>
                    <div class="w-table">
                        <wtable border :data="tableData1">
                            <tablecolumn label="排名" width='80' fixed='left' align='center' >
                                <template scope="scope">
                                    {{scope.$index+1}}
                                </template>
                            </tablecolumn>
                            <tablecolumn prop="custName" label="会员店名称" show-overflow-tooltip min-width='200' fixed>
                            </tablecolumn>
                          <tablecolumn prop="amtAll" label="整体采购（元）" width='200'>
                            </tablecolumn>
                              <tablecolumn prop="amtOnline" label="线上采购（元）" width='200'  header-align='center' align='right'>
                            </tablecolumn>
                            <tablecolumn prop="qtyB2b" label="商城登录" width='200'  header-align='center' align='right'>
                            </tablecolumn>
                            <tablecolumn prop="qtyBoss" label="超级老板登录" width='200'  header-align='center' align='right'>
                            </tablecolumn>
                            <tablecolumn prop="qtyHzg" label="商品上架" width='100'  header-align='center' align='right'>
                            </tablecolumn>
                            <tablecolumn prop="amtDk" label="贷款金额" width='200'  header-align='center' align='right'>
                            </tablecolumn>
                            <tablecolumn prop="qtyFs" fixed='right' label="有效粉丝" width='100'  header-align='center' align='right'>
                            </tablecolumn>

                        </wtable>
                    </div>
                </wtabpane>

                <wtabpane label="VIP会员分析" name="1">
                    <div class="w-tab-search">
                        <wform :inline="true" :model="formdata1" label-position="right" class="demo-form-inline">
                            <div class="">
                                <form-item label="分析类型">
                                    <radio-group v-model="formdata1.radiovalue2" @change='mbyhglChange2'>
                                        <wradio label="0">高潜VIP会员店TOP10</wradio>
                                        <wradio label="1">VIP会员店TOP10</wradio>
                                    </radio-group>
                                </form-item>

                            </div>
                            <div class="">
                                <form-item style="float:right;">
                                    <wbutton type="info" size="small" @click='outE2()'>导出</wbutton>
                                </form-item>
                            </div>
                        </wform>
                    </div>
                    <div class="w-table">
                        <wtable border :data="tableData2">
                            <tablecolumn label="排名" width='80' fixed align='center'>
                                <template scope="scope">
                                    {{scope.$index+1}}
                                </template>
                            </tablecolumn>
                            <tablecolumn prop="custName" label="会员店名称" show-overflow-tooltip min-width='200' fixed>
                            </tablecolumn>
                            <tablecolumn prop="expireTime" label="结束日期" width='200'  header-align='center' align='right'>
                            </tablecolumn>
                            <tablecolumn prop="areaProName" label="省" width='150'>
                            </tablecolumn>
                            <tablecolumn prop="areaCityName" label="市" width='150'>
                            </tablecolumn>
                            <tablecolumn prop="areaCountyName" label="县" width='150'>
                            </tablecolumn>
                            <tablecolumn prop="areaTownName" label="镇" width='150'>
                            </tablecolumn>
                            <tablecolumn prop="custManagerName" label="客户经理" width='200'>
                            </tablecolumn>
                        </wtable>
                    </div>
                </wtabpane>

                <wtabpane label="月度分析" name="2">
                    <div class="w-tab-search">
                        <wform :inline="true" :model="formdata1" label-position="right" class="demo-form-inline">
                            <div class="">
                                <form-item label="分析类型">
                                    <radio-group v-model="formdata3.radiovalue3" @change='mbyhglChange3'>
                                        <wradio label="0">销售占比TOP10</wradio>
                                        <wradio label="1">购买频次TOP10</wradio>
                                        <wradio label="2">购买市场间隔TOP10</wradio>
                                    </radio-group>
                                </form-item>

                                <form-item label="选择月份" class="monthrange">
                                    <date-picker type="month" v-model="formdata3.startmonth" :placeholder="monthPlaceHolder" :editable='false' :picker-options="pickerOptions" style="width:250px;">
                                    </date-picker>
                                    <wbutton type="info" icon="search" size="small" @click='mbyhglSearch()'></wbutton>
                                </form-item>

                                <form-item style="float:right;">
                                    <wbutton type="info" size="small" @click='outE3()'>导出</wbutton>
                                </form-item>
                            </div>

                        </wform>
                    </div>
                    <div class="w-table">
                        <wtable border :data="tableData3">
                            <tablecolumn label="排名" width='80' fixed align='center'>
                                <template scope="scope">
                                    {{scope.$index+1}}
                                </template>
                            </tablecolumn>
                            <tablecolumn prop="custName" label="会员店名称" fixed show-overflow-tooltip min-width='200'>
                            </tablecolumn>
                            <tablecolumn prop="xsAmt" label="销售额" width='200'  header-align='center' align='right'>
                            </tablecolumn>
                            <tablecolumn prop="sellPoint" label="销售额占比（%）" width='200' v-if='formdata3.radiovalue3=="0" || formdata3.radiovalue3=="1"'  header-align='center' align='right'>
                            </tablecolumn>
                            <tablecolumn prop="xsQty" label="购买频次" width='200' v-if='formdata3.radiovalue3=="0" || formdata3.radiovalue3=="1"'  header-align='center' align='right'>
                            </tablecolumn>
                            <tablecolumn prop="lastDate" label="最近一次购买日期" width='200'  header-align='center' align='right'>
                            </tablecolumn>
                            <tablecolumn prop="lastTime" label="间隔天数" width='200'  header-align='center' align='right'>
                            </tablecolumn>
                            <tablecolumn label="近六个月趋势" width='200' align='center' fixed='right'>
                                <template scope="scope">
                                    <wbutton type="info" size="small" icon='view' @click='tableView(scope.row.custCode,scope.row.custName)'>查看</wbutton>
                                </template>
                            </tablecolumn>
                        </wtable>
                    </div>

                </wtabpane>
            </wtabs>
        </div>
    </div>


    <wdialog v-model="tabledialog">
        <div class="rankingt" slot='title'>
            <div class="rankingta">
                <div class="w-ywxl-r-t">
                    <span v-if='formdata3.radiovalue3=="0"'>销售占比会员店TOP近6个月趋势</span>
                    <span v-if='formdata3.radiovalue3=="1"'>购买频次会员店TOP近6个月趋势</span>
                    <span v-if='formdata3.radiovalue3=="2"'>购买间隔会员店TOP近6个月趋势</span> <span class='span1'>{{tabledialogtitle}}</span>
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
                    <div class="rankingcbtc" v-if='formdata3.radiovalue3=="0"'>
                        销售金额
                    </div>
                    <div class="rankingcbtc" v-if='formdata3.radiovalue3=="1"'>
                        购买频次
                    </div>
                    <div class="rankingcbtc" v-if='formdata3.radiovalue3=="2"'>
                        最后购买日期
                    </div>
                </div>
                <div class="rankingcbd">
                    <div class="rankingcbda" style="height:1.5rem; overflow:hidden" v-for='(item,index) in sortList'>
                        <div class="rankingcbda1">
                            {{index+1}}
                        </div>
                        <div class="rankingcbda2" style=" height:40px; line-height:40px;">
                            {{item.custName}}
                        </div>
                        <div class="rankingcbda3" v-if='formdata3.radiovalue3=="0"'>
                            {{item.xsAmt}}
                        </div>
                        <div class="rankingcbda3" v-if='formdata3.radiovalue3=="1"'>
                            {{item.xsQty}}
                        </div>
                        <div class="rankingcbda3" v-if='formdata3.radiovalue3=="2"'>
                            {{item.lastDate}}
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
import Message from 'element-ui/packages/Message/index.js'
import wdialog from 'element-ui/packages/dialog/src/component.vue'
import wtooltip from 'element-ui/packages/tooltip/index.js'

export default {
    name: "",
    data: () => ({
        userId: '',
        loadingall: false,
        dialogload: false,
        loadtab: false,
        tabledialog: false,
        tabledialogtitle: '',
        activeName: '0',
        formdata1: {
            'radiovalue': '0',
            'radiovalue2': '0',

        },
        amtType:true,
        hzgType:true,
        fsType:true,
        formdata3: {
            'radiovalue3': '0',
            'startmonth': '',
        },
        pickerOptions: {
            disabledDate(time) {
                return time.getTime() > Date.now() - 8.64e7 || time.getTime() < new Date(2016, 0, 1, 0, 0, 0)
            }
        },
        sortList: [],
        tableData1: [],
        tableData2: [],
        tableData3: [],
        myChart: '',
        currentYear:'',
        currentMonth:'',
        monthPlaceHolder:''
    }),
    watch: {
        activeName: function(val, oldVal) {
            let _this = this;
            switch (val) {
                case '0':
                  var data = {
                      userId: _this.userId,
                      pageType: _this.activeName,
                      aliveType: _this.formdata1.radiovalue,
                  };
                  if( _this.formdata1.radiovalue==0)
                  {
                    data.amtType=_this.amtType ? "1" : "0";
                    data.hzgType=_this.hzgType ? "1" : "0";
                    data.fsType=_this.fsType ? "1" : "0"
                  }


                    var url = _this.adminApi.host + '/htycustall/cust/manager',

                        loading = function() {
                            _this.loadtab = true;
                        },
                        success = function(data) {
                            if (data.code == '1') {

                                _this.tableData1 = data.data;
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
                    break;
                case '1':
                var data = {
                    userId: _this.userId,
                    pageType: _this.activeName,
                    aliveType: _this.formdata1.radiovalue2,

                };

                    var url = _this.adminApi.host + '/htycustall/cust/manager',

                        loading = function() {
                            _this.loadtab = true;
                        },
                        success = function(data) {
                            if (data.code == '1') {
                                _this.tableData2 = data.data;
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
                    break;
                case '2':
                    var data = {
                        userId: _this.userId,
                        sortType: _this.formdata3.radiovalue3,
                        dateTime: ''
                    };
                    if (_this.formdata3.startmonth) {
                        var starttime = $('.el-input__inner:eq(0)', ".monthrange").val();
                        data.dateTime = starttime.replace('-', '');
                    }
                    var url = _this.adminApi.host + '/htycustall/cust/month',
                        loading = function() {
                            _this.loadtab = true;
                        },
                        success = function(data) {
                            if (data.code == '1') {
                                _this.tableData3 = data.data;
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
                    break;
                default:

            }
        }
    },
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
    computed: {
        dialogChartTitle: function() {
            let _this = this;
            switch (_this.formdata3.radiovalue3) {
                case '0':
                    return '销售金额（单位：万元）'
                    break;

                case '1':
                    return '购买频次（单位：次）'
                    break;

                case '2':
                    return '销售金额（单位：万元）'
                    break;
                default:
            }
        },
        dialogChartTitle2: function() {
            let _this = this;
            switch (_this.formdata3.radiovalue3) {
                case '0':
                    return '销售金额'
                    break;

                case '1':
                    return '次数'
                    break;

                case '2':
                    return '销售金额'
                    break;
                default:
            }
        }
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


                        var url = _this.adminApi.host + '/htycustall/cust/manager',
                            data = {
                                userId: _this.userId,
                                pageType: _this.activeName,
                                aliveType: _this.formdata1.radiovalue,
                                amtType:_this.amtType ? "1" : "0",
                                hzgType:_this.hzgType ? "1" : "0",
                                fsType:_this.fsType ? "1" : "0",
                            },
                            loading = function() {
                                _this.loadtab = true;
                            },
                            success = function(data) {
                                if (data.code == '1') {
                                    _this.tableData1 = data.data;
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
        tableView: function(code, name) {
            let _this = this;
            _this.tabledialog = true;
            _this.tabledialogtitle = name;
            var url = _this.adminApi.host + '/htycustall/cust/banner',
                data = {
                    userId: _this.userId,
                    custCode: code,
                    sortType: _this.formdata3.radiovalue3
                        // time:'201709'
                },
                loading = function() {
                    _this.dialogload = true

                },
                success = function(data) {
                    if (data.code == '1') {
                        _this.sortList = data.data.sortList;

                        _this.$nextTick(function() {
                            var option3 = {
                                title: {
                                    show: true,
                                    text: _this.dialogChartTitle
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
                                    top: '50',
                                    left: '3%',
                                    right: '4%',
                                    bottom: '3%',
                                    containLabel: true
                                },
                                xAxis: [{
                                    type: 'category',
                                    boundaryGap: false,
                                    data: data.data.listName,
                                    axisLine: {
                                        lineStyle: {
                                            color: '#eee'
                                        }
                                    },
                                    axisLabel: {
                                        color: '#333'
                                    },
                                }],
                                yAxis: [{
                                    type: 'value',
                                    axisLine: {
                                        lineStyle: {
                                            color: '#eee'
                                        }
                                    },
                                    axisLabel: {
                                        color: '#333'
                                    },
                                    splitLine: {
                                        lineStyle: {
                                            color: ['#eee'],
                                        }
                                    }
                                }],
                                series: [{
                                    name: _this.dialogChartTitle2,
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
                                    data: data.data.listDate
                                }, ]
                            };

                            _this.myChart = echarts.init(document.getElementById('main'));
                            _this.myChart.setOption(option3);
                        })
                    } else {
                        Message({
                            'message': data.msg,
                            'type': 'error',
                        });
                    }
                },
                complete = function() {
                    _this.dialogload = false
                }
            _this.adminApi.getJsonp(url, data, loading, success, complete)



        },
        tabclick: function(tab) {
            let _this = this;
        },
        mbyhglChange: function() {
            let _this = this;
            var data = {
                userId: _this.userId,
                pageType: _this.activeName,
                aliveType: _this.formdata1.radiovalue,
            };
            if( _this.formdata1.radiovalue==0)
            {
              data.amtType=_this.amtType ? "1" : "0";
              data.hzgType=_this.hzgType ? "1" : "0";
              data.fsType=_this.fsType ? "1" : "0"
            }


            var url = _this.adminApi.host + '/htycustall/cust/manager',

                loading = function() {
                    _this.loadtab = true;
                },
                success = function(data) {
                    if (data.code == '1') {

                        _this.tableData1 = data.data;
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
        checkChange:function(){

          let _this=this;
          var data = {
              userId: _this.userId,
              pageType: _this.activeName,
              aliveType: _this.formdata1.radiovalue,
          };

            data.amtType=_this.amtType ? "1" : "0";
            data.hzgType=_this.hzgType ? "1" : "0";
            data.fsType=_this.fsType ? "1" : "0"

          var url = _this.adminApi.host + '/htycustall/cust/manager',

              loading = function() {
                  _this.loadtab = true;
              },
              success = function(data) {
                  if (data.code == '1') {

                      _this.tableData1 = data.data;
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
        mbyhglChange2: function() {
            let _this = this;
            var data = {
                userId: _this.userId,
                pageType: _this.activeName,
                aliveType: _this.formdata1.radiovalue2,

            };

            var url = _this.adminApi.host + '/htycustall/cust/manager',

                loading = function() {
                    _this.loadtab = true;
                },
                success = function(data) {
                    if (data.code == '1') {

                        _this.tableData2 = data.data;
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
        mbyhglChange3: function() {
            let _this = this;
            var data = {
                userId: _this.userId,
                sortType: _this.formdata3.radiovalue3,
                dateTime: ''
            };

            if (_this.formdata3.startmonth) {
                var starttime = $('.el-input__inner:eq(0)', ".monthrange").val();
                data.dateTime = starttime.replace('-', '');
            }
            var url = _this.adminApi.host + '/htycustall/cust/month',

                loading = function() {
                    _this.loadtab = true;
                },
                success = function(data) {
                    if (data.code == '1') {
                        _this.tableData3 = data.data;
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
        mbyhglSearch: function() {
            let _this = this;
            if (!_this.formdata3.startmonth) {
                Message({
                    'message': '请选择月份查询',
                    'type': 'error',
                });
                return;
            }
            var starttime = $('.el-input__inner:eq(0)', ".monthrange").val();
            var data = {
                userId: _this.userId,
                sortType: _this.formdata3.radiovalue3,
                dateTime: starttime.replace('-', '')
            };

            var url = _this.adminApi.host + '/htycustall/cust/month',

                loading = function() {
                    _this.loadtab = true;
                },
                success = function(data) {
                    if (data.code == '1') {
                        _this.tableData3 = data.data;
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
        outE1: function() {
            let _this = this;
            window.location.href = _this.adminApi.host + '/htycustall/cust/manager/downLoad?userId=' + _this.userId + '&aliveType=' + _this.formdata1.radiovalue + '&pageType=' + _this.activeName;
        },
        outE2: function() {
            let _this = this;
            window.location.href = _this.adminApi.host + '/htycustall/cust/manager/downLoad?userId=' + _this.userId + '&aliveType=' + _this.formdata1.radiovalue2 + '&pageType=' + _this.activeName;
        },
        outE3: function() {
            let _this = this;
            var data = {
                userId: _this.userId,
                sortType: _this.formdata3.radiovalue3,
                dateTime: ''
            };
            if (_this.formdata3.startmonth) {
                var starttime = $('.el-input__inner:eq(0)', ".monthrange").val();
                data.dateTime = starttime.replace('-', '');
            }
            window.location.href = _this.adminApi.host + '/htycustall/cust/month/downLoad?userId=' + data.userId + '&sortType=' + data.sortType + '&dateTime=' + data.dateTime;
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
        Message,
        wdialog,
        wtooltip
    }
}

</script>
