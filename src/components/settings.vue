<template>
  <table class="root">
    <tr class="line" align="center">
      <td class="item">
        <img src="../imgs/icon/settings0.png" alt />
        <div class="name">通用</div>
      </td>
      <td class="item">
        <img src="../imgs/icon/settings1.png" alt />
        <div class="name">桌面</div>
      </td>
      <td class="item">
        <img src="../imgs/icon/settings2.png" alt />
        <div class="name">程序坞</div>
      </td>
      <td class="item">
        <img src="../imgs/icon/settings3.png" alt />
        <div class="name">调度中心</div>
      </td>
    </tr>
    <tr class="line" align="center">
      <td class="item">
        <img src="../imgs/icon/settings6.png" alt />
        <div class="name">聚焦</div>
      </td>
      <td class="item">
        <img src="../imgs/icon/settings7.png" alt />
        <div class="name">通知</div>
      </td>
      <td class="item">
        <img src="../imgs/icon/settings8.png" alt />
        <div class="name">显示器</div>
      </td>
    </tr>
    <tr class="line" align="center">
      <td class="item">
        <img src="../imgs/icon/settings4.png" alt />
        <div class="name">语言与地区</div>
      </td>
      <td class="item">
        <img src="../imgs/icon/settings5.png" alt />
        <div class="name">安全性</div>
      </td>

      <td class="item">
        <img src="../imgs/icon/settings9.png" alt />
        <div class="name">节能</div>
      </td>
    </tr>
  </table>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
.root {
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: rgb(38, 37, 36);
}
.root .line {
  width: 100%;
}
.root .item .name {
  font-size: 10px;
}
.root .item img {
  width: 50px;
  height: 50px;
}
</style>