import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Photo from "../views/Photo.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    redirect: "/photo"

  },
  {
    path: "/photo",
    name: "Photo",
    component: Photo,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
