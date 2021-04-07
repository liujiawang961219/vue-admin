import { createRouter, createWebHashHistory } from "vue-router";
// import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    // name: "Home",
    // component: Home,
    // 路由重定向
    redirect:'/login'
  },
  {
    path:'/login',
    name:"Login",
    component: () =>
      import("../views/Login/index.vue"),
  },
  {
    path: "/about",
    name: "About",

    component: () =>
      import("../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
