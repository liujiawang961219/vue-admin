import { createRouter, createWebHashHistory } from "vue-router";
// import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    redirect:'/login'
  },
  {
    path:'/login',
    name:"Login",
    component: () =>
      import("../views/Login/index.vue"),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
