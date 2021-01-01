import { createStore } from "vuex"
import dbModule from "./modules/db/index.js"

const store = createStore({
  modules: {
    coaches: dbModule,
  },
})

export default store
