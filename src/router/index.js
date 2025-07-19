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
      path: "/courier",
      name: "courier",
      children: [
        {
          path: "",
          name: "courier.index",
          component: () => import("../views/Courier/index.vue"),
        },
        {
          path: "create",
          name: "courier.create",
          component: () => import("../views/Courier/create.vue"),
        },
        {
          path: "detail/:id",
          name: "courier.detail",
          component: () => import("../views/Courier/detail.vue"),
        },
      ],
    },
  ],
});

export default router;
