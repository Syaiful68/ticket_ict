import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/ticket",
      name: "ticket",
      children: [
        {
          path: "",
          name: "index",
          component: () => import("../views/Ticket/index.vue"),
        },
        {
          path: "detail/:id",
          name: "detail",
          component: () => import("../views/Ticket/detail.vue"),
        },
      ],
    },
  ],
});

export default router;
