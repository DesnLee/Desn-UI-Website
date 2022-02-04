<template>
    <NavBar />
    <AsideBar />
    <router-view class = "content" />
</template>

<script lang = "ts" setup>
  import AsideBar from '../components/AsideBar.vue';
  import NavBar from '../components/NavBar.vue';</script>

<style lang = "scss" scoped>
  @import "../assets/style/helper";

  .content {
    width: 100%;
    height: 100%;

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
