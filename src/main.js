import {createApp, provide, ref} from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 导入上面新建的路由文件
import router from './router/index'

const app = createApp(App)
app.use(router)
app.mount('#app')