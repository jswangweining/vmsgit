<style lang="scss">

.xpdj-tap5 {
    color: #999;
    font-size: 0.6rem;
    text-align: center;
    span {
        color: #ff7700;
        margin: 0 0.25rem;
    }
}

</style>

<template>

<div v-loading.body='loadingall' class="bodyscroll">
    <div class="w-pos">
        <span>首页</span>/<span>汇天眼</span>/<span class="w-pos-active">会员概览</span>
    </div>
    <div class="w-con">
        <div class="w-search">
            <wform :inline="true" :model="formdata" label-position="right" class="demo-form-inline">
                <div class="">
                    <form-item label="时间区间：" class="radio0Month">
                      <date-picker type="month" v-model="formdata.startmonth" placeholder="选择开始月份" :editable='false' :picker-options="pickerOptions" style="width:250px;" @change='monthchange1'>
                      </date-picker>
                      <span class="w-searchs">至</span>
                      <date-picker type="month" v-model="formdata.endmonth" placeholder="选择结束月份" :editable='false' :picker-options="pickerOptions" style="width:250px;" @change='monthchange2'>
                      </date-picker>
                    </form-item>
                </div>

                <div class="">
                    <form-item label="分析类型：">
                        <radio-group v-model="formdata.radiovalue1">
                            <wradio label="0">会员店</wradio>
                            <wradio label="1">活跃会员店</wradio>
                            <wradio label="2">VIP店</wradio>
                        </radio-group>
                    </form-item>

                    <!-- <form-item label="对比维度：">
                        <radio-group v-model="formdata.radiovalue2">
                            <wradio label="0">超级老板</wradio>
                            <wradio label="1">B2B商城</wradio>
                        </radio-group>
                    </form-item> -->

                    <form-item>
                        <wbutton type="info" icon="search" size="small" @click='yhfxSearch()'></wbutton>
                    </form-item>
                </div>
            </wform>
        </div>

        <div class="w-pannel">
            <div class="xpdj-t">
              <div class="xpdj-ta">
                  <p class="xpdj-tap1">整体采购<span>（万元）</span></p>
                  <p class="xpdj-tap2">{{jsondata.amtAll || 0}}</p>
                  <p class="xpdj-tap5">超过分部<span>{{jsondata.amtAllNum || 0}}%</span>的平台公司</p>
              </div>
              <div class="xpdj-ta">
                  <p class="xpdj-tap1">线上采购<span>（万元）</span></p>
                  <p class="xpdj-tap2">{{jsondata.amtOnline || 0}}</p>
                  <p class="xpdj-tap5">超过分部<span>{{jsondata.amtOnlineNum || 0}}%</span>的平台公司</p>
              </div>
              <div class="xpdj-ta">
                  <p class="xpdj-tap1">商城登录<span>（次）</span></p>
                  <p class="xpdj-tap2 xpdj-tap2red">{{jsondata.qtyB2b || 0}}</p>
                  <p class="xpdj-tap5">超过分部<span>{{jsondata.qtyB2bNum || 0}}%</span>的平台公司</p>
              </div>
              <div class="xpdj-ta">
                  <p class="xpdj-tap1">超级老板登录<span>（次）</span></p>
                  <p class="xpdj-tap2 xpdj-tap2org">{{jsondata.qtyBoss || 0}}</p>
                  <p class="xpdj-tap5">超过分部<span>{{jsondata.qtyBossNum || 0}}%</span>的平台公司</p>
              </div>
              <div class="xpdj-ta">
                  <p class="xpdj-tap1">商品上架<span>（个）</span></p>
                  <p class="xpdj-tap2 xpdj-tap2red">{{jsondata.qtyHzg || 0}}</p>
                  <p class="xpdj-tap5">超过分部<span>{{jsondata.qtyHzgNum || 0}}%</span>的平台公司</p>
              </div>
              <div class="xpdj-ta">
                  <p class="xpdj-tap1">贷款金额<span>（元）</span></p>
                  <p class="xpdj-tap2 xpdj-tap2org">{{jsondata.amtDk || 0}}</p>
                  <p class="xpdj-tap5">超过分部<span>{{jsondata.amtDkNum || 0}}%</span>的平台公司</p>
              </div>
            </div>
        </div>

          <div class="w-pannel">
              <div class="w-pannelitem">
                <div class="w-pannelitema">
                    <div class="w-ywxl-ddrdt">
                        <div class="w-ywxl-ddrdta">
                            工具使用<span>（单位：次）</span>
                        </div>
                        <div class="w-ywxl-ddrdtb">
                            <span class="w-ywxl-ddrdtbs1">当前数据</span>
                            <span class="w-ywxl-ddrdtbs2">分部平均值</span>
                            <!-- <radio-group v-model="formdata.radiovalue2">
                                <wradio label="0">超级老板</wradio>
                                <wradio label="1">B2B商城</wradio>
                            </radio-group> -->
                            <wselect v-model="formdata.radiovalue2" placeholder="请选择" style="width:120px; margin-left:10px; color:#4a4a4a" @change='yhfxChange'>
                                <woption label='超级老板' value='0'></woption>
                                <woption label='B2B商城' value='1'></woption>
                            </wselect>
                        </div>
                    </div>
                    <div class="w-pannelitemad">
                        <div class="" id="mainyhfx" style="width:100%; height:200px;">

                        </div>

                    </div>
                </div>

                <div class="w-pannelitema">
                    <div class="w-ywxl-ddrdt">
                        <div class="w-ywxl-ddrdta">
                            会员采购占比
                        </div>

                    </div>
                    <div class="w-pannelitemad">
                        <div class="" id="mainyhfx2" style="width:100%; height:200px;">

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
    name: "",
    data: () => ({
      userId:'',
      ajaxpost:'',
        loadingall: false,
        formdata: {
            'startmonth': '',
            'endmonth': '',
            'radiovalue1': '0',
            'radiovalue2': '0'
        },
        jsondata:{},
        startdatevalue:'',
        enddatevalue:'',
        pickerOptions: {
            disabledDate(time) {
                    return time.getTime() >= Date.now() || time.getTime() < new Date(2016, 0, 1, 0, 0, 0)
                }
        },
        myChartYhfx:'',
        myChartYhfx2:'',
        wholePic: [{
          "name": " 超级老板采购",
          "value": "50"
        }, {
          "name": "商城采购",
          "value": "10"
        }, {
          "name": "线下采购",
          "value": "35"
        },
        {
          "name": "VMS采购",
          "value": "5"
        }]
    }),
    created() {
        let _this = this;
        if (!_this.$route.query.userId || !_this.$route.query.ticket || !_this.$route.query.userName) {
            _this.$router.push({
                name: 'NotFoundComponent'
            });
            return;
        }
    },
    mounted() {
      let _this=this;
      var url = _this.adminApi.host+'/login/validate',
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
                _this.$emit('userInfo',_this.$route.query.userName,data.data.vmsUrl);
                var data={
                   'userId':_this.$route.query.userId,
                   'ticket':_this.$route.query.ticket,
                   'userName':_this.$route.query.userName,
                 }
                 _this.$store.commit('changeUserId',data)
                 _this.$nextTick(function() {
                    //  _this.myChartYhfx = echarts.init(document.getElementById('mainyhfx'));
                   var url = _this.adminApi.host + '/htycustall/cust/Analysis',
                       data = {
                         userId:_this.userId,
                         type:_this.formdata.radiovalue1,
                         bossType:_this.formdata.radiovalue2

                       },
                       loading = function() {
                           _this.loadingall = true;
                       },
                       success = function(data) {
                           if (data.code == '1') {
                             _this.jsondata=data.data;

                             var option2 = {
                                 tooltip: {
                                     trigger: 'item',
                                     formatter: "{a} <br/>{b}: ({d}%)"
                                 },
                                 series: [{
                                     name: '会员采购占比',
                                     type: 'pie',
                                     radius: ['50%', '70%'],
                                     center: ['50%', '50%'],
                                     avoidLabelOverlap: false,
                                     color: ['#ff7700', '#ff5555', '#2cc689','#6c81b3'],
                                     label: {
                                         normal: {
                                             show: false,
                                             position: 'center'
                                         },
                                     },
                                     labelLine: {
                                         normal: {
                                             show: false
                                         }
                                     },
                                     data: _this.jsondata.map
                                 }]
                             };
                             _this.myChartYhfx2 = echarts.init(document.getElementById('mainyhfx2'));
                             _this.myChartYhfx2.setOption(option2);

                             var url = _this.adminApi.host + '/htycustall/cust/AnalysisVertical',
                                 data = {
                                   userId:_this.userId,
                                   type:_this.formdata.radiovalue1,
                                   bossType:_this.formdata.radiovalue2

                                 },
                                 loading = function() {
                                   _this.myChartYhfx = echarts.init(document.getElementById('mainyhfx'));
                                   _this.myChartYhfx.showLoading({
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
                                               data: data.data.listName,
                                               axisLine:{
                                                 lineStyle:{
                                                   color:'#eee'
                                                 }
                                               },
                                               axisLabel:{
                                                 color:'#333'
                                               },

                                           }],
                                           yAxis: [{
                                               type: 'value',
                                               axisLine:{
                                                 lineStyle:{
                                                   color:'#eee'
                                                 }
                                               },
                                               axisLabel:{
                                                 color:'#333'
                                               },
                                               splitLine:{
                                                 lineStyle:{
                                                   color: ['#eee'],
                                                 }
                                               }
                                           }],
                                           series: [{
                                               name: '当前数据',
                                               barWidth: 5,
                                               type: 'bar',
                                               data: data.data.listDate,
                                               itemStyle: {
                                              normal: {
                                                  color: new echarts.graphic.LinearGradient(
                                                      0, 0, 0, 1,
                                                      [
                                                          {offset: 0, color: '#ff7700'},
                                                          {offset: 0.5, color: '#ff9e48'},
                                                          {offset: 1, color: '#ffbb7f'}
                                                      ]
                                                  )
                                              },
                                          }
                                           }, {
                                               name: '分部平均值',
                                               type: 'bar',
                                               barWidth: 5,
                                               data: data.data.listPair,
                                               itemStyle: {
                                              normal: {
                                                  color: new echarts.graphic.LinearGradient(
                                                      0, 0, 0, 1,
                                                      [
                                                          {offset: 0, color: '#6c81c3'},
                                                          {offset: 0.5, color: '#91a1c6'},
                                                          {offset: 1, color: '#b5bfd9'}
                                                      ]
                                                  )
                                              },
                                          }
                                           }]
                                       };
                                       if(_this.$route.name=='yhfx')
                                       {
                                         _this.myChartYhfx = echarts.init(document.getElementById('mainyhfx'));
                                         _this.myChartYhfx.setOption(option);
                                       }


                                     } else {
                                         Message({
                                             'message': data.msg,
                                             'type': 'error',
                                         });
                                     }
                                 },
                                 complete = function() {
                                     _this.myChartYhfx.hideLoading();
                                 }
                             _this.adminApi.getJsonp(url, data, loading, success, complete)
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
                     if(_this.myChartYhfx)
                     {
                       _this.myChartYhfx.resize();
                     }
                     if(_this.myChartYhfx2)
                     {
                       _this.myChartYhfx2.resize();
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
                  _this.formdata.endmonth = '';
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
                    _this.formdata.startmonth = '';
                  _this.formdata.endmonth = '';
              }
          }
      },
      yhfxSearch:function(){
        let _this=this;
        var data = {
          userId:_this.userId,
          type:_this.formdata.radiovalue1,
          bossType:_this.formdata.radiovalue2

        };
        if (_this.formdata.startmonth)
        {
            var starttime = $('.el-input__inner:eq(0)', ".radio0Month").val();
            data.startTime=starttime.replace('-', '');
        }
        if (_this.formdata.endmonth)
        {
            var endtime = $('.el-input__inner:eq(1)', ".radio0Month").val();
            data.endTime=endtime.replace('-', '');
        }
        var url = _this.adminApi.host + '/htycustall/cust/Analysis',

            loading = function() {
                _this.loadingall = true;
            },
            success = function(data) {
                if (data.code == '1') {
                  _this.jsondata=data.data;
                  var option2 = {
                      tooltip: {
                          trigger: 'item',
                          formatter: "{a} <br/>{b}: ({d}%)"
                      },
                      series: [{
                          name: '会员采购占比',
                          type: 'pie',
                          radius: ['50%', '70%'],
                          center: ['50%', '50%'],
                          avoidLabelOverlap: false,
                          color: ['#ff7700', '#ff5555', '#2cc689','#6c81b3'],
                          label: {
                              normal: {
                                  show: false,
                                  position: 'center'
                              },
                          },
                          labelLine: {
                              normal: {
                                  show: false
                              }
                          },
                          data: _this.jsondata.map
                      }]
                  };
                  _this.myChartYhfx2.clear();
                  _this.myChartYhfx2 = echarts.init(document.getElementById('mainyhfx2'));
                  _this.myChartYhfx2.setOption(option2);
                  var url = _this.adminApi.host + '/htycustall/cust/AnalysisVertical',
                      data = {
                        userId:_this.userId,
                        type:_this.formdata.radiovalue1,
                        bossType:_this.formdata.radiovalue2

                      },
                      loading = function() {
                        _this.myChartYhfx = echarts.init(document.getElementById('mainyhfx'));
                        _this.myChartYhfx.showLoading({
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
                                    data: data.data.listName,
                                    axisLine:{
                                      lineStyle:{
                                        color:'#eee'
                                      }
                                    },
                                    axisLabel:{
                                      color:'#333'
                                    },

                                }],
                                yAxis: [{
                                    type: 'value',
                                    axisLine:{
                                      lineStyle:{
                                        color:'#eee'
                                      }
                                    },
                                    axisLabel:{
                                      color:'#333'
                                    },
                                    splitLine:{
                                      lineStyle:{
                                        color: ['#eee'],
                                      }
                                    }
                                }],
                                series: [{
                                    name: '当前数据',
                                    barWidth: 5,
                                    type: 'bar',
                                    data: data.data.listDate,
                                    itemStyle: {
                                   normal: {
                                       color: new echarts.graphic.LinearGradient(
                                           0, 0, 0, 1,
                                           [
                                               {offset: 0, color: '#ff7700'},
                                               {offset: 0.5, color: '#ff9e48'},
                                               {offset: 1, color: '#ffbb7f'}
                                           ]
                                       )
                                   },
                               }
                                }, {
                                    name: '分部平均值',
                                    type: 'bar',
                                    barWidth: 5,
                                    data: data.data.listPair,
                                    itemStyle: {
                                   normal: {
                                       color: new echarts.graphic.LinearGradient(
                                           0, 0, 0, 1,
                                           [
                                               {offset: 0, color: '#6c81c3'},
                                               {offset: 0.5, color: '#91a1c6'},
                                               {offset: 1, color: '#b5bfd9'}
                                           ]
                                       )
                                   },
                               }
                                }]
                            };
                            if(_this.$route.name=='yhfx')
                            {
                              _this.myChartYhfx = echarts.init(document.getElementById('mainyhfx'));
                              _this.myChartYhfx.setOption(option);
                            }


                          } else {
                              Message({
                                  'message': data.msg,
                                  'type': 'error',
                              });
                          }
                      },
                      complete = function() {
                          _this.myChartYhfx.hideLoading();
                      }
                  _this.adminApi.getJsonp(url, data, loading, success, complete)
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
      yhfxChange:function(){
        let _this=this;
        var data = {
          userId:_this.userId,
          type:_this.formdata.radiovalue1,
          bossType:_this.formdata.radiovalue2

        };
        if (_this.formdata.startmonth)
        {
            var starttime = $('.el-input__inner:eq(0)', ".radio0Month").val();
            data.startTime=starttime.replace('-', '');
        }
        if (_this.formdata.endmonth)
        {
            var endtime = $('.el-input__inner:eq(1)', ".radio0Month").val();
            data.endTime=endtime.replace('-', '');
        }
        var url = _this.adminApi.host + '/htycustall/cust/AnalysisVertical',

            loading = function() {
              _this.myChartYhfx.showLoading({
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
                          data: data.data.listName,
                          axisLine:{
                            lineStyle:{
                              color:'#eee'
                            }
                          },
                          axisLabel:{
                            color:'#333'
                          },

                      }],
                      yAxis: [{
                          type: 'value',
                          axisLine:{
                            lineStyle:{
                              color:'#eee'
                            }
                          },
                          axisLabel:{
                            color:'#333'
                          },
                          splitLine:{
                            lineStyle:{
                              color: ['#eee'],
                            }
                          }
                      }],
                      series: [{
                          name: '当前数据',
                          barWidth: 5,
                          type: 'bar',
                          data: data.data.listDate,
                          itemStyle: {
                         normal: {
                             color: new echarts.graphic.LinearGradient(
                                 0, 0, 0, 1,
                                 [
                                     {offset: 0, color: '#ff7700'},
                                     {offset: 0.5, color: '#ff9e48'},
                                     {offset: 1, color: '#ffbb7f'}
                                 ]
                             )
                         },
                     }
                      }, {
                          name: '分部平均值',
                          type: 'bar',
                          barWidth: 5,
                          data: data.data.listPair,
                          itemStyle: {
                         normal: {
                             color: new echarts.graphic.LinearGradient(
                                 0, 0, 0, 1,
                                 [
                                     {offset: 0, color: '#6c81c3'},
                                     {offset: 0.5, color: '#91a1c6'},
                                     {offset: 1, color: '#b5bfd9'}
                                 ]
                             )
                         },
                     }
                      }]
                  };



                    _this.myChartYhfx.clear();
                  _this.myChartYhfx = echarts.init(document.getElementById('mainyhfx'));
                  _this.myChartYhfx.setOption(option);

                } else {
                    Message({
                        'message': data.msg,
                        'type': 'error',
                    });
                }
            },
            complete = function() {
                _this.myChartYhfx.hideLoading();
            }
        _this.adminApi.getJsonp(url, data, loading, success, complete)
      }
    },
    beforeDestroy() {
      let _this=this;
      // _this.ajaxpost='';
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
