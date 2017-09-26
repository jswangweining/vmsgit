<style lang="scss">

@import "../assets/scss/common.scss";
.w-layout {
    height: 100%;
}

.w-hearder {
    position: relative;
    height: 2rem;
    background-color: $top_bg_color;
    overflow: hidden;
}

.w-logo {
    position: absolute;
    left: 0.75rem;
    top: 0.5rem;
    width: 183px;
    height: 20px;
    background-image: url(../assets/img/title-logo.png);
    // background-image: url(../static/img/logol.png);
    // background-size: 260px 60px;
}

.w-nav {
    position: absolute;
    left: 270px;
    right: 20rem;
    height: 2rem;
}

.w-nav li {
    padding: 0px 0.75rem;
    height: 2rem;
    float: left;
    font-size: 0.7rem;
    line-height: 2rem;
    color: $colordfff;
    transition: background-color 1s;
    cursor: pointer;
}

.w-nav li:hover {
    background-color: #33446d;
}

.w-userinfo {
    position: absolute;
    right: 1rem;
    padding-top: 0.5rem;
}

.w-username {
  margin-left: 0.3rem;
}

</style>

<template>

<div class="w-layout">
    <div class="w-hearder">
        <div class="w-logo">
        </div>
        <ul class="w-nav">
            <li>首页</li>
            <li>商品</li>
            <li>订单</li>
            <li>会员</li>
            <li>促销</li>
            <li>汇天眼</li>
        </ul>
        <div class="w-userinfo">
            <dropdown trigger="click">
                <span class="el-dropdown-link">
                  <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-yonghu"></use>
                </svg><span class="w-username">你好，汇通达测试平台</span><i class="el-icon-caret-bottom el-icon--right"></i>
  </span>
                <dropdown-menu slot="dropdown">
                    <dropdown-item command='grxx'>个人信息</dropdown-item>
                    <dropdown-item command='zhgl'>账号管理</dropdown-item>
                    <dropdown-item command='zx'>注销</dropdown-item>
                </dropdown-menu>
            </dropdown>
        </div>
    </div>
</div>

</template>

<script>

import $ from 'jquery'
import 'jquery-ui'
import '../assets/fonts/iconfont'

//elementui
import dropdown from 'element-ui/packages/dropdown/src/dropdown.vue'
import DropdownMenu from 'element-ui/packages/dropdown/src/dropdown-menu.vue'
import DropdownItem from 'element-ui/packages/dropdown/src/dropdown-item.vue'

export default {

    data: () => ({

    }),
    mounted() {
        var _this = this;
        _this.$nextTick(function() {

        })
    },
    methods: {
        aaa() {
            alert('111')
        }
    },
    components: {
        dropdown,
        DropdownMenu,
        DropdownItem,
    }
}

</script>
