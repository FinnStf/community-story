import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import './assets/main.css'
// or import all icons if you don't care about bundle size
import 'vue-awesome/icons'

import Icon from 'vue-awesome/components/Icon'



const app = createApp(App)
// globally (in your main .js file)
app.component('v-icon', Icon)
app.use(createPinia())
app.use(router)

app.mount('#app')
