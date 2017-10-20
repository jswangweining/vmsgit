<style lang="scss">



</style>

<template>

<div v-loading.body='loadingall' style="width:100%; height:100%">
    <div class="w-pos">
        <span>首页</span>/<span>汇天眼</span>/<span class="w-pos-active">用户分析</span>
    </div>
    <div class="w-con">
        <div class="w-search">
            <wform :inline="true" :model="formdata" label-position="right" class="demo-form-inline">
                <div class="">
                    <form-item label="时间区间：">
                      <date-picker type="month" v-model="formdata.startmonth" placeholder="选择开始月份" :editable='false' style="width:250px;">
                      </date-picker>
                      <span class="w-searchs">至</span>
                      <date-picker type="month" v-model="formdata.endmonth" placeholder="选择结束月份" :editable='false' style="width:250px;">
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

                    <form-item label="对比维度：">
                        <radio-group v-model="formdata.radiovalue2">
                            <wradio label="0">分部平均值</wradio>
                            <wradio label="1">整体平均值</wradio>
                        </radio-group>
                    </form-item>

                    <form-item label="对比维度：">
                        <wbutton type="info" icon="search" size="small"></wbutton>
                    </form-item>
                </div>
            </wform>
        </div>

        <div class="w-pannel">
            <div class="xpdj-t">
              <div class="xpdj-ta">
                  <p class="xpdj-tap1">整体采购<span>（次）</span></p>
                  <p class="xpdj-tap2">501</p>
                  <p class="xpdj-tap4">超过分部<span>90%</span>的平台公司</p>
              </div>
              <div class="xpdj-ta">
                  <p class="xpdj-tap1">线上采购<span>（次）</span></p>
                  <p class="xpdj-tap2">501</p>
                  <p class="xpdj-tap4">超过分部<span>90%</span>的平台公司</p>
              </div>
              <div class="xpdj-ta">
                  <p class="xpdj-tap1">商城登录<span>（次）</span></p>
                  <p class="xpdj-tap2 xpdj-tap2red">501</p>
                  <p class="xpdj-tap4">超过分部<span>90%</span>的平台公司</p>
              </div>
              <div class="xpdj-ta">
                  <p class="xpdj-tap1">超级老板登录<span>（次）</span></p>
                  <p class="xpdj-tap2 xpdj-tap2org">501</p>
                  <p class="xpdj-tap4">超过分部<span>90%</span>的平台公司</p>
              </div>
              <div class="xpdj-ta">
                  <p class="xpdj-tap1">商品上架<span>（个）</span></p>
                  <p class="xpdj-tap2 xpdj-tap2red">501</p>
                  <p class="xpdj-tap4">超过分部<span>90%</span>的平台公司</p>
              </div>
              <div class="xpdj-ta">
                  <p class="xpdj-tap1">贷款金额<span>（元）</span></p>
                  <p class="xpdj-tap2 xpdj-tap2org">501</p>
                  <p class="xpdj-tap4">超过分部<span>90%</span>的平台公司</p>
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
                            会员采购占比
                        </div>

                    </div>
                    <div class="w-pannelitemad">
                        <div class="" id="main2" style="width:100%; height:200px;">

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
    name: "",
    data: () => ({
        loadingall: false,
        formdata: {
            'startmonth': '',
            'endmonth': '',
            'radiovalue1': '',
            'radiovalue2': ''
        },
        pickerOptions: {
            disabledDate(time) {
                    return time.getTime() >= Date.now() || time.getTime() < new Date(2016, 0, 1, 0, 0, 0)
                },
                shortcuts: [{
                    text: '本日',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        //start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
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
        myChart:'',
        myChart2:'',
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
    mounted() {
      let _this=this;
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
                  barWidth: 5,
                  type: 'bar',
                  data: _this.wholeBottom,
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
                  name: '对比数据',
                  type: 'bar',
                  barWidth: 5,
                  data: _this.wholeBottomPair,
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
          var option3 = {
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
                  data: _this.wholePic
              }]
          };
          _this.myChart = echarts.init(document.getElementById('main'));
          _this.myChart.setOption(option);
          _this.myChart2 = echarts.init(document.getElementById('main2'));
          _this.myChart2.setOption(option3);
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
