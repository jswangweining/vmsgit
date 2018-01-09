<style lang="scss">

.cRed {
    color: #ff5555
}

.cGreen {
  color: #2cc689
}

.mr60 {
  .el-radio {
    margin-right: 40px
  }
}

</style>

<template>

<div v-loading.body='loadingall' class="bodyscroll">
    <div class="w-pos">
        <span>首页</span>/<span>汇天眼</span>/<span class="w-pos-active">商品数据分析</span>
    </div>

    <div class="w-con2flex" v-loading='loadtab'>
        <div class="w-pannel" style="padding:0.5rem 1rem; flex:1; margin-bottom:10px;">
            <wtabs v-model="activeName">
                <wtabpane label="商品数据总览" name="0">
                    <div class="xpdj-t" style="border-bottom:0px">
                        <div class="xpdj-ta">
                            <p class="xpdj-tap1 ">商品总数<span>（万元）</span></p>
                            <p class="xpdj-tap2">1200</p>

                            <p class="xpdj-tap3"><span class="xpdj-tap3s1">环比上周</span><span class="xpdj-tap3s2">28%<svg class="icon" aria-hidden="true">
                              <use xlink:href="#icon-jiantou2"></use>
                          </svg></span></p>
                        </div>
                        <div class="xpdj-ta">
                            <p class="xpdj-tap1 ">下架商品<span>（万元）</span></p>
                            <p class="xpdj-tap2">1200</p>

                            <p class="xpdj-tap3"><span class="xpdj-tap3s1">环比上周</span><span class="xpdj-tap3s2">90%<svg class="icon" aria-hidden="true">
                              <use xlink:href="#icon-jiantou2"></use>
                          </svg></span></p>
                        </div>
                        <div class="xpdj-ta">
                            <p class="xpdj-tap1 ">有销售记录商品<span>（万元）</span></p>
                            <p class="xpdj-tap2">600</p>

                            <p class="xpdj-tap3"><span class="xpdj-tap3s1">环比上周</span><span class="xpdj-tap3s2">90%<svg class="icon" aria-hidden="true">
                              <use xlink:href="#icon-jiantou2"></use>
                          </svg></span></p>
                        </div>
                        <div class="xpdj-ta">
                            <p class="xpdj-tap1 ">包厢上架数<span>（万元）</span></p>
                            <p class="xpdj-tap2">600</p>

                            <p class="xpdj-tap3"><span class="xpdj-tap3s1">环比上周</span><span class="xpdj-tap3s2">90%<svg class="icon" aria-hidden="true">
                              <use xlink:href="#icon-jiantou2"></use>
                          </svg></span></p>
                        </div>
                        <div class="xpdj-ta" style="border-right:0px">
                            <p class="xpdj-tap1 ">区域上架数<span>（万元）</span></p>
                            <p class="xpdj-tap2">600</p>

                            <p class="xpdj-tap3"><span class="xpdj-tap3s1">环比上周</span><span class="xpdj-tap3s2">90%<svg class="icon" aria-hidden="true">
                              <use xlink:href="#icon-jiantou2"></use>
                          </svg></span></p>
                        </div>

                    </div>
                    <div class="w-table">
                        1111
                    </div>
                </wtabpane>

                <wtabpane label="库存预警分析" name="1">
                    <div class="w-tab-search" style="margin-top:30px">
                        <wform :inline="true" label-position="right" class="demo-form-inline">
                            <form-item label="选择库存" style="margin:0px;">
                                <radio-group v-model="radiovalue2" @change='radiochange' class="mr60">
                                    <wradio label="0" >1-5</wradio>
                                    <wradio label="1">6-10</wradio>
                                    <wradio label="2">11-15</wradio>
                                    <wradio label="3">16-20</wradio>
                                </radio-group>
                            </form-item>
                            <form-item style="float:right;">
                                <span class="cRed"><i class="el-icon-information"></i> 为了不影响正常销售，请及时补充库存</span>
                            </form-item>
                        </wform>
                    </div>

                    <div class="w-table">
                        <wtable border :data="tableData2">
                            <tablecolumn prop="prodFname" label="商品名称" show-overflow-tooltip min-width='200' fixed>
                            </tablecolumn>
                            <tablecolumn prop="prodCode" label="商品编码" width='200' header-align='center'>
                            </tablecolumn>
                            <tablecolumn label="商品类目、品牌" width='400' header-align='center'>
                                <template scope="scope">
                                    {{scope.row.plNameLv1+'>'+scope.row.plNameLv2+'>'+scope.row.plNameLv3+'>'+scope.row.ppName}}
                                </template>
                            </tablecolumn>
                            <tablecolumn prop="stockNum" label="显示库存" width='150' header-align='center' align='right' class-name='cRed'>
                            </tablecolumn>
                            <tablecolumn prop="stockNumTrue" label="实际库存" width='150' header-align='center' align='right'>
                            </tablecolumn>
                            <tablecolumn prop="shelvesFlag" label="上架类型" width='150' header-align='center'>
                            </tablecolumn>
                            <tablecolumn prop="saleQvtMon" label="当月销售数" width='150' header-align='center' align='right'>
                            </tablecolumn>
                            <tablecolumn fixed='right' label="月环比" width='100'  header-align='center' align='right'>
                              <template scope="scope">
                                  <span class="cRed" v-if='scope.row.saleAvg.indexOf("-")>-1'>{{scope.row.saleAvg}}</span>
                                  <span v-else class="cGreen">{{'+'+scope.row.saleAvg}}</span>
                              </template>
                            </tablecolumn>
                        </wtable>
                    </div>

                    <div class="w-pages">
                        <wpager :total="pagetotle2" :current-page="cur_page2" layout="total, sizes, prev, pager, next, jumper" :page-sizes="[10, 15, 20]" :page-size="pagesize2" @current-change="handleCurrentChange2" @size-change="handleSizeChange2"></wpager>
                    </div>
                </wtabpane>

                <wtabpane label="销售情况分析" name="2">
                    3

                </wtabpane>

                <wtabpane label="库存周转分析" name="3">
                  <div class="w-tab-search" style="margin-top:30px">
                      <wform :inline="true" label-position="right" class="demo-form-inline">
                          <form-item label="选择库存" style="margin:0px;">
                              <radio-group v-model="radiovalue4" @change='radiochange4' class="mr60">
                                  <wradio label="0">30天内</wradio>
                                  <wradio label="1">60天内</wradio>
                                  <wradio label="2">90天内</wradio>
                                  <wradio label="3">180天内</wradio>
                                  <wradio label="4">超过180天</wradio>
                              </radio-group>
                          </form-item>
                          <form-item style="float:right;">
                              <span class="cRed"><i class="el-icon-information"></i> 为了不影响正常销售，请及时补充库存</span>
                          </form-item>
                      </wform>
                  </div>


                  <div class="w-table">
                    <wtable border :data="tableData4">
                        <tablecolumn prop="prodFname" label="商品名称" show-overflow-tooltip min-width='200' fixed>
                        </tablecolumn>
                        <tablecolumn prop="prodCode" label="商品编码" width='200' header-align='center'>
                        </tablecolumn>
                        <tablecolumn label="商品类目、品牌" width='400' header-align='center'>
                            <template scope="scope">
                                {{scope.row.plNameLv1+'>'+scope.row.plNameLv2+'>'+scope.row.plNameLv3+'>'+scope.row.ppName}}
                            </template>
                        </tablecolumn>
                        <tablecolumn prop="stockNum" label="显示库存" width='150' header-align='center' align='right' class-name='cRed'>
                        </tablecolumn>
                        <tablecolumn prop="stockNumTrue" label="实际库存" width='150' header-align='center' align='right'>
                        </tablecolumn>
                        <tablecolumn prop="shelvesFlag" label="上架类型" width='150' header-align='center'>
                        </tablecolumn>
                        <tablecolumn prop="saleQvtMon" label="当月销售数" width='150' header-align='center' align='right'>
                        </tablecolumn>
                        <tablecolumn fixed='right' label="月环比" width='100'  header-align='center' align='right'>
                          <template scope="scope">
                              <span class="cRed" v-if='scope.row.saleAvg.indexOf("-")>-1'>{{scope.row.saleAvg}}</span>
                              <span v-else class="cGreen">{{'+'+scope.row.saleAvg}}</span>
                          </template>
                        </tablecolumn>
                    </wtable>
                  </div>

                  <div class="w-pages">
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
import wtabs from 'element-ui/packages/tabs/src/tabs.vue'
import wtabpane from 'element-ui/packages/tabs/src/tab-pane.vue'
import wform from 'element-ui/packages/form/src/form.vue'
import FormItem from 'element-ui/packages/form/src/form-item.vue'
import RadioGroup from 'element-ui/packages/radio/src/radio-group.vue'
import wradio from 'element-ui/packages/radio/src/radio.vue'
import wbutton from 'element-ui/packages/button/src/button.vue'
import wtable from 'element-ui/packages/table/src/table.vue'
import tablecolumn from 'element-ui/packages/table/src/table-column.js'
import wpager from 'element-ui/packages/pagination/src/pagination.js'
import Message from 'element-ui/packages/Message/index.js'
import wdialog from 'element-ui/packages/dialog/src/component.vue'


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
        radiovalue2: '0',
        radiovalue4:'0',
        tableData2: [],
        tableData4:[],
        pagetotle2: 0,
        cur_page2: 1,
        pagesize2: 10,
        ajax1: true,
        ajax2: true,
        ajax3: true,
        ajax4: true,
        ajaxJonsp:''

    }),
    watch: {
        activeName: function(val, oldVal) {
            let _this = this;
            switch (val) {
                case '0':
                    console.log('111')



                    break;
                case '1':
                    if (_this.ajax2) {
                        var data = {
                            'userId': _this.userId,
                            'range': _this.radiovalue2
                        };
                        var url = 'http://199.168.3.98:8080' + '/htyfctgoods/goods/inventory/warning',
                            loading = function() {
                                _this.loadingall = true;
                            },
                            success = function(data) {
                                if (data.code == '1') {
                                    _this.tableData2 = data.data.list;
                                    _this.pagetotle2 = data.data.num;

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
                        _this.ajax2 = false;
                    }


                    break;
                case '2':
                    console.log('333')


                    break;

                case '3':
                    console.log('444')


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

    },
    computed: {


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



                    })
                } else {
                    Message({
                        'message': data.msg,
                        'type': 'error',
                        'onClose': function() {
                            window.location.href = data.data.vmsUrl + '/login';
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
        radiochange: function(val) {
          let _this=this;

          var data = {
              'userId': _this.userId,
              'range': _this.radiovalue2
          };

          var url = 'http://199.168.3.98:8080' + '/htyfctgoods/goods/inventory/warning',
              loading = function() {
                  _this.loadtab = true;
              },
              success = function(data) {
                  if (data.code == '1') {
                      _this.tableData2 = data.data.list;
                      _this.pagetotle2 = data.data.num;
                      _this.ajax2 = false;

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
          _this.adminApi.getJsonp(url, data, loading, success, complete);
        },

        radiochange4:function(){

        },

        handleCurrentChange2:function(val)
        {
          let _this=this;
          _this.cur_page2 = val;
          var data = {
              'userId': _this.userId,
              'range': _this.radiovalue2,
              'rows': _this.pagesize2,
              'page': _this.cur_page2,
          };

          var url = 'http://199.168.3.98:8080' + '/htyfctgoods/goods/inventory/warning',
              loading = function() {
                  _this.loadtab = true;
              },
              success = function(data) {
                  if (data.code == '1') {
                      _this.tableData2 = data.data.list;
                      _this.pagetotle2 = data.data.num;
                      _this.ajax2 = false;

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
          _this.adminApi.getJsonp(url, data, loading, success, complete);
        },

        handleSizeChange2:function(val){
          let _this=this;
          _this.pagesize2 = val;
          var data = {
              'userId': _this.userId,
              'range': _this.radiovalue2,
              'rows': _this.pagesize2,
              'page': _this.cur_page2,
          };

          var url = 'http://199.168.3.98:8080' + '/htyfctgoods/goods/inventory/warning',
              loading = function() {
                  _this.loadtab = true;
              },
              success = function(data) {
                  if (data.code == '1') {
                      _this.tableData2 = data.data.list;
                      _this.pagetotle2 = data.data.num;
                      _this.ajax2 = false;

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
          _this.adminApi.getJsonp(url, data, loading, success, complete);
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

        wtable,
        tablecolumn,
        wpager,

        Message,
        wdialog,
    }
}

</script>
