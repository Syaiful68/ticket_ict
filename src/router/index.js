import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Authentication/login.vue"),
    },
    {
      path: "/ticket",
      name: "ticket",
      children: [
        {
          path: "",
          name: "ticket.index",
          component: () => import("../views/Ticket/index.vue"),
        },
        {
          path: "detail/:id",
          name: "ticket.detail",
          component: () => import("../views/Ticket/detail.vue"),
        },
      ],
    },
    {
      path: "/revisi",
      name: "revisi",
      children: [
        {
          path: "",
          name: "revisi.index",
          component: () => import("../views/Revisi/index.vue"),
        },
        {
          path: "detail/:id",
          name: "revisi.detail",
          component: () => import("../views/Revisi/detail.vue"),
        },
      ],
    },
  ],
});

export default router;
