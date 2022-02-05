<template>
  <div :size = "size">
    <button v-bind = "rest">
      <slot />
    </button>
  </div>
</template>

<script lang = "ts" setup>
  import { useAttrs } from 'vue';

  const { size, ...rest } = useAttrs();
</script>
<script lang = "ts">
  export default {
    inheritAttrs: false
  };
</script>

<style lang = "scss" scoped>

  div {
    border: 1px solid red;
  }
</style>
