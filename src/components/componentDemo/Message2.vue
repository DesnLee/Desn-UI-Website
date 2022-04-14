<template>
  <Button @click = "success">打开失败消息</Button>
</template>

<script lang = "ts" setup>
  import { openMessage, Button } from 'desn-ui';

  const success = () => {
    openMessage.error({
      content: () => {return '这是一条失败的消息';},
      duration: 3,
      onClose: () => {console.log('失败的消息关闭了');},
    });
  };
</script>
