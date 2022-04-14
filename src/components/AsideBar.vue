<template>
  <transition name="aside">
    <aside v-if="isPC || asideVisible">
      <div class="linkGroup">
        <h1 class="group-title">文档</h1>
        <ol class="link-list">
          <li>
            <router-link class="link" to="/doc/introduction">介绍 </router-link>
          </li>
          <li>
            <router-link class="link" to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link class="link" to="/doc/start">开始使用</router-link>
          </li>
        </ol>
      </div>
      <div class="linkGroup">
        <h1 class="group-title">组件列表</h1>
        <ol class="link-list">
          <li v-for="(component, index) in componentList" :key="index">
            <router-link
              :to="'/components/' + component.name.toLowerCase()"
              class="link"
              >{{ component.name }}
            </router-link>
          </li>
        </ol>
      </div>
    </aside>
  </transition>
</template>
<script lang="ts" setup>
  import { inject, Ref } from 'vue'

  const asideVisible = inject<Ref<boolean>>('asideVisible')
  const isPC = inject<Ref<boolean>>('isPC')

  const componentList = [
    { name: 'Switch' },
    { name: 'Button' },
    { name: 'Dialog' },
    { name: 'Tabs' },
    { name: 'Message' },
  ]
</script>

<style lang="scss" scoped>
  @import "../assets/style/helper";

  aside {
    position: fixed;
    z-index: 10;
    overflow: scroll;
    width: $width-aside-bar;
    height: 100%;
    background: #f8f8f8;
    box-shadow: 0 0 16px #00000011;

    > .linkGroup {
      margin-top: 36px;
      color: #404244;

      > .group-title {
        font-size: 20px;
        line-height: 2;
        padding: 0 16px;
      }

      > .link-list {
        margin-top: 8px;

        > li {
          > .link {
            font-size: 16px;
            line-height: 1;
            position: relative;
            display: block;
            padding: 16px 24px;

            &:hover {
              color: #42b983;
            }

            &.router-link-active {
              font-weight: bold;
              color: $color-highlight;
              background: #42b98324;

              &::before {
                position: absolute;
                top: 0;
                right: 0;
                display: block;
                width: 4px;
                height: 100%;
                content: "";
                background: $color-highlight;
              }
            }
          }
        }
      }
    }
  }

  .aside-enter-active,
  .aside-leave-active {
    transition: transform 0.3s ease;
  }

  .aside-enter-from,
  .aside-leave-to {
    transform: translateX(-100%);
  }
</style>
