<template>
  <article class = "component-article-container article-container">
  <h1 class = "components-h1">Dialog 组件</h1>
  <ComponentCodeLayout>
     <template #title>
        template 示例
      </template>
      <template #component>
        <Dialog1 />
      </template>
      <template #code>
        {{ Dialog1Code }}
      </template>
  </ComponentCodeLayout>

  <ComponentCodeLayout>
     <template #title>
        function 示例
      </template>
      <template #component>
        <Dialog2 />
      </template>
      <template #code>
        {{ Dialog2Code }}
      </template>
  </ComponentCodeLayout>
  </article>
</template>

<script lang = "ts" setup>
  import Dialog1 from '../componentDemo/Dialog1.vue';
  import Dialog1Code from '../componentDemo/Dialog1.vue?raw';
  import Dialog2 from '../componentDemo/Dialog2.vue';
  import Dialog2Code from '../componentDemo/Dialog2.vue?raw';
  import ComponentCodeLayout from '../componentCodeLayout.vue';</script>
