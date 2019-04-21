import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import vueSlider from "vue-slider-component";
import store from "./store";

// Turns off development tooltip in console.
Vue.config.productionTip = false;

// Starts Vue Router
Vue.use(VueRouter);
Vue.component("vueSlider", vueSlider);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
