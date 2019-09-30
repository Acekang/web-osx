<template >
  <div class="root">
    <newsitem v-bind:key="item.title" v-for="item in newsList" v-bind:newsitem="item"></newsitem>
  </div>
</template>
<script>
import newsitem from "./newsitem";
import https from "../https";
let params = {
  page: "1",
  count: "30"
};
export default {
  
  data() {
    return {
      newsList: null
    };
  },
  created() {
    https.fetchGet("https://api.apiopen.top/getWangYiNews", params).then(
      res => {
        this.newsList = res.data.result;
      },
      err => {
        // console.log(this.newsList);
        throw new err();
      }
    );
  },
  methods: {},
  components: {
    newsitem
  }
};
</script>
<style scoped>
.root {
  color: white;
}
</style>