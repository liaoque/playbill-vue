import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus  from 'element-plus'
import 'element-plus/dist/index.css'

import fabric from 'fabric-with-erasing'

// import fontfaceobserver from 'fontfaceobserver'

// import './assets/main.css'

// createApp(App).mount('#app')

const app = createApp(App)
app.use(router)
app.use(store)
app.use(fabric)
app.use(ElementPlus)
// app.use(fontfaceobserver)
app.mount('#app')
