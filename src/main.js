import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import common from './common'

const app = createApp(App)
app
    .use(store)
    .use(router)
    .use(common)
    .mount('#app')
