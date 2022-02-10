<template>
  <article class = "component-article-container article-container">
    <h1 class = "components-h1">Switch 组件</h1>
    <ComponentCodeLayout :code = "Switch1Code" :component = "Switch1" title = "常规 Switch" />
    <ComponentCodeLayout :code = "Switch2Code" :component = "Switch2" title = "带文字 Switch" />
    <ComponentCodeLayout :code = "Switch3Code" :component = "Switch3" title = "修改颜色 Switch" />
  </article>
</template>

<script lang = "ts" setup>
  import ComponentCodeLayout from '../componentCodeLayout.vue';

  import Switch1 from '../componentDemo/Switch1.vue';
  import Switch1Code from '../componentDemo/Switch1.vue?raw';
  import Switch2 from '../componentDemo/Switch2.vue';
  import Switch2Code from '../componentDemo/Switch2.vue?raw';
  import Switch3 from '../componentDemo/Switch3.vue';
  import Switch3Code from '../componentDemo/Switch3.vue?raw';</script>
