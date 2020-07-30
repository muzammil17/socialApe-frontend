<template>
  <div class="pageHeight">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <allScreams />
      </div>
    </div>
  </div>
</template>

<script>
import allScreams from "./allScreams";

export default {
  data() {
    return {
      isAuthenticated: this.$store.state.user.isAuthenticated,
    };
  },
  components: {
    allScreams: allScreams,
  },
};
</script>

<style lang="scss" scoped></style>
