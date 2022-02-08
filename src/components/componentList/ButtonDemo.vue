<template>
  <article class = "component-article-container article-container markdown-body">
    <section>
      <h1>size 示例</h1>
      <div class = "wrapper">
        <Button size = "small">小型按钮</Button>
        <Button>默认按钮</Button>
        <Button size = "large">大型按钮</Button>
      </div>
    </section>
    <section>
      <h1>theme 示例</h1>
      <div class = "wrapper">
        <Button>默认 button</Button>
        <Button theme = "link">默认 link</Button>
        <Button theme = "text">默认 text</Button>
      </div>
    </section>
    <section>
      <h1>level 示例</h1>
      <div class = "wrapper">
        <Button level = "primary">主要 button</Button>
        <Button level = "lesser">次要 button</Button>
        <Button level = "dangerous">危险 button</Button>
      </div>
      <div class = "wrapper">
        <Button level = "primary" theme = "link">主要 link</Button>
        <Button level = "lesser" theme = "link">次要 link</Button>
        <Button level = "dangerous" theme = "link">危险 link</Button>
      </div>
      <div class = "wrapper">
        <Button level = "primary" theme = "text">主要 text</Button>
        <Button level = "lesser" theme = "text">次要 text</Button>
        <Button level = "dangerous" theme = "text">危险 text</Button>
      </div>
    </section>
    <section>
      <h1>disabled 示例</h1>
      <div class = "wrapper">
        <Button disabled>disabled button</Button>
        <Button disabled theme = "link">disabled link</Button>
        <Button disabled theme = "text">disabled text</Button>
      </div>
    </section>
    <section>
      <h1>loading 示例</h1>
      <div class = "wrapper">
        <Button :loading = "true">loading button</Button>
        <Button :loading = "true" theme = "link">loading link</Button>
        <Button :loading = "true" theme = "text">loading text</Button>
      </div>
    </section>
  </article>
</template>

<script lang = "ts" setup>
  import Button from '../../lib/Button.vue';</script>

<style lang = "scss" scoped>
  section {
    margin-bottom: 48px;

    h1 {
      margin: 0 0 16px 0;
    }

    .wrapper {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-end;
      margin-bottom: 24px;

      > * {
        margin-bottom: 16px;
        margin-right: 16px;
      }
    }
  }
</style>
