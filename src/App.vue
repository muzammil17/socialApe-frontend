<template>
  <div class="pageHeight">
    <q-layout>
      <app-navbar />

      <q-dialog v-model="sessionExpireAlert">
        <q-card>
          <q-card-section>
            <div class="text-h6">Alert</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            Session Expired ! <br />
            Please login again to continue...
          </q-card-section>

          <q-card-actions align="right">
            <q-btn
              flat
              label="OK"
              color="primary"
              v-close-popup
              @click.prevent="userLogout"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <q-page-container>
        <router-view></router-view>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import Navbar from "./components/navbar";
// import { mapActions } from "vuex";
import axios from "axios";
import jwt_decode from "jwt-decode";

export default {
  name: "App",
  components: {
    "app-navbar": Navbar,
  },
  created() {
    let token = JSON.parse(localStorage.getItem("token"));
    console.log("token", token);
    if (token) {
      let decodedToken = jwt_decode(token);
      console.log(decodedToken);
      if (decodedToken.exp < new Date().getTime() / 1000) {
        console.log("token expired");
      } else {
        let expiryDuration = decodedToken.exp - new Date().getTime() / 1000;
        axios.defaults.headers["Authorization"] = `Bearer ${token}`;
        this.$store.dispatch("getScreams");
        this.$store.dispatch("getAuthenticatedUserData");

        // expiryDuration -= 3540;
        this.$store.dispatch("userAuthentication", true);
        setTimeout(() => {
          this.$store.dispatch("sessionExpire");
        }, expiryDuration * 1000);
      }
    } else {
      this.$store.dispatch("userLogingOut");
    }
  },
  computed: {
    sessionExpireAlert: function() {
      return this.$store.state.user.sessionExpireAlert;
    },
  },

  methods: {
    userLogout: function() {
      this.$store.dispatch("userLogingOut");
    },
  },
};
</script>

<style lang="scss">
@import "./styles/quasar.scss";
* {
  font-family: $font-family;
}

body{ 
  background: $grey-3;
}
.pageHeight {
  min-height: 100vh;
}
</style>
