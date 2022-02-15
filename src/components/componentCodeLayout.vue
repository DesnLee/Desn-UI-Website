<template>
  <div class="components-wrapper">
    <h2 class="components-h2">
      {{ title }}
    </h2>
    <div class="components-demo">
      <div class="component-instance">
        <component :is="component" />
      </div>
      <Button class="showCode" level="lesser" @click="switchCodeVisible">
        {{ btnText }}
      </Button>
    </div>
    <transition name="code">
      <div v-if="codeVisible" class="components-code">
        <pre v-highlight>
          <code>{{ code }}</code>
        </pre>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
  import { computed, ref, onMounted } from 'vue'
  import { Button } from 'desn-ui'

  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    component: {
      type: Object,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
  })
  const codeVisible = ref(false)
  const switchCodeVisible = () => {
    codeVisible.value = !codeVisible.value
  }

  const btnText = computed(() => {
    return codeVisible.value ? '隐藏代码' : '查看代码'
  })
  onMounted(() => {
    window.scroll(0, 0)
  })
</script>

<style lang="scss" scoped>
  .components-h1 {
    font-size: 32px;
  }

  .components-wrapper {
    line-height: 1;
    margin-top: 24px;
    padding: 12px;
    border: 1px solid #eeeeee;
    border-radius: 6px;

    > .components-h2 {
      font-size: 20px;
      margin-top: 8px;
    }

    > .components-demo {
      margin: 16px 0 0 0;
      padding: 24px 0 0 0;
      border-top: 1px solid #eeeeee;

      > .component-instance {
        > :deep(div) {
          > * {
            margin: 0 12px 12px 0;
          }
        }

        > :deep(*) {
          margin: 0 12px 12px 0;
        }
      }

      > .showCode {
        display: block;
        margin-top: 24px;
      }
    }

    > .components-code {
      font-size: 12px;
      line-height: 1.8;
      margin-top: 24px;
      border-top: 1px solid #eeeeee;
    }
  }

  .code-enter-active,
  .code-leave-active {
    transition: all 0.3s ease-out;
  }

  .code-enter-from,
  .code-leave-to {
    opacity: 0;
  }
</style>
