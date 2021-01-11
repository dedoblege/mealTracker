import { createRouter, createWebHashHistory } from "vue-router"
import Home from "../views/Home.vue"
import MealHistory from "../views/MealHistory.vue"
import MealCreation from "../views/MealCreation.vue"
import MealUpdate from "../views/MealUpdate.vue"
import SignIn from "../views/SignIn.vue"
import SignOut from "../views/SignOut.vue"

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
  {
    path: "/signIn",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/signOut",
    name: "SignOut",
    component: SignOut,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
