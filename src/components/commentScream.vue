<template>
  <div class="row">
    <div class="col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-12" v-if="check">
      <div class="row">
        <commentScreamHeader :scream="scream" />
      </div>

      <div class="row background q-mt-xs q-pa-md">
        <q-form style="width:100%">
          <q-input label="Add Comment..." type="textarea" autogrow />
          <q-btn color="primary" class="q-px-xl q-mt-md submitBtn ">
            Submit
          </q-btn>
        </q-form>

        <div class="col-12">
          <div v-if="scream.comments.length > 0" class="q-mt-xl">
            <div
              v-for="commentScream in scream.comments"
              :key="commentScream.screamId"
            >
              <commentScreamComponent :commentScream="commentScream" />
            </div>
          </div>
          <div v-else class="emojiBox q-mt-md q-pb-lg">
            <h5>no comments found</h5>
            <q-icon name="far fa-meh-rolling-eyes" size="100px" />
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      loading...
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { url } from "../store/store";
// import screamComponent from "./scream";
import commentScreamHeader from "./commentScreamHeader";
import commentScreamComponent from "./commentScreamComponent";

export default {
  // props: [...props]
  data() {
    return {
      scream: {},
      check: false,
    };
  },
  components: {
    commentScreamComponent: commentScreamComponent,
    commentScreamHeader: commentScreamHeader,
  },
  mounted() {
    let id = this.$route.params.screamId;
    axios
      .get(`${url}/screams/${id}`)
      .then((res) => {
        console.log(res);
        this.scream = res.data;
        this.check = true
      })
      .catch((err) => {
        console.log(err.response);
      });
  },
  // computed: {
  //   check: function() {
  //     if (Object.keys(this.scream).lenght > 0) return true;
  //     else return false;
  //   },
  // },
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
</style>
