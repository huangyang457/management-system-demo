import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import 'element-plus/dist/index.css'
import '@/styles/index.scss'
import '@/router/permission'

const app = createApp(App)
app.use(router).mount('#app')
