<template>
  <transition name = "aside">
  <aside v-if = "isPC || asideVisible">
    <div class = "linkGroup">
      <h1 class = "group-title">文档</h1>
      <ol class = "link-list">
        <li>
          <router-link class = "link" to = "/doc/introduction">介绍</router-link>
        </li>
        <li>
          <router-link class = "link" to = "/doc/install">安装</router-link>
        </li>
        <li>
          <router-link class = "link" to = "/doc/start">开始使用</router-link>
        </li>
      </ol>
    </div>
    <div class = "linkGroup">
      <h1 class = "group-title">组件列表</h1>
      <ol class = "link-list">
        <li v-for = "(component, index) in componentList" :key = " index "
        >
        <router-link :to = " '/doc/' + component.name.toLowerCase() " class = "link">{{
            component.name
          }}</router-link>
      </li>
      </ol>
    </div>
  </aside>
  </transition>
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
    z-index: 10;
    position: fixed;
    box-shadow: 0 0 16px #00000011;
    background: #F8F8F8;
    height: 100%;
    width: $width-aside-bar;
    overflow: scroll;

    > .linkGroup {
      color: #404244;
      margin-top: 36px;

      > .group-title {
        font-size: 20px;
        line-height: 2;
        padding: 0 16px;
      }

      > .link-list {
        margin-top: 8px;

        > li {
          > .link {
            display: block;
            position: relative;
            padding: 16px 24px;
            font-size: 16px;
            line-height: 1;

            &:hover {
              color: #42B983;
            }

            &.router-link-active {
              color: $color-highlight;
              font-weight: bold;
              background: #42B98324;

              &::before {
                content: '';
                position: absolute;
                background: $color-highlight;
                display: block;
                top: 0;
                right: 0;
                width: 4px;
                height: 100%;
              }
            }
          }
        }
      }
    }
  }

  .aside-enter-active, .aside-leave-active {
    transition: transform .3s ease;
  }

  .aside-enter-from, .aside-leave-to {
    transform: translateX(-100%);
  }
</style>
