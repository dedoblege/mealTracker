import { createStore } from "vuex"
import helloModule from "./modules/hello/index.js"

const store = createStore({
  modules: {
    coaches: helloModule,
  },
})

export default store
