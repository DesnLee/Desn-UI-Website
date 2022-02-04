<template>
  <svg class = "icon">
    <use :href = "'#' + name" />
  </svg>
</template>

<script lang = "ts" setup>
  const props = defineProps({
    name: String
  });
</script>

<style lang = "scss" scoped>
  .icon {
    width: 240px;
    height: 240px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
