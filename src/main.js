// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'



import './assets/scss/layout.scss'
// import "./static/css/layout.css"
// import "./static/css/iconfont.css"
import 'element-ui/lib/theme-default/index.css'
// import './static/css/boxer.css'
// import './utf8-php/ueditor.config.js'
// import './utf8-php/ueditor.all.min.js'
// import './utf8-php/lang/zh-cn/zh-cn.js'


Vue.use(VueRouter)


import index from './view/index.vue'
import ywxl from './view/hty_ywxl.vue'
// import indexcommon from './view/indexcommon.vue'
// import indexfirst from './view/indexfirst.vue'
// import login from './view/login.vue'
// import message from './view/message.vue'
// import messageadd from './view/messageadd.vue'
// import messagecon from './view/messagecon.vue'
// import welcome from './view/welcome.vue'
// import accountmanage from './view/accountmanage.vue'
// import addaccount from './view/addaccount.vue'
// import accountedit from './view/accountedit.vue'
// import brandinfo from './view/brandinfo.vue'
// import orderlist from './view/orderlist.vue'
// import userinfo from './view/userinfo.vue'
// import ordercon from './view/ordercon.vue'
// import rights from './view/rights.vue'
// import rightslist from './view/rightslist.vue'
// import rightsprocess from './view/rightsprocess.vue'
// import loglist from './view/loglist.vue'
// import logcon from './view/logcon.vue'
// import address from './view/address.vue'
// import marketing from './view/marketing.vue'
// import marketadd from './view/marketadd.vue'
// import marketedit from './view/marketedit.vue'
// import carriage from './view/carriage.vue'
// import carriageadd from './view/carriageadd.vue'
// import carriageedit from './view/carriageedit.vue'
// import goodslist from './view/goodslist.vue'
// import goodsedit from './view/goodsedit.vue'
// import addgoods from './view/addgoods.vue'
// import artlist from './view/artlist.vue'
// import addart from './view/addart.vue'
// import artedit from './view/artedit.vue'

//rightsprocess




const router = new VueRouter({
  routes: [{
    path: '/',
    component: index,
    children: [{
      path: '/',
      name: 'yxxl',
      component: ywxl
    }]
  }]
})


new Vue({
  router
}).$mount('#app')
