<style lang="scss">



</style>

<template>

<div v-loading.body='loadingall' class="bodyscroll">
    <div class="w-pos">
        <span>首页</span>/<span>汇天眼</span>/<span class="w-pos-active">用户行为</span>
    </div>

    <div class="w-con">
        <div class="w-pannel" style="padding:0.5rem 1rem;">
          <wtabs v-model="activeName" v-loading='loadtab'>
              <wtabpane label="B2B商城" name="0">
                <div class="w-tab-search">
                    <wform :inline="true" :model="formdata1" label-position="right" class="demo-form-inline">
                        <form-item label="周期">
                          <date-picker type="daterange" v-model="formdata1.data" placeholder="选择周期" :editable='false' :picker-options="pickerOptions">
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
                        <wbutton type="info" icon="search" size="small"></wbutton>
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
                            搜索关键词TOP10（次）
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
                            单品访问排行TOP10（次）
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
                            成交单品排行TOP10（次）
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
                            用户购买漏斗TOP10（次）
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
                            用户复购漏斗TOP10（次）
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
import $ from 'jquery'
import echarts from 'echarts'

import Loading from 'element-ui/packages/loading/index.js'
import wtabs from 'element-ui/packages/tabs/src/tabs.vue'
import wtabpane from 'element-ui/packages/tabs/src/tab-pane.vue'
import wform from 'element-ui/packages/form/src/form.vue'
import FormItem from 'element-ui/packages/form/src/form-item.vue'
import RadioGroup from 'element-ui/packages/radio/src/radio-group.vue'
import wradio from 'element-ui/packages/radio/src/radio.vue'
import DatePicker from 'element-ui/packages/date-picker/src/picker/date-picker.js'
import wbutton from 'element-ui/packages/button/src/button.vue'

export default {
    name: "",
    data: () => ({
        loadingall: false,
        loadtab:false,
        activeName:'0',
        formdata1:{
          'radiovalue':'0',
          'data':''
        },
        pickerOptions: {
            disabledDate(time) {
                return time.getTime() >= Date.now() || time.getTime() < new Date(2016, 0, 1, 0, 0, 0)
            },
            shortcuts: [
              {
             text: '本日',
             onClick(picker) {
               const end = new Date();
               const start = new Date();
               //start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
               picker.$emit('pick', [start, end]);
             }
           },
           {
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
        wholeBottom: ["1", "2",'3','4','5','6','7','8','9'],
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
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                top: '0',
                left: '150',
                right: '10',
                bottom: '10',

            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: ['oa汇通达', 'hui通达', '股票 汇通达', '搜狗','汇通达网络股份有限公司','汇通达官网','汇通达商城','汇通达','百度自然流量'],
            },
            series: [{
                type: 'bar',
                itemStyle: {
               normal: {
                   color: new echarts.graphic.LinearGradient(
                       1, 0, 0, 0,
                       [
                           {offset: 0, color: '#6c81c3'},
                           {offset: 0.5, color: '#91a1c6'},
                           {offset: 1, color: '#b5bfd9'}
                       ]
                   )
               },
           },
                data: _this.wholeBottom,
                barWidth: 5,
            }, ]
        };
        var option3 = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                top: '0',
                left: '150',
                right: '10',
                bottom: '10',

            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: ['oa汇通达', 'hui通达', '股票 汇通达', '搜狗','汇通达网络股份有限公司','汇通达官网','汇通达商城','汇通达','百度自然流量'],
            },
            series: [{
                type: 'bar',
                itemStyle: {
               normal: {
                   color: new echarts.graphic.LinearGradient(
                       1, 0, 0, 0,
                       [
                           {offset: 0, color: '#ff7700'},
                           {offset: 0.5, color: '#ff9e48'},
                           {offset: 1, color: '#ffbb7f'}
                       ]
                   )
               },
           },
                data: _this.wholeBottom,
                barWidth: 5,
            }, ]
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
        _this.myChart5.setOption(option);
        _this.myChart6 = echarts.init(document.getElementById('main6'));
        _this.myChart6.setOption(option);
      })
    },
    components: {
      wtabs,
      wtabpane,
      wform,
      FormItem,
      RadioGroup,
      wradio,
      DatePicker,
      wbutton
    }
}

</script>
