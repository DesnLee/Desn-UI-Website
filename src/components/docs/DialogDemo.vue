<template>
  <article>
    <Dialog v-model:visible = "isVisible" :cancel = "functionCancel" :ok = "functionOk">
      <template #title>
        <strong>自定义标题</strong>
      </template>
      <template #content>
        <strong>自定义内容1</strong>
        <p>自定义内容2</p>
      </template>
    </Dialog>
    <Button theme = "link" @click = "toggle">打开 Dialog</Button>
  </article>
</template>

<script lang = "ts" setup>
  import { ref } from 'vue';
  import Button from '../../lib/Button.vue';
  import Dialog from '../../lib/Dialog.vue';

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
