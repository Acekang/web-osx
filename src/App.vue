<template>
  <div id="app">
    <navbar></navbar>
    <router-view class="content"></router-view>
    <dock></dock>
  </div>
</template>

<script>
import navbar from './components/navbar'
import dock from './components/dock'
export default {
  name: "app",
  components: {
    navbar,
    dock
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

#app {
  background: url("./imgs/bg/bg.png");
  background-size: 100vw 100vh;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.content{
  position: fixed;
  top: 25px;
}
</style>
