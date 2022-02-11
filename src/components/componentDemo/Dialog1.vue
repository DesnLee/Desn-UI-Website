<template>
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

</template>

<script lang = "ts" setup>
  import { ref } from 'vue';
  import { Dialog } from 'desn-ui';
  import { Button } from 'desn-ui';


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
</script>
