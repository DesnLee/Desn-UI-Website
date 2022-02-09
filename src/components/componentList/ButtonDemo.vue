<template>
  <article class = "component-article-container article-container">
  <h1 class = "components-h1">Button 组件</h1>
    <ComponentCodeLayout>
      <template #title>
        size 示例
      </template>
      <template #component>
        <component :is = "Button1" />
      </template>
      <template #code>
        {{ Button1Code }}
      </template>
    </ComponentCodeLayout>

    <ComponentCodeLayout>
      <template #title>
        theme 示例
      </template>
      <template #component>
        <component :is = "Button2" />
      </template>
      <template #code>
        {{ Button2Code }}
      </template>
    </ComponentCodeLayout>

    <ComponentCodeLayout>
      <template #title>
        level 示例
      </template>
      <template #component>
        <component :is = "Button3_1" />
      </template>
      <template #code>
        {{ Button3Code }}
      </template>
    </ComponentCodeLayout>

    <ComponentCodeLayout>
      <template #title>
        disabled 示例
      </template>
      <template #component>
        <component :is = "Button4" />
      </template>
      <template #code>
        {{ Button4Code }}
      </template>
    </ComponentCodeLayout>

    <ComponentCodeLayout>
      <template #title>
        loading 示例
      </template>
      <template #component>
        <component :is = "Button5" />
      </template>
      <template #code>
        {{ Button5Code }}
      </template>
    </ComponentCodeLayout>
  </article>
</template>

<script lang = "ts" setup>
  import ComponentCodeLayout from '../componentCodeLayout.vue';
  import Button1 from '../componentDemo/Button1.vue';
  import Button1Code from '../componentDemo/Button1.vue?raw';
  import Button2 from '../componentDemo/Button2.vue';
  import Button2Code from '../componentDemo/Button2.vue?raw';
  import Button3_1 from '../componentDemo/Button3_1.vue';
  import Button3Code from '../componentDemo/Button3_1.vue?raw';
  import Button4 from '../componentDemo/Button4.vue';
  import Button4Code from '../componentDemo/Button4.vue?raw';
  import Button5 from '../componentDemo/Button5.vue';
  import Button5Code from '../componentDemo/Button5.vue?raw';</script>
