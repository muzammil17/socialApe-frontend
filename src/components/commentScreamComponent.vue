<template>
  <div class="borderBottom q-mb-md">
    <div class="row header-row">
      <div class="col-md-1 img-col">
        <img v-bind:src="commentScream.imageUrl" />
      </div>
      <div class="col-md-7 q-ml-md userName">
        <span class="handle"> {{ commentScream.userHandle }} </span>
        <br />
        <!-- {{moment(commentScream.userHandle) }} -->
        <span class="date">
          <q-icon name="fas fa-globe-americas" style="margin-right: 1px" />
          {{ commentScream.createdAt | moment("MMM Do YYYY") }}
        </span>
      </div>
    </div>
    <div class="row q-mt-xs">
      <p class="screamBody">
        {{ commentScream.body }}
      </p>
    </div>
  </div>
</template>

<script>

export default {
  props: ["commentScream"],
  data(){
    console.log(this.commentScream)
    return{}
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/quasar.scss";

.background {
  background: #fff;
}
.header-row {
  .img-col img {
    height: 50px;
    width: 50px;
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
.submitBtn {
  margin-left: 50%;
  transform: translateX(-50%);
}

a {
  text-decoration: none;
  color: black;
}
.emojiBox {
  color: $grey-6;
  text-align: center;
  h5 {
    padding: 0;
    margin: 0;
    font-size: 20px;
    margin-bottom: 10px;
    text-transform: capitalize;
  }
}

.borderBottom { 
  border-bottom: 1px solid $grey-3
}
</style>
