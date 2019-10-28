import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import NotFound from "../views/NotFound";

import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import Inventory from "../views/Inventory.vue";
import Settings from "../views/Settings.vue";
import Orders from "../views/Orders.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "*",
    name: "not-found",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    ...routes,
    {
      path: "/",
      component: Home,
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: Dashboard
        },
        {
          path: "/inventory",
          name: "inventory",
          component: Inventory
        },
        {
          path: "/settings",
          name: "settings",
          component: Settings
        },
        {
          path: "/orders",
          name: "orders",
          component: Orders
        }
      ]
    }
  ]
});

export default router;
