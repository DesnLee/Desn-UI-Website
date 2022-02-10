<template>
  <Switch v-model:value = "largeValue" size = "large" />
  <Switch v-model:value = "normalValue" />
  <Switch v-model:value = "smallValue" size = "small" />
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
