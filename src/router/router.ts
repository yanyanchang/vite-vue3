import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// 注意这里要带上 文件后缀.vue
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/home/HomePage.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/pages/login/LoginPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
