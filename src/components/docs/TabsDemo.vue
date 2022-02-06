<template>
  <article>
    <h1>示例1</h1>
    <Tabs v-model:selected = "currentTitle">
      <Tab title = "tab11">内容1</Tab>
      <Tab title = "tab22222">内容2</Tab>
    </Tabs>
  </article>
</template>

<script lang = "ts" setup>
import { ref } from 'vue';
import Tab from '../../lib/Tab.vue';
import Tabs from '../../lib/Tabs.vue';

const currentTitle = ref('tab11');

</script>

<style lang = "scss" scoped>
</style>
