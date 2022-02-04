<template>
    <NavBar />
    <AsideBar />
    <main class = "content">
      <router-view />
    </main>
</template>

<script lang = "ts" setup>
  import AsideBar from '../components/AsideBar.vue';
  import NavBar from '../components/NavBar.vue';</script>

<style lang = "scss" scoped>
  @import "../assets/style/helper";

  .content {

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
</style>
