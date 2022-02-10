<template>
  <Button theme = "link" @click = "onOpenDialog">打开 Dialog</Button>
</template>

<script lang = "ts" setup>
  import Button from '../../lib/components/Button.vue';
  import { openDialog } from '../../lib/components/openDialog';

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
