import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'virtual:svg-icons-register';

// 引入全局、markdown 格式化、代码高亮的 CSS
import './assets/style/reset.scss';
import './assets/style/global.scss';
import './assets/style/highlight.scss';
import 'github-markdown-css';
import 'desn-ui/lib/index.css';

// 引入自定义指令
import highlight from './directives/highlight';

// 创建 Vue App
const app = createApp(App);

// 添加自定义指令
app.directive('highlight', highlight);

// 挂载 App 到 DOM
app.use(router).mount('#app');
