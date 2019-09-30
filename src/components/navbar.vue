<template>
  <div class="nav animated fadeInDown">
    <img src="../imgs/icon/apple.png" class="icon" />
    <div style="margin-left:15px;">{{currentApp}}</div>
    <img src="../imgs/icon/wifi.png" class="icon" />
    <img src="../imgs/icon/battery.png" class="icon" />
    <div style="margin-left:15px;">{{date|formaDate}}</div>
  </div>
</template>
<script>
import dayjs from "dayjs";

var padaDate = function(value) {
  return value < 10 ? "0" + value : value;
};

export default {
  data() {
    return {
      date: new Date(),
      currentPath: null
    };
  },
  computed: {
    currentApp: function() {
      var tempPath = this.$route.path;
      var arrPath = tempPath.split("/");
      this.currentPath = arrPath[arrPath.length - 1];
      if (this.currentPath == "news") {
        return "网易新闻";
      } else if (this.currentPath == "weather") {
        return "实时天气";
      } else if (this.currentPath == "photo") {
        return "在线图库";
      } else if (this.currentPath == "settings") {
        return "服务偏好设置";
      } else if (this.currentPath == "finder") {
        return "访达";
      }
      return "";
    }
  },
  watcher: {},
  filters: {
    formaDate: function() {
      var date = new Date();
      var year = date.getFullYear(); //存储年
      var month = padaDate(date.getMonth() + 1); //存储月份
      var day = padaDate(date.getDate()); //存储日期
      var hours = padaDate(date.getHours()); //存储时
      var minutes = padaDate(date.getMinutes()); //存储分
      return (
        year + "年" + month + "月" + day + "日" + hours + "时" + minutes + "分"
      );
    }
  },

  mounted() {
    var _this = this;
    this.timeId = setInterval(function() {
      _this.sday = dayjs().format("YYYY-MM-DD HH:mm:ss");
    }, 1000);
    // this.initmap();
  },
  beforeDestroy: function() {
    if (this.timeId) {
      clearInterval(this.timeId);
    }
  },
  methods: {}
};
</script>
<style scoped>
@import "../css/animate.css";
.nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: 25px;
  font-size: 15px;
  display: flex;
  align-items: center;
  color: white;
  background-color: rgba(20, 19, 19, 0.6);
  padding-left: 20px;
  padding-right: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
.nav .icon {
  width: 15px;
  height: 15px;
  margin-left: 10px;
}
</style>