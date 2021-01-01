import { createRouter, createWebHashHistory } from "vue-router"
import Home from "../views/Home.vue"
import MealHistory from "../views/MealHistory.vue"
import MealCreation from "../views/MealCreation.vue"
import MealUpdate from "../views/MealUpdate.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/meal-history",
    name: "MealHistory",
    component: MealHistory,
  },
  {
    path: "/meal-creation",
    name: "MealCreation",
    component: MealCreation,
  },
  {
    path: "/meal-update/:mealId",
    name: "MealUpdate",
    component: MealUpdate,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
