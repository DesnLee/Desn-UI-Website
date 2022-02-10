<template>
  <Tabs v-model:selected = "currentTitle">
    <Tab title = "tab1111">内容1</Tab>
    <Tab title = "tab2222222">内容2</Tab>
    <Tab title = "tab33">内容3</Tab>
  </Tabs>
</template>

<script lang = "ts">
  import Tabs from '../../lib/components/Tabs.vue';
  import Tab from '../../lib/components/Tab.vue';
  import { ref } from 'vue';

  export default {
    components: {
      Tab,
      Tabs
    },
    setup() {
      const currentTitle = ref('tab1111');

      return {
        currentTitle,
      };
    }
  };
</script>
