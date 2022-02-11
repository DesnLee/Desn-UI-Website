<template>
  <Button theme = "link" @click = "click">打开 Dialog</Button>
</template>

<script lang = "ts" setup>
  import { Button } from 'desn-ui';
  import { openDialog } from 'desn-ui';

  const click = () => {
    openDialog({
      title: () => {return '生成的 Dialog';},
      content: () => {return '这是一个无法点击蒙版区域关闭的 Dialog 内容，使用 options 生成';},
      cancel: () => {console.log('Dialog - cancel');},
      ok: () => {console.log('Dialog - ok');},
      closeOnOverlay: false
    });
  };
</script>
