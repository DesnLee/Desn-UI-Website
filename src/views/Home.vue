<template>
  <div class = "nav-banner-wrapper">
    <NavBar color = "#606266" />
    <div class = "banner">
      <div class = "banner-content">
        <h1>Des UI</h1>
        <h3>一个极简的 Vue.js v3 UI 组件库</h3>
        <p class = "actions">
          <a class = "link-lesser" href = "https://github.com" target = "_blank">Github</a>
          <router-link class = "link-primary" to = "/doc/start">起步</router-link>
        </p>
      </div>
  </div>
  </div>
</template>

<script lang = "ts" setup>
import NavBar from '../components/NavBar.vue';</script>

<style lang = "scss" scoped>
  @import "../assets/style/helper";

  .nav-banner-wrapper {
    background-image: linear-gradient(180deg, #FFF 0%, #8DDAD5 100%);

    .banner {
      max-width: 1000px;
      margin-left: auto;
      margin-right: auto;
      height: $height-navbar + 320px;
      display: flex;
      justify-content: center;
      align-items: center;

      .banner-content {
        display: flex;
        flex-direction: column;
        align-items: center;

        > h1 {
          font-size: 5em;
          color: #303133;
        }

        > h3 {
          font-size: 16px;
          font-weight: 300;
          color: #707277;
        }

        > .actions {
          margin-top: 64px;

          .link-primary {
            background: #42B983;
            margin-left: 24px;
            color: #FFFFFFDD;
            font-weight: bold;

            &:hover {
              background: #42B98399;
            }
          }

          .link-lesser {
            background: transparent;
            border: 1px solid #42B983;
            color: #2AA36C;

            &:hover {
              background: #42B98333;
            }
          }

          .link-lesser, .link-primary {
            display: inline-block;
            text-align: center;
            border-radius: 8px;
            padding: 12px 0;
            width: 96px;
            transition: all .3s;
          }
        }
      }
    }
  }
</style>
