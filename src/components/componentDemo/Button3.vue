<template>
  <div>
    <Button level = "primary">主要 button</Button>
    <Button level = "lesser">次要 button</Button>
    <Button level = "dangerous">危险 button</Button>
  </div>

  <div>
    <Button level = "primary" theme = "link">主要 link</Button>
    <Button level = "lesser" theme = "link">次要 link</Button>
    <Button level = "dangerous" theme = "link">危险 link</Button>
  </div>

  <div>
    <Button level = "primary" theme = "text">主要 text</Button>
    <Button level = "lesser" theme = "text">次要 text</Button>
    <Button level = "dangerous" theme = "text">危险 text</Button>
  </div>
</template>

<script lang = "ts" setup>
  import Button from '../../lib/components/Button.vue';</script>
