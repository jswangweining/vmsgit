<style lang="scss">

.cRed {
    color: #ff5555;
}

.cGreen {
    color: #2cc689
}

.cOrg {
    color: #ff7700
}

.cBlue {
  color: #6c81b3;
}

.mr60 {
    .el-radio {
        margin-right: 40px
    }
}

.fweight {
    font-weight: 600;
}

.xsqk_pannel {
    height: 270px;
    border-bottom: 1px solid #f3f3f3;
    display: flex;
}

.xsqk_pannela {
    flex: 1;
    display: flex;
}

.xsqk_pannelal {
    width: 210px;
    height: 270px;
    overflow: hidden;
    position: relative;
}

.xsqk_pannelalF {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    margin-left: -50px;
    .xsqk_pannelalFa {
        height: 50px;
        line-height: 50px;
        font-size: 24px;
        text-align: center;
        line-height: 80px;
        font-weight: 600;
        overflow: hidden;
    }
    .xsqk_pannelalFb {
        height: 50px;
        text-align: center;
        line-height: 30px
    }
}

.xsqk_pannelar {
    flex: 1;
    .xsqk_pannelart {
        height: 25px;
        border-bottom: 1px solid #f3f3f3;
        font-size: 12px;
        font-weight: 600;
        display: flex;
    }
    .xsqk_pannelarta {
        flex: 1;
        text-align: center;
    }
    .xsqk_pannelard {
        height: 245px;
    }
    .xsqk_pannelardItem {
        height: 40px;
        line-height: 40px;
        display: flex;
        cursor: pointer;
    }
    .xsqk_pannelardItem.w-active {
        border: 1px solid #87aaff;
        background-color: #f9fcff;
        border-radius: 4px;
        &:after {
            display: inline-block;
            content: '';
            width: 21px;
            height: 27px;
            background-image: url('../assets/img/arrowl.png');
            position: absolute;
            right: 50%;
            margin-top: 5px;
            margin-right: -11px;
        }
    }
    .xsqk_pannelardItem.w-active1 {
        border: 1px solid #87aaff;
        background-color: #f9fcff;
        border-radius: 4px;
        &:after {
            display: inline-block;
            content: '';
            width: 21px;
            height: 27px;
            background-image: url('../assets/img/arrowl.png');
            position: absolute;
            right: 50%;
            margin-top: 5px;
            margin-right: -11px;
        }
    }
    .xsqk_pannelardItema {
        flex: 1;
        overflow: hidden;
        padding-left: 10px;
        span {
            display: inline-block;
            width: 8px;
            height: 8px;
            margin-right: 10px;
        }
        // color: ['#ff5555','#2cc689','#ff7700','#6c81b3','#b267f5','#999999'],
        .xsqk_pannelardItemas0 {
            background-color: #ff5555;
        }
        .xsqk_pannelardItemas1 {
            background-color: #2cc689;
        }
        .xsqk_pannelardItemas2 {
            background-color: #ff7700;
        }
        .xsqk_pannelardItemas3 {
            background-color: #6c81b3;
        }
        .xsqk_pannelardItemas4 {
            background-color: #b267f5;
        }
        .xsqk_pannelardItemas5 {
            background-color: #999999;
        }
    }
    .xsqk_pannelardItemb {
        flex: 1;
        text-align: center;
    }
}

.xsqk_pannelb {
    flex: 1;
    padding-left: 20px;
}

.xsqk_pannelbIn {
    height: 230px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    padding: 0px 10px;
}

.xsqk_pannelbInt {
    height: 40px;
    position: relative;
    overflow: hidden;
    line-height: 40px;
    .xsqk_pannelbIntl {
        position: absolute;
        height: 40px;
        left: 0px;
        font-weight: 600;
        span {
            display: inline-block;
            width: 8px;
            height: 8px;
            margin-right: 10px;
        }
        .xsqk_pannelbIntls0 {
            background-color: #ff5555;
        }
        .xsqk_pannelbIntls1 {
            background-color: #2cc689;
        }
        .xsqk_pannelbIntls2 {
            background-color: #ff7700;
        }
        .xsqk_pannelbIntls3 {
            background-color: #6c81b3;
        }
        .xsqk_pannelbIntls4 {
            background-color: #b267f5;
        }
        .xsqk_pannelbIntls5 {
            background-color: #999999;
        }
    }
    .xsqk_pannelbIntr {
        position: absolute;
        height: 40px;
        right: 0px;
    }
}

.xsqk_pannelbInd {
    height: 180px;
}

.tableDiv {
  width: 100px;
  height: 4px;
  background-color: #f2f2f2;
  border-radius: 4px;
  text-align: right;
  display: inline-block;
  overflow: hidden;
  margin-right: 10px;

  .tableDivIn {
    display: inline-block;
    height: 4px;
    background-color: #ff7700;
    border-radius: 4px;
    float: right;
  }
}

.tableSpan {
  font-size: 9px;
  color: #666;
  font-weight: 600;
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
                            <p class="xpdj-tap2">{{headData.prodNum}}</p>

                            <p class="xpdj-tap3"><span class="xpdj-tap3s1">环比上周</span><span class="xpdj-tap3s2">{{headData.prodNumWk}}%
                              <svg class="icon" aria-hidden="true" v-if='headData.prodNumWk>=0'>
                              <use xlink:href="#icon-jiantou2"></use>
                          </svg><svg class="icon" aria-hidden="true" v-if='headData.prodNumWk<0'>
                            <use xlink:href="#icon-jiantou1"></use>
                        </svg></span></p>
                        </div>
                        <div class="xpdj-ta">
                            <p class="xpdj-tap1 ">下架商品<span>（万元）</span></p>
                            <p class="xpdj-tap2">{{headData.prodNumDown}}</p>

                            <p class="xpdj-tap3"><span class="xpdj-tap3s1">环比上周</span><span class="xpdj-tap3s2">{{headData.prodNumDownWk}}%
                              <svg class="icon" aria-hidden="true" v-if='headData.prodNumDownWk>=0'>
                              <use xlink:href="#icon-jiantou2"></use>
                          </svg>  <svg class="icon" aria-hidden="true" v-if='headData.prodNumDownWk<0'>
                            <use xlink:href="#icon-jiantou2"></use>
                        </svg></span></p>
                        </div>
                        <div class="xpdj-ta">
                            <p class="xpdj-tap1 ">有销售记录商品<span>（万元）</span></p>
                            <p class="xpdj-tap2">{{headData.prodNumSale}}</p>

                            <p class="xpdj-tap3"><span class="xpdj-tap3s1">环比上周</span><span class="xpdj-tap3s2">{{headData.prodNumSaleWk}}%
                              <svg class="icon" aria-hidden="true" v-if='headData.prodNumSaleWk>=0'>
                              <use xlink:href="#icon-jiantou2"></use>
                          </svg>
                          <svg class="icon" aria-hidden="true" v-if='headData.prodNumSaleWk<0'>
                          <use xlink:href="#icon-jiantou2"></use>
                      </svg>
                        </span></p>
                        </div>
                        <div class="xpdj-ta">
                            <p class="xpdj-tap1 ">包厢上架数<span>（万元）</span></p>
                            <p class="xpdj-tap2">{{headData.prodNumBx}}</p>

                            <p class="xpdj-tap3"><span class="xpdj-tap3s1">环比上周</span><span class="xpdj-tap3s2">{{headData.prodNumBxWk}}%
                              <svg class="icon" aria-hidden="true" v-if='headData.prodNumBxWk>=0'>
                              <use xlink:href="#icon-jiantou2"></use>
                          </svg>
                          <svg class="icon" aria-hidden="true" v-if='headData.prodNumBxWk<0'>
                          <use xlink:href="#icon-jiantou2"></use>
                      </svg></span></p>
                        </div>
                        <div class="xpdj-ta" style="border-right:0px">
                            <p class="xpdj-tap1 ">区域上架数<span>（万元）</span></p>
                            <p class="xpdj-tap2">{{headData.prodNumQy}}</p>

                            <p class="xpdj-tap3"><span class="xpdj-tap3s1">环比上周</span><span class="xpdj-tap3s2">{{headData.prodNumQyWk}}%
                              <svg class="icon" aria-hidden="true" v-if='headData.prodNumQyWk>=0'>
                              <use xlink:href="#icon-jiantou2"></use>
                          </svg>
                          <svg class="icon" aria-hidden="true" v-if='headData.prodNumQyWk<0'>
                          <use xlink:href="#icon-jiantou2"></use>
                      </svg></span></p>
                        </div>

                    </div>
                    <div class="w-table">
                      <wtable border :data="tableData1">
                          <tablecolumn prop="prodFname" label="商品名称" show-overflow-tooltip min-width='200' fixed>
                          </tablecolumn>
                          <tablecolumn prop="prodCode" label="商品编码" width='200' header-align='center'>
                          </tablecolumn>
                          <tablecolumn label="商品类目、品牌" width='400' header-align='center'>
                              <template scope="scope">
                                  {{scope.row.plNameLv1+'>'+scope.row.plNameLv2+'>'+scope.row.plNameLv3+'>'+scope.row.ppName}}
                              </template>
                          </tablecolumn>
                          <tablecolumn prop="saleQvtYear" label="销售数量" width='150' header-align='center' align='right' class-name="cBlue fweight">
                          </tablecolumn>
                          <tablecolumn prop="saleAmtYear" label="销售金额" width='150' header-align='center' align='right' class-name="cOrg fweight">
                          </tablecolumn>
                          <tablecolumn label="销售额占比" width='200' header-align='center'>
                            <template scope="scope">
                              <span class="tableDiv">
                                <span class="tableDivIn" style="width:"+scope.row.saleAvg+"%"></span>
                              </span>
                              <span class="tableSpan">{{scope.row.saleAvg}}%</span>
                            </template>
                          </tablecolumn>
                          <tablecolumn prop="saleFlag" fixed='right' label="销售渠道" width='150' header-align='center' >
                          </tablecolumn>
                      </wtable>
                    </div>

                    <div class="w-pages">
                      <wpager :total="pagetotle1" :current-page="cur_page1" layout="total, sizes, prev, pager, next, jumper" :page-sizes="[10, 15, 20]" :page-size="pagesize1" @current-change="handleCurrentChange1" @size-change="handleSizeChange1"></wpager>
                    </div>
                </wtabpane>

                <wtabpane label="库存预警分析" name="1">
                    <div class="w-tab-search" style="margin-top:30px">
                        <wform :inline="true" label-position="right" class="demo-form-inline">
                            <form-item label="选择库存" style="margin:0px;">
                                <radio-group v-model="radiovalue2" @change='radiochange' class="mr60">
                                    <wradio label="0">1-5</wradio>
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
                            <tablecolumn fixed='right' label="月环比" width='100' header-align='center' align='right'>
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
                    <div class="w-pannelitema" style="border:0px; margin-top:20px">
                        <div class="w-ywxl-ddrdt">
                            <div class="w-ywxl-ddrdta">
                                {{currentYear}}年度 销售品类TOP5
                            </div>

                        </div>

                    </div>
                    <div class="xsqk_pannel">
                        <div class="xsqk_pannela">
                            <div class="xsqk_pannelal">
                                <div id="main1" style=" height:100%;">

                                </div>
                                <div class="xsqk_pannelalF">
                                    <div class="xsqk_pannelalFa">
                                        {{plTotle}}
                                    </div>
                                    <div class="xsqk_pannelalFb">
                                        万元
                                    </div>
                                </div>
                            </div>
                            <div class="xsqk_pannelar">
                                <div class="xsqk_pannelart">
                                    <div class="xsqk_pannelarta" style="">品类</div>
                                    <div class="xsqk_pannelarta">销售量</div>
                                    <div class="xsqk_pannelarta">销售额（万元）</div>
                                    <div class="xsqk_pannelarta">销售额占比</div>
                                </div>

                                <div class="xsqk_pannelard">
                                    <div class="xsqk_pannelardItem" v-for='(item,index) in plList' @click='plClick(index,$event,item.plCodeLv3,item.plNameLv3)'>
                                        <div class="xsqk_pannelardItema" :title="item.plNameLv3">
                                            <span :class="[index || index==0? 'xsqk_pannelardItemas'+index :'']"></span>{{item.plNameLv3}}
                                        </div>
                                        <div class="xsqk_pannelardItemb fweight ">
                                            {{item.saleQvt}}件
                                        </div>
                                        <div class="xsqk_pannelardItemb fweight cOrg">
                                            {{item.saleAmtYear}}
                                        </div>
                                        <div class="xsqk_pannelardItemb">
                                            {{item.saleAvg}}%
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="xsqk_pannelb">
                            <div class="xsqk_pannelbIn">
                                <div class="xsqk_pannelbInt">
                                    <div class="xsqk_pannelbIntl">
                                        <span class="xsqk_pannelbIntls0"></span>{{plName}}销售趋势分析
                                    </div>
                                    <div class="xsqk_pannelbIntr">
                                        <span class="w-ywxl-ddrdtbs1">2017年</span>
                                        <span class="w-ywxl-ddrdtbs2">2016年</span>
                                    </div>
                                </div>

                                <div class="xsqk_pannelbInd">
                                    <div class="" id="main3" style="height:100%;">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-pannelitema" style="border:0px;">
                        <div class="w-ywxl-ddrdt">
                            <div class="w-ywxl-ddrdta">
                                {{currentYear}}年度 销售品牌TOP5
                            </div>

                        </div>

                    </div>
                    <div class="xsqk_pannel">
                        <div class="xsqk_pannela">
                            <div class="xsqk_pannelal">
                                <div id="main2" style=" height:100%;">

                                </div>
                                <div class="xsqk_pannelalF">
                                    <div class="xsqk_pannelalFa">
                                        {{ppTotle}}
                                    </div>
                                    <div class="xsqk_pannelalFb">
                                        万元
                                    </div>
                                </div>
                            </div>
                            <div class="xsqk_pannelar">
                                <div class="xsqk_pannelart">
                                    <div class="xsqk_pannelarta">品牌</div>
                                    <div class="xsqk_pannelarta">销售量</div>
                                    <div class="xsqk_pannelarta">销售额（万元）</div>
                                    <div class="xsqk_pannelarta">销售额占比</div>
                                </div>

                                <div class="xsqk_pannelard">
                                    <div class="xsqk_pannelardItem xsqk_pannelardItem2" v-for='(item,index) in ppList' @click='plClick2(index,$event,item.ppCode,item.ppName)'>
                                        <div class="xsqk_pannelardItema" :title="item.plNameLv3">
                                            <span :class="[index || index==0? 'xsqk_pannelardItemas'+index :'']"></span>{{item.ppName}}
                                        </div>
                                        <div class="xsqk_pannelardItemb fweight ">
                                            {{item.saleQvt}}件
                                        </div>
                                        <div class="xsqk_pannelardItemb fweight cOrg">
                                            {{item.saleAmtYear}}
                                        </div>
                                        <div class="xsqk_pannelardItemb">
                                            {{item.saleAvg}}%
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="xsqk_pannelb">
                            <div class="xsqk_pannelbIn">
                                <div class="xsqk_pannelbInt">
                                    <div class="xsqk_pannelbIntl">
                                        <span class="xsqk_pannelbIntls0"></span>{{ppName}}销售趋势分析
                                    </div>
                                    <div class="xsqk_pannelbIntr">
                                        <span class="w-ywxl-ddrdtbs1">2017年</span>
                                        <span class="w-ywxl-ddrdtbs2">2016年</span>
                                    </div>
                                </div>

                                <div class="xsqk_pannelbInd">
                                    <div class="" id="main4" style="height:100%;">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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

                            </form-item>
                        </wform>
                    </div>


                    <div class="w-table">
                        <wtable border :data="tableData4" style="width:100%">
                            <tablecolumn prop="prodFname" label="商品名称" show-overflow-tooltip min-width='200' fixed>
                            </tablecolumn>
                            <tablecolumn prop="prodCode" label="商品编码" width='200' header-align='center'>
                            </tablecolumn>
                            <tablecolumn label="商品类目、品牌" width='400' header-align='center'>
                                <template scope="scope">
                                    {{scope.row.plNameLv1+'>'+scope.row.plNameLv2+'>'+scope.row.plNameLv3+'>'+scope.row.ppName}}
                                </template>
                            </tablecolumn>
                            <tablecolumn prop="stockNumTrue" label="库存数量" width='150' header-align='center' align='right'>
                            </tablecolumn>
                            <tablecolumn prop="stockAmt" label="库存金额（含税）" width='150' header-align='center' align='right' class-name="cOrg">
                            </tablecolumn>
                            <tablecolumn prop="lossAmt" fixed='right' label="不出货预计损失" width='200' header-align='center' align='right' class-name="cRed">

                            </tablecolumn>

                        </wtable>
                    </div>

                    <div class="w-pages">
                        <wpager :total="pagetotle4" :current-page="cur_page4" layout="total, sizes, prev, pager, next, jumper" :page-sizes="[10, 15, 20]" :page-size="pagesize4" @current-change="handleCurrentChange4" @size-change="handleSizeChange4"></wpager>

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
        currentYear: '',
        activeName: '0',
        radiovalue2: '0',
        radiovalue4: '0',
        tableData1:[],
        tableData2: [],
        tableData4: [],
        pagetotle1: 0,
        cur_page1: 1,
        pagesize1: 10,
        pagetotle2: 0,
        cur_page2: 1,
        pagesize2: 10,
        pagetotle4: 0,
        cur_page4: 1,
        pagesize4: 10,
        ajax1: true,
        ajax2: true,
        ajax3: true,
        ajax4: true,
        ajaxJonsp: '',
        ajaxJonsp2: '',
        myChart1: '',
        myChart2: '',
        myChart3: '',
        myChart4: '',
        wholePl: '',
        wholePp: '',
        plTotle: '',
        ppTotle: '',
        plList: [],
        ppList: [],
        plName: '',
        ppName: '',
        plIndex: '暂无',
        ppIndex: '暂无',
        headData: ''

    }),
    watch: {
        activeName: function(val, oldVal) {
            let _this = this;
            switch (val) {
                case '0':
                    // console.log('111')
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
                                    _this.ajax2 = false;
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
                        _this.ajaxJonsp = _this.adminApi.getJsonp(url, data, loading, success, complete);

                    }


                    break;
                case '2':
                    if (_this.ajax3) {
                        var data = {
                            'userId': _this.userId,
                            'endTime': '2017'
                        };
                        var url = 'http://199.168.3.98:8080' + '/htyfctgoods/goods/sale/pl',
                            loading = function() {
                                _this.loadingall = true;
                            },
                            success = function(data) {
                                if (data.code == '1') {
                                    _this.wholePl = data.data.wholePl;
                                    _this.plTotle = data.data.plList[0].saleAmtYear;
                                    _this.plList = data.data.plList;

                                    _this.wholePp = data.data.wholePp;
                                    _this.ppTotle = data.data.ppList[0].saleAmtYear;
                                    _this.ppList = data.data.ppList;

                                    _this.$nextTick(function() {
                                        var option1 = {
                                            tooltip: {
                                                trigger: 'item',
                                                formatter: "{a} <br/>{b}: {c} ({d}%)",
                                                position: ['0', '0']
                                            },
                                            series: [{
                                                name: '销售品类',
                                                type: 'pie',
                                                radius: ['50%', '65%'],
                                                center: ['50%', '50%'],
                                                avoidLabelOverlap: false,
                                                color: ['#ff5555', '#2cc689', '#ff7700', '#6c81b3', '#b267f5', '#999999'],
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
                                                data: _this.wholePl
                                            }]
                                        };
                                        _this.myChart1 = echarts.init(document.getElementById('main1'));
                                        _this.myChart1.setOption(option1);
                                        var option2 = {
                                            tooltip: {
                                                trigger: 'item',
                                                formatter: "{a} <br/>{b}: {c} ({d}%)",
                                                position: ['0', '0']
                                            },
                                            series: [{
                                                name: '销售品牌',
                                                type: 'pie',
                                                radius: ['50%', '65%'],
                                                center: ['50%', '50%'],
                                                avoidLabelOverlap: false,
                                                color: ['#ff5555', '#2cc689', '#ff7700', '#6c81b3', '#b267f5', '#999999'],
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
                                                data: _this.wholePp
                                            }]
                                        };
                                        _this.myChart2 = echarts.init(document.getElementById('main2'));
                                        _this.myChart2.setOption(option2);


                                        $('.xsqk_pannelardItema', '.xsqk_pannelardItem').eq(0).trigger('click');
                                        $('.xsqk_pannelardItema', '.xsqk_pannelardItem2').eq(0).trigger('click');

                                        // $('.xsqk_pannelardItem').trigger('click');
                                    })





                                    _this.ajax3 = false;
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
                        _this.ajaxJonsp = _this.adminApi.getJsonp(url, data, loading, success, complete);
                    }



                    break;
                case '3':
                    if (_this.ajax4) {
                        var data = {
                            'userId': _this.userId,
                            'range': _this.radiovalue4
                        };
                        var url = 'http://199.168.3.98:8080' + '/htyfctgoods/goods/inventory/turns',
                            loading = function() {
                                _this.loadingall = true;
                            },
                            success = function(data) {
                                if (data.code == '1') {
                                    _this.tableData4 = data.data.list;
                                    _this.pagetotle4 = data.data.num;
                                    _this.ajax4 = false;
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
                        _this.ajaxJonsp = _this.adminApi.getJsonp(url, data, loading, success, complete);
                    }


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

                        var data = {
                            'userId': _this.userId,
                        };
                        var url = 'http://199.168.3.98:8080' + '/htyfctgoods/goods/all/head',
                            loading = function() {
                                // _this.loadingall = true;
                            },
                            success = function(data) {
                                if (data.code == '1') {
                                    _this.headData = data.data;
                                    _this.ajax1=false;
                                } else {
                                    Message({
                                        'message': data.msg,
                                        'type': 'error',
                                    });
                                }
                            },
                            complete = function() {
                                // _this.loadingall = false;
                            }
                        _this.adminApi.getJsonp(url, data, loading, success, complete);

                        var url = 'http://199.168.3.98:8080' + '/htyfctgoods/goods/all/bottom',
                            loading = function() {
                                _this.loadingall = true;
                            },
                            success = function(data) {
                                if (data.code == '1') {
                                  _this.tableData1=data.data.list;
                                  _this.pagetotle1=data.data.num;
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



                        $(window).resize(function() {
                            if (_this.myChart3) {
                                _this.myChart3.resize();
                            }

                            if (_this.myChart4) {
                                _this.myChart4.resize();
                            }

                        });

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
        _this.ajaxJonsp = _this.adminApi.getJsonp(url, data, loading, success, complete)

    },
    methods: {
        radiochange: function(val) {
            let _this = this;

            _this.cur_page2 = 1;
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
            _this.ajaxJonsp = _this.adminApi.getJsonp(url, data, loading, success, complete);
        },

        radiochange4: function() {
            let _this = this;
            _this.cur_page4 = 1;
            var data = {
                'userId': _this.userId,
                'range': _this.radiovalue4,
                'rows': _this.pagesize4,
                'page': _this.cur_page4,
            };

            var url = 'http://199.168.3.98:8080' + '/htyfctgoods/goods/inventory/turns',
                loading = function() {
                    _this.loadingall = true;
                },
                success = function(data) {
                    if (data.code == '1') {
                        _this.tableData4 = data.data.list;
                        _this.pagetotle4 = data.data.num;
                        _this.ajax4 = false;
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
            _this.ajaxJonsp = _this.adminApi.getJsonp(url, data, loading, success, complete);
        },
        handleCurrentChange1: function(val) {
            let _this = this;
            _this.cur_page1 = val;
            var data = {
                'userId': _this.userId,
                'rows': _this.pagesize1,
                'page': _this.cur_page1,
            };

            var url = 'http://199.168.3.98:8080' + '/htyfctgoods/goods/all/bottom',
                loading = function() {
                    _this.loadtab = true;
                },
                success = function(data) {
                    if (data.code == '1') {
                        _this.tableData1=data.data.list;
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
            _this.ajaxJonsp = _this.adminApi.getJsonp(url, data, loading, success, complete);
        },
        handleCurrentChange2: function(val) {
            let _this = this;
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
            _this.ajaxJonsp = _this.adminApi.getJsonp(url, data, loading, success, complete);
        },
        handleCurrentChange4: function(val) {
            let _this = this;
            _this.cur_page4 = val;
            var data = {
                'userId': _this.userId,
                'range': _this.radiovalue4,
                'rows': _this.pagesize4,
                'page': _this.cur_page4,
            };
            var url = 'http://199.168.3.98:8080' + '/htyfctgoods/goods/inventory/turns',
                loading = function() {
                    _this.loadingall = true;
                },
                success = function(data) {
                    if (data.code == '1') {
                        _this.tableData4 = data.data.list;
                        _this.pagetotle4 = data.data.num;
                        _this.ajax4 = false;
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
            _this.ajaxJonsp = _this.adminApi.getJsonp(url, data, loading, success, complete);
        },
        handleSizeChange1: function(val) {
            let _this = this;
            _this.pagesize1 = val;
            _this.cur_page1=1;
            var data = {
                'userId': _this.userId,
                'rows': _this.pagesize1,
                'page': _this.cur_page1,
            };
            var url = 'http://199.168.3.98:8080' + '/htyfctgoods/goods/all/bottom',
                loading = function() {
                    _this.loadtab = true;
                },
                success = function(data) {
                    if (data.code == '1') {
                        _this.tableData1=data.data.list;
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
            _this.ajaxJonsp = _this.adminApi.getJsonp(url, data, loading, success, complete);
        },
        handleSizeChange2: function(val) {
            let _this = this;
            _this.pagesize2 = val;
              _this.cur_page2=1;
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
            _this.ajaxJonsp = _this.adminApi.getJsonp(url, data, loading, success, complete);
        },
        handleSizeChange4: function(val) {
            let _this = this;
            _this.pagesize4 = val;
            _this.cur_page4=1;
            var data = {
                'userId': _this.userId,
                'range': _this.radiovalue4,
                'rows': _this.pagesize4,
                'page': _this.cur_page4,
            };
            var url = 'http://199.168.3.98:8080' + '/htyfctgoods/goods/inventory/turns',
                loading = function() {
                    _this.loadingall = true;
                },
                success = function(data) {
                    if (data.code == '1') {
                        _this.tableData4 = data.data.list;
                        _this.pagetotle4 = data.data.num;
                        _this.ajax4 = false;
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
            _this.ajaxJonsp = _this.adminApi.getJsonp(url, data, loading, success, complete);
        },

        plClick: function(index, event, plCode, name) {
            let _this = this;
            if (index == 5) {
                return
            }
            if (index == _this.plIndex) {
                return;
            }
            _this.plIndex = index;
            _this.plName = name;
            var el = event.target;
            $('.xsqk_pannelardItem').removeClass('w-active');
            $(el).parent().addClass('w-active');
            if (_this.ajaxJonsp) {
                _this.ajaxJonsp.abort();
            }
            var data = {
                'userId': _this.userId,
                'endTime': '2017',
                'plCode': plCode,
            };
            _this.myChart3 = echarts.init(document.getElementById('main3'));
            var url = 'http://199.168.3.98:8080' + '/htyfctgoods/goods/sale/pl/ratio',
                loading = function() {
                    _this.myChart3.showLoading({
                        'color': '#ff7700'
                    });
                },
                success = function(data) {
                    if (data.code == '1') {
                        console.log(JSON.stringify(data));
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
                                data: data.data.plDate,
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
                                    color: '#333',
                                    // formatter: '{value} %',
                                },

                                splitLine: {
                                    lineStyle: {
                                        color: ['#eee'],
                                    }
                                }
                            }],
                            series: [{
                                name: _this.plName,
                                type: 'line',
                                stack: '总量',
                                itemStyle: {
                                    normal: {
                                        color: 'rgb(255, 119, 0)'
                                    },
                                    // formatter: '{b}\n{c}%'
                                },
                                areaStyle: {
                                    normal: {
                                        color: 'rgb(255, 119, 0)',
                                        opacity: 0.2 // 图表中各个图区域的透明度

                                    }
                                },
                                data: data.data.plEnd
                            }, {
                                name: _this.plName,
                                type: 'line',
                                stack: '总量',
                                itemStyle: {
                                    normal: {
                                        color: 'rgb(108, 129, 179)'
                                    },
                                    // formatter: '{b}\n{c}%'
                                },
                                areaStyle: {
                                    normal: {
                                        color: 'rgb(108, 129, 179)',
                                        opacity: 0.2 // 图表中各个图区域的透明度

                                    }
                                },
                                data: data.data.plStart
                            }]
                        };
                        _this.myChart3.clear();
                        _this.myChart3 = echarts.init(document.getElementById('main3'));
                        _this.myChart3.setOption(option3);
                    } else {
                        Message({
                            'message': data.msg,
                            'type': 'error',
                        });
                    }
                },
                complete = function() {
                    _this.myChart3.hideLoading();
                }
            _this.ajaxJonsp = _this.adminApi.getJsonp(url, data, loading, success, complete);
        },

        plClick2: function(index, event, ppCode, name) {
            let _this = this;
            if (index == 5) {
                return
            }
            if (index == _this.ppIndex) {
                return;
            }
            _this.ppIndex = index;
            _this.ppName = name;
            var el = event.target;
            $('.xsqk_pannelardItem2').removeClass('w-active1');
            $(el).parent().addClass('w-active1');
            if (_this.ajaxJonsp2) {
                _this.ajaxJonsp2.abort();
            }
            var data = {
                'userId': _this.userId,
                'endTime': '2017',
                'plCode': ppCode,
            };
            _this.myChart4 = echarts.init(document.getElementById('main4'));
            var url = 'http://199.168.3.98:8080' + '/htyfctgoods/goods/sale/pp/ratio',
                loading = function() {
                    _this.myChart4.showLoading({
                        'color': '#ff7700'
                    });
                },
                success = function(data) {
                    if (data.code == '1') {

                        var option4 = {
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
                                data: data.data.plDate,
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
                                    color: '#333',
                                    // formatter: '{value} %',
                                },

                                splitLine: {
                                    lineStyle: {
                                        color: ['#eee'],
                                    }
                                }
                            }],
                            series: [{
                                name: _this.ppName,
                                type: 'line',
                                stack: '总量',
                                itemStyle: {
                                    normal: {
                                        color: 'rgb(255, 119, 0)'
                                    },
                                    // formatter: '{b}\n{c}%'
                                },
                                areaStyle: {
                                    normal: {
                                        color: 'rgb(255, 119, 0)',
                                        opacity: 0.2 // 图表中各个图区域的透明度

                                    }
                                },
                                data: data.data.plEnd
                            }, {
                                name: _this.ppName,
                                type: 'line',
                                stack: '总量',
                                itemStyle: {
                                    normal: {
                                        color: 'rgb(108, 129, 179)'
                                    },
                                    // formatter: '{b}\n{c}%'
                                },
                                areaStyle: {
                                    normal: {
                                        color: 'rgb(108, 129, 179)',
                                        opacity: 0.2 // 图表中各个图区域的透明度

                                    }
                                },
                                data: data.data.plStart
                            }]
                        };
                        _this.myChart4.clear();
                        _this.myChart4 = echarts.init(document.getElementById('main4'));
                        _this.myChart4.setOption(option4);
                    } else {
                        Message({
                            'message': data.msg,
                            'type': 'error',
                        });
                    }
                },
                complete = function() {
                    _this.myChart4.hideLoading();
                }
            _this.ajaxJonsp2 = _this.adminApi.getJsonp(url, data, loading, success, complete);
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
