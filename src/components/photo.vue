<template>
  <div class="root">
    <div class="item" v-for="item in photoList" v-bind:key="item.id">
      <img v-bind:src="item.img" alt />
    </div>
  </div>
</template>

<script>
import https from "../https";
let params = {
  page: 0,
  count: 20
};
export default {
  data() {
    return {
      photoList: null
    };
  },
  created() {
    https.fetchPost("https://api.apiopen.top/getImages", params).then(
      res => {
        this.photoList = res.data.result;
      },
      err => {
        // console.log(this.newsList);
        throw new err();
      }
    );
  }
};
</script>
<style scoped>
.root .item {
  width: 180px;
  margin-top: 1vw;
}
.root .item img {
  width: 100%;
  height: 100%;
}
.root {
  padding-left: 1vw;
  padding-right: 1vw;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>