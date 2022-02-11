<template>
  <Switch v-model:value = "largeValue" size = "large" />
  <Switch v-model:value = "normalValue" />
  <Switch v-model:value = "smallValue" size = "small" />
</template>

<script lang = "ts" setup>
  import { ref } from 'vue';
  import { Switch } from 'desn-ui';

  const largeValue = ref<boolean>(false);
  const normalValue = ref<boolean>(false);
  const smallValue = ref<boolean>(false);
</script>
