import { app_router } from "../main";
import axios from "axios";

export default {
  loginData: (state) => {
    state.user.isAuthenticated = true;
    app_router.push("/");
  },
  setUserAuthentication: (state, isAuthenticated) => {
    state.user.isAuthenticated = isAuthenticated;
    if (isAuthenticated) {
      app_router.push("/").catch(() => {});
    } else {
      app_router.push("/login");
    }
  },
  toggleFormLoader: (state, bool) => {
    state.user.formLoader = bool;
  },
  userLogout: (state) => {
    state.user.sessionExpireAlert = false;
    state.user.isAuthenticated = false;
    delete axios.defaults.headers["Authorization"];

    localStorage.removeItem("token");
    app_router.push("/login");
  },

  sessionExpire: (state) => {
    state.user.sessionExpireAlert = true;
  },
  getScreams: (state, screams) => {
    state.scream.screams = [...screams];
  },

  setUserData: (state, data) => {
    state.user.userCredentials = data.credentials;
    state.user.likes = data.likes;
    state.user.notifications = data.notifications;
  },
  toggleLike: (state, data) => {
    // console.log(like, id)
    // console.log(data)
    if (data.like) {
      state.user.likes = [
        ...state.user.likes,
        { userHandle: state.user.userCredentials.handle, screamId: data.id },
      ];

      state.scream.screams = state.scream.screams.map((scream) => {
        if (scream.id === data.id) {
          scream.likeCount += 1;
          return scream;
        } else return scream;
      });
    } else {
      state.user.likes = state.user.likes.filter(
        (screamLiked) => screamLiked.screamId !== data.id
      );

      state.scream.screams = state.scream.screams.map((scream) => {
        if (scream.id === data.id) {
          if (scream.likeCount >= 1) {
            scream.likeCount -= 1;
          }

          return scream;
        } else return scream;
      });
    }
  },

  addScream: (state, data) => {
    state.scream.screams = [data, ...state.scream.screams];
    app_router.push("/");
  },
};
