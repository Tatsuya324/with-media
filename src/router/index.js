import Vue from "vue";
import VueRouter from "vue-router";
// import LP from "../page/LandingPage.vue";
import RegisterPage from "../page/RegisterPage.vue";
import TweetPage from "../page/TweetPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "RegisterPage",
    component: RegisterPage,
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
