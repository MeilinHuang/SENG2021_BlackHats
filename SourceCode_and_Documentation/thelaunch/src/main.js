import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import * as VueGoogleMaps from "vue2-google-maps";
import { VueMasonryPlugin } from "vue-masonry";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueMasonryPlugin);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBNmajm_tGfxednNNM5uzONqYoxyiLagTk",
    libraries: "places",
  },
  installComponents: true,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
