<style lang="scss">

.dbfx-t {
    height: 12.5rem;
    display: flex;
    border-bottom: 1px dashed #d7d7d7;
    padding-bottom: 1rem;
}

.dbfx-tl {
    width: 17.5rem;
    height: 12.5rem;
}

.dbfx-tr {
    flex: 1;
    padding-top: 1rem;
}

.dbfx-trline {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 0.5rem;
    width: 880px;
}

.dbfx-trItem {
    width: 8rem;
    height: 3rem;
    overflow: hidden;
    position: relative;
    margin-right: 0.5rem;
}

.dbfx-trIteml {
    position: absolute;
    width: 4rem;
    height: 1.5rem;
    line-height: 2rem;
    font-weight: 600;
    left: 0.5rem;
    font-size: 0.6rem;
    color: #666;
}

.dbfx-trItemr {
    position: absolute;
    width: 4rem;
    height: 1.5rem;
    line-height: 2rem;
    right: 0.5rem;
    font-size: 0.6rem;
    text-align: right;
}

.dbfx-trItemd {
    position: absolute;
    width: 8rem;
    height: 1.5rem;
    line-height: 1.5rem;
    bottom: 0px;
    font-size: 0.6rem;
    padding-left: 0.5rem;
    color: #666;
}

.dbfx-trItemBlue {
    border: 1px solid #6c81b3;
    margin-right: 0.5rem;
    .dbfx-trItemr {
        color: #6c81b3;
        span {
            font-size: 0.8rem;
        }
    }
}

.dbfx-trItemBlue.cwfxHover {
  outline: 2px solid #6c81b3;
}

.dbfx-trItemOrg {
    border: 1px solid #ff7700;
    margin-right: 0.5rem;
    .dbfx-trItemr {
        color: #ff7700;
        span {
            font-size: 0.8rem;
        }
    }
}

.dbfx-trItemOrg.cwfxHover {
  outline: 2px solid #ff7700;
}

.dbfx-trItemGreen{
    border: 1px solid #2cc689;
    margin-right: 0.5rem;
    .dbfx-trItemr {
        color: #2cc689;
        span {
            font-size: 0.8rem;
        }
    }
}
.dbfx-trItemGreen.cwfxHover {
  outline: 2px solid #2cc689;
}


.dbfx-trItemGray{
    border: 1px solid #ccc;
    margin-right: 0.5rem;
    .dbfx-trItemr {
        color: #ccc;
        span {
            font-size: 0.8rem;
        }
    }
}

.dbfx-trItemGray.cwfxHover {
  outline: 2px solid #ccc;
}

.dbfx-d {
    padding: 1rem 0;
    height: 22rem;
    display: flex;
}

.dbfx-dl {
    width: 17.5rem;
    height: 22rem;
    position: relative;
    // display: flex;
    // align-items: center;
    // justify-content: center;
}

.dbfx-dla {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8rem;
    height: 8rem;
    margin-left: -4rem;
    margin-top: -4rem;
    background-color: #fef8ee;
    border: 1px solid #ff7700;
    border-radius: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .dbfx-dlap1 {
      font-size: 0.6rem;
    }

    .dbfx-dlap2 {
      font-size: 0.6rem;
      margin: 0.25rem 0;
      color: #ff7700;
      span {
        font-size: 1rem;
      }
    }

    .dbfx-dlap3 {
      font-size: 12px;
      padding-left: 30px;
      span {
        color: #999;
      }
    }
}

.dbfx-dlb {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8rem;
    height: 8rem;
    margin-left: -4rem;
    margin-top: -4rem;
    border: 1px solid #ff7700;
    border-radius: 100%;
    animation: scaleout 1s infinite;

}

.dbfx-dr {
    flex: 1;
}

.dbfx-trline2 {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.5rem;
  width: 850px;
}

</style>

<template>

<div class="bodyscroll" v-loading.body='loadingall'>
    <div class="w-pos">
        <span>首页</span>/<span>汇天眼</span>/<span class="w-pos-active">财务效率</span>
    </div>
    <div class="w-con">
        <div class="w-search">
            <wform :inline="true" :model="formdata" label-position="right" class="demo-form-inline">
                <form-item label="选择日期：" class='cwxldate'>
                    <date-picker type="date" v-model="formdata.date" placeholder="选择日期" :editable='false' :picker-options="pickerOptions" style="width:250px;">
                    </date-picker>
                </form-item>
                <form-item label="">
                    <wbutton type="info" icon="search" size="small" @click=''></wbutton>
                </form-item>
                <form-item label="对比方式：" style="float:right">
                    同比
                </form-item>
            </wform>
        </div>
        <div class="w-pannel" style="padding:0.5rem 1rem;">
            <wtabs v-model="activeName" v-loading='loadtab'>
                <wtabpane label="杜邦分析" name="0">
                    <div class="dbfx-t">
                        <div class="dbfx-tl">
                          <div id="main" style=" height:100%;">

                          </div>
                        </div>

                        <div class="dbfx-tr">
                            <div class="dbfx-trline">
                                <div class="dbfx-trItem dbfx-trItemBlue" shu='shu1' heng='heng3'>
                                    <div class="dbfx-trIteml">
                                        销售毛利率
                                    </div>
                                    <div class="dbfx-trItemr">
                                        <span>{{cwxldata.dqGrossProfitRatio}}</span>%
                                    </div>
                                    <div class="dbfx-trItemd">
                                        同比{{cwxldata.tbGrossProfitRatio}}%
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbGrossProfitRatio<0'>
                                            <use xlink:href="#icon-jiantou1"></use>
                                        </svg>
                                        <svg class="icon" aria-hidden="true"  v-if='cwxldata.tbGrossProfitRatio>0'>
                                            <use xlink:href="#icon-jiantou2"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="dbfx-trItem dbfx-trItemBlue" shu='shu2' heng='heng7'>
                                    <div class="dbfx-trIteml">
                                        资产负债率
                                    </div>
                                    <div class="dbfx-trItemr">
                                        <span>{{cwxldata.dqDebtAssetsRatio}}</span>%
                                    </div>
                                    <div class="dbfx-trItemd">
                                        同比{{cwxldata.tbDebtAssetsRatio}}%
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbDebtAssetsRatio<0'>
                                            <use xlink:href="#icon-jiantou1"></use>
                                        </svg>
                                        <svg class="icon" aria-hidden="true"  v-if='cwxldata.tbDebtAssetsRatio>0'>
                                            <use xlink:href="#icon-jiantou2"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="dbfx-trItem dbfx-trItemBlue" shu='shu3' heng='heng12'>
                                    <div class="dbfx-trIteml">
                                        营业周期
                                    </div>
                                    <div class="dbfx-trItemr">
                                        <span>{{cwxldata.dqOperateCycle}}</span>%
                                    </div>
                                    <div class="dbfx-trItemd">
                                        同比{{cwxldata.tbOperateCycle}}%
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbOperateCycle<0'>
                                            <use xlink:href="#icon-jiantou1"></use>
                                        </svg>
                                        <svg class="icon" aria-hidden="true"  v-if='cwxldata.tbOperateCycle>0'>
                                            <use xlink:href="#icon-jiantou2"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="dbfx-trItem dbfx-trItemBlue" shu='shu4' heng='heng10'>
                                    <div class="dbfx-trIteml" style="line-height:0.75rem;">
                                        <div class="">
                                            主营业收入
                                        </div>
                                        <div class="">
                                            增长率
                                        </div>

                                    </div>
                                    <div class="dbfx-trItemr">
                                        <span>{{cwxldata.dqSaleGrowthRatio}}</span>%
                                    </div>
                                    <div class="dbfx-trItemd">
                                        同比{{cwxldata.tbSaleGrowthRatio}}%
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbSaleGrowthRatio<0'>
                                            <use xlink:href="#icon-jiantou1"></use>
                                        </svg>
                                        <svg class="icon" aria-hidden="true"  v-if='cwxldata.tbSaleGrowthRatio>0'>
                                            <use xlink:href="#icon-jiantou2"></use>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="dbfx-trline">
                                <div class="dbfx-trItem dbfx-trItemBlue" shu='shu1' heng='heng4'>
                                    <div class="dbfx-trIteml">
                                        营业利润率
                                    </div>
                                    <div class="dbfx-trItemr">
                                        <span>{{cwxldata.dqOperateProfitRatio}}</span>%
                                    </div>
                                    <div class="dbfx-trItemd">
                                        同比{{cwxldata.tbOperateProfitRatio}}%
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbOperateProfitRatio<0'>
                                            <use xlink:href="#icon-jiantou1"></use>
                                        </svg>
                                        <svg class="icon" aria-hidden="true"  v-if='cwxldata.tbOperateProfitRatio>0'>
                                            <use xlink:href="#icon-jiantou2"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="dbfx-trItem dbfx-trItemBlue" shu='shu2' heng='heng8'>
                                    <div class="dbfx-trIteml">
                                        流动比率
                                    </div>
                                    <div class="dbfx-trItemr">
                                        <span>{{cwxldata.dqCurrentRatio}}</span>%
                                    </div>
                                    <div class="dbfx-trItemd">
                                        同比{{cwxldata.tbCurrentRatio}}%
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbCurrentRatio<0'>
                                            <use xlink:href="#icon-jiantou1"></use>
                                        </svg>
                                        <svg class="icon" aria-hidden="true"  v-if='cwxldata.tbCurrentRatio>0'>
                                            <use xlink:href="#icon-jiantou2"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="dbfx-trItem dbfx-trItemBlue" shu='shu3' heng='heng13'>
                                    <div class="dbfx-trIteml">
                                        现金周期
                                    </div>
                                    <div class="dbfx-trItemr">
                                        <span>{{cwxldata.dqCashCycle}}</span>%
                                    </div>
                                    <div class="dbfx-trItemd">
                                        同比{{cwxldata.tbCashCycle}}%
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbCashCycle<0'>
                                            <use xlink:href="#icon-jiantou1"></use>
                                        </svg>
                                        <svg class="icon" aria-hidden="true"  v-if='cwxldata.tbCashCycle>0'>
                                            <use xlink:href="#icon-jiantou2"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="dbfx-trItem dbfx-trItemBlue" shu='shu4' heng='heng11'>
                                    <div class="dbfx-trIteml" style="line-height:0.75rem;">
                                        <div class="">
                                            净利润
                                        </div>
                                        <div class="">
                                            增长率
                                        </div>

                                    </div>
                                    <div class="dbfx-trItemr">
                                        <span>{{cwxldata.dqNetGrowthRatio}}</span>%
                                    </div>
                                    <div class="dbfx-trItemd">
                                        同比{{cwxldata.tbNetGrowthRatio}}%
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbNetGrowthRatio<0'>
                                            <use xlink:href="#icon-jiantou1"></use>
                                        </svg>
                                        <svg class="icon" aria-hidden="true"  v-if='cwxldata.tbNetGrowthRatio>0'>
                                            <use xlink:href="#icon-jiantou2"></use>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="dbfx-trline">
                                <div class="dbfx-trItem dbfx-trItemBlue" shu='shu1' heng='heng6'>
                                    <div class="dbfx-trIteml" style="line-height:0.75rem;">
                                        <div class="">
                                            三项费用
                                        </div>
                                        <div class="">
                                            比重
                                        </div>

                                    </div>
                                    <div class="dbfx-trItemr">
                                        <span>{{cwxldata.dqThirdRatio}}</span>%
                                    </div>
                                    <div class="dbfx-trItemd">
                                        同比{{cwxldata.tbThirdRatio}}%
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbThirdRatio<0'>
                                            <use xlink:href="#icon-jiantou1"></use>
                                        </svg>
                                        <svg class="icon" aria-hidden="true"  v-if='cwxldata.tbThirdRatio>0'>
                                            <use xlink:href="#icon-jiantou2"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="dbfx-trItem dbfx-trItemBlue" shu='shu2' heng='heng9'>
                                    <div class="dbfx-trIteml">
                                        速动比率
                                    </div>
                                    <div class="dbfx-trItemr">
                                        <span>{{cwxldata.dqQuickRatio}}</span>%
                                    </div>
                                    <div class="dbfx-trItemd">
                                        同比{{cwxldata.tbQuickRatio}}%
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbQuickRatio<0'>
                                            <use xlink:href="#icon-jiantou1"></use>
                                        </svg>
                                        <svg class="icon" aria-hidden="true"  v-if='cwxldata.tbQuickRatio>0'>
                                            <use xlink:href="#icon-jiantou2"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="dbfx-trItem dbfx-trItemBlue" shu='shu3' heng='heng14'>
                                    <div class="dbfx-trIteml" style="line-height:0.75rem;">
                                        <div class="">
                                            应收账款
                                        </div>
                                        <div class="">
                                            周转天数
                                        </div>

                                    </div>
                                    <div class="dbfx-trItemr">
                                        <span>{{cwxldata.dqReceiveConvDays}}</span>%
                                    </div>
                                    <div class="dbfx-trItemd">
                                        同比{{cwxldata.tbReceiveConvDays}}%
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbReceiveConvDays<0'>
                                            <use xlink:href="#icon-jiantou1"></use>
                                        </svg>
                                        <svg class="icon" aria-hidden="true"  v-if='cwxldata.tbReceiveConvDays>0'>
                                            <use xlink:href="#icon-jiantou2"></use>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="dbfx-d">
                        <div class="dbfx-dl">
                            <div class="dbfx-dla">
                                <p class="dbfx-dlap1">净资产收益率</p>
                                <p class="dbfx-dlap2"><span>{{cwxldata.dqRoe}}</span>%</p>
                                <p class="dbfx-dlap3">同比 <span>{{cwxldata.tbRoe}}%</span> <svg class="icon" aria-hidden="true" v-if='cwxldata.tbRoe<0'>
                                    <use xlink:href="#icon-jiantou1"></use>
                                </svg><svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-jiantou2" v-if='cwxldata.tbRoe>0'></use>
                                </svg></p>
                            </div>
                            <div class="dbfx-dlb">

                            </div>
                        </div>
                        <div class="dbfx-dr">
                          <div class="dbfx-trline2">
                            <div class="dbfx-trItem dbfx-trItemOrg">
                                <div class="dbfx-trIteml">
                                    成本总额
                                </div>
                                <div class="dbfx-trItemr">
                                    <span>13.45</span>%
                                </div>
                                <div class="dbfx-trItemd">
                                    同比11.93%
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-jiantou2"></use>
                                    </svg>
                                </div>
                            </div>
                            <div class="dbfx-trItem dbfx-trItemOrg" shu='shu1' heng='heng5'>
                                <div class="dbfx-trIteml">
                                    净利润
                                </div>
                                <div class="dbfx-trItemr">
                                    <span>13.45</span>%
                                </div>
                                <div class="dbfx-trItemd">
                                    同比11.93%
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-jiantou2"></use>
                                    </svg>
                                </div>
                            </div>
                          </div>
                          <div class="dbfx-trline">
                              <div class="dbfx-trItem dbfx-trItemBlue" shu='shu1' heng='heng2'>
                                <div class="dbfx-trIteml" style="line-height:0.75rem;">
                                    <div class="">
                                        总资产收益率
                                    </div>
                                    <div class="">
                                        净利润
                                    </div>

                                </div>
                                <div class="dbfx-trItemr">
                                    <span>{{cwxldata.dqRota}}</span>%
                                </div>
                                <div class="dbfx-trItemd">
                                    同比{{cwxldata.tbRota}}%
                                    <svg class="icon" aria-hidden="true" v-if='cwxldata.tbRota<0'>
                                        <use xlink:href="#icon-jiantou1"></use>
                                    </svg>
                                    <svg class="icon" aria-hidden="true"  v-if='cwxldata.tbRota>0'>
                                        <use xlink:href="#icon-jiantou2"></use>
                                    </svg>
                                </div>
                            </div>
                              <div class="dbfx-trItem dbfx-trItemBlue" shu='shu1' heng='heng5'>
                                  <div class="dbfx-trIteml">
                                      销售净利率
                                  </div>
                                  <div class="dbfx-trItemr">
                                      <span>{{cwxldata.dqSaleNetRatio}}</span>%
                                  </div>
                                  <div class="dbfx-trItemd">
                                      同比{{cwxldata.tbSaleNetRatio}}%
                                      <svg class="icon" aria-hidden="true" v-if='cwxldata.tbSaleNetRatio<0'>
                                          <use xlink:href="#icon-jiantou1"></use>
                                      </svg>
                                      <svg class="icon" aria-hidden="true"  v-if='cwxldata.tbSaleNetRatio>0'>
                                          <use xlink:href="#icon-jiantou2"></use>
                                      </svg>
                                  </div>
                              </div>
                              <div class="dbfx-trItem dbfx-trItemOrg" shu='shu1' heng='heng3' henga='heng4' hengb='heng6'>
                                  <div class="dbfx-trIteml">
                                      销售收入
                                  </div>
                                  <div class="dbfx-trItemr">
                                      <span>{{cwxldata.dqTotalAssets}}</span>%
                                  </div>
                                  <div class="dbfx-trItemd">
                                      同比{{cwxldata.tbTotalAssets}}%
                                      <svg class="icon" aria-hidden="true" v-if='cwxldata.tbTotalAssets<0'>
                                          <use xlink:href="#icon-jiantou1"></use>
                                      </svg>
                                      <svg class="icon" aria-hidden="true"  v-if='cwxldata.tbTotalAssets>0'>
                                          <use xlink:href="#icon-jiantou2"></use>
                                      </svg>
                                  </div>
                              </div>
                              <div class="dbfx-trItem dbfx-trItemOrg" heng='heng2'>
                                  <div class="dbfx-trIteml">
                                      利润总额
                                  </div>
                                  <div class="dbfx-trItemr">
                                      <span>{{cwxldata.dqPrtlossBefore}}</span>%
                                  </div>
                                  <div class="dbfx-trItemd">
                                      同比{{cwxldata.tbPrtlossBefore}}%
                                      <svg class="icon" aria-hidden="true" v-if='cwxldata.tbPrtlossBefore<0'>
                                          <use xlink:href="#icon-jiantou1"></use>
                                      </svg>
                                      <svg class="icon" aria-hidden="true"  v-if='cwxldata.tbPrtlossBefore>0'>
                                          <use xlink:href="#icon-jiantou2"></use>
                                      </svg>
                                  </div>
                              </div>
                              <div class="dbfx-trItem dbfx-trItemOrg" heng='heng3'>
                                  <div class="dbfx-trIteml">
                                    毛利润
                                  </div>
                                  <div class="dbfx-trItemr">
                                      <span>{{cwxldata.dqPrtlossGross}}</span>%
                                  </div>
                                  <div class="dbfx-trItemd">
                                      同比{{cwxldata.tbPrtlossGross}}%
                                      <svg class="icon" aria-hidden="true" v-if='cwxldata.tbPrtlossGross<0'>
                                          <use xlink:href="#icon-jiantou1"></use>
                                      </svg>
                                      <svg class="icon" aria-hidden="true"  v-if='cwxldata.tbPrtlossGross>0'>
                                          <use xlink:href="#icon-jiantou2"></use>
                                      </svg>
                                  </div>
                              </div>
                          </div>
                          <div class="dbfx-trline2">
                            <div class="dbfx-trItem dbfx-trItemBlue">
                                <div class="dbfx-trIteml">
                                    总资产周转率
                                </div>
                                <div class="dbfx-trItemr">
                                    <span>{{cwxldata.dqAssetsConvRatio}}</span>%
                                </div>
                                <div class="dbfx-trItemd">
                                    同比{{cwxldata.tbAssetsConvRatio}}%
                                    <svg class="icon" aria-hidden="true" v-if='cwxldata.tbAssetsConvRatio<0'>
                                        <use xlink:href="#icon-jiantou1"></use>
                                    </svg>
                                    <svg class="icon" aria-hidden="true"  v-if='cwxldata.tbAssetsConvRatio>0'>
                                        <use xlink:href="#icon-jiantou2"></use>
                                    </svg>
                                </div>
                            </div>
                            <div class="dbfx-trItem dbfx-trItemBlue">
                                <div class="dbfx-trIteml">
                                    平均资产总额
                                </div>
                                <div class="dbfx-trItemr">
                                    <span>{{cwxldata.dqAvgAssets}}</span>%
                                </div>
                                <div class="dbfx-trItemd">
                                    同比{{cwxldata.tbAvgAssets}}%
                                    <svg class="icon" aria-hidden="true" v-if='cwxldata.tbAvgAssets<0'>
                                        <use xlink:href="#icon-jiantou1"></use>
                                    </svg>
                                    <svg class="icon" aria-hidden="true"  v-if='cwxldata.tbAvgAssets>0'>
                                        <use xlink:href="#icon-jiantou2"></use>
                                    </svg>
                                </div>
                            </div>
                            <div class="dbfx-trItem dbfx-trItemOrg">
                                <div class="dbfx-trIteml" style="line-height:0.75rem;">
                                  <div class="">
                                      费用总额
                                  </div>
                                  <div class="">
                                      三项费用
                                  </div>
                                </div>
                                <div class="dbfx-trItemr">
                                    <span>{{cwxldata.dqPrtlossExpense}}</span>%
                                </div>
                                <div class="dbfx-trItemd">
                                    同比{{cwxldata.tbPrtlossExpense}}%
                                    <svg class="icon" aria-hidden="true" v-if='cwxldata.tbPrtlossExpense<0'>
                                        <use xlink:href="#icon-jiantou1"></use>
                                    </svg>
                                    <svg class="icon" aria-hidden="true"  v-if='cwxldata.tbPrtlossExpense>0'>
                                        <use xlink:href="#icon-jiantou2"></use>
                                    </svg>
                                </div>
                            </div>
                            <div class="dbfx-trItem dbfx-trItemOrg" heng='heng4'>
                                <div class="dbfx-trIteml">
                                    营业利润
                                </div>
                                <div class="dbfx-trItemr">
                                    <span>{{cwxldata.dqPrtlossOperate}}</span>%
                                </div>
                                <div class="dbfx-trItemd">
                                    同比{{cwxldata.tbPrtlossOperate}}%
                                    <svg class="icon" aria-hidden="true" v-if='cwxldata.tbPrtlossOperate<0'>
                                        <use xlink:href="#icon-jiantou1"></use>
                                    </svg>
                                    <svg class="icon" aria-hidden="true"  v-if='cwxldata.tbPrtlossOperate>0'>
                                        <use xlink:href="#icon-jiantou2"></use>
                                    </svg>
                                </div>
                            </div>
                          </div>
                          <div class="dbfx-trline">
                              <div class="dbfx-trItem dbfx-trItemBlue" shu='shu1' heng='heng1'>
                                <div class="dbfx-trIteml">
                                  权益乘数
                                </div>
                                <div class="dbfx-trItemr">
                                    <span>{{cwxldata.dqQycs}}</span>%
                                </div>
                                <div class="dbfx-trItemd">
                                    同比{{cwxldata.tbQycs}}%
                                    <svg class="icon" aria-hidden="true" v-if='cwxldata.tbQycs<0'>
                                        <use xlink:href="#icon-jiantou1"></use>
                                    </svg>
                                    <svg class="icon" aria-hidden="true"  v-if='cwxldata.tbQycs>0'>
                                        <use xlink:href="#icon-jiantou2"></use>
                                    </svg>
                                </div>
                            </div>
                              <div class="dbfx-trItem dbfx-trItemGreen" shu='shu2' heng='heng7'>
                                  <div class="dbfx-trIteml">
                                      资产总额
                                  </div>
                                  <div class="dbfx-trItemr">
                                      <span>13.45</span>%
                                  </div>
                                  <div class="dbfx-trItemd">
                                      同比11.93%
                                      <svg class="icon" aria-hidden="true">
                                          <use xlink:href="#icon-jiantou2"></use>
                                      </svg>
                                  </div>
                              </div>
                              <div class="dbfx-trItem"></div>
                              <div class="dbfx-trItem"></div>
                              <div class="dbfx-trItem dbfx-trItemOrg">
                                  <div class="dbfx-trIteml">
                                    其他利润
                                  </div>
                                  <div class="dbfx-trItemr">
                                      <span>{{cwxldata.dqOtherPrtloss}}</span>%
                                  </div>
                                  <div class="dbfx-trItemd">
                                      同比{{cwxldata.tbOtherPrtloss}}%
                                      <svg class="icon" aria-hidden="true" v-if='cwxldata.tbOtherPrtloss<0'>
                                          <use xlink:href="#icon-jiantou1"></use>
                                      </svg>
                                      <svg class="icon" aria-hidden="true"  v-if='cwxldata.tbOtherPrtloss>0'>
                                          <use xlink:href="#icon-jiantou2"></use>
                                      </svg>
                                  </div>
                              </div>
                          </div>
                          <div class="dbfx-trline">
                              <div class="dbfx-trItem dbfx-trItemBlue" shu='shu2' heng='heng7'>
                                <div class="dbfx-trIteml">
                                    资产负债率

                                </div>
                                <div class="dbfx-trItemr">
                                    <span>13.45</span>%
                                </div>
                                <div class="dbfx-trItemd">
                                    同比11.93%
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-jiantou2"></use>
                                    </svg>
                                </div>
                            </div>
                              <div class="dbfx-trItem dbfx-trItemGreen">
                                  <div class="dbfx-trIteml">
                                      非流动资产
                                  </div>
                                  <div class="dbfx-trItemr">
                                      <span>13.45</span>%
                                  </div>
                                  <div class="dbfx-trItemd">
                                      同比11.93%
                                      <svg class="icon" aria-hidden="true">
                                          <use xlink:href="#icon-jiantou2"></use>
                                      </svg>
                                  </div>
                              </div>
                              <div class="dbfx-trItem dbfx-trItemGreen" shu='shu2' heng='heng8'>
                                  <div class="dbfx-trIteml">
                                      流动资产
                                  </div>
                                  <div class="dbfx-trItemr">
                                      <span>13.45</span>%
                                  </div>
                                  <div class="dbfx-trItemd">
                                      同比11.93%
                                      <svg class="icon" aria-hidden="true">
                                          <use xlink:href="#icon-jiantou2"></use>
                                      </svg>
                                  </div>
                              </div>
                              <div class="dbfx-trItem dbfx-trItemGreen">
                                  <div class="dbfx-trIteml">
                                      货币资金
                                  </div>
                                  <div class="dbfx-trItemr">
                                      <span>13.45</span>%
                                  </div>
                                  <div class="dbfx-trItemd">
                                      同比11.93%
                                      <svg class="icon" aria-hidden="true">
                                          <use xlink:href="#icon-jiantou2"></use>
                                      </svg>
                                  </div>
                              </div>
                              <div class="dbfx-trItem dbfx-trItemGreen">
                                  <div class="dbfx-trIteml">
                                    预付账款
                                  </div>
                                  <div class="dbfx-trItemr">
                                      <span>13.45</span>%
                                  </div>
                                  <div class="dbfx-trItemd">
                                      同比11.93%
                                      <svg class="icon" aria-hidden="true">
                                          <use xlink:href="#icon-jiantou2"></use>
                                      </svg>
                                  </div>
                              </div>
                          </div>
                          <div class="dbfx-trline">
                              <div class="dbfx-trItem dbfx-trItemGray" shu='shu2' heng='heng7'>
                                <div class="dbfx-trIteml">
                                    负债总额

                                </div>
                                <div class="dbfx-trItemr">
                                    <span>13.45</span>%
                                </div>
                                <div class="dbfx-trItemd">
                                    同比11.93%
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-jiantou2"></use>
                                    </svg>
                                </div>
                            </div>
                              <div class="dbfx-trItem dbfx-trItemGray">
                                  <div class="dbfx-trIteml">
                                      长期负债
                                  </div>
                                  <div class="dbfx-trItemr">
                                      <span>13.45</span>%
                                  </div>
                                  <div class="dbfx-trItemd">
                                      同比11.93%
                                      <svg class="icon" aria-hidden="true">
                                          <use xlink:href="#icon-jiantou2"></use>
                                      </svg>
                                  </div>
                              </div>
                              <div class="dbfx-trItem dbfx-trItemGray" shu='shu2' heng='heng8' henga='heng9'>
                                  <div class="dbfx-trIteml">
                                      流动负债
                                  </div>
                                  <div class="dbfx-trItemr">
                                      <span>13.45</span>%
                                  </div>
                                  <div class="dbfx-trItemd">
                                      同比11.93%
                                      <svg class="icon" aria-hidden="true">
                                          <use xlink:href="#icon-jiantou2"></use>
                                      </svg>
                                  </div>
                              </div>
                              <div class="dbfx-trItem dbfx-trItemGreen">
                                  <div class="dbfx-trIteml">
                                      存货
                                  </div>
                                  <div class="dbfx-trItemr">
                                      <span>13.45</span>%
                                  </div>
                                  <div class="dbfx-trItemd">
                                      同比11.93%
                                      <svg class="icon" aria-hidden="true">
                                          <use xlink:href="#icon-jiantou2"></use>
                                      </svg>
                                  </div>
                              </div>
                              <div class="dbfx-trItem dbfx-trItemGreen">
                                  <div class="dbfx-trIteml">
                                    应收账款
                                  </div>
                                  <div class="dbfx-trItemr">
                                      <span>13.45</span>%
                                  </div>
                                  <div class="dbfx-trItemd">
                                      同比11.93%
                                      <svg class="icon" aria-hidden="true">
                                          <use xlink:href="#icon-jiantou2"></use>
                                      </svg>
                                  </div>
                              </div>
                          </div>
                        </div>
                    </div>
                </wtabpane>
                <wtabpane label="风险提示" name="1">2</wtabpane>
                <wtabpane label="业务支持" name="2">3</wtabpane>
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
import wtabs from 'element-ui/packages/tabs/src/tabs.vue'
import wtabpane from 'element-ui/packages/tabs/src/tab-pane.vue'
import DatePicker from 'element-ui/packages/date-picker/src/picker/date-picker.js'
import Message from 'element-ui/packages/Message/index.js'
import wbutton from 'element-ui/packages/button/src/button.vue'
import wselect from 'element-ui/packages/select/src/select.vue'
import woption from 'element-ui/packages/select/src/option.vue'

export default {
    data: () => ({
        userId: '',
        loadingall: false,
        loadtab: false,
        activeName: '',
        formdata: {
            date: ''
        },
        myChart1:'',
        cwxldata:{},
        pickerOptions: {
            disabledDate(time) {
                return time.getTime() > Date.now() - 8.64e7 || time.getTime() < new Date(2016, 0, 1, 0, 0, 0)
            }
        },

    }),
    computed: {},
    watch: {

    },
    created() {
        let _this = this;
        _this.userId = _this.$store.state.userId;
    },
    mounted() {
        let _this = this;
        _this.$nextTick(function() {
            $('.dbfx-dlb').hover(function(){
              $('.dbfx-trItem[shu=shu1]').addClass('cwfxHover')
              $('.dbfx-trItem[heng=heng1]').addClass('cwfxHover')
            },function(){
              $('.cwfxHover').removeClass('cwfxHover')
            })

              $('.dbfx-trItem').hover(function(){
                if($(this).attr('shu'))
                {
                  var shurel=$(this).attr('shu');
                    $('.dbfx-trItem[shu='+shurel+']').addClass('cwfxHover')
                }

                if($(this).attr('heng'))
                {
                  var hengrel=$(this).attr('heng');
                    $('.dbfx-trItem[shu='+hengrel+']').addClass('cwfxHover')
                }

                if($(this).attr('henga'))
                {
                  var hengarel=$(this).attr('henga');
                    $('.dbfx-trItem[shu='+hengarel+']').addClass('cwfxHover')
                }

                if($(this).attr('hengb'))
                {
                  var hengbrel=$(this).attr('hengb');
                    $('.dbfx-trItem[shu='+hengbrel+']').addClass('cwfxHover')
                }
              },function(){
                $('.cwfxHover').removeClass('cwfxHover')
              })

              var data = {
                  'userId': _this.userId,
              };

              if(_this.formdata.date)
              {
                  var endtime = $('.el-input__inner:eq(0)', ".cwxldate").val();
                  data.endTime=endtime.replace(/-/g, '')
              }

              var url = 'http://199.168.3.98:8080/htyfctzcfz/dupont/all',

                  loading = function() {
                      _this.loadingall = true;
                  },
                  success = function(data) {
                      if (data.code == '1') {
                        _this.cwxldata=data.data.dupontDTO;
                        _this.myChart1 = echarts.init(document.getElementById('main'));
                        var option = {
                            tooltip: {
                                confine: true
                            },
                            radar: [{

                                indicator: [{
                                    text: '整体能力',
                                    color: '#ff7700',
                                    max:5

                                }, {
                                    text: '获利能力',
                                    max:5
                                }, {
                                    text: '偿债能力',
                                    max:5
                                }, {
                                    text: '运营能力',
                                    max:5
                                }, {
                                    text: '成长能力',
                                    max:5
                                }],
                                center: screen.width>1600 ? ['50%', '55%']:['50%', '50%'],
                                radius: screen.width>1600 ? '70%':'50%',
                                startAngle: 90,
                                splitNumber: 4,
                                name: {

                                    formatter: '{value}',
                                    textStyle: {
                                        color: '#999'
                                    }
                                }
                            }],
                            series: [{
                                type: 'radar',
                                tooltip: {
                                    trigger: 'item'
                                },
                                itemStyle: {
                                    normal: {
                                        color: "rgba(255,199,1)", // 图表中各个图区域的边框线拐点颜色
                                        lineStyle: {
                                            color: "#ff7700" // 图表中各个图区域的边框线颜色
                                        },
                                        areaStyle: {
                                            type: 'default',
                                            opacity: 0.5, // 图表中各个图区域的透明度
                                            color: "#ff7700" // 图表中各个图区域的颜色
                                        }
                                    }
                                },
                                data: [{
                                    value: [data.data.dupontRadarDTO.whole, data.data.dupontRadarDTO.profit, data.data.dupontRadarDTO.sinking, data.data.dupontRadarDTO.operate, data.data.dupontRadarDTO.grow],
                                    name: '当前平台估值'
                                }]
                            }, ]
                        }
                        _this.myChart1.setOption(option);


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

    },
    components: {
        wform,
        FormItem,
        DatePicker,
        Message,
        wbutton,
        wselect,
        woption,
        wtabs,
        wtabpane,
    }
}

</script>
