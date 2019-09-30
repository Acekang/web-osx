<template>
  <div class="container">
    <div>
      <a target="blank" v-bind:href="newsitem.path">{{newsitem.title}}</a>
    </div>

    <img class="image" v-bind:src="newsitem.image" />
    <div class="time">{{newsitem.passtime}}</div>
  </div>
</template>
<script>
export default {
  props: {
    newsitem: Object
  }
};
</script>
<style scoped>
a{
  color: white;
}
.container {
  padding: 1vw;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  width: 100%;
  background: linear-gradient(45deg, #0f2027, #2c3e50);
}
.container img {
  width: 100px;
}
.container .time {
  font-size: 10px;
}
</style>