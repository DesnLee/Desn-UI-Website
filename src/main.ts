import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'virtual:svg-icons-register';
import hljs from 'highlight.js';

import './assets/style/reset.scss';
import './lib/index.scss';
import 'github-markdown-css';
import './assets/style/highlight.scss';

const app = createApp(App);

app.directive('highlight', function (el) {
  const blocks = el.querySelectorAll('pre code');
  blocks.forEach((block: any) => {
    hljs.highlightElement(block);
  });
});

app.use(router).mount('#app');
