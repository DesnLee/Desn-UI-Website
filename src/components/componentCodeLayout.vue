<template>
  <div class = "components-wrapper">
    <h2 class = "components-h2">
      <slot name = "title"></slot>
    </h2>
    <div class = "components-demo">
      <div class = "component-instance">
        <slot name = "component"></slot>
      </div>
      <Button class = "showCode" level = "lesser" @click = "switchCodeVisible">{{ btnText }}</Button>
    </div>
    <transition name = "code">
      <pre v-if = "codeVisible" v-highlight class = "components-code">
        <code><slot name = "code"></slot></code>
      </pre>
    </transition>
  </div>
</template>

<script lang = "ts" setup>
  import { computed, ref } from 'vue';
  import Button from '../lib/Button.vue';

  const codeVisible = ref(false);
  const switchCodeVisible = () => {
    codeVisible.value = !codeVisible.value;
  };

  const btnText = computed(() => {
    return codeVisible.value ? '隐藏代码' : '查看代码';
  });
</script>

<style lang = "scss" scoped>
  .components-h1 {
    font-size: 32px;
  }

  .components-wrapper {
    line-height: 1;
    border: 1px solid #EEE;
    border-radius: 6px;
    margin-top: 24px;
    padding: 12px;

    > .components-h2 {
      margin-top: 8px;
      font-size: 20px;
    }

    > .components-demo {
      margin: 16px 0 0 0;
      padding: 24px 0 0 0;
      border-top: 1px solid #EEE;

      > .component-instance {
        display: flex;
        align-items: flex-end;
      }

      > .showCode {
        display: block;
        margin-top: 24px;
      }
    }

    > .components-code {
      border-top: 1px solid #EEE;
      margin-top: 24px;
      font-size: 12px;
      line-height: 1.8;
    }
  }

  .code-enter-active, .code-leave-active {
    transition: all .3s ease-out;
  }

  .code-enter-from, .code-leave-to {
    opacity: 0;
  }
</style>
