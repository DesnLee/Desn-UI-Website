<template>
  <div class="nav-wrapper">
    <nav ref="navBar">
      <Icon
        v-if="!isPC && isShowPath"
        class="menu"
        name="menu"
        @click="toggle"
      />
      <router-link class="logo-wrapper" to="/">
        <Icon name="logo" />
      </router-link>
      <div class="link-wrapper">
        <router-link to="/">首页</router-link>
        <router-link to="/doc/introduction">文档</router-link>
        <a href="https://github.com/DesnLee/Desn-UI-Website" target="_blank">
          <Icon name="github" />
          <span>Github</span>
        </a>
        <a href="https://t.me/DesnLeeBot" target="_blank">
          <Icon name="telegram" />
          <span>Telegram</span>
        </a>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup>
  import { inject, Ref } from 'vue'
  import { useRoute } from 'vue-router'
  import Icon from './Icon.vue'

  defineProps({
    color: { type: String, default: '#606266' },
    bgColor: { type: String, default: 'transparent' },
    position: { type: String, default: 'sticky' },
    maxWidth: { type: String, default: '' },
    ref: HTMLDivElement,
  })

  const route = useRoute()
  const isShowPath =
    route.path.startsWith('/doc/') || route.path.startsWith('/components/')
  const isPC = inject<Ref<boolean>>('isPC')

  let asideVisible = inject<Ref<boolean>>('asideVisible')!
  const toggle = () => {
    asideVisible.value = !asideVisible?.value
  }
</script>

<style lang="scss" scoped>
  @import '../assets/style/helper';

  .nav-wrapper {
    position: v-bind(position);
    z-index: 15;
    top: 0;
    background: v-bind(bgColor);

    > nav {
      display: flex;
      align-items: center;
      max-width: v-bind(maxWidth);
      height: $height-navbar;
      margin-right: auto;
      margin-left: auto;

      > .logo-wrapper {
        margin-right: auto;
        cursor: pointer;

        svg {
          width: 40px;
          height: 40px;
          filter: drop-shadow(0 0 12px #42b98396);
        }

        @media (min-width: 700px) {
          margin-left: 24px;
        }
      }

      > .link-wrapper {
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-right: 24px;
        color: v-bind(color);

        > a {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-left: 36px;
          transition: color 0.3s;

          > svg {
            width: 20px;
            height: 20px;
            margin-right: 4px;
          }

          &::after {
            position: absolute;
            bottom: -4px;
            left: 0;
            display: block;
            width: 0;
            height: 2px;
            content: '';
            transition: width 0.6s;
            background: #42b983;
          }

          &:hover {
            color: #42b983;

            &::after {
              width: 100%;
            }
          }
        }
      }

      .menu {
        position: absolute;
        top: calc(#{$height-navbar - 32px} / 2);
        left: 24px;
        display: none;
        width: 32px;
        height: 32px;
        cursor: pointer;
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
  }
</style>
