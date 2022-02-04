<template>
  <aside v-if = "isPC || asideVisible">
    <h1>组件列表</h1>
    <div class = "linkList">
      <router-link active-class = "selected" class = "link" to = "/doc/switch" @click = "onAsideClick"
      >Switch</router-link>
      <router-link active-class = "selected" class = "link" to = "/doc/button" @click = "onAsideClick"
      >Button</router-link>
      <router-link active-class = "selected" class = "link" to = "/doc/dialog" @click = "onAsideClick"
      >Dialog</router-link>
      <router-link active-class = "selected" class = "link" to = "/doc/tabs" @click = "onAsideClick">Tabs</router-link>
    </div>
  </aside>
</template>
<script lang = "ts" setup>
 import { inject, Ref } from 'vue';

 const asideVisible = inject<Ref<boolean>>('asideVisible');
 const isPC = inject<Ref<boolean>>('isPC');

 const onAsideClick = (e: any) => {
   e.currentTarget.classList.add('selected');
   console.log(e.target.classList);
 };
</script>

<style lang = "scss" scoped>
  @import "../assets/style/helper";

  aside {
    display: block;
    position: fixed;
    box-shadow: 0 0 16px #00000011;
    background: #FFF;
    padding: 0 16px;
    height: 100vh;
    width: $width-aside-bar;
    overflow: scroll;

    > h1 {
      margin-top: 36px;
      color: #404244;
      font-size: 20px;
      line-height: 1;
    }

    > .linkList {
      color: #404244;
      font-size: 16px;
      margin-top: 16px;

      .link {
        display: block;
        margin-bottom: 12px;
        padding: 6px 12px;


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
