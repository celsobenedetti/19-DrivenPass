import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/SignUpView.vue"),
  },
  {
    path: "/signin",
    name: "signin",
    component: () => import("../views/SignInView.vue"),
  },
  {
    path: "/new",
    name: "newItem",
    component: () => import("../views/NewItemView.vue"),
  },
  {
    path: "/credentials",
    name: "credentials",
    component: () => import("../views/CredentialsView.vue"),
  },
  {
    path: "/credentials/new",
    name: "newCredential",
    component: () => import("../views/NewCredentialView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
