<template>
  <Button size = "large">大型按钮</Button>
  <Button>默认按钮</Button>
  <Button size = "small">小型按钮</Button>
</template>

<script lang = "ts">
  import Button from '../../lib/components/Button.vue';

  export default {
    components: {
      Button
    }
  };
</script>
