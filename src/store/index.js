import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  'userId':'8208',
  'isLogin':true
}




export default new Vuex.Store({
	state,
  mutations: {
    changeUserId (state,id) {
      // 变更状态
      state.userId=id;
    }
  }
});
