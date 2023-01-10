import { createApp } from 'vue'
import './styles/style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from '@/router'
import { setupStore } from '@/store'

const app = createApp(App)
// 注册路由
app.use(router)
// 注册pina store
setupStore(app)
app.use(ElementPlus)
app.mount('#app')
