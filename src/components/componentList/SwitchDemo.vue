<template>
  <article class = "component-article-container article-container">
    <h1 class = "components-h1">Switch 组件</h1>
    <ComponentCodeLayout>
      <template #title>
        常规 Switch
      </template>
      <template #component>
        <component :is = "Switch1" />
      </template>
      <template #code>
        {{ Switch1Code }}
      </template>
    </ComponentCodeLayout>
    <ComponentCodeLayout>
      <template #title>
        带文字 Switch
      </template>
      <template #component>
        <component :is = "Switch2" />
      </template>
      <template #code>
        {{ Switch2Code }}
      </template>
    </ComponentCodeLayout>
    <ComponentCodeLayout>
      <template #title>
        修改颜色 Switch
      </template>
      <template #component>
        <component :is = "Switch3" />
      </template>
      <template #code>
        {{ Switch3Code }}
      </template>
    </ComponentCodeLayout>
  </article>
</template>

<script lang = "ts" setup>
  import { ref } from 'vue';
  import ComponentCodeLayout from '../componentCodeLayout.vue';

  import Switch1 from '../componentDemo/Switch1.vue';
  import Switch2 from '../componentDemo/Switch2.vue';
  import Switch3 from '../componentDemo/Switch3.vue';
  import Switch1Code from '../componentDemo/Switch1.vue?raw';
  import Switch2Code from '../componentDemo/Switch2.vue?raw';
  import Switch3Code from '../componentDemo/Switch3.vue?raw';

  const codeVisible = ref([ false, false, false ]);

  const switchCodeVisible = (index) => {
    codeVisible.value[index] = !codeVisible.value[index];
  };
</script>

<style lang = "scss" scoped>


</style>
