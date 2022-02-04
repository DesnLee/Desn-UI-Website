<template>
  <div class = "switch-wrapper">
    <Switch v-model:value = "largeValue" :text = "cnText" size = "large" />
    <span>大按钮（加文字）</span>
  </div>
  <div class = "switch-wrapper">
    <Switch v-model:value = "normalValue" size = "normal" />
    <span>中按钮</span>
  </div>
  <div class = "switch-wrapper">
    <Switch v-model:value = "smallValue" color = "#ff0000" size = "small" />
    <span>小按钮（改颜色）</span>
  </div>
</template>

<script lang = "ts" setup>
  import { ref } from 'vue';
  import Switch from '../../lib/Switch.vue';

  const largeValue = ref<boolean>(false);
  const normalValue = ref<boolean>(false);
  const smallValue = ref<boolean>(false);
  const cnText = {
    'true': '开启',
    'false': '关闭'
  };
</script>

<style lang = "scss" scoped>
  .switch-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 36px;

    > span {
      margin-left: 36px;
      color: #404244;
      font-size: 16px;
    }
  }
</style>
