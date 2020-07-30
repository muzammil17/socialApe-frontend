<template>
  <div>
    <div class="row">
      <div class="col-md-8 offset-md-2 col-12 q-pa-md q-mt-lg background">
        <h5 class="text-center">Add New Post</h5>
        <div class="row">
          <q-form class="w-100" style="width: 100%">
            <q-input
              filled
              v-model="scream"
              type="textarea"
              placeholder="Express your feelings :) "
            />

            <q-btn color="primary" class="q-mt-md q-px-xl submitBtn" @click="submitPost">
              <span v-if="!formLoader"> Submit </span>
              <q-spinner-ios v-else color="grey-2" size="16px" />
            </q-btn>
          </q-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scream: "",
    };
  },

  methods: {
    submitPost: function() {
      this.$store.dispatch("toggleFormLoader", true);
      this.$store.dispatch("addScream", this.scream);
    },
  },
  computed: {
    formLoader: function() {
      return this.$store.state.user.formLoader;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/quasar.scss";
body {
  min-height: 100vh;
}
h5 {
  font-weight: 500;
}
.background {
  background: #fff;
  height: 100%;
}

.submitBtn {
  margin-left: 50%;
  transform: translateX(-50%);
}
</style>
