import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    keyword: ""
  },
  getters: {
    getKeyword(state) {
      return state.keyword;
    }
  },
  mutations: {
    setKeyword(state, payload) {
      state.keyword = payload;
    }
  },
  actions: {}
});
