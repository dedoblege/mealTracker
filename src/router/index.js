import { createRouter, createWebHashHistory } from "vue-router"
import Home from "../views/Home.vue"
import MealHistory from "../views/MealHistory.vue"
import MealInput from "../views/MealInput.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/meal-history",
    name: "MealHistory",
    component: MealHistory,
  },
  {
    path: "/meal-input",
    name: "MealInput",
    component: MealInput,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
