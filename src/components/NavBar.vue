<template>
  <nav>
    <div class = "logo-wrapper">
      <img alt = "" src = "../assets/logo.png" />
    </div>
    <span class = "name">DesnLee - UI</span>
    <div class = "link-wrapper">
      <router-link to = "/">首页</router-link>
      <router-link to = "/doc">文档</router-link>
    </div>
  </nav>
</template>

<style lang = "scss" scoped>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-width: 1000px;

    .logo-wrapper {
      padding-left: 48px;
      margin-right: 12px;
      height: 96px;

      img {
        height: 100%;
      }
    }

    .name {
      margin-right: auto;
      font-size: 24px;
      font-weight: bold;
    }

    .link-wrapper {
      font-weight: bold;
      padding-right: 48px;

      > * {
        margin-left: 36px;
      }
    }
  }


</style>
