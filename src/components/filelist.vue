<template >
  <div class="root">
      <div class="fileitem" v-for="item in [1,2,3]" :key="item">
          <img class="fileicon" src="../imgs/icon/file.png" >
          <div class="filename">{{item}}</div>
      </div>
  </div>
</template>
<style scoped>
.root {
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
}
.root .fileitem {
  height: 90px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
}
.root .fileitem .fileicon {
  width: 60px;
  height: 60px;
}
.root .fileitem .filename {
  font-size: 7px;
}
</style>