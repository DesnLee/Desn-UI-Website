<template>
  <div class = "nav-banner-wrapper">
    <NavBar max-width = "1000px" position = "relative" />
    <div class = "banner">
      <div class = "banner-content">
        <h1>Desn UI</h1>
        <h3>一个极简的 Vue.js 3.0 UI 组件库</h3>
        <p class = "actions">
          <a class = "link-lesser" href = "https://github.com/DesnLee/Desn-UI" target = "_blank">
            <Icon name = "github" />
            <span>Github</span>
          </a>
          <router-link class = "link-primary" to = "/doc/install">
            <span>起步</span>
            <Icon name = "start" />
          </router-link>
        </p>
      </div>
  </div>
  </div>
  <section class = "home-part2">
    <div>
      <Icon name = "vue" />
      <h5>基于 Vue.js 3.0</h5>
      <p>使用了 Vue.js 3.0 的 Composition API 制作</p>
    </div>
    <div>
      <Icon name = "ts" />
      <h5>基于 TypeScript</h5>
      <p>源代码采用 TypeScript（非严格检查）</p>
    </div>
    <div>
      <Icon name = "easy" />
      <h5>代码易读</h5>
      <p>每个组件的源代码都极其简单</p>
    </div>
  </section>
</template>

<script lang = "ts" setup>
import Icon from '../components/Icon.vue';
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
          display: flex;
          margin-top: 64px;

          .link-lesser, .link-primary {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            padding: 12px 0;
            width: 128px;
            transition: all .3s;
            font-size: 16px;
            line-height: 20px;

            > svg {
              width: 20px;
              height: 20px;
            }
          }

          .link-primary {
            background: #42B983;
            margin-left: 24px;
            color: #FFFFFFDD;
            font-weight: bold;

            > svg {
              margin-left: 8px;
            }

            &:hover {
              background: #42B98399;
            }
          }

          .link-lesser {
            background: transparent;
            border: 1px solid #42B983;
            color: #2AA36C;

            > svg {
              margin-right: 8px;
            }

            &:hover {
              background: #42B98333;
            }
          }
        }
      }
    }
  }

  .home-part2 {
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    padding: 48px 0;
    flex-direction: column;

    @media (min-width: 700px) {
      flex-direction: row;

      > div {
        width: 33.333%;
      }
    }

    > div {
      padding-left: 5%;
      padding-right: 5%;
      padding-bottom: 64px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      text-align: center;
      line-height: 1.6;

      > svg {
        margin-bottom: 24px;
        width: 44px;
        height: 44px;
      }

      > h5 {
        font-size: 18px;
        color: #404244;
      }

      > p {
        margin-top: 8px;
        color: #404244;
        font-weight: 300;
        font-size: 14px;
      }
    }
  }
</style>
