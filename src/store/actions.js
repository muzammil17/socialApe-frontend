import axios from "axios";
// import { app_router } from "../main";
import jwt_decode from "jwt-decode";
import { url } from "./store";

export default {
  userAuthentication: (context, isAuthenticated) => {
    context.commit("setUserAuthentication", isAuthenticated);
  },

  sessionExpire: (context) => {
    context.commit("sessionExpire");
  },

  userLogingOut: (context) => {
    context.commit("userLogout");
  },

  toggleFormLoader: (context, bool) => {
    context.commit("toggleFormLoader", bool);
  },

  toggleLike: (context, data) => {
    context.commit("toggleLike", data);

    if (data.like) {
      axios
        .get(`${url}/screams/${data.id}/like`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err.response);
        });
    } else {
      axios
        .get(`${url}/screams/${data.id}/unlike`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  },

  loginAction: (context, payload) => {
    axios
      .post(`${url}/login`, payload)
      .then((res) => {
        console.log(res);
        context.commit("loginData");

        context.dispatch("toggleFormLoader", false);

        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem(
          "refreshToken",
          JSON.stringify(res.data.refreshToken)
        );

        const bearerToken = `Bearer ${res.data.token}`;
        axios.defaults.headers["Authorization"] = bearerToken;

        context.dispatch("getScreams");
        context.dispatch("getAuthenticatedUserData");

        let decodedToken = jwt_decode(res.data.token);
        let expiryDuration = decodedToken.exp - new Date().getTime() / 1000;
        // expiryDuration -= 3540;
        setTimeout(() => {
          context.dispatch("sessionExpire");
        }, expiryDuration * 1000);
      })
      .catch((err) => {
        console.log(err, err.response);
        context.dispatch("toggleFormLoader", false);
      });
  },

  signupAction: (context, payload) => {
    axios
      .post(`${url}/signup`, payload)
      .then((res) => {
        console.log(res);
        context.commit("loginData");

        context.dispatch("toggleFormLoader", false);

        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem(
          "refreshToken",
          JSON.stringify(res.data.refreshToken)
        );

        const bearerToken = `Bearer ${res.data.token}`;
        axios.defaults.headers["Authorization"] = bearerToken;

        context.dispatch("getScreams");
        context.dispatch("getAuthenticatedUserData");

        let decodedToken = jwt_decode(res.data.token);
        let expiryDuration = decodedToken.exp - new Date().getTime() / 1000;
        // expiryDuration -= 3540;
        setTimeout(() => {
          context.dispatch("sessionExpire");
        }, expiryDuration * 1000);
      })
      .catch((err) => {
        console.log(err, err.response);
        context.dispatch("toggleFormLoader", false);
      });
  },

  getScreams: (context) => {
    axios
      .get(`${url}/screams`)
      .then((res) => {
        console.log(res);
        context.commit("getScreams", res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  },

  getAuthenticatedUserData: (context) => {
    axios
      .get(`${url}/user`)
      .then((res) => {
        console.log(res);
        context.commit("setUserData", res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  },

  addScream: (context, body) => {
    axios
      .post(`${url}/scream`, { body: body })
      .then((res) => {
        console.log(res);
        context.commit("addScream", res.data);
        context.dispatch("toggleFormLoader", false);
      })
      .catch((err) => {
        console.log(err.response);
        context.dispatch("toggleFormLoader", false);
      });
  },
};
