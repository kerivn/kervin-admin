import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from '@/router'
import { setupStore } from '@/store'
// 引入重置样式
import './styles/reset.scss'
// 导入公共样式
import './styles/index.scss'

const app = createApp(App)
// 注册路由
app.use(router)
// 注册pina store
setupStore(app)
app.use(ElementPlus)
app.mount('#app')
