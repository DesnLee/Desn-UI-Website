<template>
  <Switch v-model:value = "largeValue" color = "#ff0000" size = "large" />
  <Switch v-model:value = "normalValue" color = "#ff0000" />
  <Switch v-model:value = "smallValue" color = "#ff0000" size = "small" />
</template>

<script lang = "ts">
  import { ref } from 'vue';
  import Switch from '../../lib/components/Switch.vue';

  export default {
    components: {
      Switch
    },
    setup() {
      const largeValue = ref<boolean>(false);
      const normalValue = ref<boolean>(false);
      const smallValue = ref<boolean>(false);

      return {
        largeValue,
        normalValue,
        smallValue
      };
    }
  };
</script>
