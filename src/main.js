import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import SocialSharing from "vue-social-sharing";
Vue.use(SocialSharing);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
