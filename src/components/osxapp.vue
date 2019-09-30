<template>
  <div class="content animated zoomIn">
    <div class="window">
      <appnav class="nav"></appnav>
      <appcontent class="box"></appcontent>
    </div>
  </div>
</template>
<style scoped>
@import "../css/animate.css";
.content {
  position: fixed;
  top: 5vh;
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.window {
  border: 1px solid rgba(255, 255, 255, 0.3);
  width: 50vw;
  height: 60vh;
  background: rgba(20, 20, 20, 0.95);
  border-radius: 8px;
  position: absolute;
  overflow: hidden;
}
.window .nav{
  position: relative;
  top: 0;
}
.window .box{
  position: relative;
  height: 55vh;
   overflow-x: hidden;
}
</style>
<script>
import appnav from "./appnav";
import appcontent from "./appcontent"
export default {
  name: "osxapp",
  components: {
    appnav,
    appcontent
  }
};
</script>