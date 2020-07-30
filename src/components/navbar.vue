<template>
  <div>
    <q-header class="text-white">
      <q-toolbar>
        <q-avatar>
          <img src="../img/icon.png" />
        </q-avatar>

        <q-toolbar-title> <span>SOCIALAPE</span> </q-toolbar-title>

        <span v-if="userAuthenticated">
          <router-link to="/" exact>
            <q-btn flat icon="fas fa-home" />
          </router-link>

          <router-link to="/addScream" exact>
            <q-btn flat icon="fas fa-plus" />
          </router-link>

          <q-btn flat v-on:click="userLogoutUser" icon="fas fa-sign-out-alt" />
        </span>

        <span v-else>   
          <router-link to="/login" exact>
            <q-btn flat>login</q-btn>
          </router-link>

          <router-link to="/signup" exact>
            <q-btn flat>Signup</q-btn>
          </router-link>
        </span>
        <q-space />
      </q-toolbar>
    </q-header>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    userAuthenticated: function() {
      return this.$store.state.user.isAuthenticated;
    },
  },
  methods: {
    userLogoutUser: function() {
      this.$store.dispatch("userLogingOut");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/quasar.scss";

a {
  text-decoration: none;
  color: white;
}

q-toolbar-title {
  span {
    font-weight: 700px;
    font-size: 15px;
  }
}
div {
  background: $dark;
}
</style>
