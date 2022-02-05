<template>
  <nav>
    <Icon
      v-if="!isPC && currentRoute.indexOf('/doc') === 0"
      class="menu"
      name="menu"
      @click="toggle"
    />
    <router-link class="logo-wrapper" to="/">
      <img alt="logo" src="../assets/logo.png" />
    </router-link>
    <div class="link-wrapper">
      <router-link to="/">首页</router-link>
      <router-link to="/doc/start">文档</router-link>
    </div>
  </nav>
</template>

<script lang = "ts" setup>
import { inject, Ref } from 'vue';
import Icon from './Icon.vue';

const currentRoute = inject<Ref<string>>('currentRoute')!;
const isPC = inject<Ref<boolean>>('isPC');

let asideVisible = inject<Ref<boolean>>('asideVisible')!;
const toggle = () => {
  asideVisible.value = !asideVisible?.value;
};
</script>

<style lang = "scss" scoped>
@import "../assets/style/helper";

nav {
  z-index: 11;
  position: sticky;
  top: 0;
  width: 100%;
  height: $height-navbar;
  background: #FFFFFF;
  //border-bottom: 1px solid #DDD;
  display: flex;
  align-items: center;

  > .logo-wrapper {
    margin-left: 24px;
    margin-right: auto;
    height: 40px;

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
    top: ($height-navbar - 32px )/2;
    display: none;
    width: 32px;
    height: 32px;
    color: #303133;
  }

  @media (max-width: $move-device-width) {
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
