import { store } from "./store/store";

export default [
  {
    name: "login",
    path: "/login",
    component: () => import("./components/login"),
    beforeEnter: (to, from, next) => {
      if (store.state.user.isAuthenticated === true) {
        next({ path: "/" });
      } else {
        next();
      }
    },
  },

  {
    name: "signup",
    path: "/signup",
    component: () => import("./components/signup"),
    beforeEnter: (to, from, next) => {
      if (store.state.user.isAuthenticated === true) {
        next({ path: "/" });
      } else {
        next();
      }
    },
  },

  {
    name: "home",
    path: "/",
    component: () => import("./components/home"),
    beforeEnter: (to, from, next) => {
      if (store.state.user.isAuthenticated === false) {
        next({ path: "/login" });
      } else {
        next();
      }
    },
  },
  {
    name: "addScream",
    path: "/addScream",
    component: () => import("./components/addScream"),
    beforeEnter: (to, from, next) => {
      if (store.state.user.isAuthenticated === false) {
        next({ path: "/login" });
      } else {
        next();
      }
    },
  },
  {
    name: "commentScream",
    path: "/commentScream/:screamId",
    props: true,
    component: () => import("./components/commentScream"),
    beforeEnter: (to, from, next) => {
      if (store.state.user.isAuthenticated === false) {
        next({ path: "/login" });
      } else {
        next();
      }
    },
  },
];
