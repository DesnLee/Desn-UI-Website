import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'virtual:svg-icons-register';

// 引入全局、markdown 格式化、代码高亮的 CSS
import './assets/style/reset.scss';
import './lib/index.scss';
import 'github-markdown-css';
import './assets/style/highlight.scss';

// 引入 highlight 核心和语言
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';

// 注册 highlight 语言
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('xml', xml);

// 创建 Vue App
const app = createApp(App);

// 挂载 App 到 DOM
app.use(router).mount('#app');
