<template>
  <div class="row">
    <div class="col-md-8 offset-md-2 q-mt-sm">
      <div class="row " v-for="scream in getScreams" :key="scream.id">
        <scream :scream="scream" />
      </div>
    </div>
  </div>
</template>

<script>
import scream from "./scream";

export default {
  components: {
    scream: scream,
  },

  computed: {
    getScreams: function() {
      let screams = this.$store.state.scream.screams;
      return screams;
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  list-style: none;
}
</style>
