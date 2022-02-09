<template>
  <Tabs v-model:selected = "currentTitle">
    <Tab title = "tab1111">内容1</Tab>
    <Tab title = "tab2222222">内容2</Tab>
    <Tab title = "tab33">内容3</Tab>
  </Tabs>
</template>

<script lang = "ts" setup>
import Tabs from '../../lib/Tabs.vue';
import Tab from '../../lib/Tab.vue';
import { ref } from 'vue';

const currentTitle = ref('tab1111');
</script>
