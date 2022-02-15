<template>
  <div class="nav-banner-wrapper">
    <NavBar max-width="1000px" position="relative" />
    <div class="banner">
      <div class="banner-content">
        <h1>Desn UI</h1>
        <h3>一个极简的 Vue.js 3.0 UI 组件库</h3>
        <p class="actions">
          <a
            class="link-lesser"
            href="https://github.com/DesnLee/Desn-UI-Website"
            target="_blank"
          >
            <Icon name="github" />
            <span>Github</span>
          </a>
          <router-link class="link-primary" to="/doc/install">
            <span>起步</span>
            <Icon name="start" />
          </router-link>
        </p>
      </div>
    </div>
  </div>
  <section class="home-part2">
    <div>
      <Icon name="vue" />
      <h5>基于 Vue.js 3.0</h5>
      <p>使用了 Vue.js 3.0 的 Composition API 制作</p>
    </div>
    <div>
      <Icon name="ts" />
      <h5>基于 TypeScript</h5>
      <p>源代码采用 TypeScript（非严格检查）</p>
    </div>
    <div>
      <Icon name="easy" />
      <h5>代码易读</h5>
      <p>每个组件的源代码都极其简单</p>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import Icon from '../components/Icon.vue'
  import NavBar from '../components/NavBar.vue'
</script>

<style lang="scss" scoped>
  @import '../assets/style/helper';

  .nav-banner-wrapper {
    background-image: linear-gradient(180deg, #ffffff 0%, #8ddad5 100%);

    .banner {
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 1000px;
      height: $height-navbar + 320px;
      margin-right: auto;
      margin-left: auto;

      .banner-content {
        display: flex;
        align-items: center;
        flex-direction: column;

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

          .link-lesser,
          .link-primary {
            font-size: 16px;
            line-height: 20px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 128px;
            padding: 12px 0;
            transition: all 0.3s;
            border-radius: 8px;

            > svg {
              width: 20px;
              height: 20px;
            }
          }

          .link-primary {
            font-weight: bold;
            margin-left: 24px;
            color: #ffffffdd;
            background: #42b983;

            > svg {
              margin-left: 8px;
            }

            &:hover {
              background: #42b98399;
            }
          }

          .link-lesser {
            color: #2aa36c;
            border: 1px solid #42b983;
            background: transparent;

            > svg {
              margin-right: 8px;
            }

            &:hover {
              background: #42b98333;
            }
          }
        }
      }
    }
  }

  .home-part2 {
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    margin-right: auto;
    margin-left: auto;
    padding: 48px 0;

    @media (min-width: 700px) {
      flex-direction: row;

      > div {
        width: 33.333%;
      }
    }

    > div {
      line-height: 1.6;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: flex-start;
      padding-right: 5%;
      padding-bottom: 64px;
      padding-left: 5%;
      text-align: center;

      > svg {
        width: 44px;
        height: 44px;
        margin-bottom: 24px;
      }

      > h5 {
        font-size: 18px;
        color: #404244;
      }

      > p {
        font-size: 14px;
        font-weight: 300;
        margin-top: 8px;
        color: #404244;
      }
    }
  }
</style>
