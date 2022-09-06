import { createApp } from 'vue'
import ElementPlus  from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
// 动画效果需要这个
import fabric from 'fabric-with-erasing'

// 普通的
// import fabric from 'fabric'

// import './assets/main.css'

// createApp(App).mount('#app')

const app = createApp(App)
app.use(fabric)
app.use(ElementPlus)
app.mount('#app')
