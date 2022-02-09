// 引入 highlight 核心和语言
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';

// 注册 highlight 语言
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('xml', xml);

hljs.configure({
  ignoreUnescapedHTML: true
});

export default {
  mounted(el) {
    const blocks = el.querySelectorAll('pre code');
    blocks.forEach((block: HTMLDivElement) => {
      hljs.highlightElement(block);
    });
  }
};
