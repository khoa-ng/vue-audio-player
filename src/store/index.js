import Vuex from "vuex";
import Vue from "vue";
import player from "./modules/player";

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    player
  }
});
