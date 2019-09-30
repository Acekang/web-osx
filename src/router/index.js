import Vue from "vue";
import Router from "vue-router";
import osxapp from "@/components/osxapp.vue";
import news from "@/components/news.vue";
import weather from "@/components/weather.vue";
import settings from "@/components/settings.vue";
import photo from "@/components/photo.vue";
import finder from "@/components/finder.vue";
Vue.use(Router);

export default new Router({
  data: {},
  method: {},
  routes: [
    {
      path: "/osxapp",
      name: "/osxapp",
      component: osxapp,
      children: [
        {
          path: "news",
          name: "news",
          component: news
        },
        {
          path: "weather",
          name: "weather",
          component: weather
        },
        {
          path: "settings",
          name: "settings",
          component: settings
        },
        {
          path: "photo",
          name: "photo",
          component: photo
        },
        {
          path: "finder",
          name: "finder",
          component: finder
        }
      ]
    }
  ]
});
