<style lang="scss">

.w-pos {
    height: 2.2rem;
    line-height: 2.2rem;
    color: #999;
    font-size: 0.6rem;
    padding-left: 0.5rem;
}

.w-pos span {
    padding: 0 0.25rem;
}

.w-pos-active {
    color: #666;
    font-size: 0.7rem;
    font-weight: 600;
}

// .w-main {
//     position: absolute;
//     left: 0.5rem;
//     right: 0.5rem;
//     top: 2.2rem;
//     bottom: 0.5rem;
//     width: auto;
//     height: auto;
//     background-color: #f0f;
// }
.w-ywxl-t {
    position: absolute;
    top: 2.2rem;
    left: 0.5rem;
    right: 12rem;
    width: auto;
    height: 7.5rem;
    border: 1px solid #d7d7d7;
    background-color: #fcfcfc;
    display: flex;
    justify-content: space-between;
}

.w-ywxl-titem1 {
    flex: 1;
    margin: 10px;
    background-color: #fff;
    border: 1px solid #f3f3f3
}

.w-ywxl-titema {
    font-size: 0.7rem;
    font-weight: 600;
    height: 2.0rem;
    line-height: 2.0rem;
    text-align: center;
}

.w-ywxl-titemb {
    height: 2.0rem;
    line-height: 2.0rem;
    font-size: 1.6rem;
    font-weight: bold;
    text-align: center;
    color: #ff7700;
}

,
.w-ywxl-titemc {
    text-align: center;
    height: 2rem;
    line-height: 2rem;
    padding-top: 0.5rem;
}

.w-ywxl-titem2 {
    flex: 3;
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    background-color: #fff;
    border: 1px solid #f3f3f3;
}

.w-ywxl-titem2item {
    flex: 1;
}

.w-ywxl-titem3item {
    display: flex;
    flex-pack: start;
    flex-wrap: wrap;
    align-items: center;
}

.w-ywxl-titem2itema {
    width: 50%;
    // padding: 0 2rem;
}

.w-ywxl-titem2itemas1 {
    display: block;
    font-size: 0.6rem;
}

.w-ywxl-titem2itemas2 {
    display: block;
    font-size: 0.9rem;
    color: #6c81b3;
}

.w-ywxl-titem2itemline {
    width: 1px;
    margin: 0.5rem;
    height: 5.5rem;
    background-color: #f3f3f3;
    float: left;
}

.w-ywxl-titem2itemcss3 {
    width: 4.4rem;
    height: 4.4rem;
    border: 1px solid #ff7700;
    border-radius: 100%;
    float: left;
    margin-top: 1rem;
    position: relative;
    left: 50%;
    margin-left: -2rem;
}

.w-ywxl-titem2itemcss3a {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 4.2rem;
    height: 4.2rem;
    margin-top: 0.1rem;
    margin-left: 0.1rem;
    border: 1px solid #ff7700;
    border-radius: 100%;
    animation: scaleout 1s infinite;
}

.w-ywxl-titem2itemcss3b {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 4.2rem;
    height: 4.2rem;
    margin-top: 0.1rem;
    margin-left: 0.1rem;
    border-radius: 100%;
}

.w-ywxl-titem2itemcss3bs1 {
    width: 100%;
    display: inline-block;
    line-height: 2rem;
    text-align: center;
}

.w-ywxl-titem2itemcss3bs2 {
    width: 100%;
    display: inline-block;
    text-align: center;
    font-size: 1.1rem;
    color: #ff7700
}

@keyframes scaleout {
    0% {
        transform: scale(1.0)
    }
    // 25% {
    //   transform: scale(1.1);
    //   opacity: 0.75;
    // }
    // 50% {
    //   transform: scale(1.2);
    //   opacity: 0.5;
    // }
    // 75% {
    //   transform: scale(1.3);
    //   opacity: 0.25;
    // }
    100% {
        transform: scale(1.4);
        opacity: 0;
    }
}

.w-ywxl-d {
    position: absolute;
    top: 10.2rem;
    bottom: 0.5rem;
    left: 0.5rem;
    right: 12rem;
    width: auto;
    height: auto;
    background-color: #fff;
    border: 1px solid #d7d7d7;
    display: flex;
    flex-direction: column;
}

.w-ywxl-dt {
    width: 100%;
    height: 3rem;
    border-bottom: 1px solid #d7d7d7;
    display: flex;
}

.w-ywxl-dt1 {
    padding-left: 1.5rem;
    line-height: 3rem;
}

.w-ywxl-dt2 {
    flex: 1;
    padding-left: 1.5rem;
    line-height: 3rem;
}

.w-ywxl-dd {
    flex: 1;
    display: flex;
}

.w-ywxl-ddl {
    width: 11.5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.w-ywxl-ddla {
    flex: 1;
    border-right: 1px solid #d7d7d7;
    border-bottom: 1px solid #d7d7d7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: #fcfcfc;
}

// .w-ywxl-ddla:hover {
//   border-right: 1px solid #fff
// }
.w-ywxl-ddlac {
    border-right: 1px solid #fff;
    background-color: #fff;
}

.w-ywxl-ddlap1 {
    font-weight: bold;
    span {
        font-size: 0.6rem;
        font-weight: normal;
    }
}

.w-ywxl-ddlap2 {
    font-size: 1.1rem;
    color: #ff7700;
    padding: 0.75rem 0;
}

.w-ywxl-ddlap3 {
    color: #999;
    font-size: 0.6rem;
}

.w-ywxl-ddr {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.w-ywxl-ddrt {
    flex: 1.2;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
}

.w-ywxl-ddrtd {
    flex: 1;
    border-bottom: 1px solid #f3f3f3;
    display: flex;
    justify-content: center;
    align-items: center;
}

.w-ywxl-ddrtdline {
    width: 1px;
    height: 50%;
    background-color: #f3f3f3;
    position: relative;
    &:before {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        margin-top: -5px;
        width: 6px;
        height: 10px;
        background-image: url('../assets/img/arrowr.png');
    }
}

.w-ywxl-ddrtditem {
    flex: 1;
}

.w-ywxl-ddrtditem2 {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.w-ywxl-ddrtditem2p1 {
    font-size: 0.6rem;
}

.w-ywxl-ddrtditem2p1s1 {
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    margin-right: 0.5rem;
    background-color: #6c81b3;
}

.w-ywxl-ddrtditem2p1s2 {
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    margin-right: 0.5rem;
    background-color: #ff7700;
}

.w-ywxl-ddrtditem2p1s3 {
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    margin-right: 0.5rem;
    background-color: #2cc689;
}

.w-ywxl-ddrtditem2p2 {
    font-size: 1.2rem;
    color: #6c81b3;
}

.w-ywxl-ddrd {
    flex: 2;
    display: flex;
    flex-direction: column;
}

.w-ywxl-ddrdt {
    height: 2rem;
    position: relative;
}

.w-ywxl-ddrdta {
    position: absolute;
    height: 2rem;
    padding-left: 1rem;
    line-height: 2rem;
    font-size: 0.7rem;
    color: #333;
    font-weight: bold;
    position: relative;
    &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0.75rem;
        left: 0.5rem;
        display: block;
        width: 0.25rem;
        height: 0.6rem;
        background-color: #ff7700;
    }
}

.w-ywxl-ddrdtb {
    position: absolute;
    height: 2rem;
    line-height: 2rem;
    top: 0px;
    right: 1rem;
}

.w-ywxl-ddrdtbs1 {
    display: inline-block;
    font-size: 0.6rem;
    &:before {
        content: '';
        display: inline-block;
        width: 0.5rem;
        height: 0.5rem;
        background-color: #ff7700;
        margin-right: 0.25rem;
    }
}

.w-ywxl-ddrdtbs2 {
    display: inline-block;
    font-size: 0.6rem;
    &:before {
        content: '';
        display: inline-block;
        width: 0.5rem;
        height: 0.5rem;
        background-color: #6c81b3;
        margin-right: 0.25rem;
    }
}

.w-ywxl-ddrdd {
    flex: 1;
}

.w-ywxl-r {
    position: absolute;
    right: 0.5rem;
    top: 2.2rem;
    width: 11rem;
    bottom: 0.5rem;
    height: auto;
    border: 1px solid #d7d7d7;
    padding: 0 0.5rem;
    background-color: #fff;
}

.w-ywxl-r-t {
    height: 1.5rem;
    font-size: 0.7rem;
    color: #333;
    font-weight: bold;
    line-height: 1.5rem;
    position: relative;
    padding-left: 10px;
    &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0.5rem;
        display: block;
        width: 0.25rem;
        height: 0.6rem;
        background-color: #ff7700;
    }
}

.w-ywxl-r-d {
    position: absolute;
    top: 1.5rem;
    bottom: 0.5rem;
    left: 0.5rem;
    right: 0.5rem;
    height: auto;
    display: flex;
    flex-direction: column;
    align-content: space-between;
}

.w-ywxl-r-ditem {
    flex: 1;
    justify-content: space-between;
    margin: 5px;
    border: 1px solid #f3f3f3;
    display: flex;
    align-items: center;
    justify-content: center;
    // flex-direction: column;
}

.w-ywxl-r-ditema {
    flex: 1;
    height: 5rem;
}

.w-ywxl-r-ditemb {
    padding-left: 2rem;
    font-size: 0.6rem;
    color: #333;
    font-weight: bolder;
}

.w-ywxl-r-ditemc {
    margin-top: 10px;
    padding-left: 1.5rem;
    font-size: 0.7rem;
}

.w-ywxl-r-ditemcbtn {
    margin-bottom: 0;
    border: 1px solid #fff;
    background: none;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        border: 1px solid #c6d7ff;
        background-color: #fafbff;
    }
}

.w-ywxl-r-ditemcbtns1 {
    font-size: 0.8rem;
    font-weight: 500;
    color: #ff7700;
}

.w-ywxl-r-ditemcbtns2 {
    font-size: 0.8rem;
    font-weight: bold;
    color: #6c81b3;
}

// .w-ywxl-r-ditema {
//     justify-content:center;
//     flex: 1;
//     margin: 5px;
//     display: flex;
//     align-items:center;
//     // align-items:flex-end;
//     // align-items: baseline;
//     justify-content: flex-start;
//     background-color: #f0f;
// }
//
//

</style>

<template>

<div>
    <div class="w-pos">
        <span>首页</span>/<span>汇天眼</span>/<span class="w-pos-active">业务效率</span>
    </div>

    <div class="w-ywxl-t">
        <div class="w-ywxl-titem1">
            <div class="w-ywxl-titema">
                当前平台估值（万）
            </div>
            <div class="w-ywxl-titemb">
                8050
            </div>
            <div class="w-ywxl-titemc">
                <rate v-model="statvalue" disabled>
                </rate>
            </div>
        </div>
        <div class="w-ywxl-titem2">
            <div class="w-ywxl-titem2item">
                <div id="main" style=" height:6rem;">

                </div>
            </div>
            <div class="w-ywxl-titem2item">
                <div class="w-ywxl-titem2itemline">

                </div>
                <div class="w-ywxl-titem2itemcss3">

                    <div class="w-ywxl-titem2itemcss3a">

                    </div>
                    <div class="w-ywxl-titem2itemcss3b">
                        <span class="w-ywxl-titem2itemcss3bs1">综合能力</span>
                        <span class="w-ywxl-titem2itemcss3bs2">6.11</span>
                    </div>
                </div>

            </div>
            <div class="w-ywxl-titem2item w-ywxl-titem3item">
                <div class="w-ywxl-titem2itema">
                    <span class="w-ywxl-titem2itemas1">市盈率（万）</span>
                    <span class="w-ywxl-titem2itemas2">8.12</span>
                </div>
                <div class="w-ywxl-titem2itema">
                    <span class="w-ywxl-titem2itemas1">市净率（万）</span>
                    <span class="w-ywxl-titem2itemas2">2.44</span>
                </div>
                <div class="w-ywxl-titem2itema">
                    <span class="w-ywxl-titem2itemas1">市销率（万）</span>
                    <span class="w-ywxl-titem2itemas2">9.22</span>
                </div>
                <div class="w-ywxl-titem2itema">
                    <span class="w-ywxl-titem2itemas1">会员店价值（万）</span>
                    <span class="w-ywxl-titem2itemas2">50.2</span>
                </div>
            </div>
        </div>
    </div>

    <div class="w-ywxl-d" v-loading.body='loading'>
        <div class="w-ywxl-dt">
            <div class="w-ywxl-dt1">
                请选择时间维度
            </div>
            <div class="w-ywxl-dt2">
                <radio-group v-model="radiovalue" @change='radiochange'>
                    <wradio label="1">当月统计</wradio>
                    <wradio label="2">全年统计</wradio>
                </radio-group>
            </div>
        </div>

        <div class="w-ywxl-dd">
            <div class="w-ywxl-ddl">
                <div class="w-ywxl-ddla w-ywxl-ddlac" @click='monthtabs(0,$event)'>
                    <p class="w-ywxl-ddlap1">总营业收入<span>（万元）</span></p>
                    <p class="w-ywxl-ddlap2">256</p>
                    <p class="w-ywxl-ddlap3">同比21%
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-jiantou1"></use>
                        </svg>
                    </p>
                </div>
                <div class="w-ywxl-ddla" @click='monthtabs(1,$event)'>
                    <p class="w-ywxl-ddlap1">总销售金额<span>（万元）</span></p>
                    <p class="w-ywxl-ddlap2">256</p>
                    <p class="w-ywxl-ddlap3">同比21%
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-jiantou2"></use>
                        </svg>
                    </p>
                </div>
                <div class="w-ywxl-ddla" style="border-bottom:0" @click='monthtabs(2,$event)'>
                    <p class="w-ywxl-ddlap1">新增会员总店<span>（家）</span></p>
                    <p class="w-ywxl-ddlap2">256</p>
                    <p class="w-ywxl-ddlap3">同比21%
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-jiantou1"></use>
                        </svg>
                    </p>
                </div>
            </div>

            <div class="w-ywxl-ddr">
                <div class="w-ywxl-ddrt">
                    <div class="w-ywxl-r-t">
                        {{myChart2title}}
                    </div>
                    <div class="w-ywxl-ddrtd">
                        <div class="w-ywxl-ddrtditem">
                            <div id="main2" style=" height:100%">

                            </div>
                        </div>
                        <div class="w-ywxl-ddrtdline">

                        </div>
                        <div class="w-ywxl-ddrtditem2">
                            <p class="w-ywxl-ddrtditem2p1"><span class="w-ywxl-ddrtditem2p1s1"></span>进销存营业收入</p>
                            <p class="w-ywxl-ddrtditem2p2">35</p>
                            <p class="w-ywxl-ddrtditem2p3">同比21%
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-jiantou1"></use>
                                </svg>
                            </p>
                        </div>
                        <div class="w-ywxl-ddrtditem2">
                            <p class="w-ywxl-ddrtditem2p1"><span class="w-ywxl-ddrtditem2p1s2"></span>进销存营业收入</p>
                            <p class="w-ywxl-ddrtditem2p2">35</p>
                            <p class="w-ywxl-ddrtditem2p3">同比21%
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-jiantou1"></use>
                                </svg>
                            </p>
                        </div>
                        <div class="w-ywxl-ddrtditem2">
                            <p class="w-ywxl-ddrtditem2p1"><span class="w-ywxl-ddrtditem2p1s3"></span>进销存营业收入</p>
                            <p class="w-ywxl-ddrtditem2p2">35</p>
                            <p class="w-ywxl-ddrtditem2p3">同比21%
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-jiantou2"></use>
                                </svg>
                            </p>
                        </div>


                    </div>
                </div>
                <div class="w-ywxl-ddrd">
                    <div class="w-ywxl-ddrdt">
                        <div class="w-ywxl-ddrdta">
                            {{myChart3title}}
                        </div>
                        <div class="w-ywxl-ddrdtb">
                            <span class="w-ywxl-ddrdtbs1" v-if='radiovalue=="2"'>当前数据</span>
                            <span class="w-ywxl-ddrdtbs2" v-if='radiovalue=="2"'>对比数据</span>
                            <wselect v-model="selectvalue" placeholder="请选择" style="width:120px; color:#4a4a4a" @change='selectchange' @visible-change='visiblechange'>
                                <woption :label='item.lable' :value='item.value' v-for='(item,index) in selectarr'>
                                </woption>
                            </wselect>
                        </div>
                    </div>

                    <div class="w-ywxl-ddrdd">
                        <div id="main3" style="width:100%; height:100%;">

                        </div>
                    </div>

                </div>

            </div>
        </div>



    </div>

    <div class="w-ywxl-r">
        <div class="w-ywxl-r-t">
            平台公司名称
        </div>
        <div class="w-ywxl-r-d">
            <div class="w-ywxl-r-ditem">
                <div class="w-ywxl-r-ditema">
                    <div class="w-ywxl-r-ditemb">
                        当前平台排名
                    </div>
                    <div class="w-ywxl-r-ditemc">
                        <button type="button" name="button" class="w-ywxl-r-ditemcbtn">
                            分布排名&nbsp;&nbsp;<span class="w-ywxl-r-ditemcbtns1">5</span>名
                        </button>
                        <button type="button" name="button" class="w-ywxl-r-ditemcbtn">
                            总部排名&nbsp;&nbsp;<span class="w-ywxl-r-ditemcbtns2">30</span>名
                        </button>
                    </div>
                </div>
            </div>
            <div class="w-ywxl-r-ditem">
                <div class="w-ywxl-r-ditema">
                    <div class="w-ywxl-r-ditemb">
                        当前收入
                    </div>
                    <div class="w-ywxl-r-ditemc">
                        <button type="button" name="button" class="w-ywxl-r-ditemcbtn">
                            分布排名&nbsp;&nbsp;<span class="w-ywxl-r-ditemcbtns1">5</span>名
                        </button>
                        <button type="button" name="button" class="w-ywxl-r-ditemcbtn">
                            总部排名&nbsp;&nbsp;<span class="w-ywxl-r-ditemcbtns2">30</span>名
                        </button>
                    </div>
                </div>
            </div>
            <div class="w-ywxl-r-ditem">
                <div class="w-ywxl-r-ditema">
                    <div class="w-ywxl-r-ditemb">
                        总销售金额
                    </div>
                    <div class="w-ywxl-r-ditemc">
                        <button type="button" name="button" class="w-ywxl-r-ditemcbtn">
                            分布排名&nbsp;&nbsp;<span class="w-ywxl-r-ditemcbtns1">5</span>名
                        </button>
                        <button type="button" name="button" class="w-ywxl-r-ditemcbtn">
                            总部排名&nbsp;&nbsp;<span class="w-ywxl-r-ditemcbtns2">30</span>名
                        </button>
                    </div>
                </div>
            </div>
            <div class="w-ywxl-r-ditem">
                <div class="w-ywxl-r-ditema">
                    <div class="w-ywxl-r-ditemb">
                        新增会员
                    </div>
                    <div class="w-ywxl-r-ditemc">
                        <button type="button" name="button" class="w-ywxl-r-ditemcbtn">
                            分布排名&nbsp;&nbsp;<span class="w-ywxl-r-ditemcbtns1">5</span>名
                        </button>
                        <button type="button" name="button" class="w-ywxl-r-ditemcbtn">
                            总部排名&nbsp;&nbsp;<span class="w-ywxl-r-ditemcbtns2">30</span>名
                        </button>
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
import '../assets/fonts/iconfont'

//elementui
import Loading from 'element-ui/packages/loading/index.js'
import rate from 'element-ui/packages/rate/src/main.vue'
import RadioGroup from 'element-ui/packages/radio/src/radio-group.vue'
import wradio from 'element-ui/packages/radio/src/radio.vue'
import wselect from 'element-ui/packages/select/src/select.vue'
import woption from 'element-ui/packages/select/src/option.vue'

export default {
    name: "",
    data: () => ({
        loading: false,
        statvalue: 3.7,
        radiovalue: '',
        selectchangevalue: false,
        selectvalue: '1',
        selectarr: [{
            'lable': '总营业收入',
            'value': '1'
        }, {
            'lable': '进销存收入',
            'value': '2'
        }, {
            'lable': '服务收入',
            'value': '3'
        }, {
            'lable': '金融收入',
            'value': '4'
        }],
        monthtab: 0,
        yeartab: 0,
        myChart1: '',
        myChart2title: '总营业收入占比',
        myChart2: '',
        myChart3: '',
        myChart3title: '总营业收入趋势'

    }),
    mounted() {
        let _this = this;
        this.$nextTick(function() {
            _this.radiovalue = '1';
            _this.myChart1 = echarts.init(document.getElementById('main'));
            var option = {
                tooltip: {
                    confine: true
                },
                radar: [{
                    indicator: [{
                        text: '综合能力',
                        color: '#ff7700'
                    }, {
                        text: '会员店价值'
                    }, {
                        text: '市盈率'
                    }, {
                        text: '市销率'
                    }, {
                        text: '市净率'
                    }],
                    center: ['50%', '50%'],
                    radius: '45%',
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
                        value: [6.11, 50.2, 8.12, 9.22, 2.44],
                        name: '当前平台估值'
                    }]
                }, ]
            }
            _this.myChart1.setOption(option);
        })

    },
    methods: {
        monthtabs: function(index, event) {
            let _this = this;
            var el = event.target;
            if (index == _this.monthtab) {
                console.log('重复了')
            } else {
                _this.loading = true;
                $('.w-ywxl-ddlac').removeClass('w-ywxl-ddlac')
                $(el).hasClass('w-ywxl-ddla') ? $(el).addClass('w-ywxl-ddlac') : $(el).parentsUntil('w-ywxl-ddl').addClass('w-ywxl-ddlac')
                _this.monthtab = index;

                switch (index) {
                    case 0:
                        _this.myChart2title = '总营业收入占比';

                        var option2 = {
                            tooltip: {
                                trigger: 'item',
                                formatter: "{a} <br/>{b}: {c} ({d}%)"
                            },
                            series: [{
                                name: _this.myChart2title,
                                type: 'pie',
                                radius: ['50%', '70%'],
                                center: ['50%', '50%'],
                                avoidLabelOverlap: false,
                                color: ['#6c81b3', '#ff7700', '#2cc689'],
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

                                data: [{
                                    value: 35,
                                    name: '进销存营业收入1',
                                }, {
                                    value: 20,
                                    name: '进销存营业收入2'
                                }, {
                                    value: 25,
                                    name: '进销存营业收入3'
                                }]
                            }]
                        };
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
                            // color:['#ff7700','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
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
                                data: ['0825', '0826', '0827', '0828', '0829', '0830', '0831', '0901', '0902', '0903', '0904', '0905', '0906', '0907', '0908', '0909', '0910', '0911', '0912', '0913', '0914', '0915', '0916', '0917', '0918', '0919', '0920', '0921', '0922', '0923']
                            }],
                            yAxis: [{
                                type: 'value'
                            }],
                            series: [{
                                name: '联盟广告',
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
                                data: [220, 182, 191, 234, 290, 330, 310, 220, 111, 191, 234, 212, 330, 310, 345, 182, 191, 234, 290, 123, 310, 220, 182, 189, 234, 290, 330, 222, 432, 310]
                            }]
                        };
                        setTimeout(function() {
                            _this.myChart2.clear();
                            _this.myChart2 = echarts.init(document.getElementById('main2'));
                            _this.myChart2.setOption(option2);
                            _this.myChart3.clear();
                            _this.myChart3 = echarts.init(document.getElementById('main3'));
                            _this.myChart3.setOption(option3);
                            _this.loading = false;
                        }, 2000);
                        break;
                    case 1:
                        _this.myChart2title = '总销售金额占比';
                        _this.selectarr = [{
                            'lable': '销售金额',
                            'value': '1'
                        }, {
                            'lable': '线上采购',
                            'value': '2'
                        }, {
                            'lable': '商品+采购',
                            'value': '3'
                        }, {
                            'lable': '非商品+采购',
                            'value': '4'
                        }];
                        _this.selectvalue = '1';
                        _this.myChart3title = _this.selectarr[0].lable;
                        var option2 = {
                            tooltip: {
                                trigger: 'item',
                                formatter: "{a} <br/>{b}: {c} ({d}%)"
                            },
                            series: [{
                                name: _this.myChart2title,
                                type: 'pie',
                                radius: ['50%', '70%'],
                                center: ['50%', '50%'],
                                avoidLabelOverlap: false,
                                color: ['#6c81b3', '#ff7700', '#2cc689'],
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

                                data: [{
                                    value: 35,
                                    name: '进销存营业收入1',
                                }, {
                                    value: 20,
                                    name: '进销存营业收入2'
                                }, {
                                    value: 25,
                                    name: '进销存营业收入3'
                                }]
                            }]
                        };
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
                            // color:['#ff7700','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
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
                                data: ['0825', '0826', '0827', '0828', '0829', '0830', '0831', '0901', '0902', '0903', '0904', '0905', '0906', '0907', '0908', '0909', '0910', '0911', '0912', '0913', '0914', '0915', '0916', '0917', '0918', '0919', '0920', '0921', '0922', '0923']
                            }],
                            yAxis: [{
                                type: 'value'
                            }],
                            series: [{
                                name: '联盟广告',
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
                                data: [220, 182, 191, 234, 290, 330, 310, 220, 111, 191, 234, 212, 330, 310, 345, 182, 191, 234, 290, 123, 310, 220, 182, 189, 234, 290, 330, 222, 432, 310]
                            }]
                        };
                        setTimeout(function() {
                            _this.myChart2.clear();
                            _this.myChart2 = echarts.init(document.getElementById('main2'));
                            _this.myChart2.setOption(option2);
                            _this.myChart3.clear();
                            _this.myChart3 = echarts.init(document.getElementById('main3'));
                            _this.myChart3.setOption(option3);
                            _this.loading = false;
                        }, 2000);
                        break;
                    case 2:
                        _this.myChart2title = '会员店数据统计';
                        _this.selectarr = [{
                            'lable': '会员总店',
                            'value': '1'
                        }, {
                            'lable': '交易会员店',
                            'value': '2'
                        }, {
                            'lable': '活跃会员店',
                            'value': '3'
                        }, {
                            'lable': 'vip会员店',
                            'value': '4'
                        }];
                        _this.selectvalue = '1';
                        _this.myChart3title = _this.selectarr[0].lable;
                        var option2 = {
                            tooltip: {
                                trigger: 'item',
                                formatter: "{a} <br/>{b}: {c} ({d}%)"
                            },
                            series: [{
                                name: _this.myChart2title,
                                type: 'pie',
                                radius: ['50%', '70%'],
                                center: ['50%', '50%'],
                                avoidLabelOverlap: false,
                                color: ['#6c81b3', '#ff7700', '#2cc689'],
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

                                data: [{
                                    value: 35,
                                    name: '进销存营业收入1',
                                }, {
                                    value: 20,
                                    name: '进销存营业收入2'
                                }, {
                                    value: 25,
                                    name: '进销存营业收入3'
                                }]
                            }]
                        };
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
                                data: ['0825', '0826', '0827', '0828', '0829', '0830', '0831', '0901', '0902', '0903', '0904', '0905', '0906', '0907', '0908', '0909', '0910', '0911', '0912', '0913', '0914', '0915', '0916', '0917', '0918', '0919', '0920', '0921', '0922', '0923']
                            }],
                            yAxis: [{
                                type: 'value'
                            }],
                            series: [{
                                name: '联盟广告',
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
                                data: [220, 182, 191, 234, 290, 330, 310, 220, 111, 191, 234, 212, 330, 310, 345, 182, 191, 234, 290, 123, 310, 220, 182, 189, 234, 290, 330, 222, 432, 310]
                            }]
                        };
                        setTimeout(function() {
                            _this.myChart2.clear();
                            _this.myChart2 = echarts.init(document.getElementById('main2'));
                            _this.myChart2.setOption(option2);
                            _this.myChart3.clear();
                            _this.myChart3 = echarts.init(document.getElementById('main3'));
                            _this.myChart3.setOption(option3);
                            _this.loading = false;
                        }, 2000);
                        break;
                    default:

                }


            }

        },
        radiochange: function(item) {
            let _this = this;
            _this.loading = true;
            switch (_this.radiovalue) {
                case '1':
                    _this.myChart2 = echarts.init(document.getElementById('main2'));
                    _this.myChart3 = echarts.init(document.getElementById('main3'));
                    var option2 = {
                        tooltip: {
                            trigger: 'item',
                            formatter: "{a} <br/>{b}: {c} ({d}%)"
                        },
                        series: [{
                            name: _this.myChart2title,
                            type: 'pie',
                            radius: ['50%', '70%'],
                            center: ['50%', '50%'],
                            avoidLabelOverlap: false,
                            color: ['#6c81b3', '#ff7700', '#2cc689'],
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

                            data: [{
                                value: 35,
                                name: '进销存营业收入1',
                            }, {
                                value: 20,
                                name: '进销存营业收入2'
                            }, {
                                value: 25,
                                name: '进销存营业收入3'
                            }]
                        }]
                    };
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
                        // color:['#ff7700','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
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
                            data: ['0825', '0826', '0827', '0828', '0829', '0830', '0831', '0901', '0902', '0903', '0904', '0905', '0906', '0907', '0908', '0909', '0910', '0911', '0912', '0913', '0914', '0915', '0916', '0917', '0918', '0919', '0920', '0921', '0922', '0923']
                        }],
                        yAxis: [{
                            type: 'value'
                        }],
                        series: [{
                            name: '联盟广告',
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
                            data: [220, 182, 191, 234, 290, 330, 310, 220, 111, 191, 234, 212, 330, 310, 345, 182, 191, 234, 290, 123, 310, 220, 182, 189, 234, 290, 330, 222, 432, 310]
                        }]
                    };
                    setTimeout(function() {
                        _this.myChart2.clear();
                        _this.myChart2 = echarts.init(document.getElementById('main2'));
                        _this.myChart2.setOption(option2);
                        _this.myChart3.clear();
                        _this.myChart3 = echarts.init(document.getElementById('main3'));
                        _this.myChart3.setOption(option3);
                        _this.loading = false;
                    }, 2000);
                    break;

                case '2':

                    var option2 = {
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'shadow'
                            }
                        },
                        grid: {
                            top: '0',
                            left: '0',
                            right: '0',
                            bottom: '0',

                        },
                        xAxis: {
                            type: 'value',
                            boundaryGap: [0, 0.01]
                        },
                        yAxis: {
                            type: 'category',
                            data: ['巴西', '印尼', '美国',  '总数']
                        },
                        series: [{
                            name: '2011年',
                            type: 'bar',
                            data: [20, 30, 50,  100]
                        }]
                    };
                    var option3 = {
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                            }
                        },
                        color: ['#ff7700', '#6c81b3'],
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        xAxis: [{
                            type: 'category',
                            data: ['2016-09', '2016-10', '2016-11', '2016-12', '2017-01', '2017-02', '2017-03', '2017-04', '2017-05', '2017-06', '2017-07', '2017-08']
                        }],
                        yAxis: [{
                            type: 'value'
                        }],
                        series: [{
                            name: '当前数据',
                            type: 'bar',
                            data: [320, 332, 301, 334, 390, 330, 320, 310, 330, 250, 120, 120]
                        }, {
                            name: '对比数据',
                            type: 'bar',
                            stack: '广告',
                            data: [120, 132, 101, 134, 90, 230, 210, 350, 120, 520, 100, 120]
                        }]
                    };

                    setTimeout(function() {
                        _this.myChart2.clear();
                        _this.myChart2 = echarts.init(document.getElementById('main2'));
                        _this.myChart2.setOption(option2);
                        _this.myChart3.clear();
                        _this.myChart3 = echarts.init(document.getElementById('main3'));
                        _this.myChart3.setOption(option3);
                        _this.loading = false;
                    }, 2000);
                    break;
                default:

            }






        },
        visiblechange: function(b) {
            let _this = this;
            if (b) {
                _this.selectchangevalue = true;
            }

        },
        selectchange: function(item) {
            let _this = this;

            if (item && _this.selectchangevalue) {
                _this.myChart3title = _this.selectarr[item - 1].lable;
                _this.myChart3.showLoading({
                    'color': '#ff7700'
                });
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
                        data: ['0825', '0826', '0827', '0828', '0829', '0830', '0831', '0901', '0902', '0903', '0904', '0905', '0906', '0907', '0908', '0909', '0910', '0911', '0912', '0913', '0914', '0915', '0916', '0917', '0918', '0919', '0920', '0921', '0922', '0923']
                    }],
                    yAxis: [{
                        type: 'value'
                    }],
                    series: [{
                        name: '金额',
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
                        data: [220, 182, 191, 234, 290, 330, 310, 220, 111, 191, 234, 212, 330, 310, 345, 182, 191, 234, 290, 123, 310, 220, 182, 189, 234, 290, 330, 222, 432, 310]
                    }]
                };
                setTimeout(function() {
                    _this.myChart3.clear();
                    _this.myChart3 = echarts.init(document.getElementById('main3'));
                    _this.myChart3.hideLoading();

                    _this.myChart3.setOption(option3, false, false);
                }, 2000)


            }

            _this.selectchangevalue = false;



        }
    },
    components: {
        rate,
        RadioGroup,
        wradio,
        wselect,
        woption
    }
}

</script>
