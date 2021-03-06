import Vue from "vue";
import VueRouter from "vue-router";
import Top from "../views/Top.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "top",
    component: Top
  },
  {
    path: "/map",
    name: "map",
    component: () => import(/* webpackChunkName: "map" */ "../views/Map.vue")
  },
  {
    path: "/top",
    name: "top",
    component: () => import(/* webpackChunkName: "top" */ "../views/Top.vue")
  },
  {
    path: "/quest-list",
    name: "quest-list",
    component: () =>
      import(/* webpackChunkName: "quest-list" */ "../views/QuestList.vue")
  },
  {
    path: "/ranking",
    name: "ranking",
    component: () =>
      import(/* webpackChunkName: "quest-list" */ "../views/Ranking.vue")
  },
  {
    path: "/album",
    name: "album",
    component: () =>
      import(/* webpackChunkName: "album" */ "../views/Album.vue")
  },
  {
    path: "/collect",
    name: "collect",
    component: () =>
      import(/* webpackChunkName: "collect" */ "../views/Collect.vue")
  },
  {
    path: "/*",
    name: "notfound",
    component: () =>
      import(/* webpackChunkName: "notfound" */ "../views/NotFound.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
