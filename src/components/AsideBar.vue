<template>
  <aside v-if = "isPC || asideVisible">
    <div class = "linkGroup">
      <h1>起步</h1>
      <router-link active-class = "selected" class = "link" to = "/doc/start">项目介绍</router-link>
    </div>
    <div class = "linkGroup">
      <h1>组件列表</h1>
      <router-link v-for = "(component, index) in componentList" :key = "index"
                   :to = "'/doc/' + component.name.toLowerCase()" active-class = "selected" class = "link"
      >{{ component.name }}</router-link>
    </div>
  </aside>
</template>
<script lang = "ts" setup>
 import { inject, Ref } from 'vue';

 const asideVisible = inject<Ref<boolean>>('asideVisible');
 const isPC = inject<Ref<boolean>>('isPC');

 const componentList = [
   { name: 'Switch' },
   { name: 'Button' },
   { name: 'Dialog' },
   { name: 'Tabs' },
 ];
</script>

<style lang = "scss" scoped>
  @import "../assets/style/helper";

  aside {
    position: fixed;
    box-shadow: 0 0 16px #00000011;
    background: #FFF;
    padding: 0 16px;
    height: 100%;
    width: $width-aside-bar;
    overflow: scroll;

    > .linkGroup {
      color: #404244;
      margin-top: 24px;

      > h1 {
        font-size: 20px;
        line-height: 2;
      }

      > .link {
        display: block;
        padding: 8px 12px;
        font-size: 16px;
        line-height: 1;
        margin-top: 12px;

        &.selected {
          color: $color-highlight;
          font-weight: bold;
          border-left: 3px solid $color-highlight;
          padding-left: 9px;
        }
      }
    }
  }
</style>
