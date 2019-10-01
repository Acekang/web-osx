<template >
  <div class="root">
    <div class="sidebar">
      <router-link :to="{name:'applist'}" class="item">
        <img src="../imgs/icon/appstore.png" alt />
        <div>应用程序</div>
      </router-link>
      <router-link :to="{name:'filelist'}" class="item">
        <img src="../imgs/icon/file.png" alt />
        <div>文档</div>
      </router-link>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.root {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
}
.root .sidebar {
  width: 25%;
  height: 100%;
  background-color: rgba(20, 19, 19, 0.6);
}
.root .sidebar .item {
  height: 22px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}
.root .sidebar .item img {
  width: 20px;
  height: 20px;
  margin-left: 5px;
}
a,
.router-link-active {
  text-decoration: none;
}
.root .sidebar .item div {
  padding-left: 5px;
  font-size: 10px;
  color: rgb(200, 200, 200);
}
.root .container {
  height: 100%;
  width: 75%;
}
</style>
<script>
export default {};
</script>