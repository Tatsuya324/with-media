import Vue from "vue";
import VueRouter from "vue-router";
import LP from "../page/LandingPage.vue";
import EnrollPage from "../page/EnrollPage.vue";
import TweetPage from "../page/TweetPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LP",
    component: LP,
  },
  {
    path: "/enroll",
    name: "EnrollPage",
    component: EnrollPage,
  },
  {
    path: "/:tweetid",
    name: "TweetPage",
    component: TweetPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
