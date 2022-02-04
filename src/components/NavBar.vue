<template>
  <nav>
    <Icon v-if = "!isPC  && currentRoute.indexOf( '/doc') === 0" class = "menu" name = "menu" @click = "toggle" />
    <router-link class = "logo-wrapper" to = "/">
      <img alt = "" src = "../assets/logo.png" />
    </router-link>
    <div class = "link-wrapper">
      <router-link to = "/">首页</router-link>
      <router-link to = "/doc">文档</router-link>
    </div>
  </nav>
</template>

<script lang = "ts" setup>
  import { inject, Ref } from 'vue';
  import Icon from './Icon.vue';

  const currentRoute = inject<Ref<string>>('currentRoute');
  const isPC = inject<Ref<boolean>>('isPC');

  let asideVisible = inject<Ref<boolean>>('asideVisible')!;
  const toggle = () => {
    asideVisible.value = !asideVisible?.value;
  };
</script>

<style lang = "scss" scoped>
  @import "../assets/style/helper";

  nav {
    position: sticky;
    top: 0;
    width: 100%;
    height: $height-navbar;
    background: $color-highlight;
    display: flex;
    align-items: center;

    > .logo-wrapper {
      margin-left: 24px;
      margin-right: auto;
      height: $height-navbar;

      img {
        height: 100%;
      }
    }

    > .link-wrapper {
      font-weight: bold;
      padding-right: 24px;

      > * {
        margin-left: 36px;
      }
    }

    .menu {
      position: absolute;
      left: 24px;
      top: 24px;
      display: none;
      width: 48px;
      height: 48px;
      background: white;
    }

    @media(max-width: $move-device-width) {
      & {

        > .menu {
          display: inline-block;
        }

        > .link-wrapper {
          display: none;
        }

        > .logo-wrapper {
          margin-left: auto;
        }
      }
    }
  }


</style>
