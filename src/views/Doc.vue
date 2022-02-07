<template>
    <NavBar bg-color = "#FFF" />
  <AsideBar />
  <main class = "content">
      <router-view v-slot = "{Component}">
        <transition mode = "out-in" name = "doc-content">
          <component :is = "Component" />
        </transition>
    </router-view>
  </main>
</template>

<script lang = "ts" setup>
  import AsideBar from '../components/AsideBar.vue';
  import NavBar from '../components/NavBar.vue';</script>

<style lang = "scss" scoped>
  @import "../assets/style/helper";

  .content {
    max-width: 100vw;
    overflow: hidden;
    @media (max-width: $move-device-width) {
      padding-left: 24px;
    }
    padding: {
      left: $width-aside-bar + 24px;
      right: 24px;
      top: 36px;
      bottom: 36px;
    }
  }

  .docs-content-enter-active, .doc-content-leave-active {
    transition: opacity .2s ease;
  }

  .doc-content-enter-from, .doc-content-leave-to {
    opacity: 0;
  }
</style>
