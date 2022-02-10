<template>
  <div class = "desn-tabs">
    <div ref = "container" class = "desn-tabs-nav">
      <div v-for = "(title, index) in titles" :key = "index" :ref = "setSelectedTab"
           :class = "{selected: selected === title}" class = "desn-tabs-nav-item" @click = "switchTab(title)"
      >{{ title }}</div>
      <div ref = "line" class = "desn-tabs-nav-line"></div>
    </div>
    <div class = "desn-tabs-content">
      <transition mode = "out-in" name = "tabs-content">
        <component :is = "currentComponent" :key = "selected" />
      </transition>
    </div>
  </div>
</template>

<script lang = "ts" setup>
  import { computed, onMounted, ref, useSlots, watchEffect } from 'vue';
  import Tab from './Tab.vue';

  const props = defineProps({
    selected: { type: String, required: true }
  });
  const emit = defineEmits([ 'update:selected' ]);

  const children = useSlots().default();
  children.forEach(child => {
    if (child.type !== Tab) {
      throw new Error('Tabs 组件内容必须为 Tab 组件');
    }
  });

  const titles = children.map(child => {
    return child.props.title;
  });

  const currentComponent = computed(() => {
    return children.filter(child => {
      return child.props.title === props.selected;
    })[0];
  });

  const switchTab = (title) => {
    emit('update:selected', title);
  };

  const selectedTab = ref<HTMLDivElement>(null);
  const container = ref<HTMLDivElement>(null);
  const line = ref<HTMLDivElement>(null);

  const setSelectedTab = el => {
    if (el?.classList.contains('selected')) {
      selectedTab.value = el;
    }
  };

  onMounted(() => {
    watchEffect(() => {
      const { width, left: elLeft } = selectedTab.value.getBoundingClientRect();
      const { left: containerLeft } = container.value.getBoundingClientRect();
      line.value.style.width = width + 'px';
      line.value.style.left = (elLeft - containerLeft) + 'px';
    });
  });
</script>

<style lang = "scss">
  .desn-tabs {
    display: flex;
    flex-direction: column;

    > .desn-tabs-nav {
      position: relative;
      display: flex;
      border-bottom: 1px solid #DDD;
      color: #404244;

      > .desn-tabs-nav-item {
        padding: 8px 0;
        margin-right: 24px;
        font-weight: bold;
        cursor: pointer;

        &.selected {
          color: #42B983;
        }
      }

      .desn-tabs-nav-line {
        width: 30px;
        height: 2px;
        position: absolute;
        background: #42B983;
        bottom: -1px;
        transition: all .3s ease-in-out;
      }
    }

    > .desn-tabs-content {
      margin-top: 12px;
    }
  }

  .tabs-content-enter-active, .tabs-content-leave-active {
    transition: all .2s ease;
  }

  .tabs-content-enter-from {
    transform: translateY(5px);
    opacity: 0;
  }

  .tabs-content-leave-to {
    transform: translateY(-5px);
    opacity: 0;
  }
</style>
