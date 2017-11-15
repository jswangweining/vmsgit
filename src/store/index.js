import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  'userId':'',
  'ticket':'',
  "userName":'',
  'isLogin':false
}




export default new Vuex.Store({
	state,
  mutations: {
    changeUserId (state,data) {
      // 变更状态
      state.userId=data.userId;
      state.ticket=data.ticket;
      state.userName=data.userName;

    },
    loginout (state) {
      //登陆不成功
      state.isLogin=false;
    }
  }
});
