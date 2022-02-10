<template>
  <Switch v-model:value = "largeValue" :text = "cnText" size = "large" />
  <Switch v-model:value = "normalValue" :text = "cnText" />
  <Switch v-model:value = "smallValue" :text = "cnText" size = "small" />
</template>

<script lang = "ts" setup>
  import { ref } from 'vue';
  import Switch from '../../lib/components/Switch.vue';

  const largeValue = ref<boolean>(false);
  const normalValue = ref<boolean>(false);
  const smallValue = ref<boolean>(false);

  const cnText = {
    'true': '开启',
    'false': '关闭'
  };
</script>
