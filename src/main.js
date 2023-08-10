import './assets/main.css'
import'./style.css'

import { createApp } from 'vue'
import store from './store/index'
import App from './App.vue'
import router from './router/index'

const app = createApp(App)

app.use(router)
app.use(store).mount('#app')
