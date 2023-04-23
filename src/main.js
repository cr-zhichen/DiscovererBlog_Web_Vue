import {createApp, provide, ref} from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 导入上面新建的路由文件
import router from './router/index'

import hljs from 'highlight.js';

const app = createApp(App)
app.use(hljs);
app.use(router)

app.directive('highlight', (el) => {
    let blocks = el.querySelectorAll('pre code')
    blocks.forEach((block) => {

        // 创建ol标签元素
        let ol = document.createElement("ol");

        // 为ol标签添加class名
        ol.className = 'pre-numbering';
        block.parentNode.appendChild(ol);

        hljs.highlightBlock(block)
    })
})

app.mount('#app')