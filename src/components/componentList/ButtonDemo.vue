<template>
  <article class = "component-article-container article-container">
    <h1 class = "components-h1">Button 组件</h1>
    <ComponentCodeLayout :code = "Button1Code" :component = "Button1" title = "size 示例" />
    <ComponentCodeLayout :code = "Button2Code" :component = "Button2" title = "theme 示例" />
    <ComponentCodeLayout :code = "Button3Code" :component = "Button3" title = "level 示例" />
    <ComponentCodeLayout :code = "Button4Code" :component = "Button4" title = "disabled 示例" />
    <ComponentCodeLayout :code = "Button5Code" :component = "Button5" title = "loading 示例" />
  </article>
</template>

<script lang = "ts" setup>
  import ComponentCodeLayout from '../componentCodeLayout.vue';
  import Button1 from '../componentDemo/Button1.vue';
  import Button1Code from '../componentDemo/Button1.vue?raw';
  import Button2 from '../componentDemo/Button2.vue';
  import Button2Code from '../componentDemo/Button2.vue?raw';
  import Button3 from '../componentDemo/Button3.vue';
  import Button3Code from '../componentDemo/Button3.vue?raw';
  import Button4 from '../componentDemo/Button4.vue';
  import Button4Code from '../componentDemo/Button4.vue?raw';
  import Button5 from '../componentDemo/Button5.vue';
  import Button5Code from '../componentDemo/Button5.vue?raw';</script>
