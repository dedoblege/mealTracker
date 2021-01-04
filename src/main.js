import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store/index.js"
import BaseButton from "./components/ui/BaseButton.vue"
import Toaster from "@meforma/vue-toaster"

const app = createApp(App)
app.use(router)
app.use(store)

app.component("base-button", BaseButton)

app.use(Toaster, { position: "top" })

app.mount("#app")
