<template>
  <div class="col-12 q-py-md q-px-sm q-mb-xs background">
    <div class="row header-row">
      <div class="col-md-1 img-col">
        <img v-bind:src="scream.userImage" />
      </div>
      <div class="col-md-7 q-ml-md userName">
        <span class="handle"> {{ scream.userHandle }} </span>
        <br />
        <!-- {{moment(scream.userHandle) }} -->
        <span class="date">
          <q-icon name="fas fa-globe-americas" style="margin-right: 1px" />
          {{ scream.createdAt | moment("MMM Do YYYY") }}
        </span>
      </div>
    </div>
    <div class="row q-mt-xs">
      <p class="screamBody">
        {{ scream.body }}
      </p>
    </div>

    <div class="row">
      <div class="col-sm-6">
        <q-btn
          round
          flat
          size="12px"
          :icon="like ? 'fas fa-heart' : 'far fa-heart'"
          padding="xs"
          :color="like ? 'red' : 'black'"
          @click="handleLike(like, scream.id)"
        />
        <router-link v-bind:to="`/commentScream/${scream.id}`">
          <q-btn round flat size="12px" icon="far fa-comment" padding="xs" />
        </router-link>
      </div>

      <div class="col-sm-6 text-right q-mt-xs">
        <span v-if="scream.likeCount > 0">
          <q-icon size="16px" name="fas fa-heart" />
          {{ scream.likeCount }}
        </span>
        <span v-if="scream.commentCount > 0">
          <q-icon size="16px" name="fas fa-comment" />
          {{ scream.commentCount }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import {} from "vue-moment";
export default {
  props: ["scream"],
  methods: {
    handleLike: function(like, id) {
      this.$store.dispatch("toggleLike", { like: !like, id: id });
    },
  },
  computed: {
    like: function() {
      let likes = this.$store.state.user.likes;
      let hasLiked = false;
      likes.map((like) => {
        if (like.screamId === this.scream.id) hasLiked = true;
      });

      return hasLiked;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/quasar.scss";

.background {
  background: #fff;
}
.header-row {
  .img-col img {
    height: 60px;
    width: 60px;
    border-radius: 100%;
  }
  .userName {
    .handle {
      font-size: 22px;
      font-weight: 500;
    }
    .date {
      font-size: 12px;
      color: $grey-6;
      font-weight: 300;
    }
  }
}

.screamBody {
  font-size: 17px;
}

a {
  text-decoration: none;
  color: black;
}
</style>
