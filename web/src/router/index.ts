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
    path: "/notes",
    name: "notes",
    component: () => import("../views/NotesView.vue"),
  },

  {
    path: "/cards",
    name: "cards",
    component: () => import("../views/CardsView.vue"),
  },

  {
    path: "/wifis",
    name: "wifis",
    component: () => import("../views/WifisView.vue"),
  },
  {
    path: "/documents",
    name: "documents",
    component: () => import("../views/DocumentsView.vue"),
  },

  {
    path: "/credentials/new",
    name: "newCredential",
    component: () => import("../views/NewCredentialView.vue"),
  },

  {
    path: "/notes/new",
    name: "newNote",
    component: () => import("../views/NewNoteView.vue"),
  },
  {
    path: "/cards/new",
    name: "newCard",
    component: () => import("../views/NewCardView.vue"),
  },

  {
    path: "/wifis/new",
    name: "newWifi",
    component: () => import("../views/NewWifiView.vue"),
  },

  {
    path: "/documents/new",
    name: "newDocument",
    component: () => import("../views/NewDocumentView.vue"),
  },
  {
    path: "/credentials/:id",
    component: () => import("../views/DisplayCredentialView.vue"),
  },
  {
    path: "/notes/:id",
    component: () => import("../views/DisplayNoteView.vue"),
  },
  {
    path: "/cards/:id",
    component: () => import("../views/DisplayCardView.vue"),
  },

  {
    path: "/wifis/:id",
    component: () => import("../views/DisplayWifiView.vue"),
  },

  {
    path: "/documents/:id",
    component: () => import("../views/DisplayDocumentView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
