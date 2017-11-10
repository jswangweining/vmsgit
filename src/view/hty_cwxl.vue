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
}

.dbfx-trItem {
    width: 8rem;
    height: 3rem;
    overflow: hidden;
    position: relative;
}

.dbfx-trIteml {
  position: absolute;
  width: 4rem;
  height: 1.5rem;
  line-height: 2rem;
  font-weight: 600;
  left:0.5rem;
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

</style>

<template>

<div class="bodyscroll" v-loading.body='loadingall'>
    <div class="w-pos">
        <span>首页</span>/<span>汇天眼</span>/<span class="w-pos-active">财务效率</span>
    </div>
    <div class="w-con">
        <div class="w-search">
            <wform :inline="true" :model="formdata" label-position="right" class="demo-form-inline">
                <form-item label="选择日期：">
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
                            雷达图
                        </div>

                        <div class="dbfx-tr">
                            <div class="dbfx-trline">
                                <div class="dbfx-trItem dbfx-trItemBlue">
                                    <div class="dbfx-trIteml">
                                      销售毛利率
                                    </div>
                                    <div class="dbfx-trItemr">
                                      <span>13.45</span>%
                                    </div>
                                      <div class="dbfx-trItemd">
                                        同比11.93%
                                      </div>
                                </div>
                                <div class="dbfx-trItem dbfx-trItemBlue">
                                  1
                                </div>
                                <div class="dbfx-trItem dbfx-trItemBlue">
                                    1
                                </div>
                                <div class="dbfx-trItem dbfx-trItemBlue">
                                    1
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
