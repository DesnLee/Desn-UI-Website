<template>
  <Button :loading = "true">loading button</Button>
  <Button :loading = "true" theme = "link">loading link</Button>
  <Button :loading = "true" theme = "text">loading text</Button>
</template>

<script lang = "ts">
  import Button from '../../lib/components/Button.vue';

  export default {
    components: {
      Button
    }
  };
</script>
