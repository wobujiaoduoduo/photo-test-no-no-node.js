import Vue from "vue";
import Vuex from "vuex";
import { apiLogin } from "../api"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //先找localstorage，
    token: localStorage.getItem("token") || ""
  },
  getters: {},
  mutations: {
    login(state, payload){
      //console.log(payload)
      state.token = payload.token;
      //将一侧的token存起来
      localStorage.setItem("token", payload.token)
    }
  },
  actions: {
    async login({commit}, payload){
      //console.log(commit)
      //console.log(payload)
      const {username, password} = payload;
      const res = await apiLogin({username, password});
     // console.log(res)
      commit("login", {
        //出错
        token: res.data.token
      })

    }
  },
  modules: {},
});
