<template>
  <Tabs v-model:selected = "currentTitle">
    <Tab title = "tab1111">内容1</Tab>
    <Tab title = "tab2222222">内容2</Tab>
    <Tab title = "tab33">内容3</Tab>
  </Tabs>
</template>

<script lang = "ts" setup>
  import { Tabs } from 'desn-ui';
  import { Tab } from 'desn-ui';
  import { ref } from 'vue';

  const currentTitle = ref('tab1111');
</script>
