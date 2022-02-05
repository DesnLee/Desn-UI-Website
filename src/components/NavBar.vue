<template>
  <nav>
    <Icon v-if = "!isPC && currentRoute.indexOf('/doc') === 0" class = "menu" name = "menu" @click = "toggle"
    />
    <router-link class = "logo-wrapper" to = "/">
      <img alt = "logo" src = "../assets/logo.png" />
    </router-link>
    <div class = "link-wrapper">
      <router-link to = "/">首页</router-link>
      <router-link to = "/doc/start">文档</router-link>
      <a href = "https://github.com" target = "_blank">Github</a>
      <a href = "https://t.me/DesnLeeBot" target = "_blank">Telegram</a>
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
    color: #606266;
    padding-right: 24px;

    > * {
      position: relative;
      margin-left: 36px;
      transition: color .3s;

      &::after {
        display: block;
        position: absolute;
        bottom: -4px;
        left: 0;
        content: '';
        height: 2px;
        width: 0;
        background: #42B983;
        transition: width .6s;
      }

      &:hover {
        color: #42B983;

        &::after {
          width: 100%;
        }
      }
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
