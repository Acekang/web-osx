<template>
  <div class="dock animated fadeInUp">
    <div class="item">
      <router-link :to="{name:'finder'}" class="app">
        <img src="../imgs/icon/finder.png" alt />
      </router-link>
      <router-link :to="{name:'photo'}" class="app">
        <img src="../imgs/icon/photo.png" alt />
      </router-link>
      <router-link :to="{name:'settings'}" class="app">
        <img src="../imgs/icon/prefence.png" alt />
      </router-link>
      <router-link :to="{name:'news'}" class="app">
        <img src="../imgs/icon/netease.png" alt />
      </router-link>
      <router-link :to="{name:'weather'}" class="app">
        <img src="../imgs/icon/weather.png" alt />
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
@import "../css/animate.css";
.dock {
  position: fixed;
  bottom: 0;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.dock .item {
  padding-left: 5px;
  padding-right: 5px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background-color: rgba(255, 255, 255, 0.2);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.dock .item .app img {
  width: 40px;
  height: 40px;
  margin-left: 0.5vw;
}
</style>