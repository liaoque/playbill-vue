import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus  from 'element-plus'
import 'element-plus/dist/index.css'


import fabric from 'fabric-with-erasing'
// 普通的
// import fabric from 'fabric'

// import './assets/main.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(fabric)
app.use(ElementPlus)
app.mount('#app')
