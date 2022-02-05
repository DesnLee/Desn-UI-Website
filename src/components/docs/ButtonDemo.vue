<template>
  <div>
    <h1>示例1</h1>
    <Button size = "small">小型按钮</Button>
    <Button>默认按钮</Button>
    <Button size = "large">大型按钮</Button>
    <Button theme = "button">normal button</Button>
    <Button theme = "link">link button</Button>
    <Button theme = "text">text button</Button>
  </div>
</template>

<script lang = "ts" setup>
  import Button from '../../lib/Button.vue';</script>

<style lang = "scss" scoped>
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > * {
      margin-bottom: 24px;
    }
  }
</style>
