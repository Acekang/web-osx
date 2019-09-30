<template >
  <div class="appcontent">
    <router-view class="container"></router-view>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.appcontent {
  color: white;
}
.appcontent.container {
  width: 100%;
  height: 100%;
}
</style>