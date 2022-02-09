<template>
  <Button :loading = "true">loading button</Button>
  <Button :loading = "true" theme = "link">loading link</Button>
  <Button :loading = "true" theme = "text">loading text</Button>
</template>

<script lang = "ts" setup>
  import Button from '../../lib/Button.vue';</script>
