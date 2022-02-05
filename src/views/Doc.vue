<template>
    <NavBar />
    <AsideBar />
    <main class = "content">
      <transition mode = "out-in" name = "content">
        <router-view />
      </transition>
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

  .content-enter-active, .content-leave-active {
    transition: opacity .4s ease;
  }

  .content-enter-from, .content-leave-to {
    opacity: 0;
  }
</style>
