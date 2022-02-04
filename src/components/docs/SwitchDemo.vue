<template>
  <Switch :value = "originalValue" @input = "originalValue = $event" />
</template>

<script lang = "ts" setup>
  import { ref } from 'vue';
  import Switch from '../../lib/Switch.vue';

  const originalValue = ref(false);
</script>

<style lang = "scss" scoped>

</style>
