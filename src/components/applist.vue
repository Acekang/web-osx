<template >
  <div class="root">
    <router-link to="/osxapp/settings" class="appitem">
      <img class="appicon" src="../imgs/icon/prefence.png" />
      <div class="appname">服务偏好设置</div>
    </router-link>
    <router-link to="/osxapp/photo" class="appitem">
      <img class="appicon" src="../imgs/icon/photo.png" />
      <div class="appname">在线图库</div>
    </router-link>
    <router-link to="/osxapp/news" class="appitem">
      <img class="appicon" src="../imgs/icon/netease.png" />
      <div class="appname">网易新闻</div>
    </router-link>
    <router-link to="/osxapp/weather" class="appitem">
      <img class="appicon" src="../imgs/icon/weather.png" />
      <div class="appname">实时天气</div>
    </router-link>
  </div>
</template>
<style scoped>
a,
.router-link-active {
  text-decoration: none;
  color: white;
}
.root {
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
}
.root .appitem {
  height: 90px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
}
.root .appitem .appicon {
  width: 60px;
  height: 60px;
}
.root .appitem .appname {
  font-size: 7px;
}
</style>