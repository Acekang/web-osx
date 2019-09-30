import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import QS from "qs";
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

Vue.prototype.qs = QS;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
