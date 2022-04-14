<template>
  <article class = "component-article-container article-container">
    <h1 class = "components-h1">Message 组件</h1>
    <ComponentCodeLayout :code = "Message1Code" :component = "Message1" title = "成功 Message"
    />
    <ComponentCodeLayout :code = "Message2Code" :component = "Message2" title = "失败 Message"
    />
  </article>
</template>

<script lang = "ts" setup>
  import ComponentCodeLayout from '../componentCodeLayout.vue'
  import Message1 from '../componentDemo/Message1.vue'
  import Message1Code from '../componentDemo/Message1.vue?raw'
  import Message2 from '../componentDemo/Message2.vue'
  import Message2Code from '../componentDemo/Message2.vue?raw'
</script>
