<template>
  <div class="pageHeight">
    <div class="row">
      <div class="col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-xs-12 ">
        <div class="text-center">
          <h3>Signup</h3>
        </div>
        <div class="row">
          <div class="col-md-6 offset-md-3 col-xs-12">
            <q-form>
              <q-input bottom-slots v-model="email" type="email" label="Email">
                <template v-slot:prepend>
                  <q-icon name="fas fa-at" />
                </template>
              </q-input>

              <q-input
                bottom-slots
                v-model="password"
                type="password"
                label="Password"
              >
                <template v-slot:prepend>
                  <q-icon name="fas fa-lock" />
                </template>
              </q-input>

              <q-input
                bottom-slots
                v-model="confirmPassword"
                type="password"
                label="Confirm Password"
              >
                <template v-slot:prepend>
                  <q-icon name="fas fa-lock" />
                </template>
              </q-input>

              <q-input
                bottom-slots
                v-model="handle"
                type="text"
                label="User Name"
              >
                <template v-slot:prepend>
                  <q-icon name="fas fa-user" />
                </template>
              </q-input>

              <q-btn
                color="primary"
                id="submitButton"
                @click="
                  signupAction({ email, password, confirmPassword, handle })
                "
              >
                <span v-if="!formLoader">Signup</span>
                <q-spinner-ios v-else color="grey-2" size="16px" />
              </q-btn>
            </q-form>

            <div class="text-center q-mt-md">
              <p>Already have an account ?</p>
              <router-link to="/login">
                <p class="q-mt-0 cursor-pointer">Login</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapActions } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      handle: "",
    };
  },
  computed: {
    formLoader: function() {
      return this.$store.state.user.formLoader;
    },
  },
  methods: {
    // ...mapActions(["signupAction"]),
    signupAction: function(data) {
      this.$store.dispatch("signupAction", data);
      this.$store.dispatch("toggleFormLoader", true);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/quasar.scss";

.pageHeight {
  min-height: 100vh;
}

#submitButton {
  width: 60%;
  margin-left: 20%;
}

#loaderColor {
  color: $grey-2;
}
a {
  text-decoration: none;
  color: $primary;
}
</style>
