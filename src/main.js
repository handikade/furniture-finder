import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import { intToIdr, trimStr } from "./utils";

Vue.config.productionTip = false;

Vue.filter("intToIdr", intToIdr);
Vue.filter("trimStr", trimStr);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
