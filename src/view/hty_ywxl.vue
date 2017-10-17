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
    width: 10rem;
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
}

.w-ywxl-r-ditemcbtn1:hover {
    border: 1px solid #c6d7ff;
    background-color: #fafbff;
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

.rankingt {
    width: 95%;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
}

.rankingta {
    flex: 1;
}

.rankingtb {
    flex: 2;
    padding-left: 0.5rem;
    .el-radio__label {
        color: #666;
    }
}

.rankingc {
    display: flex;
}

.rankingca {
    flex: 1;
    margin-right: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.rankingca1 {
    flex: 1;
    border: 1px solid #f3f3f3;
    margin-bottom: 5px;
}

.rankingca1p1 {
    font-size: 0.6rem;
    font-weight: 600;
    color: #333;
    padding-top: 0.5rem;
    padding-bottom: 0.25rem;
    text-align: center;
    span {
        font-weight: normal;
    }
}

.rankingca1p2 {
    font-size: 1rem;
    color: #ff7700;
    font-weight: 600;
    padding-top: 0.25rem;
    padding-bottom: 0.5rem;
    text-align: center;
}

.rankingca1p3 {
    font-size: 1rem;
    color: #6c81b3;
    font-weight: 600;
    padding-top: 0.25rem;
    padding-bottom: 0.5rem;
    text-align: center;
}

.rankingcb {
    flex: 2;
    display: flex;
    flex-direction: column;
}

.rankingcbt {
    height: 2rem;
    border: 1px solid #d7d7d7;
    display: flex;
    background-color: #fbfbfb;
    color: #666;
    text-align: center;
    line-height: 2rem;
    font-weight: 600;
}

.rankingcbta {
    width: 3rem;
    height: 2rem;
    border-right: 1px solid #f3f3f3;
}

.rankingcbtb {
    flex: 1;
}

.rankingcbd {
    flex: 1;
    color: #666;
    // display: flex;
    // flex-direction: column;
    .w-active {
        border-top: 1px solid #ff7700;
        border-left: 1px solid #ff7700;
        border-bottom: 1px solid #ff7700;
        border-right: 1px solid #ff7700;
        background-color: #fff8f1;
        &:after {
            content: '当前位置';
            display: inline-block;
            float: right;
            height: 27px;
            width: 35px;
            font-size: 12px;
            line-height: 12px;
            color: #ff7700;
        }
    }
}

.rankingcbda {
    height: 10%;
    border-bottom: 1px solid #f3f3f3;
    display: flex;
    align-items: center;
}

.rankingcbda1 {
    width: 3rem;
    text-align: center;
}

.rankingcbda2 {
    flex: 1;
}

</style>

<template>

<div v-loading.body='loadingall' style="width:100%; height:100%">
    <div class="w-pos">
        <span>首页</span>/<span>汇天眼</span>/<span class="w-pos-active">业务效率</span>
    </div>

    <div class="w-ywxl-t">
        <div class="w-ywxl-titem1">
            <div class="w-ywxl-titema">
                当前平台估值（万）
            </div>
            <div class="w-ywxl-titemb">
                {{topdata.ptgz}}
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
                        <span class="w-ywxl-titem2itemcss3bs2">{{topdata.zhnl}}</span>
                    </div>
                </div>

            </div>
            <div class="w-ywxl-titem2item w-ywxl-titem3item">
                <div class="w-ywxl-titem2itema">
                    <span class="w-ywxl-titem2itemas1">市盈率（万）</span>
                    <span class="w-ywxl-titem2itemas2">{{topdata.pegz}}</span>
                </div>
                <div class="w-ywxl-titem2itema">
                    <span class="w-ywxl-titem2itemas1">市净率（万）</span>
                    <span class="w-ywxl-titem2itemas2">{{topdata.pbgz}}</span>
                </div>
                <div class="w-ywxl-titem2itema">
                    <span class="w-ywxl-titem2itemas1">市销率（万）</span>
                    <span class="w-ywxl-titem2itemas2">{{topdata.psgz}}</span>
                </div>
                <div class="w-ywxl-titem2itema">
                    <span class="w-ywxl-titem2itemas1">会员店价值（万）</span>
                    <span class="w-ywxl-titem2itemas2">{{topdata.cvmgz}}</span>
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
                    <wradio label="0">当月统计</wradio>
                    <wradio label="1">全年统计</wradio>
                </radio-group>
            </div>
        </div>

        <div class="w-ywxl-dd">
            <div class="w-ywxl-ddl">
                <div class="w-ywxl-ddla" :class="[index==0?'w-ywxl-ddlac':'']" v-for='(item,index) in wholeLeft' @click='monthtabs(index,$event)'>
                    <p class="w-ywxl-ddlap1">{{item.name}}<span v-if='index==0 || index==1'>（万元）</span><span v-if='index==2'>（家）</span></p>
                    <p class="w-ywxl-ddlap2">{{item.num}}</p>
                    <p class="w-ywxl-ddlap3">同比{{item.pair}}%
                        <svg class="icon" aria-hidden="true" v-if='item.index==0'>
                            <use xlink:href="#icon-jiantou1"></use>
                        </svg>
                        <svg class="icon" aria-hidden="true" v-if='item.index==1'>
                            <use xlink:href="#icon-jiantou2"></use>
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
                        <div class="w-ywxl-ddrtditem2" v-for='(item,index) in wholeTop'>
                            <p class="w-ywxl-ddrtditem2p1"><span class="w-ywxl-ddrtditem2p1s1" v-if='index==0'></span><span class="w-ywxl-ddrtditem2p1s2" v-if='index==1'></span><span class="w-ywxl-ddrtditem2p1s3" v-if='index==2'></span>{{item.name}}</p>
                            <p class="w-ywxl-ddrtditem2p2">{{item.num}}</p>
                            <p class="w-ywxl-ddrtditem2p3" v-if='monthtab==0 || monthtab==1'>同比{{item.pair}}%
                                <svg class="icon" aria-hidden="true" v-if='item.index==0'>
                                    <use xlink:href="#icon-jiantou1"></use>
                                </svg>
                                <svg class="icon" aria-hidden="true" v-if='item.index==1'>
                                    <use xlink:href="#icon-jiantou2"></use>
                                </svg>
                            </p>
                            <p class="w-ywxl-ddrtditem2p3" v-if='monthtab==2'>{{item.pair}}

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
                            <span class="w-ywxl-ddrdtbs1" v-if='radiovalue=="1"'>当前数据</span>
                            <span class="w-ywxl-ddrdtbs2" v-if='radiovalue=="1" && monthtab!==2'>对比数据</span>
                            <wselect v-model="selectvalue" placeholder="请选择" style="width:150px; color:#4a4a4a" @change='selectchange' @visible-change='visiblechange'>
                                <woption :label='item.label' :value='item.value' v-for='(item,index) in wholeName'>
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
            平台公司排名
        </div>
        <div class="w-ywxl-r-d">
            <div class="w-ywxl-r-ditem">
                <div class="w-ywxl-r-ditema">
                    <div class="w-ywxl-r-ditemb">
                        当前平台估值
                    </div>
                    <div class="w-ywxl-r-ditemc">
                        <button type="button" name="button" class="w-ywxl-r-ditemcbtn">
                            分部排名&nbsp;&nbsp;<span class="w-ywxl-r-ditemcbtns1">{{wholeSort.valueBranch}}</span>名
                        </button>
                        <button type="button" name="button" class="w-ywxl-r-ditemcbtn">
                            整体排名&nbsp;&nbsp;<span class="w-ywxl-r-ditemcbtns2">{{wholeSort.valueHead}}</span>名
                        </button>
                    </div>
                </div>
            </div>
            <div class="w-ywxl-r-ditem">
                <div class="w-ywxl-r-ditema">
                    <div class="w-ywxl-r-ditemb">
                        总营业收入
                    </div>
                    <div class="w-ywxl-r-ditemc">
                        <button type="button" name="button" class="w-ywxl-r-ditemcbtn w-ywxl-r-ditemcbtn1" @click='opendiv(1,1,"总营业收入排名")'>
                            分部排名&nbsp;&nbsp;<span class="w-ywxl-r-ditemcbtns1">{{wholeSort.incomeBrach}}</span>名
                        </button>
                        <button type="button" name="button" class="w-ywxl-r-ditemcbtn w-ywxl-r-ditemcbtn1" @click='opendiv(2,2,"总营业收入排名")'>
                            整体排名&nbsp;&nbsp;<span class="w-ywxl-r-ditemcbtns2">{{wholeSort.incomeHead}}</span>名
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
                        <button type="button" name="button" class="w-ywxl-r-ditemcbtn w-ywxl-r-ditemcbtn1" @click='opendiv(1,3,"总销售金额排名")'>
                            分部排名&nbsp;&nbsp;<span class="w-ywxl-r-ditemcbtns1">{{wholeSort.saleBrach}}</span>名
                        </button>
                        <button type="button" name="button" class="w-ywxl-r-ditemcbtn w-ywxl-r-ditemcbtn1" @click='opendiv(2,4,"总销售金额排名")'>
                            整体排名&nbsp;&nbsp;<span class="w-ywxl-r-ditemcbtns2">{{wholeSort.saleHead}}</span>名
                        </button>
                    </div>
                </div>
            </div>
            <div class="w-ywxl-r-ditem">
                <div class="w-ywxl-r-ditema">
                    <div class="w-ywxl-r-ditemb">
                        新增会员店总数
                    </div>
                    <div class="w-ywxl-r-ditemc">
                        <button type="button" name="button" class="w-ywxl-r-ditemcbtn w-ywxl-r-ditemcbtn1" @click='opendiv(1,5,"新增会员店总数排名")'>
                            分部排名&nbsp;&nbsp;<span class="w-ywxl-r-ditemcbtns1">{{wholeSort.memeberBrach}}</span>名
                        </button>
                        <button type="button" name="button" class="w-ywxl-r-ditemcbtn w-ywxl-r-ditemcbtn1" @click='opendiv(2,6,"新增会员店总数排名")'>
                            整体排名&nbsp;&nbsp;<span class="w-ywxl-r-ditemcbtns2">{{wholeSort.memeberHead}}</span>名
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <wdialog v-model="rankingshow">
        <div class="rankingt" slot='title'>

            <div class="rankingta">
                <div class="w-ywxl-r-t">
                    {{dialogtitle}}
                </div>
            </div>
            <div class="rankingtb">
                <radio-group v-model="dialogradiovalue" @change='dialogradiochange'>
                    <wradio label="1">分部排名</wradio>
                    <wradio label="2">整体排名</wradio>
                </radio-group>

            </div>
        </div>
        <div class="rankingc" v-loading='dialogload'>
            <div class="rankingca">
                <div class="rankingca1">
                    <div class="rankingca1p1">{{dialogarr[0]}}</div>
                    <div class="rankingca1p2">{{dialogvaluearr.sortNum}}</div>
                </div>
                <div class="rankingca1">
                    <div class="rankingca1p1">{{dialogarr[1]}}<span v-if='dialogvalue!==5&&dialogvalue!==6'>（万元）</span><span v-else>（家）</span></div>
                    <div class="rankingca1p2">{{dialogvaluearr.companyNow}}</div>
                </div>
                <div class="rankingca1">
                    <div class="rankingca1p1">{{dialogarr[2]}}<span v-if='dialogvalue!==5&&dialogvalue!==6'>（万元）</span><span v-else>（家）</span></div>
                    <div class="rankingca1p3">{{dialogvaluearr.brachAvg}}</div>
                </div>
                <div class="rankingca1" style="margin-bottom:0px;">
                    <div class="rankingca1p1">{{dialogarr[3]}}<span v-if='dialogvalue!==5&&dialogvalue!==6'>（万元）</span><span v-else>（家）</span></div>
                    <div class="rankingca1p3">{{dialogvaluearr.headAvg}}</div>
                </div>
            </div>
            <div class="rankingcb">
                <div class="rankingcbt">
                    <div class="rankingcbta">
                        排名
                    </div>
                    <div class="rankingcbtb">
                        分部平台公司
                    </div>
                </div>
                <div class="rankingcbd">
                    <div class="rankingcbda" v-for="(item,index) in dialogvaluearr.companyList" :class="[dialogvaluearr.sortNum==item.sortNum?'w-active':'']">
                        <div class="rankingcbda1">
                            {{item.sortNum}}
                        </div>
                        <div class="rankingcbda2">
                            {{item.companyName}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </wdialog>

</div>

</template>

<script>

import $ from 'jquery'
import echarts from 'echarts'
import '../assets/fonts/iconfont'

//elementui
import Message from 'element-ui/packages/Message/index.js'
import Loading from 'element-ui/packages/loading/index.js'
import rate from 'element-ui/packages/rate/src/main.vue'
import RadioGroup from 'element-ui/packages/radio/src/radio-group.vue'
import wradio from 'element-ui/packages/radio/src/radio.vue'
import wselect from 'element-ui/packages/select/src/select.vue'
import woption from 'element-ui/packages/select/src/option.vue'
import wdialog from 'element-ui/packages/dialog/src/component.vue'

export default {
    name: "",
    data: () => ({
        userId: '',
        loading: false,
        loadingall: false,
        rankingshow: false,
        dialogradiovalue: '',
        dialogradiovaluechange: false,
        dialogvalue: '',
        dialogtitle: '',
        dialogarr: [],
        dialogvaluearr: {},
        dialogload: false,
        statvalue: 1,
        radiovalue: '',
        selectchangevalue: false,
        monthtab: 0,
        topdata: {},
        wholeSort: {},
        myChart1: '',
        myChart2title: '',
        myChart2: '',
        myChart3: '',
        myChart3title: '',
        selectvalue: '1',
        wholeName: [],
        wholeTop: [{}, {}, {}],
        wholeLeft: [{}, {}, {}]

    }),
    mounted() {
        let _this = this;
        // _this.adminApi.islogin();

        _this.userId = _this.$store.state.userId;
        this.$nextTick(function() {
            var url = _this.adminApi.host + '/htypctorg/index/handle',
                data = {
                    'userId': _this.userId
                },
                loading = function() {
                    //_this.loadingall = true;
                },
                success = function(data) {
                    if (data.code == '1') {
                        _this.topdata = data.data;
                        _this.statvalue = data.data.starNum
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
                                    value: [_this.topdata.zhnl, _this.topdata.cvmgz, _this.topdata.pegz, _this.topdata.psgz, _this.topdata.pbgz],
                                    name: '当前平台估值'
                                }]
                            }, ]
                        }
                        _this.myChart1.setOption(option);
                    }
                    if (data.code == '2001') {
                        Message({
                            'message': '会员不存在',
                            'type': 'error',
                            'onClose': function() {
                                _this.$router.push({
                                    path: '/'
                                })
                            }
                        });
                    }
                    if (data.code == '3001') {
                        Message({
                            'message': '登陆已超时',
                            'type': 'error',
                            'onClose': function() {
                                _this.$router.push({
                                    path: '/'
                                })
                            }
                        });
                    }
                },
                complete = function() {
                    // _this.loading = false;
                }
            _this.adminApi.getJsonp(url, data, loading, success, complete)
            _this.radiovalue = '0';
            var url = _this.adminApi.host + '/htypctorg/index/wholeSort',
                data = {
                    'userId': _this.userId
                },
                loading = function() {

                },
                success = function(data) {
                    if (data.code == '1') {
                        _this.wholeSort = data.data
                    }
                },
                complete = function() {

                }
            _this.adminApi.getJsonp(url, data, loading, success, complete)
        })

    },
    methods: {
        monthtabs: function(index, event) {
            let _this = this;
            var el = event.target;
            if (index == _this.monthtab) {
                return;
            } else {
                //_this.loading = true;
                $('.w-ywxl-ddlac').removeClass('w-ywxl-ddlac')
                $(el).hasClass('w-ywxl-ddla') ? $(el).addClass('w-ywxl-ddlac') : $(el).parentsUntil('w-ywxl-ddl').addClass('w-ywxl-ddlac')
                _this.monthtab = index;
                _this.selectvalue = '0';

                var url = _this.adminApi.host + '/htypctorg/index/whole',
                    data = {
                        'userId': _this.userId,
                        'date': parseInt(_this.radiovalue),
                        'type': parseInt(_this.monthtab),
                        'kind': parseInt(_this.selectvalue)
                    },
                    loading = function() {
                        _this.loading = true;
                    },
                    success = function(data) {
                        if (data.code == '1') {
                            _this.wholeTop = data.data.wholeTop;
                            _this.wholeLeft = data.data.wholeLeft;
                            _this.wholeName = data.data.wholeName;
                            _this.myChart2title = _this.wholeName[0].label + '占比';
                            _this.myChart3title = _this.wholeName[0].label + '趋势';

                            switch (_this.radiovalue) {
                                case "0":
                                    if(_this.monthtab==0 || _this.monthtab==1)
                                    {
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
                                              data: data.data.wholePic
                                          }]
                                      };
                                      _this.myChart2.clear();
                                      _this.myChart2 = echarts.init(document.getElementById('main2'));
                                      _this.myChart2.setOption(option2);
                                    }
                                    else {
                                      var option2 = {
                                          tooltip: {
                                              trigger: 'axis',
                                              axisPointer: {
                                                  type: 'shadow'
                                              }
                                          },
                                          grid: {
                                              top: '0',
                                              left: '40',
                                              right: '0',
                                              bottom: '0',

                                          },
                                          xAxis: {
                                              type: 'value',
                                              boundaryGap: [0, 0.01]
                                          },
                                          yAxis: {
                                              type: 'category',
                                              data: ['VIP', '活跃', '交易', '总数'],
                                          },
                                          series: [{
                                              type: 'bar',
                                              data: [{
                                                  value: data.data.wholePic[3].value,
                                                  itemStyle: {
                                                      normal: {
                                                          color: '#2cc689'
                                                      }
                                                  }
                                              }, {
                                                  value: data.data.wholePic[2].value,
                                                  itemStyle: {
                                                      normal: {
                                                          color: '#ff7700'
                                                      }
                                                  }
                                              }, {
                                                  value: data.data.wholePic[1].value,
                                                  itemStyle: {
                                                      normal: {
                                                          color: '#6c81b3'
                                                      }
                                                  }
                                              }, {
                                                  value: data.data.wholePic[0].value,
                                                  itemStyle: {
                                                      normal: {
                                                          color: '#ff7700'
                                                      }
                                                  }
                                              }],
                                              barWidth: 10,
                                          }, ]
                                      };
                                      _this.myChart2.clear();
                                      _this.myChart2 = echarts.init(document.getElementById('main2'));
                                      _this.myChart2.setOption(option2);
                                    }
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
                                            data: data.data.wholeBottomDate
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
                                            data: data.data.wholeBottom
                                        }]
                                    };
                                    _this.myChart3.clear();
                                    _this.myChart3 = echarts.init(document.getElementById('main3'));
                                    _this.myChart3.setOption(option3);

                                    break;
                                case "1":
                                      if(_this.monthtab==0 || _this.monthtab==1)
                                      {
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
                                                data: data.data.wholePic
                                            }]
                                        };
                                        _this.myChart2.clear();
                                        _this.myChart2 = echarts.init(document.getElementById('main2'));
                                        _this.myChart2.setOption(option2);
                                        var option3 = {
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
                                                data: data.data.wholeBottomDate
                                            }],
                                            yAxis: [{
                                                type: 'value'
                                            }],
                                            series: [{
                                                name: '当前数据',
                                                barWidth: 10,
                                                type: 'bar',
                                                data:data.data.wholeBottom
                                            }, {
                                                name: '对比数据',
                                                type: 'bar',
                                                barWidth: 10,
                                                stack: '广告',
                                                data: data.data.wholeBottomPair
                                            }]
                                        };
                                        _this.myChart3.clear();
                                        _this.myChart3 = echarts.init(document.getElementById('main3'));
                                        _this.myChart3.setOption(option3);
                                      }
                                      else {
                                        var option2 = {
                                            tooltip: {
                                                trigger: 'axis',
                                                axisPointer: {
                                                    type: 'shadow'
                                                }
                                            },
                                            grid: {
                                                top: '0',
                                                left: '40',
                                                right: '0',
                                                bottom: '0',

                                            },
                                            xAxis: {
                                                type: 'value',
                                                boundaryGap: [0, 0.01]
                                            },
                                            yAxis: {
                                                type: 'category',
                                                data: ['VIP', '活跃', '交易', '总数'],
                                            },
                                            series: [{
                                                type: 'bar',
                                                data: [{
                                                    value: data.data.wholePic[3].value,
                                                    itemStyle: {
                                                        normal: {
                                                            color: '#2cc689'
                                                        }
                                                    }
                                                }, {
                                                    value: data.data.wholePic[2].value,
                                                    itemStyle: {
                                                        normal: {
                                                            color: '#ff7700'
                                                        }
                                                    }
                                                }, {
                                                    value: data.data.wholePic[1].value,
                                                    itemStyle: {
                                                        normal: {
                                                            color: '#6c81b3'
                                                        }
                                                    }
                                                }, {
                                                    value: data.data.wholePic[0].value,
                                                    itemStyle: {
                                                        normal: {
                                                            color: '#ff7700'
                                                        }
                                                    }
                                                }],
                                                barWidth: 10,
                                            }, ]
                                        };
                                        _this.myChart2.clear();
                                        _this.myChart2 = echarts.init(document.getElementById('main2'));
                                        _this.myChart2.setOption(option2);
                                        var option3 = {
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
                                                data: data.data.wholeBottomDate
                                            }],
                                            yAxis: [{
                                                type: 'value'
                                            }],
                                            series: [{
                                                name: '当前数据',
                                                barWidth: 10,
                                                type: 'bar',
                                                data:data.data.wholeBottom
                                            }]
                                        };
                                        _this.myChart3.clear();
                                        _this.myChart3 = echarts.init(document.getElementById('main3'));
                                        _this.myChart3.setOption(option3);
                                      }

                                    break;
                                default:

                            }

                        }

                    },
                    complete = function() {
                        _this.loading = false;
                    }
                _this.adminApi.getJsonp(url, data, loading, success, complete)


            }
        },
        radiochange: function(item) {
            let _this = this;
            _this.myChart2 = echarts.init(document.getElementById('main2'));
            _this.myChart3 = echarts.init(document.getElementById('main3'));


            var url = _this.adminApi.host + '/htypctorg/index/whole',
                data = {
                    'userId': _this.userId,
                    'date': parseInt(_this.radiovalue),
                    'type': parseInt(_this.monthtab),
                    'kind': parseInt(_this.selectvalue)
                },
                loading = function() {
                    _this.loading = true;
                },
                success = function(data) {
                    if (data.code == '1') {
                        _this.wholeTop = data.data.wholeTop;
                        _this.wholeLeft = data.data.wholeLeft;
                        _this.wholeName = data.data.wholeName;
                        _this.myChart2title = _this.wholeName[0].label + '占比';
                        _this.myChart3title = _this.wholeName[0].label + '趋势';

                        switch (_this.radiovalue) {
                            case "0":
                                if(_this.monthtab==0 || _this.monthtab==1)
                                {
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
                                          data: data.data.wholePic
                                      }]
                                  };
                                  _this.myChart2.clear();
                                  _this.myChart2 = echarts.init(document.getElementById('main2'));
                                  _this.myChart2.setOption(option2);
                                }
                                else {
                                  var option2 = {
                                      tooltip: {
                                          trigger: 'axis',
                                          axisPointer: {
                                              type: 'shadow'
                                          }
                                      },
                                      grid: {
                                          top: '0',
                                          left: '40',
                                          right: '0',
                                          bottom: '0',

                                      },
                                      xAxis: {
                                          type: 'value',
                                          boundaryGap: [0, 0.01]
                                      },
                                      yAxis: {
                                          type: 'category',
                                          data: ['VIP', '活跃', '交易', '总数'],
                                      },
                                      series: [{
                                          type: 'bar',
                                          data: [{
                                              value: data.data.wholePic[3].value,
                                              itemStyle: {
                                                  normal: {
                                                      color: '#2cc689'
                                                  }
                                              }
                                          }, {
                                              value: data.data.wholePic[2].value,
                                              itemStyle: {
                                                  normal: {
                                                      color: '#ff7700'
                                                  }
                                              }
                                          }, {
                                              value: data.data.wholePic[1].value,
                                              itemStyle: {
                                                  normal: {
                                                      color: '#6c81b3'
                                                  }
                                              }
                                          }, {
                                              value: data.data.wholePic[0].value,
                                              itemStyle: {
                                                  normal: {
                                                      color: '#ff7700'
                                                  }
                                              }
                                          }],
                                          barWidth: 10,
                                      }, ]
                                  };
                                  _this.myChart2.clear();
                                  _this.myChart2 = echarts.init(document.getElementById('main2'));
                                  _this.myChart2.setOption(option2);
                                }
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
                                        data: data.data.wholeBottomDate
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
                                        data: data.data.wholeBottom
                                    }]
                                };
                                _this.myChart3.clear();
                                _this.myChart3 = echarts.init(document.getElementById('main3'));
                                _this.myChart3.setOption(option3);

                                break;
                            case "1":
                                  if(_this.monthtab==0 || _this.monthtab==1)
                                  {
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
                                            data: data.data.wholePic
                                        }]
                                    };
                                    _this.myChart2.clear();
                                    _this.myChart2 = echarts.init(document.getElementById('main2'));
                                    _this.myChart2.setOption(option2);
                                    var option3 = {
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
                                            data: data.data.wholeBottomDate
                                        }],
                                        yAxis: [{
                                            type: 'value'
                                        }],
                                        series: [{
                                            name: '当前数据',
                                            barWidth: 10,
                                            type: 'bar',
                                            data:data.data.wholeBottom
                                        }, {
                                            name: '对比数据',
                                            type: 'bar',
                                            barWidth: 10,
                                            data: data.data.wholeBottomPair
                                        }]
                                    };
                                    _this.myChart3.clear();
                                    _this.myChart3 = echarts.init(document.getElementById('main3'));
                                    _this.myChart3.setOption(option3);
                                  }
                                  else {
                                    var option2 = {
                                        tooltip: {
                                            trigger: 'axis',
                                            axisPointer: {
                                                type: 'shadow'
                                            }
                                        },
                                        grid: {
                                            top: '0',
                                            left: '40',
                                            right: '0',
                                            bottom: '0',

                                        },
                                        xAxis: {
                                            type: 'value',
                                            boundaryGap: [0, 0.01]
                                        },
                                        yAxis: {
                                            type: 'category',
                                            data: ['VIP', '活跃', '交易', '总数'],
                                        },
                                        series: [{
                                            type: 'bar',
                                            data: [{
                                                value: data.data.wholePic[3].value,
                                                itemStyle: {
                                                    normal: {
                                                        color: '#2cc689'
                                                    }
                                                }
                                            }, {
                                                value: data.data.wholePic[2].value,
                                                itemStyle: {
                                                    normal: {
                                                        color: '#ff7700'
                                                    }
                                                }
                                            }, {
                                                value: data.data.wholePic[1].value,
                                                itemStyle: {
                                                    normal: {
                                                        color: '#6c81b3'
                                                    }
                                                }
                                            }, {
                                                value: data.data.wholePic[0].value,
                                                itemStyle: {
                                                    normal: {
                                                        color: '#ff7700'
                                                    }
                                                }
                                            }],
                                            barWidth: 10,
                                        }, ]
                                    };
                                    _this.myChart2.clear();
                                    _this.myChart2 = echarts.init(document.getElementById('main2'));
                                    _this.myChart2.setOption(option2);
                                    var option3 = {
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
                                            data: data.data.wholeBottomDate
                                        }],
                                        yAxis: [{
                                            type: 'value'
                                        }],
                                        series: [{
                                            name: '当前数据',
                                            barWidth: 10,
                                            type: 'bar',
                                            data:data.data.wholeBottom
                                        }]
                                    };
                                    _this.myChart3.clear();
                                    _this.myChart3 = echarts.init(document.getElementById('main3'));
                                    _this.myChart3.setOption(option3);
                                  }

                                break;
                            default:

                        }


                    }

                },
                complete = function() {
                    _this.loading = false;
                }
            _this.adminApi.getJsonp(url, data, loading, success, complete)
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
                var url = _this.adminApi.host + '/htypctorg/index/whole',
                    data = {
                        'userId': _this.userId,
                        'date': parseInt(_this.radiovalue),
                        'type': parseInt(_this.monthtab),
                        'kind': parseInt(_this.selectvalue)
                    },
                    loading = function() {
                        _this.myChart3.showLoading({
                            'color': '#ff7700'
                        });
                    },
                    success = function(data) {
                        if (data.code == '1') {
                            _this.myChart3title = _this.wholeName[item].label + '趋势';
                            switch (_this.radiovalue) {
                                case "0":

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
                                            data: data.data.wholeBottomDate
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
                                            data: data.data.wholeBottom
                                        }]
                                    };
                                    _this.myChart3.clear();
                                    _this.myChart3 = echarts.init(document.getElementById('main3'));
                                    _this.myChart3.setOption(option3);

                                    break;
                                case "1":
                                        var option3 = {
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
                                                data: data.data.wholeBottomDate
                                            }],
                                            yAxis: [{
                                                type: 'value'
                                            }],
                                            series: [{
                                                name: '当前数据',
                                                barWidth: 10,
                                                type: 'bar',
                                                data:data.data.wholeBottom
                                            }]
                                        };
                                        _this.myChart3.clear();
                                        _this.myChart3 = echarts.init(document.getElementById('main3'));
                                        _this.myChart3.setOption(option3);
                                    break;
                                default:

                            }
                        }

                    },
                    complete = function() {
                        _this.myChart3.hideLoading();
                    }
                _this.adminApi.getJsonp(url, data, loading, success, complete)
            }
            _this.selectchangevalue = false;
        },
        opendiv: function(a, b, title) {
            let _this = this;
            _this.loading = false;
            _this.dialogradiovaluechange = false;
            _this.dialogradiovalue = a.toString();
            _this.dialogvalue = b;
            _this.dialogtitle = title;
            switch (b) {
                case 1:
                    _this.dialogarr = ['所在分部排名', '总营业收入', '分部平均值', '总部平均值']
                    break;
                case 2:
                    _this.dialogarr = ['整体排名', '总营业收入', '分部平均值', '总部平均值']
                    break;
                case 3:
                    _this.dialogarr = ['所在分部排名', '总销售金额', '分部平均值', '总部平均值']
                    break;
                case 4:
                    _this.dialogarr = ['整体排名', '总销售金额', '分部平均值', '总部平均值']
                    break;
                case 5:
                    _this.dialogarr = ['所在分部排名', '新增会员店总数', '分部平均值', '总部平均值']
                    break;
                case 6:
                    _this.dialogarr = ['整体排名', '新增会员店总数', '分部平均值', '总部平均值']
                    break;

                default:

            }
            _this.rankingshow = true;
            var url = _this.adminApi.host + '/htypctorg/index/box',
                data = {
                    'userId': _this.userId,
                    'type': b
                },
                loading = function() {
                    _this.dialogload = true;
                },
                success = function(data) {
                    _this.dialogvaluearr = data.data;
                    _this.dialogradiovaluechange = true;
                },
                complete = function() {
                    _this.dialogload = false;
                }
            _this.adminApi.getJsonp(url, data, loading, success, complete)
        },
        dialogradiochange: function() {
            let _this = this;
            if (_this.dialogradiovaluechange) {

                if (!Number.isInteger(_this.dialogvalue / 2)) {
                    _this.dialogvalue = parseInt(_this.dialogvalue) + 1;
                } else {
                    _this.dialogvalue = parseInt(_this.dialogvalue) - 1;
                }
                switch (_this.dialogvalue) {
                    case 1:
                        _this.dialogarr = ['所在分部排名', '总营业收入', '分部平均值', '总部平均值']
                        break;
                    case 2:
                        _this.dialogarr = ['整体排名', '总营业收入', '分部平均值', '总部平均值']
                        break;
                    case 3:
                        _this.dialogarr = ['所在分部排名', '总销售金额', '分部平均值', '总部平均值']
                        break;
                    case 4:
                        _this.dialogarr = ['整体排名', '总销售金额', '分部平均值', '总部平均值']
                        break;
                    case 5:
                        _this.dialogarr = ['所在分部排名', '新增会员店总数', '分部平均值', '总部平均值']
                        break;
                    case 6:
                        _this.dialogarr = ['整体排名', '新增会员店总数', '分部平均值', '总部平均值']
                        break;

                    default:

                }
                var url = _this.adminApi.host + '/htypctorg/index/box',
                    data = {
                        'userId': _this.userId,
                        'type': _this.dialogvalue
                    },
                    loading = function() {
                        _this.dialogload = true;
                    },
                    success = function(data) {
                        _this.dialogvaluearr = data.data;
                        _this.dialogradiovaluechange = true;
                    },
                    complete = function() {
                        _this.dialogload = false;
                    }
                _this.adminApi.getJsonp(url, data, loading, success, complete)

            }

        }
    },
    components: {
        rate,
        RadioGroup,
        wradio,
        wselect,
        woption,
        wdialog,
        Message
    }
}

</script>
