import Api from "@/utils/Api";
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
          meta: {
            requireAuth: true,
          },
        },
        {
          path: "detail/:id",
          name: "ticket.detail",
          component: () => import("../views/Ticket/detail.vue"),
          meta: {
            requireAuth: true,
          },
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
    {
      path: "/report",
      name: "report",
      component: () => import("../views/ReportView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
