<template>
  <article class = "component-article-container article-container">
    <h1>template 示例</h1>
    <Dialog v-model:visible = "isVisible" :cancel = "functionCancel" :ok = "functionOk">
      <template #title>
        <strong>template Dialog</strong>
      </template>
      <template #content>
        <strong>这是一个可以点击蒙版区域关闭的 Dialog</strong>
        <p>使用 template 构造</p>
      </template>
    </Dialog>
    <Button theme = "link" @click = "toggle">打开 Dialog</Button>
    <h1>function 示例</h1>
    <Button theme = "link" @click = "onOpenDialog">打开 Dialog</Button>
  </article>
</template>

<script lang = "ts" setup>
  import { ref } from 'vue';
  import Button from '../../lib/Button.vue';
  import Dialog from '../../lib/Dialog.vue';
  import { openDialog } from '../../lib/openDialog';

  const isVisible = ref(false);

  const toggle = () => {
    isVisible.value = !isVisible.value;
  };

  const functionOk = () => {
    console.log('ok');
    return true;
  };
  const functionCancel = () => {
    console.log('cancel');
  };

  const onOpenDialog = () => {
    openDialog({
      title: '生成的 Dialog',
      content: '这是一个无法点击蒙版区域关闭的 Dialog 内容，使用 options 生成',
      cancel: () => {console.log('Dialog - cancel');},
      ok: () => {console.log('Dialog - ok');},
      closeOnOverlay: false
    });
  };
</script>

<style lang = "scss" scoped>
  h1 {
    margin: 64px 0 24px 0;

    &:first-child {
      margin-top: 0;
    }
  }
</style>
