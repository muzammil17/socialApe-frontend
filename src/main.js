import Vue from "vue";
import App from "./App.vue";
import "./quasar";
// import vue-moment  from "vue-moment";
import VueRouter from "vue-router";
import { store } from "./store/store";
import routes from "./routes";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(require("vue-moment"))

export const app_router = new VueRouter({
  mode: "history",
  routes,
});



new Vue({
  render: (h) => h(App),
  router: app_router,
  store: store,
}).$mount("#app");
