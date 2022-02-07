<template>
  <div class = "nav-wrapper">
    <nav ref = "navBar">
      <Icon v-if = "!isPC && currentRoute.indexOf('/doc') === 0" class = "menu" name = "menu" @click = "toggle"
      />
      <router-link class = "logo-wrapper" to = "/">
        <Icon name = "logo" />
      </router-link>
      <div class = "link-wrapper">
        <router-link to = "/">首页</router-link>
        <router-link to = "/doc/start">文档</router-link>
        <a href = "https://github.com/desnlee" target = "_blank">
          <Icon name = "github" />
          <span>Github</span>
        </a>
        <a href = "https://t.me/DesnLeeBot" target = "_blank">
          <Icon name = "telegram" />
          <span>Telegram</span>
        </a>
      </div>
    </nav>
  </div>
</template>

<script lang = "ts" setup>
import { inject, Ref } from 'vue';
import Icon from './Icon.vue';

const props = defineProps({
  color: { type: String, default: '#606266' },
  bgColor: { type: String, default: 'transparent' },
  position: { type: String, default: 'sticky' },
  maxWidth: { type: String, default: '' },
  ref: HTMLDivElement
});

const currentRoute = inject<Ref<string>>('currentRoute')!;
const isPC = inject<Ref<boolean>>('isPC');

let asideVisible = inject<Ref<boolean>>('asideVisible')!;
const toggle = () => {
  asideVisible.value = !asideVisible?.value;
};
</script>


<style lang = "scss" scoped>
@import "../assets/style/helper";

.nav-wrapper {
  z-index: 15;
  position: v-bind(position);
  top: 0;
  background: v-bind(bgColor);

  > nav {
    height: $height-navbar;
    max-width: v-bind(maxWidth);
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;

    > .logo-wrapper {
      margin-right: auto;
      cursor: pointer;

      svg {
        width: 40px;
        height: 40px;
        filter: drop-shadow(0 0 12px #42B98396);
      }

      @media(min-width: 700px) {
        margin-left: 24px;
      }
    }

    > .link-wrapper {
      font-weight: bold;
      padding-right: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: v-bind(color);

      > a {
        position: relative;
        margin-left: 36px;
        transition: color .3s;
        display: inline-flex;
        align-items: center;
        justify-content: center;

        > svg {
          width: 20px;
          height: 20px;
          margin-right: 4px;
        }

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
      cursor: pointer;
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
}

</style>
