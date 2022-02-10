<template>
  <Button disabled>disabled button</Button>
  <Button disabled theme = "link">disabled link</Button>
  <Button disabled theme = "text">disabled text</Button>
</template>

<script lang = "ts">
  import Button from '../../lib/components/Button.vue';

  export default {
    components: {
      Button
    }
  };
</script>
