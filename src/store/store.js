import Vuex from "vuex";
import Vue from "vue";
// action
import actions from "./actions";
// mutation
import mutation from "./mutation";

// import jwt_decode from "jwt-decode";

export const url =
  "https://us-central1-rn-social-app-1ca3f.cloudfunctions.net/api";

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    user: {
      isAuthenticated: false,
      sessionExpireAlert: false,
      formLoader: false,
      likes: [],
    },
    scream: {
      screams: [],
    },
  },
  mutations: { ...mutation },

  // actions

  actions: { ...actions },
});
