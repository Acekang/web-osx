<template >
  <div class="root">
    <div class="city">城市🏙:{{weatherData.city}}市</div>
    <div class="temperature">当前温度🌡:{{weatherData.wendu}}度</div>
    <div class="tips">{{weatherData.ganmao}}</div>
    <div class="forecast">
      <div class="item" v-for="item in weatherData.forecast" v-bind:key="item.date">
        日期:{{item.date}} &nbsp;
        风力:{{item.fenli}}&nbsp;
        风向:{{item.fengxiang}}&nbsp;
        最高温度:{{item.high}}&nbsp;
        最低温度:{{item.low}}&nbsp;
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