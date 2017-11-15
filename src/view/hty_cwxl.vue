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
    width: 900px;
}

.dbfx-trItem {
    width: 9rem;
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
    width: 5rem;
    height: 1.5rem;
    line-height: 2rem;
    right: 0.5rem;
    font-size: 0.6rem;
    text-align: right;
}

.dbfx-trItemd {
    position: absolute;
    width: 9rem;
    height: 1.5rem;
    line-height: 1.5rem;
    bottom: 0px;
    font-size: 0.6rem;
    padding-left: 0.5rem;
    color: #999;
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
    background-color: #fcfdff;
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
    background-color: #fffdfb;
}

.dbfx-trItemGreen {
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
    background-color: #fdffff;
}

.dbfx-trItemGray {
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
    background-color: #f7f7f7;
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
    width: 900px;
}

.fxts_t {
    height: 140px;
    position: relative;
}

.fxts_ta {
    position: absolute;
    width: 103px;
    height: 103px;
    top: 1rem;
    left: 0.5rem;
    z-index: 998
}

.fxts_tap1 {
    height: 50px;
    line-height: 70px;
    font-size: 1.5rem;
    color: #fff;
    text-align: center;
}

.fxts_tap2 {
    line-height: 1.5rem;
    text-align: center;
    color: #fff;
}

.fxts_taRed {
    background-image: url('../assets/img/redinner.png');
}

.fxts_taOrg {
    background-image: url('../assets/img/orginner.png');
}

.fxts_taGreen {
    background-image: url('../assets/img/greeninner.png');
}

.fxts_taOut {
    position: absolute;
    width: 115px;
    height: 118px;
    top: 0.5rem;
    left: 4px;
    animation: cicle 3s linear infinite;
    z-index: 999;
}

.fxts_taOutRed {
    background-image: url('../assets/img/redout.png');
}

.fxts_taOutOrg {
    background-image: url('../assets/img/orgout.png');
}

.fxts_taOutGreen {
    background-image: url('../assets/img/greenout.png');
}

@keyframes cicle {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.fxts_tb {
    position: absolute;
    left: 80px;
    right: 25px;
    top: 1.5rem;
    height: 82px;
    z-index: 100;
}

.fxts_tbRed {
    background-image: url('../assets/img/fxts_tb_bgRed.png');
}

.fxts_tbOrg {
    background-image: url('../assets/img/fxts_tb_bgOrg.png');
}

.fxts_tbGreen {
    background-image: url('../assets/img/fxts_tb_bgGreen.png');
}

.fxts_tbcon {
    width: 100%;
    height: 100%;
    display: flex;
}

.fxts_tbcona {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-left: 4rem;
    align-items: left;
    justify-content: center;
}

.fxts_tbconap1 {
    font-size: 0.8rem;
    font-weight: 600;
}

.fxts_tbconap2 {
    font-size: 0.6rem;
    color: #999;
}

.fxts_tbconap1red {
    color: #ff5555;
}

.fxts_tbconap1org {
    color: #ff7700;
}

.fxts_tbconap1green {
    color: #52d19e;
}

.fxts_tbconb {
    width: 180px;
    line-height: 4rem;
    span {
        font-size: 0.7rem;
        font-weight: 600;
    }
}

.fxts_tbconc {
    width: 380px;
    line-height: 4rem;
    span {
        font-size: 0.7rem;
        font-weight: 600;
    }
}

.fxts_tbcond {
    width: 25px;
}

.fxts_tbcondRed {
    background-image: url('../assets/img/fxts_td_bgRed.png');
}

.fxts_tbcondOrg {
    background-image: url('../assets/img/fxts_td_bgOrg.png');
}

.fxts_tbcondGreen {
    background-image: url('../assets/img/fxts_td_bgGreen.png');
}

.fxts_item {
    margin-top: 1rem;
}

.fxts_item_t {
    height: 2rem;
    border-bottom: 1px solid #d7d7d7;
    line-height: 2rem;
    font-size: 0.8rem;
    font-weight: 600;
}

.fxts_item_d {}

.fxts_item_ditem {
    display: flex;
    height: 36px;
    line-height: 36px;
}

.fxts_item_ditema {
    width: 200px;
    i {
        margin-right: 5px;
    }
}

.fxts_item_ditemb {
    flex: 1;
    color: #999;
}

.fxts_item_ditemc {
    width: 200px;
    .fxts_item_ditemcs1 {
        color: #2cc689;
    }
    .fxts_item_ditemcs2 {
        color: #ff5555;
    }
}

.fxts_item_ditemd {
    width: 200px;
    span {
        color: #999;
    }
}

// .butSearch {
//   width: 29px;
//   height: 27px;
//   border: 0;
//   background-image: url('../assets/img/buton.png');
//   vertical-align: middle;
//   overflow: hidden;
//   cursor: pointer;
// }
//
// .butSearch:focus, .butSearch:hover {
//   background: #7892d1;//
//   border-color: #7892d1;//
//   color: #fff
// }
//
// .butSearch.is-active, .butSearch:active {
//   background: #7892d1;//
//   border-color: #7892d1;//
//   color: #fff
// }

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
                  <!-- <button class="butSearch" @click='cwxlSearch()'></button> -->
                    <wbutton type="info" icon="search" size="small" @click='cwxlSearch()'></wbutton>
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
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbGrossProfitRatio>0'>
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
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbDebtAssetsRatio>0'>
                                            <use xlink:href="#icon-jiantou2"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="dbfx-trItem dbfx-trItemBlue" shu='shu3' heng='heng12'>
                                    <div class="dbfx-trIteml">
                                        营业周期
                                    </div>
                                    <div class="dbfx-trItemr">
                                        <span>{{cwxldata.dqOperateCycle}}</span>天
                                    </div>
                                    <div class="dbfx-trItemd">
                                        同比{{cwxldata.tbOperateCycle}}%
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbOperateCycle<0'>
                                            <use xlink:href="#icon-jiantou1"></use>
                                        </svg>
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbOperateCycle>0'>
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
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbSaleGrowthRatio>0'>
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
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbOperateProfitRatio>0'>
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
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbCurrentRatio>0'>
                                            <use xlink:href="#icon-jiantou2"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="dbfx-trItem dbfx-trItemBlue" shu='shu3' heng='heng13'>
                                    <div class="dbfx-trIteml">
                                        现金周期
                                    </div>
                                    <div class="dbfx-trItemr">
                                        <span>{{cwxldata.dqCashCycle}}</span>天
                                    </div>
                                    <div class="dbfx-trItemd">
                                        同比{{cwxldata.tbCashCycle}}%
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbCashCycle<0'>
                                            <use xlink:href="#icon-jiantou1"></use>
                                        </svg>
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbCashCycle>0'>
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
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbNetGrowthRatio>0'>
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
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbThirdRatio>0'>
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
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbQuickRatio>0'>
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
                                        <span>{{cwxldata.dqReceiveConvDays}}</span>天
                                    </div>
                                    <div class="dbfx-trItemd">
                                        同比{{cwxldata.tbReceiveConvDays}}%
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbReceiveConvDays<0'>
                                            <use xlink:href="#icon-jiantou1"></use>
                                        </svg>
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbReceiveConvDays>0'>
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
                                <p class="dbfx-dlap3">同比 <span>{{cwxldata.tbRoe}}%</span>
                                    <svg class="icon" aria-hidden="true" v-if='cwxldata.tbRoe<0'>
                                        <use xlink:href="#icon-jiantou1"></use>
                                    </svg>
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-jiantou2" v-if='cwxldata.tbRoe>0'></use>
                                    </svg>
                                </p>
                            </div>
                            <div class="dbfx-dlb">

                            </div>
                        </div>
                        <div class="dbfx-dr">
                            <div class="dbfx-trline2">
                                <div class="dbfx-trItem"></div>
                                <div class="dbfx-trItem"></div>
                                <div class="dbfx-trItem"></div>
                                <div class="dbfx-trItem dbfx-trItemOrg">
                                    <div class="dbfx-trIteml">
                                        成本总额
                                    </div>
                                    <div class="dbfx-trItemr">
                                        <span>{{cwxldata.dqPrtlossCost}}</span>万元
                                    </div>
                                    <div class="dbfx-trItemd">
                                        同比{{cwxldata.tbPrtlossCost}}%
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbPrtlossCost<0'>
                                            <use xlink:href="#icon-jiantou1"></use>
                                        </svg>
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbPrtlossCost>0'>
                                            <use xlink:href="#icon-jiantou2"></use>
                                        </svg>

                                    </div>
                                </div>
                                <div class="dbfx-trItem dbfx-trItemOrg" shu='shu1' heng='heng5'>
                                    <div class="dbfx-trIteml">
                                        净利润
                                    </div>
                                    <div class="dbfx-trItemr">
                                        <span>{{cwxldata.dqPrtlossNet}}</span>万元
                                    </div>
                                    <div class="dbfx-trItemd">
                                        同比{{cwxldata.tbPrtlossNet}}%
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.dqPrtlossNet<0'>
                                            <use xlink:href="#icon-jiantou1"></use>
                                        </svg>
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.dqPrtlossNet>0'>
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
                                            净利率
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
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbRota>0'>
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
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbSaleNetRatio>0'>
                                            <use xlink:href="#icon-jiantou2"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="dbfx-trItem dbfx-trItemOrg" shu='shu1' heng='heng3' henga='heng4' hengb='heng6'>
                                    <div class="dbfx-trIteml">
                                        销售收入
                                    </div>
                                    <div class="dbfx-trItemr">
                                        <span>{{cwxldata.dqPrtlossSale}}</span>万元
                                    </div>
                                    <div class="dbfx-trItemd">
                                        同比{{cwxldata.tbPprtlossSale}}%
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbPprtlossSale<0'>
                                            <use xlink:href="#icon-jiantou1"></use>
                                        </svg>
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbPprtlossSale>0'>
                                            <use xlink:href="#icon-jiantou2"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="dbfx-trItem dbfx-trItemOrg" heng='heng2'>
                                    <div class="dbfx-trIteml">
                                        利润总额
                                    </div>
                                    <div class="dbfx-trItemr">
                                        <span>{{cwxldata.dqPrtlossBefore}}</span>万元
                                    </div>
                                    <div class="dbfx-trItemd">
                                        同比{{cwxldata.tbPrtlossBefore}}%
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbPrtlossBefore<0'>
                                            <use xlink:href="#icon-jiantou1"></use>
                                        </svg>
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbPrtlossBefore>0'>
                                            <use xlink:href="#icon-jiantou2"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="dbfx-trItem dbfx-trItemOrg" heng='heng3'>
                                    <div class="dbfx-trIteml">
                                        毛利润
                                    </div>
                                    <div class="dbfx-trItemr">
                                        <span>{{cwxldata.dqPrtlossGross}}</span>万元
                                    </div>
                                    <div class="dbfx-trItemd">
                                        同比{{cwxldata.tbPrtlossGross}}%
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbPrtlossGross<0'>
                                            <use xlink:href="#icon-jiantou1"></use>
                                        </svg>
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbPrtlossGross>0'>
                                            <use xlink:href="#icon-jiantou2"></use>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="dbfx-trline2">
                                <div class="dbfx-trItem"></div>
                                <div class="dbfx-trItem dbfx-trItemBlue">
                                    <div class="dbfx-trIteml" style="line-height:0.75rem;">
                                        <div class="">
                                            总资产
                                        </div>
                                        <div class="">
                                            周转率
                                        </div>
                                    </div>
                                    <div class="dbfx-trItemr">
                                        <span>{{cwxldata.dqAssetsConvRatio}}</span>%
                                    </div>
                                    <div class="dbfx-trItemd">
                                        同比{{cwxldata.tbAssetsConvRatio}}%
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbAssetsConvRatio<0'>
                                            <use xlink:href="#icon-jiantou1"></use>
                                        </svg>
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbAssetsConvRatio>0'>
                                            <use xlink:href="#icon-jiantou2"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="dbfx-trItem dbfx-trItemBlue">
                                    <div class="dbfx-trIteml" style="line-height:0.75rem;">
                                        <div class="">
                                            平均资产
                                        </div>
                                        <div class="">
                                            总额
                                        </div>
                                    </div>
                                    <div class="dbfx-trItemr">
                                        <span>{{cwxldata.dqAvgAssets}}</span>万元
                                    </div>
                                    <div class="dbfx-trItemd">
                                        同比{{cwxldata.tbAvgAssets}}%
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbAvgAssets<0'>
                                            <use xlink:href="#icon-jiantou1"></use>
                                        </svg>
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbAvgAssets>0'>
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
                                        <span>{{cwxldata.dqPrtlossExpense}}</span>万元
                                    </div>
                                    <div class="dbfx-trItemd">
                                        同比{{cwxldata.tbPrtlossExpense}}%
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbPrtlossExpense<0'>
                                            <use xlink:href="#icon-jiantou1"></use>
                                        </svg>
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbPrtlossExpense>0'>
                                            <use xlink:href="#icon-jiantou2"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="dbfx-trItem dbfx-trItemOrg" heng='heng4'>
                                    <div class="dbfx-trIteml">
                                        营业利润
                                    </div>
                                    <div class="dbfx-trItemr">
                                        <span>{{cwxldata.dqPrtlossOperate}}</span>万元
                                    </div>
                                    <div class="dbfx-trItemd">
                                        同比{{cwxldata.tbPrtlossOperate}}%
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbPrtlossOperate<0'>
                                            <use xlink:href="#icon-jiantou1"></use>
                                        </svg>
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbPrtlossOperate>0'>
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
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbQycs>0'>
                                            <use xlink:href="#icon-jiantou2"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="dbfx-trItem dbfx-trItemGreen" shu='shu2' heng='heng7'>
                                    <div class="dbfx-trIteml">
                                        资产总额
                                    </div>
                                    <div class="dbfx-trItemr">
                                        <span>{{cwxldata.dqTotalAssets}}</span>万元
                                    </div>
                                    <div class="dbfx-trItemd">
                                        同比{{cwxldata.tbTotalAssets}}%
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbTotalAssets<0'>
                                            <use xlink:href="#icon-jiantou1"></use>
                                        </svg>
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbTotalAssets>0'>
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
                                        <span>{{cwxldata.dqOtherPrtloss}}</span>万元
                                    </div>
                                    <div class="dbfx-trItemd">
                                        同比{{cwxldata.tbOtherPrtloss}}%
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbOtherPrtloss<0'>
                                            <use xlink:href="#icon-jiantou1"></use>
                                        </svg>
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbOtherPrtloss>0'>
                                            <use xlink:href="#icon-jiantou2"></use>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="dbfx-trline">
                                <div class="dbfx-trItem dbfx-trItemBlue" shu='shu2' heng='heng7'>
                                    <div class="dbfx-trIteml" style="line-height:0.75rem;">
                                        <div class="">
                                            资产
                                        </div>
                                        <div class="">
                                            负债率
                                        </div>

                                    </div>
                                    <div class="dbfx-trItemr">
                                        <span>{{cwxldata.dqDebtAssetsRatio}}</span>%
                                    </div>
                                    <div class="dbfx-trItemd">
                                        同比{{cwxldata.tbDebtAssetsRatio}}%
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbDebtAssetsRatio<0'>
                                            <use xlink:href="#icon-jiantou1"></use>
                                        </svg>
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbDebtAssetsRatio>0'>
                                            <use xlink:href="#icon-jiantou2"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="dbfx-trItem dbfx-trItemGreen">
                                    <div class="dbfx-trIteml" style="line-height:0.75rem;">
                                        <div class="">
                                            非流动
                                        </div>
                                        <div class="">
                                            资产
                                        </div>
                                    </div>
                                    <div class="dbfx-trItemr">
                                        <span>{{cwxldata.dqLongAssets}}</span>%
                                    </div>
                                    <div class="dbfx-trItemd">
                                        同比{{cwxldata.tbLongAssets}}万元
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbLongAssets<0'>
                                            <use xlink:href="#icon-jiantou1"></use>
                                        </svg>
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbLongAssets>0'>
                                            <use xlink:href="#icon-jiantou2"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="dbfx-trItem dbfx-trItemGreen" shu='shu2' heng='heng8'>
                                    <div class="dbfx-trIteml">
                                        流动资产
                                    </div>
                                    <div class="dbfx-trItemr">
                                        <span>{{cwxldata.dqCurrentAssets}}</span>万元
                                    </div>
                                    <div class="dbfx-trItemd">
                                        同比{{cwxldata.tbCurrentAssets}}%
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbCurrentAssets<0'>
                                            <use xlink:href="#icon-jiantou1"></use>
                                        </svg>
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbCurrentAssets>0'>
                                            <use xlink:href="#icon-jiantou2"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="dbfx-trItem dbfx-trItemGreen">
                                    <div class="dbfx-trIteml">
                                        货币资金
                                    </div>
                                    <div class="dbfx-trItemr">
                                        <span>{{cwxldata.dqMoneyFunds}}</span>万元
                                    </div>
                                    <div class="dbfx-trItemd">
                                        同比{{cwxldata.tbMoneyFunds}}%
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbCurrentAssets<0'>
                                            <use xlink:href="#icon-jiantou1"></use>
                                        </svg>
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbCurrentAssets>0'>
                                            <use xlink:href="#icon-jiantou2"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="dbfx-trItem dbfx-trItemGreen">
                                    <div class="dbfx-trIteml">
                                        预付账款
                                    </div>
                                    <div class="dbfx-trItemr">
                                        <span>{{cwxldata.dqDepositPayable}}</span>万元
                                    </div>
                                    <div class="dbfx-trItemd">
                                        同比{{cwxldata.tbDepositPayable}}%
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbDepositPayable<0'>
                                            <use xlink:href="#icon-jiantou1"></use>
                                        </svg>
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbDepositPayable>0'>
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
                                        <span>{{cwxldata.dqLiabilities}}</span>万元
                                    </div>
                                    <div class="dbfx-trItemd">
                                        同比{{cwxldata.tbTotalLiabilities}}%
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbLiabilities<0'>
                                            <use xlink:href="#icon-jiantou1"></use>
                                        </svg>
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbLiabilities>0'>
                                            <use xlink:href="#icon-jiantou2"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="dbfx-trItem dbfx-trItemGray">
                                    <div class="dbfx-trIteml">
                                        长期负债
                                    </div>
                                    <div class="dbfx-trItemr">
                                        <span>{{cwxldata.dqLongLiabilities}}</span>万元
                                    </div>
                                    <div class="dbfx-trItemd">
                                        同比{{cwxldata.tbLongLiabilities}}%
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbLongLiabilities<0'>
                                            <use xlink:href="#icon-jiantou1"></use>
                                        </svg>
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbLongLiabilities>0'>
                                            <use xlink:href="#icon-jiantou2"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="dbfx-trItem dbfx-trItemGray" shu='shu2' heng='heng8' henga='heng9'>
                                    <div class="dbfx-trIteml">
                                        流动负债
                                    </div>
                                    <div class="dbfx-trItemr">
                                        <span>{{cwxldata.dqCurrentLiabilities}}</span>万元
                                    </div>
                                    <div class="dbfx-trItemd">
                                        同比{{cwxldata.tbCurrentLiabilities}}%
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbCurrentLiabilities<0'>
                                            <use xlink:href="#icon-jiantou1"></use>
                                        </svg>
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbCurrentLiabilities>0'>
                                            <use xlink:href="#icon-jiantou2"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="dbfx-trItem dbfx-trItemGreen">
                                    <div class="dbfx-trIteml">
                                        存货
                                    </div>
                                    <div class="dbfx-trItemr">
                                        <span>{{cwxldata.dqInventory}}</span>万元
                                    </div>
                                    <div class="dbfx-trItemd">
                                        同比{{cwxldata.tbInventory}}%
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbInventory<0'>
                                            <use xlink:href="#icon-jiantou1"></use>
                                        </svg>
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbInventory>0'>
                                            <use xlink:href="#icon-jiantou2"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="dbfx-trItem dbfx-trItemGreen">
                                    <div class="dbfx-trIteml">
                                        应收账款
                                    </div>
                                    <div class="dbfx-trItemr">
                                        <span>{{cwxldata.dqReceivables}}</span>万元
                                    </div>
                                    <div class="dbfx-trItemd">
                                        同比{{cwxldata.tbReceivables}}%
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbReceivables<0'>
                                            <use xlink:href="#icon-jiantou1"></use>
                                        </svg>
                                        <svg class="icon" aria-hidden="true" v-if='cwxldata.tbReceivables>0'>
                                            <use xlink:href="#icon-jiantou2"></use>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </wtabpane>
                <wtabpane label="风险提示" name="1">
                    <div class="fxts_t" v-if='sysNum<30' :key='1'>
                        <div class="fxts_ta fxts_taRed">
                            <div class="fxts_tap1">
                                {{sysNum}}
                            </div>
                            <div class="fxts_tap2">
                                风险评分
                            </div>
                        </div>
                        <div class="fxts_taOut fxts_taOutRed">

                        </div>
                        <div class="fxts_tb fxts_tbRed">
                            <div class="fxts_tbcon">
                                <div class="fxts_tbcona">
                                    <p class="fxts_tbconap1 fxts_tbconap1red">您的平台经营状况很不安全，建议实时关注</p>
                                    <p class="fxts_tbconap2">你可以通过数据罗盘（data.htd.cn）了解平台经营更多数据</p>
                                </div>
                                <div class="fxts_tbconb">
                                    共检查了 <span class="fxts_tbconap1red">11</span> 项
                                </div>
                                <div class="fxts_tbconc">
                                    <i class="el-icon-warning" style="color:#ff5555"></i> 其中 <span class="fxts_tbconap1red">{{sysdata.num}}</span> 项风险指标需要关注
                                </div>

                                <div class="fxts_tbcond fxts_tbcondRed "></div>
                            </div>
                        </div>
                    </div>

                    <div class="fxts_t" v-if='sysNum<80 && sysNum>29' :key='2'>
                        <div class="fxts_ta fxts_taOrg">
                            <div class="fxts_tap1">
                                {{sysNum}}
                            </div>
                            <div class="fxts_tap2">
                                风险评分
                            </div>
                        </div>
                        <div class="fxts_taOut fxts_taOutOrg">

                        </div>
                        <div class="fxts_tb fxts_tbOrg">
                            <div class="fxts_tbcon">
                                <div class="fxts_tbcona">
                                    <p class="fxts_tbconap1 fxts_tbconap1org">您的平台经营状况很不安全，建议实时关注</p>
                                    <p class="fxts_tbconap2">你可以通过数据罗盘（data.htd.cn）了解平台经营更多数据</p>
                                </div>
                                <div class="fxts_tbconb">
                                    共检查了 <span class="fxts_tbconap1org">11</span> 项
                                </div>
                                <div class="fxts_tbconc">
                                    <i class="el-icon-warning" style="color:#ff5555"></i> 其中 <span class="fxts_tbconap1org">{{sysdata.num}}</span> 项风险指标需要关注
                                </div>

                                <div class="fxts_tbcond fxts_tbcondOrg "></div>
                            </div>
                        </div>
                    </div>

                    <div class="fxts_t" v-if='sysNum<101 && sysNum>79' :key='3'>
                        <div class="fxts_ta fxts_taGreen">
                            <div class="fxts_tap1">
                                {{sysNum}}
                            </div>
                            <div class="fxts_tap2">
                                风险评分
                            </div>
                        </div>
                        <div class="fxts_taOut fxts_taOutGreen">

                        </div>
                        <div class="fxts_tb fxts_tbGreen">
                            <div class="fxts_tbcon">
                                <div class="fxts_tbcona">
                                    <p class="fxts_tbconap1 fxts_tbconap1green">您的平台经营状况很不安全，建议实时关注</p>
                                    <p class="fxts_tbconap2">你可以通过数据罗盘（data.htd.cn）了解平台经营更多数据</p>
                                </div>
                                <div class="fxts_tbconb">
                                    共检查了 <span class="fxts_tbconap1green">11</span> 项
                                </div>
                                <div class="fxts_tbconc">
                                    <i class="el-icon-warning" style="color:#ff5555"></i> 其中 <span class="fxts_tbconap1green">{{sysdata.num}}</span> 项风险指标需要关注
                                </div>

                                <div class="fxts_tbcond fxts_tbcondGreen "></div>
                            </div>
                        </div>
                    </div>

                    <div class="fxts_item">
                        <div class="fxts_item_t">
                            收付款风险
                        </div>
                        <div class="fxts_item_d">
                            <div class="fxts_item_ditem">
                                <div class="fxts_item_ditema">
                                    <i class="el-icon-circle-check" style="color:#2cc689;" v-if='sysdata.xjYyRatioState==0'></i>
                                    <i class="el-icon-warning" style="color:#ff5555" v-if='sysdata.xjYyRatioState==1'></i> 收营现金营业占比(收款)
                                </div>
                                <div class="fxts_item_ditemb">
                                    收现金营业占比（收款）
                                </div>
                                <div class="fxts_item_ditemc">
                                    实际值：<span :class="[sysdata.xjYyRatioState==0?'fxts_item_ditemcs1':'fxts_item_ditemcs2']">{{sysdata.xjYyRatio}}%</span>
                                </div>

                                <div class="fxts_item_ditemd">
                                    参考值：<span>{{sysdata.xjYyRatioRe}}%</span>
                                </div>

                                <div class="fxts_item_ditemc">
                                    状态：<span class="fxts_item_ditemcs1" v-if='sysdata.xjYyRatioState==0'>正常</span><span class="fxts_item_ditemcs2" v-if='sysdata.xjYyRatioState==1'>异常</span>
                                </div>
                            </div>
                            <div class="fxts_item_ditem">
                                <div class="fxts_item_ditema">
                                    <i class="el-icon-circle-check" style="color:#2cc689;" v-if='sysdata.ys90RatioState==0'></i>
                                    <i class="el-icon-warning" style="color:#ff5555" v-if='sysdata.ys90RatioState==1'></i> 超90天营收占比
                                </div>
                                <div class="fxts_item_ditemb">
                                    帐龄90天以上应收账款金额
                                </div>
                                <div class="fxts_item_ditemc">
                                    实际值：<span :class="[sysdata.ys90RatioState==0?'fxts_item_ditemcs1':'fxts_item_ditemcs2']">{{sysdata.ys90Ratio}}%</span>
                                </div>

                                <div class="fxts_item_ditemd">
                                    参考值：<span>{{sysdata.ys90RatioRe}}%</span>
                                </div>

                                <div class="fxts_item_ditemc">
                                    状态：<span class="fxts_item_ditemcs1" v-if='sysdata.ys90RatioState==0'>正常</span><span class="fxts_item_ditemcs2" v-if='sysdata.ys90RatioState==1'>异常</span>
                                </div>
                            </div>
                            <div class="fxts_item_ditem">
                                <div class="fxts_item_ditema">
                                    <i class="el-icon-circle-check" style="color:#2cc689;" v-if='sysdata.hk15BgtRatioState==0'></i>
                                    <i class="el-icon-warning" style="color:#ff5555" v-if='sysdata.hk15BgtRatioState==1'></i> 前15天汇款预算完成率
                                </div>
                                <div class="fxts_item_ditemb">
                                    合计/应收账款金额总计前15天汇款预算完成率
                                </div>
                                <div class="fxts_item_ditemc">
                                    实际值：<span :class="[sysdata.hk15BgtRatioState==0?'fxts_item_ditemcs1':'fxts_item_ditemcs2']">{{sysdata.hk15BgtRatio}}%</span>
                                </div>

                                <div class="fxts_item_ditemd">
                                    参考值：<span>{{sysdata.hk15BgtRatioRe}}%</span>
                                </div>

                                <div class="fxts_item_ditemc">
                                    状态：<span class="fxts_item_ditemcs1" v-if='sysdata.hk15BgtRatioState==0'>正常</span><span class="fxts_item_ditemcs2" v-if='sysdata.hk15BgtRatioState==1'>异常</span>
                                </div>
                            </div>
                            <div class="fxts_item_ditem">
                                <div class="fxts_item_ditema">
                                    <i class="el-icon-circle-check" style="color:#2cc689;" v-if='sysdata.yf90RatioState==0'></i>
                                    <i class="el-icon-warning" style="color:#ff5555" v-if='sysdata.yf90RatioState==1'></i> 超90天预付占比
                                </div>
                                <div class="fxts_item_ditemb">
                                    预算完成率=（1-15日本期回款合计）/预算销售规模*100%
                                </div>
                                <div class="fxts_item_ditemc">
                                    实际值：<span :class="[sysdata.yf90RatioState==0?'fxts_item_ditemcs1':'fxts_item_ditemcs2']">{{sysdata.yf90Ratio}}%</span>
                                </div>

                                <div class="fxts_item_ditemd">
                                    参考值：<span>{{sysdata.yf90RatioRe}}%</span>
                                </div>

                                <div class="fxts_item_ditemc">
                                    状态：<span class="fxts_item_ditemcs1" v-if='sysdata.yf90RatioState==0'>正常</span><span class="fxts_item_ditemcs2" v-if='sysdata.yf90RatioState==1'>异常</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="fxts_item">
                        <div class="fxts_item_t">
                            收入风险
                        </div>
                        <div class="fxts_item_d">
                            <div class="fxts_item_ditem">
                                <div class="fxts_item_ditema">
                                    <i class="el-icon-circle-check" style="color:#2cc689;" v-if='sysdata.singleCustXsRatioState==0'></i>
                                    <i class="el-icon-warning" style="color:#ff5555" v-if='sysdata.singleCustXsRatioState==1'></i> 单客户销售占比
                                </div>
                                <div class="fxts_item_ditemb">
                                    单客户销售额/平台销售总额
                                </div>
                                <div class="fxts_item_ditemc">
                                    实际值：<span :class="[sysdata.singleCustXsRatioState==0?'fxts_item_ditemcs1':'fxts_item_ditemcs2']">{{sysdata.singleCustXsRatio}}%</span>
                                </div>

                                <div class="fxts_item_ditemd">
                                    参考值：<span>{{sysdata.singleCustXsRatioRe}}%</span>
                                </div>

                                <div class="fxts_item_ditemc">
                                    状态：<span class="fxts_item_ditemcs1" v-if='sysdata.singleCustXsRatioState==0'>正常</span><span class="fxts_item_ditemcs2" v-if='sysdata.singleCustXsRatioState==1'>异常</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="fxts_item">
                        <div class="fxts_item_t">
                            商品管理风险
                        </div>
                        <div class="fxts_item_d">
                            <div class="fxts_item_ditem">
                                <div class="fxts_item_ditema">
                                    <i class="el-icon-circle-check" style="color:#2cc689;" v-if='sysdata.pdDiffRatioState==0'></i>
                                    <i class="el-icon-warning" style="color:#ff5555" v-if='sysdata.pdDiffRatioState==1'></i> 盘点差异率
                                </div>
                                <div class="fxts_item_ditemb">
                                    库存差异数/盘点数
                                </div>
                                <div class="fxts_item_ditemc">
                                    实际值：<span :class="[sysdata.pdDiffRatioState==0?'fxts_item_ditemcs1':'fxts_item_ditemcs2']">{{sysdata.pdDiffRatio}}%</span>
                                </div>

                                <div class="fxts_item_ditemd">
                                    参考值：<span>{{sysdata.pdDiffRatioRe}}%</span>
                                </div>

                                <div class="fxts_item_ditemc">
                                    状态：<span class="fxts_item_ditemcs1" v-if='sysdata.pdDiffRatioState==0'>正常</span><span class="fxts_item_ditemcs2" v-if='sysdata.pdDiffRatioState==1'>异常</span>
                                </div>
                            </div>
                            <div class="fxts_item_ditem">
                                <div class="fxts_item_ditema">
                                    <i class="el-icon-circle-check" style="color:#2cc689;" v-if='sysdata.bxPbRatioState==0'></i>
                                    <i class="el-icon-warning" style="color:#ff5555" v-if='sysdata.bxPbRatioState==1'></i> 保险配比率
                                </div>
                                <div class="fxts_item_ditemb">
                                    当月库存金额/参保库存金额
                                </div>
                                <div class="fxts_item_ditemc">
                                    实际值：<span :class="[sysdata.bxPbRatioState==0?'fxts_item_ditemcs1':'fxts_item_ditemcs2']">{{sysdata.bxPbRatio}}%</span>
                                </div>

                                <div class="fxts_item_ditemd">
                                    参考值：<span>{{sysdata.bxPbRatioReMin}}%-{{sysdata.bxPbRatioReMax}}%</span>
                                </div>

                                <div class="fxts_item_ditemc">
                                    状态：<span class="fxts_item_ditemcs1" v-if='sysdata.bxPbRatioState==0'>正常</span><span class="fxts_item_ditemcs2" v-if='sysdata.bxPbRatioState==1'>异常</span>
                                </div>
                            </div>
                            <div class="fxts_item_ditem">
                                <div class="fxts_item_ditema">
                                    <i class="el-icon-circle-check" style="color:#2cc689;" v-if='sysdata.pxDiffRatioState==0'></i>
                                    <i class="el-icon-warning" style="color:#ff5555" v-if='sysdata.pxDiffRatioState==1'></i> 坪效差异率
                                </div>
                                <div class="fxts_item_ditemb">
                                    当月库存金额/合同总面积
                                </div>
                                <div class="fxts_item_ditemc">
                                    实际值：<span :class="[sysdata.pxDiffRatioState==0?'fxts_item_ditemcs1':'fxts_item_ditemcs2']">{{sysdata.pxDiffRatio}}%</span>
                                </div>

                                <div class="fxts_item_ditemd">
                                    参考值：<span>{{sysdata.pxDiffRatioRe}}%</span>
                                </div>

                                <div class="fxts_item_ditemc">
                                    状态：<span class="fxts_item_ditemcs1" v-if='sysdata.pxDiffRatioState==0'>正常</span><span class="fxts_item_ditemcs2" v-if='sysdata.pxDiffRatioState==1'>异常</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="fxts_item">
                        <div class="fxts_item_t">
                            资金/金融风险
                        </div>
                        <div class="fxts_item_d">
                            <div class="fxts_item_ditem">
                                <div class="fxts_item_ditema">
                                    <i class="el-icon-circle-check" style="color:#2cc689;" v-if='sysdata.overdueAmtRatioState==0'></i>
                                    <i class="el-icon-warning" style="color:#ff5555" v-if='sysdata.overdueAmtRatioState==1'></i> 平台金融服务逾期金额率
                                </div>
                                <div class="fxts_item_ditemb">
                                    累计逾期金额/累计已用授信总额
                                </div>
                                <div class="fxts_item_ditemc">
                                    实际值：<span :class="[sysdata.overdueAmtRatioState==0?'fxts_item_ditemcs1':'fxts_item_ditemcs2']">{{sysdata.overdueAmtRatio}}%</span>
                                </div>

                                <div class="fxts_item_ditemd">
                                    参考值：<span>{{sysdata.overdueAmtRatioRe}}%</span>
                                </div>

                                <div class="fxts_item_ditemc">
                                    状态：<span class="fxts_item_ditemcs1" v-if='sysdata.overdueAmtRatioState==0'>正常</span><span class="fxts_item_ditemcs2" v-if='sysdata.overdueAmtRatioState==1'>异常</span>
                                </div>
                            </div>
                            <div class="fxts_item_ditem">
                                <div class="fxts_item_ditema">
                                    <i class="el-icon-circle-check" style="color:#2cc689;" v-if='sysdata.overdueCustnumRatioState==0'></i>
                                    <i class="el-icon-warning" style="color:#ff5555" v-if='sysdata.overdueCustnumRatioState==1'></i> 供应链金融逾期家数占比
                                </div>
                                <div class="fxts_item_ditemb">
                                  平台逾期客户数/平台贷款客户总数
                                </div>
                                <div class="fxts_item_ditemc">
                                    实际值：<span :class="[sysdata.overdueCustnumRatioState==0?'fxts_item_ditemcs1':'fxts_item_ditemcs2']">{{sysdata.overdueCustnumRatio}}%</span>
                                </div>

                                <div class="fxts_item_ditemd">
                                    参考值：<span>{{sysdata.overdueCustnumRatioRe}}%</span>
                                </div>

                                <div class="fxts_item_ditemc">
                                    状态：<span class="fxts_item_ditemcs1" v-if='sysdata.overdueCustnumRatioState==0'>正常</span><span class="fxts_item_ditemcs2" v-if='sysdata.overdueCustnumRatioState==1'>异常</span>
                                </div>
                            </div>
                            <div class="fxts_item_ditem">
                                <div class="fxts_item_ditema">
                                    <i class="el-icon-circle-check" style="color:#2cc689;" v-if='sysdata.over30RatioState==0'></i>
                                    <i class="el-icon-warning" style="color:#ff5555" v-if='sysdata.over30RatioState==1'></i> 超30天个人借款占比
                                </div>
                                <div class="fxts_item_ditemb">
                                  超30天个人借款/个人借款总额
                                </div>
                                <div class="fxts_item_ditemc">
                                    实际值：<span :class="[sysdata.over30RatioState==0?'fxts_item_ditemcs1':'fxts_item_ditemcs2']">{{sysdata.over30Ratio}}%</span>
                                </div>

                                <div class="fxts_item_ditemd">
                                    参考值：<span>{{sysdata.over30RatioRe}}%</span>
                                </div>

                                <div class="fxts_item_ditemc">
                                    状态：<span class="fxts_item_ditemcs1" v-if='sysdata.over30RatioState==0'>正常</span><span class="fxts_item_ditemcs2" v-if='sysdata.over30RatioState==1'>异常</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </wtabpane>
                <wtabpane label="业务支持" name="2">
                  <div class="fxts_t" v-if='ywzcNum<30'>
                      <div class="fxts_ta fxts_taRed">
                          <div class="fxts_tap1">
                              {{ywzcNum}}
                          </div>
                          <div class="fxts_tap2">
                              风险评分
                          </div>
                      </div>
                      <div class="fxts_taOut fxts_taOutRed">

                      </div>
                      <div class="fxts_tb fxts_tbRed">
                          <div class="fxts_tbcon">
                              <div class="fxts_tbcona">
                                  <p class="fxts_tbconap1 fxts_tbconap1red">您的平台经营状况很不安全，建议实时关注</p>
                                  <p class="fxts_tbconap2">你可以通过数据罗盘（data.htd.cn）了解平台经营更多数据</p>
                              </div>
                              <div class="fxts_tbconb">
                                  共检查了 <span class="fxts_tbconap1red">6</span> 项
                              </div>
                              <div class="fxts_tbconc">
                                  <i class="el-icon-warning" style="color:#ff5555"></i> 其中 <span class="fxts_tbconap1red">{{ywzcdata.num}}</span> 项风险指标需要关注
                              </div>

                              <div class="fxts_tbcond fxts_tbcondRed "></div>
                          </div>
                      </div>
                  </div>

                  <div class="fxts_t" v-if='ywzcNum<80 && ywzcNum>29'>
                      <div class="fxts_ta fxts_taOrg">
                          <div class="fxts_tap1">
                              {{ywzcNum}}
                          </div>
                          <div class="fxts_tap2">
                              风险评分
                          </div>
                      </div>
                      <div class="fxts_taOut fxts_taOutOrg">

                      </div>
                      <div class="fxts_tb fxts_tbOrg">
                          <div class="fxts_tbcon">
                              <div class="fxts_tbcona">
                                  <p class="fxts_tbconap1 fxts_tbconap1org">您的平台经营状况很不安全，建议实时关注</p>
                                  <p class="fxts_tbconap2">你可以通过数据罗盘（data.htd.cn）了解平台经营更多数据</p>
                              </div>
                              <div class="fxts_tbconb">
                                  共检查了 <span class="fxts_tbconap1org">6</span> 项
                              </div>
                              <div class="fxts_tbconc">
                                  <i class="el-icon-warning" style="color:#ff5555"></i> 其中 <span class="fxts_tbconap1org">{{ywzcdata.num}}</span> 项风险指标需要关注
                              </div>

                              <div class="fxts_tbcond fxts_tbcondOrg "></div>
                          </div>
                      </div>
                  </div>

                  <div class="fxts_t" v-if='ywzcNum<101 && ywzcNum>79'>
                      <div class="fxts_ta fxts_taGreen">
                          <div class="fxts_tap1">
                                {{ywzcNum}}
                          </div>
                          <div class="fxts_tap2">
                              风险评分
                          </div>
                      </div>
                      <div class="fxts_taOut fxts_taOutGreen">

                      </div>
                      <div class="fxts_tb fxts_tbGreen">
                          <div class="fxts_tbcon">
                              <div class="fxts_tbcona">
                                  <p class="fxts_tbconap1 fxts_tbconap1green">您的平台经营状况很不安全，建议实时关注</p>
                                  <p class="fxts_tbconap2">你可以通过数据罗盘（data.htd.cn）了解平台经营更多数据</p>
                              </div>
                              <div class="fxts_tbconb">
                                  共检查了 <span class="fxts_tbconap1green">6</span> 项
                              </div>
                              <div class="fxts_tbconc">
                                  <i class="el-icon-warning" style="color:#ff5555"></i> 其中 <span class="fxts_tbconap1green">{{ywzcdata.num}}</span> 项风险指标需要关注
                              </div>

                              <div class="fxts_tbcond fxts_tbcondGreen "></div>
                          </div>
                      </div>
                  </div>

                  <div class="fxts_item">
                      <div class="fxts_item_t">

                      </div>
                      <div class="fxts_item_d">
                          <div class="fxts_item_ditem">
                              <div class="fxts_item_ditema">
                                  <i class="el-icon-circle-check" style="color:#2cc689;" v-if='ywzcdata.whiteRatioState==0'></i>
                                  <i class="el-icon-warning" style="color:#ff5555" v-if='ywzcdata.whiteRatioState==1'></i> 白名单覆盖率
                              </div>
                              <div class="fxts_item_ditemb">
                                  平台归属的白名单会员店数/平台归属整体会员店
                              </div>
                              <div class="fxts_item_ditemc">
                                  实际值：<span :class="[ywzcdata.whiteRatioState==0?'fxts_item_ditemcs1':'fxts_item_ditemcs2']">{{ywzcdata.whiteRatio}}%</span>
                              </div>

                              <div class="fxts_item_ditemd">
                                  参考值：<span>{{ywzcdata.whiteRatioRe}}%</span>
                              </div>

                              <div class="fxts_item_ditemc">
                                  状态：<span class="fxts_item_ditemcs1" v-if='ywzcdata.whiteRatioState==0'>正常</span><span class="fxts_item_ditemcs2" v-if='ywzcdata.whiteRatioState==1'>异常</span>
                              </div>
                          </div>
                          <div class="fxts_item_ditem">
                              <div class="fxts_item_ditema">
                                  <i class="el-icon-circle-check" style="color:#2cc689;" v-if='ywzcdata.actWhiteRatioState==0'></i>
                                  <i class="el-icon-warning" style="color:#ff5555" v-if='ywzcdata.actWhiteRatioState==1'></i> 白名单激活率
                              </div>
                              <div class="fxts_item_ditemb">
                                  平台逾期客户数/平台贷款客户总数
                              </div>
                              <div class="fxts_item_ditemc">
                                  实际值：<span :class="[ywzcdata.actWhiteRatioState==0?'fxts_item_ditemcs1':'fxts_item_ditemcs2']">{{ywzcdata.actWhiteRatio}}%</span>
                              </div>

                              <div class="fxts_item_ditemd">
                                  参考值：<span>{{ywzcdata.actWhiteRatioRe}}%</span>
                              </div>

                              <div class="fxts_item_ditemc">
                                  状态：<span class="fxts_item_ditemcs1" v-if='ywzcdata.actWhiteRatioState==0'>正常</span><span class="fxts_item_ditemcs2" v-if='ywzcdata.actWhiteRatioState==1'>异常</span>
                              </div>
                          </div>
                          <div class="fxts_item_ditem">
                              <div class="fxts_item_ditema">
                                  <i class="el-icon-circle-check" style="color:#2cc689;" v-if='ywzcdata.whiteLoanRatioState==0'></i>
                                  <i class="el-icon-warning" style="color:#ff5555" v-if='ywzcdata.whiteLoanRatioState==1'></i> 白名单转化率
                              </div>
                              <div class="fxts_item_ditemb">
                                  超30天个人借款/个人借款总额
                              </div>
                              <div class="fxts_item_ditemc">
                                  实际值：<span :class="[ywzcdata.whiteLoanRatioState==0?'fxts_item_ditemcs1':'fxts_item_ditemcs2']">{{ywzcdata.whiteLoanRatio}}%</span>
                              </div>

                              <div class="fxts_item_ditemd">
                                  参考值：<span>{{ywzcdata.whiteLoanRatioRe}}%</span>
                              </div>

                              <div class="fxts_item_ditemc">
                                  状态：<span class="fxts_item_ditemcs1" v-if='ywzcdata.whiteLoanRatioState==0'>正常</span><span class="fxts_item_ditemcs2" v-if='ywzcdata.whiteLoanRatioState==1'>异常</span>
                              </div>
                          </div>
                          <div class="fxts_item_ditem">
                              <div class="fxts_item_ditema">
                                  <i class="el-icon-circle-check" style="color:#2cc689;" v-if='ywzcdata.monNewTicketRatioState==0'></i>
                                  <i class="el-icon-warning" style="color:#ff5555" v-if='ywzcdata.monNewTicketRatioState==1'></i> 总部新办电票占比
                              </div>
                              <div class="fxts_item_ditemb">
                                当月新办电票总额/当月新办款总额
                              </div>
                              <div class="fxts_item_ditemc">
                                  实际值：<span :class="[ywzcdata.monNewTicketRatioState==0?'fxts_item_ditemcs1':'fxts_item_ditemcs2']">{{ywzcdata.monNewTicketRatio}}%</span>
                              </div>

                              <div class="fxts_item_ditemd">
                                  参考值：<span>{{ywzcdata.monNewTicketRatioRe}}%</span>
                              </div>

                              <div class="fxts_item_ditemc">
                                  状态：<span class="fxts_item_ditemcs1" v-if='ywzcdata.monNewTicketRatioState==0'>正常</span><span class="fxts_item_ditemcs2" v-if='ywzcdata.monNewTicketRatioState==1'>异常</span>
                              </div>
                          </div>
                          <div class="fxts_item_ditem">
                              <div class="fxts_item_ditema">
                                  <i class="el-icon-circle-check" style="color:#2cc689;" v-if='ywzcdata.financialexpensesRatioState==0'></i>
                                  <i class="el-icon-warning" style="color:#ff5555" v-if='ywzcdata.financialexpensesRatioState==1'></i> 财务费用率
                              </div>
                              <div class="fxts_item_ditemb">
                                累计财务费用/累计销售收入
                              </div>
                              <div class="fxts_item_ditemc">
                                  实际值：<span :class="[ywzcdata.financialexpensesRatioState==0?'fxts_item_ditemcs1':'fxts_item_ditemcs2']">{{ywzcdata.financialexpensesRatio}}%</span>
                              </div>

                              <div class="fxts_item_ditemd">
                                  参考值：<span>{{ywzcdata.financialexpensesRatioRe}}%</span>
                              </div>

                              <div class="fxts_item_ditemc">
                                  状态：<span class="fxts_item_ditemcs1" v-if='ywzcdata.financialexpensesRatioState==0'>正常</span><span class="fxts_item_ditemcs2" v-if='ywzcdata.financialexpensesRatioState==1'>异常</span>
                              </div>
                          </div>
                          <div class="fxts_item_ditem">
                              <div class="fxts_item_ditema">
                                  <i class="el-icon-circle-check" style="color:#2cc689;" v-if='ywzcdata.tiecardmemberRatioState==0'></i>
                                  <i class="el-icon-warning" style="color:#ff5555" v-if='ywzcdata.tiecardmemberRatioState==1'></i> 有效客户绑卡率
                              </div>
                              <div class="fxts_item_ditemb">
                                累积已绑卡会员数/活跃会员数、累积绑卡数去支付系统后台数据
                              </div>
                              <div class="fxts_item_ditemc">
                                  实际值：<span :class="[ywzcdata.tiecardmemberRatioState==0?'fxts_item_ditemcs1':'fxts_item_ditemcs2']">{{ywzcdata.tiecardmemberRatio}}%</span>
                              </div>

                              <div class="fxts_item_ditemd">
                                  参考值：<span>{{ywzcdata.tiecardmemberRatioRe}}%</span>
                              </div>

                              <div class="fxts_item_ditemc">
                                  状态：<span class="fxts_item_ditemcs1" v-if='ywzcdata.tiecardmemberRatioState==0'>正常</span><span class="fxts_item_ditemcs2" v-if='ywzcdata.tiecardmemberRatioState==1'>异常</span>
                              </div>
                          </div>
                      </div>
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
import wtabs from 'element-ui/packages/tabs/src/tabs.vue'
import wtabpane from 'element-ui/packages/tabs/src/tab-pane.vue'
import DatePicker from 'element-ui/packages/date-picker/src/picker/date-picker.js'
import Message from 'element-ui/packages/Message/index.js'
import wbutton from 'element-ui/packages/button/src/button.vue'
import wselect from 'element-ui/packages/select/src/select.vue'
import woption from 'element-ui/packages/select/src/option.vue'
import wicon from 'element-ui/packages/icon/index.js'


export default {
    data: () => ({
        userId: '',
        loadingall: false,
        loadtab: false,
        activeName: '',
        formdata: {
            date: ''
        },
        myChart1: '',
        cwxldata: '',
        pickerOptions: {
            disabledDate(time) {
                return time.getTime() > Date.now() - 8.64e7 || time.getTime() < new Date(2016, 0, 1, 0, 0, 0)
            }
        },
        ajax1: false,
        ajax2: false,
        ajax3: false,
        sysdata: '',
        sysNum: 0,
        ywzcNum:0,
        ywzcdata:'',


    }),
    computed: {},
    watch: {

        activeName: function(val, oldVal) {
            let _this = this;
            switch (val) {
                case '0':
                  if(_this.ajax1 && _this.cwxldata)
                  {
                    var data = {
                        'userId': _this.userId,
                    };

                    if (_this.formdata.date) {
                        var endtime = $('.el-input__inner:eq(0)', ".cwxldate").val();
                        data.endTime = endtime.replace(/-/g, '')
                    }

                    var url =  _this.adminApi.host+'/htyfctzcfz/dupont/all',

                        loading = function() {
                            _this.loadingall = true;
                        },
                        success = function(data) {
                            if (data.code == '1') {
                                _this.cwxldata = data.data.dupontDTO;
                                _this.myChart1 = echarts.init(document.getElementById('main'));
                                var option = {
                                    tooltip: {
                                        confine: true
                                    },
                                    radar: [{

                                        indicator: [{
                                            text: '整体能力',
                                            color: '#ff7700',
                                            max: 5

                                        }, {
                                            text: '获利能力',
                                            max: 5
                                        }, {
                                            text: '偿债能力',
                                            max: 5
                                        }, {
                                            text: '运营能力',
                                            max: 5
                                        }, {
                                            text: '成长能力',
                                            max: 5
                                        }],
                                        center: screen.width > 1600 ? ['50%', '55%'] : ['50%', '50%'],
                                        radius: screen.width > 1600 ? '70%' : '50%',
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
                                _this.ajax1=false;
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
                  }
                    break;
                case '1':
                    if (!_this.sysdata) {

                        var data = {
                            'userId': _this.userId,
                        };

                        if (_this.formdata.date) {
                            var endtime = $('.el-input__inner:eq(0)', ".cwxldate").val();
                            data.endTime = endtime.replace(/-/g, '')
                        }

                        var url =  _this.adminApi.host+'/htyfctzcfz/finance/all',

                            loading = function() {
                                _this.loadingall = true;
                            },
                            success = function(data) {
                                if (data.code == '1') {
                                    _this.sysNum = data.data.score;
                                    _this.sysdata = data.data;
                                    _this.ajax2=false;

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
                    }

                    if (_this.ajax2 && _this.sysdata) {

                      var data = {
                          'userId': _this.userId,
                      };

                      if (_this.formdata.date) {
                          var endtime = $('.el-input__inner:eq(0)', ".cwxldate").val();
                          data.endTime = endtime.replace(/-/g, '')
                      }

                      var url =  _this.adminApi.host+'/htyfctzcfz/finance/all',

                          loading = function() {
                              _this.loadingall = true;
                          },
                          success = function(data) {
                              if (data.code == '1') {
                                  _this.sysNum = data.data.score;
                                  _this.sysdata = data.data;
                                  _this.ajax2=false;
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
                    }

                    break;

                    case '2':
                        if (!_this.ywzcdata) {

                            var data = {
                                'userId': _this.userId,
                            };

                            if (_this.formdata.date) {
                                var endtime = $('.el-input__inner:eq(0)', ".cwxldate").val();
                                data.endTime = endtime.replace(/-/g, '')
                            }

                            var url =  _this.adminApi.host+'/htyfctzcfz/support/all',

                                loading = function() {
                                    _this.loadingall = true;
                                },
                                success = function(data) {
                                    if (data.code == '1') {

                                        _this.ywzcNum = data.data.score;
                                        _this.ywzcdata = data.data;
                                        _this.ajax3=false;

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
                        }

                        if (_this.ajax3 && _this.ywzcdata) {

                          var data = {
                              'userId': _this.userId,
                          };

                          if (_this.formdata.date) {
                              var endtime = $('.el-input__inner:eq(0)', ".cwxldate").val();
                              data.endTime = endtime.replace(/-/g, '')
                          }

                          var url =  _this.adminApi.host+'/htyfctzcfz/support/all',

                              loading = function() {
                                  _this.loadingall = true;
                              },
                              success = function(data) {
                                  if (data.code == '1') {
                                      _this.ywzcNum = data.data.score;
                                      _this.ywzcdata = data.data;
                                      _this.ajax3=false;

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
                        }

                        break;
            }
        },
        formdata: {
                handler: function(val) {
                  let _this=this;
                  _this.ajax1=true;
                  _this.ajax2=true;
                  _this.ajax3=true;
                },
                deep: true
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



    mounted() {
        let _this = this;
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
                       $('.dbfx-dlb').hover(function() {
                           $('.dbfx-trItem[shu=shu1]').addClass('cwfxHover')
                           $('.dbfx-trItem[heng=heng1]').addClass('cwfxHover')
                       }, function() {
                           $('.cwfxHover').removeClass('cwfxHover')
                       })

                       $('.dbfx-trItem').hover(function() {
                           if ($(this).attr('shu')) {
                               var shurel = $(this).attr('shu');
                               $('.dbfx-trItem[shu=' + shurel + ']').addClass('cwfxHover')
                           }

                           if ($(this).attr('heng')) {
                               var hengrel = $(this).attr('heng');
                               $('.dbfx-trItem[shu=' + hengrel + ']').addClass('cwfxHover')
                           }

                           if ($(this).attr('henga')) {
                               var hengarel = $(this).attr('henga');
                               $('.dbfx-trItem[shu=' + hengarel + ']').addClass('cwfxHover')
                           }

                           if ($(this).attr('hengb')) {
                               var hengbrel = $(this).attr('hengb');
                               $('.dbfx-trItem[shu=' + hengbrel + ']').addClass('cwfxHover')
                           }
                       }, function() {
                           $('.cwfxHover').removeClass('cwfxHover')
                       })

                       var data = {
                           'userId': _this.userId,
                       };

                       if (_this.formdata.date) {
                           var endtime = $('.el-input__inner:eq(0)', ".cwxldate").val();
                           data.endTime = endtime.replace(/-/g, '')
                       }

                       var url =  _this.adminApi.host+'/htyfctzcfz/dupont/all',

                           loading = function() {
                               _this.loadingall = true;
                           },
                           success = function(data) {
                               if (data.code == '1') {
                                   _this.ajax1=false;
                                   _this.cwxldata = data.data.dupontDTO;
                                   _this.myChart1 = echarts.init(document.getElementById('main'));
                                   var option = {
                                       tooltip: {
                                           confine: true
                                       },
                                       radar: [{

                                           indicator: [{
                                               text: '整体能力',
                                               color: '#ff7700',
                                               max: 5

                                           }, {
                                               text: '获利能力',
                                               max: 5
                                           }, {
                                               text: '偿债能力',
                                               max: 5
                                           }, {
                                               text: '运营能力',
                                               max: 5
                                           }, {
                                               text: '成长能力',
                                               max: 5
                                           }],
                                           center: screen.width > 1600 ? ['50%', '55%'] : ['50%', '50%'],
                                           radius: screen.width > 1600 ? '70%' : '50%',
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
                                               value: data.data.dupontRadarDTO ? [data.data.dupontRadarDTO.whole, data.data.dupontRadarDTO.profit, data.data.dupontRadarDTO.sinking, data.data.dupontRadarDTO.operate, data.data.dupontRadarDTO.grow] :[],
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
        cwxlSearch: function() {
            let _this = this;

            switch (_this.activeName) {
                case '0':

                    var data = {
                        'userId': _this.userId,
                    };

                    if (_this.formdata.date) {
                        var endtime = $('.el-input__inner:eq(0)', ".cwxldate").val();
                        data.endTime = endtime.replace(/-/g, '')
                    }

                    var url =  _this.adminApi.host+'/htyfctzcfz/dupont/all',

                        loading = function() {
                            _this.loadingall = true;
                        },
                        success = function(data) {
                            if (data.code == '1') {
                              _this.ajax1=false;
                                _this.cwxldata = data.data.dupontDTO;
                                _this.myChart1 = echarts.init(document.getElementById('main'));
                                var option = {
                                    tooltip: {
                                        confine: true
                                    },
                                    radar: [{

                                        indicator: [{
                                            text: '整体能力',
                                            color: '#ff7700',
                                            max: 5

                                        }, {
                                            text: '获利能力',
                                            max: 5
                                        }, {
                                            text: '偿债能力',
                                            max: 5
                                        }, {
                                            text: '运营能力',
                                            max: 5
                                        }, {
                                            text: '成长能力',
                                            max: 5
                                        }],
                                        center: screen.width > 1600 ? ['50%', '55%'] : ['50%', '50%'],
                                        radius: screen.width > 1600 ? '70%' : '50%',
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
                    break;

                case '1':
                var data = {
                    'userId': _this.userId,
                };

                if (_this.formdata.date) {
                    var endtime = $('.el-input__inner:eq(0)', ".cwxldate").val();
                    data.endTime = endtime.replace(/-/g, '')
                }

                var url =  _this.adminApi.host+'/htyfctzcfz/finance/all',

                    loading = function() {
                        _this.loadingall = true;
                    },
                    success = function(data) {
                        if (data.code == '1') {
                            _this.sysNum = data.data.score;
                            _this.sysdata = data.data;
                            _this.ajax2=false;

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
                    break;

                case '2':
                var data = {
                    'userId': _this.userId,
                };

                if (_this.formdata.date) {
                    var endtime = $('.el-input__inner:eq(0)', ".cwxldate").val();
                    data.endTime = endtime.replace(/-/g, '')
                }

                var url =  _this.adminApi.host+'/htyfctzcfz/support/all',

                    loading = function() {
                        _this.loadingall = true;
                    },
                    success = function(data) {
                        if (data.code == '1') {

                            _this.ywzcNum = data.data.score;
                            _this.ywzcdata = data.data;
                            _this.ajax3=false;

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
                    break;
                default:

            }
        },

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
        wicon,

    }
}

</script>
