<template>
  <article class="component-article-container article-container">
    <h1 class="components-h1">Tabs 组件</h1>
    <ComponentCodeLayout
      :code="Tabs1Code"
      :component="Tabs1"
      title="常规 Tabs"
    />
  </article>
</template>

<script lang="ts" setup>
  import ComponentCodeLayout from '../componentCodeLayout.vue'
  import Tabs1 from '../componentDemo/Tabs1.vue'
  import Tabs1Code from '../componentDemo/Tabs1.vue?raw'
</script>
