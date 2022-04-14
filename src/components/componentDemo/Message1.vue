<template>
  <Button @click = "success">打开成功消息</Button>
</template>

<script lang = "ts" setup>
  import { openMessage, Button } from 'desn-ui';

  const success = () => {
    openMessage.success({
      content: () => {return '这是一条成功的消息';},
      duration: 3,
      onClose: () => {console.log('成功的消息关闭了');},
    });
  };
</script>
