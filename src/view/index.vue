<style lang="scss">

@import "../assets/scss/common.scss";
.w-layout {
    // min-height: 650px;
    height: 100%;
    min-width: 1300px;
    display: flex;
    flex-direction: column;
}

.w-hearder {
    position: relative;
    height: 2rem;
    background-color: #5977c1;
    overflow: hidden;
}

.w-logo {
    position: absolute;
    left: 0.75rem;
    top: 0.5rem;
    width: 183px;
    height: 20px;
    background-image: url("../assets/img/title-logo.png");
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
    padding: 0 0.75rem;
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

.w-navc {
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

.w-content {
    flex: 1;
    display: flex;
    // position: absolute;
    // width: 100%;
    // height: auto;
    // top: 2rem;
    // bottom: 0;
}

.w-left {
    width: 6.5rem;
    height: 100%;
    background-color: $left_bg_color;
    overflow-y: auto;
    overflow-x: hidden;
    background-image: url('../assets/img/leftbg.png');
    background-position: left bottom;
    background-repeat: repeat-x;
}

.w-right {
    flex: 1;
    height: 100%;
    background-color: $frame_bg_colorf3;
    overflow-x: hidden;
    overflow-y: auto;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}

</style>

<template>

<div class="w-layout">
    <div class="w-hearder">
        <div class="w-logo">
        </div>
        <ul class="w-nav">
            <li v-for="(item,index) in navelist" @click='navclick(index,$event)' :class="index==5 ? 'w-navc' : ''">
                {{item}}
            </li>
        </ul>

        <div class="w-userinfo">
            <dropdown trigger="click" @command='dropdownclick'>
                <span class="el-dropdown-link">
                  <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-yonghu"></use>
                </svg><span class="w-username">你好，{{userName}}</span><i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
                <dropdown-menu slot="dropdown">
                    <dropdown-item command='grxx'>个人信息</dropdown-item>
                    <!-- <dropdown-item command='zhgl'>账号管理</dropdown-item> -->
                    <!-- <dropdown-item command='zx'>注销</dropdown-item> -->
                </dropdown-menu>
            </dropdown>
        </div>
    </div>

    <div class="w-content">
        <div class="w-left">
            <menulist :naveactive='naveactive' :subnamepath='subnamepath' :btnClick='btnClick'></menulist>
        </div>
        <div class="w-right">
            <transition name="fade" mode="out-in">
                <router-view @userInfo='userInfo'></router-view>
            </transition>
        </div>
    </div>
</div>

</template>

<script>

import $ from 'jquery'
import '../assets/fonts/iconfont'

import menulist from '../components/menulist.vue'

//elementui
import dropdown from 'element-ui/packages/dropdown/src/dropdown.vue'
import DropdownMenu from 'element-ui/packages/dropdown/src/dropdown-menu.vue'
import DropdownItem from 'element-ui/packages/dropdown/src/dropdown-item.vue'
import MessageBox from 'element-ui/packages/message-box/index.js'

export default {

    data: () => ({
        userName: '',
        domin: '',
        navelist: ['首页', '商品', '订单', '会员', '汇天眼'],
        naveactive: 5,
        subnamepath: '',
        btnClick: false
    }),


    created() {
        let _this = this;
        _this.subnamepath = _this.$route.name;
    },
    mounted() {
        var _this = this;
        _this.$nextTick(function() {

        })
    },
    methods: {
        navclick: function(index, event) {

            var _this = this;
            var el = event.target;
            if (_this.btnClick) {
                $('.w-navc').removeClass('w-navc');
                $(el).addClass('w-navc');

                switch (index) {
                    case 0:
                        window.location.href = _this.domin + '/system/success'
                        break;
                    case 1:
                        window.location.href = _this.domin + '/pcm/showHTDProductInitPage?productType=1'
                        break;
                    case 2:
                        window.location.href = _this.domin + '/HTDorder/manageOrder'
                        break;
                    case 3:
                        window.location.href = _this.domin + '/member/showReviewMemberPage'
                        break;
                    default:
                }
            }
        },
        userInfo: function(a, b) {
            let _this = this;
            _this.btnClick = true;
            _this.userName = a;
            _this.domin = b;
        },
        dropdownclick: function(command, instance) {
            let _this = this;
            if (command == 'grxx') {
                if (_this.btnClick) {
                    window.location.href = _this.domin + '/system/myInformation'
                }
            }
            // if (command == 'zhgl') {
            //   if(_this.btnClick){
            //     window.location.href=_this.domin+''
            //   }
            // }
            // if (command == 'zx') {
            //     MessageBox({
            //         'title': '提示',
            //         'message': '确认注销该账号并返回登录页面吗？',
            //         'type': 'warning',
            //         'showCancelButton': true,
            //         'callback': function(action) {
            //             if (action == 'confirm') {
            //                 _this.adminApi.setState({});
            //                 setTimeout(function() {
            //                     _this.$router.push({
            //                         name: 'login'
            //                     })
            //                 }, 1000)
            //             }
            //         }
            //     })
            // }
        }
    },
    components: {
        dropdown,
        DropdownMenu,
        DropdownItem,
        menulist,
        MessageBox
    }
}

</script>
