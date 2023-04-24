import {createApp, provide, ref} from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 导入上面新建的路由文件
import router from './router/index'

import hljs from 'highlight.js';
import {useDark, useToggle} from "@vueuse/core";

//深色模式css
import 'element-plus/theme-chalk/dark/css-vars.css'
import './css/custom-element-ui.css'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

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

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')

const isDark = useDark();
useToggle(isDark)