<template>
  <div class="appnav">
    <router-link style="margin-left:20px;" :to="{name:'home'}">
      <img src="../imgs/icon/close.png" alt />
    </router-link>
  </div>
</template>
<style scoped>
.appnav {
  width: 100%;
  height: 5vh;
  display: flex;
  align-items: center;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background: rgb(38, 37, 36);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}

.appnav img {
  width: 15px;
  height: 15px;
}
</style>