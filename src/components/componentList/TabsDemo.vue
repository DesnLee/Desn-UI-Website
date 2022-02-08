<template>
  <article class = "component-article-container article-container">
    <h1>示例1</h1>
    <Tabs v-model:selected = "currentTitle">
      <Tab title = "tab1111">内容1</Tab>
      <Tab title = "tab2222222">内容2</Tab>
      <Tab title = "tab33">内容3</Tab>
    </Tabs>
  </article>
</template>

<script lang = "ts" setup>
import { ref } from 'vue';
import Tab from '../../lib/Tab.vue';
import Tabs from '../../lib/Tabs.vue';

const currentTitle = ref('tab1111');

</script>

<style lang = "scss" scoped>
</style>
