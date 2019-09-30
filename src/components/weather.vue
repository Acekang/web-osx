<template >
  <div class="root">
    <div class="city">城市:{{weatherData.city}}</div>
    <div class="temperature">当前温度:{{weatherData.wendu}}</div>
    <div class="tips">{{weatherData.ganmao}}</div>
    <div class="forecast">
      <div class="item" v-for="item in weatherData.forecast" v-bind:key="item.date">
        日期:{{item.date}}
        风力:{{item.fenli}}
        风向:{{item.fengxiang}}
        最高温度:{{item.high}}
        最低温度:{{item.low}}
        天气类型:{{item.type}}
      </div>
    </div>
  </div>
</template>
<style scoped>
.root {
  padding: 1vw;
}
.root .city {
  font-size: 40px;
}
.root .temperature {
  font-size: 20px;
}
.root .tips {
  font-size: 15px;
  margin-top: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
.root .forecast {
  margin-top: 10px;
  font-size: 10px;
}
.root .forecast .item{
    margin-top: 5px;
}
</style>
<script>
import https from "../https";
let params = {
  city: "重庆"
};
export default {
  data() {
    return {
      weatherData: null
    };
  },
  created() {
    https.fetchGet("https://www.apiopen.top/weatherApi", params).then(
      res => {
        this.weatherData = res.data.data;
        console.log(this.weatherData);
      },
      err => {
        console.log(err);
      }
    );
  }
};
</script>