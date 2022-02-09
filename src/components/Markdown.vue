<template>
  <article class = "article-container markdown-body">
    <keep-alive>
      <Component :is = "content" />
    </keep-alive>
  </article>
</template>

<script lang = "ts" setup>
  import { shallowRef, onUpdated } from 'vue';

  import hljs from 'highlight.js/lib/core';

  hljs.configure({
    ignoreUnescapedHTML: true
  });

  const props = defineProps({
    name: { type: String }
  });

  let content = shallowRef(null);
  import(/* @vite-ignore */'../markdown/' + props.name + '.md').then(e => {
    content.value = e.default;
  });

  onUpdated(() => {
    const blocks = document.querySelectorAll('pre code');
    blocks.forEach((block: HTMLDivElement) => {
      hljs.highlightElement(block);
    });
  });
</script>
