<template>
  <article class = "component-article-container article-container">
    <h1 class = "components-h1">Switch 组件</h1>
    <ComponentCodeLayout>
      <template #title>
        常规 Tabs
      </template>
      <template #component>
        <component :is = "Tabs1" />
      </template>
      <template #code>
        {{ Tabs1Code }}
      </template>
    </ComponentCodeLayout>
  </article>
</template>

<script lang = "ts" setup>
  import ComponentCodeLayout from '../componentCodeLayout.vue';
  import Tabs1 from '../componentDemo/Tabs1.vue';
  import Tabs1Code from '../componentDemo/Tabs1.vue?raw';</script>
