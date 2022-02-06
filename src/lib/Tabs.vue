<template>
  <div class = "des-tabs">
    <div ref = "container" class = "des-tabs-nav">
      <div v-for = "(title, index) in titles" :key = "index" :ref = "getItems" :class = "{selected: selected === title}"
           class = "des-tabs-nav-item" @click = "switchTab(title)"
      >{{ title }}</div>
      <div ref = "line" class = "des-tabs-nav-line"></div>
    </div>
    <div class = "des-tabs-content">
      <transition mode = "out-in" name = "content">
        <component :is = "currentComponent" :key = "selected" />
      </transition>
    </div>
  </div>
</template>

<script lang = "ts" setup>
  import { computed, onMounted, onUpdated, ref, useSlots } from 'vue';
  import Tab from './Tab.vue';

  const items = ref<HTMLDivElement[]>([]);
  const container = ref<HTMLDivElement>(null);
  const line = ref<HTMLDivElement>(null);
  const getItems = el => {
    if (el) {
      items.value.push(el);
    }
  };

  const setLineStyle = () => {
    const result = items.value.filter(item => {
      return item.classList.contains('selected');
    })[0];
    const { width, left: elLeft } = result.getBoundingClientRect();
    const { left: containerLeft } = container.value.getBoundingClientRect();
    line.value.style.width = width + 'px';
    line.value.style.left = (elLeft - containerLeft) + 'px';
  };
  onMounted(() => {
    setLineStyle();
  });
  onUpdated(() => {
    setLineStyle();
  });

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
</script>

<style lang = "scss">
  .des-tabs {
    display: flex;
    flex-direction: column;

    > .des-tabs-nav {
      position: relative;
      display: flex;
      border-bottom: 1px solid #DDD;
      color: #404244;

      > .des-tabs-nav-item {
        padding: 8px 0;
        margin-right: 24px;
        font-weight: bold;
        cursor: pointer;

        &.selected {
          color: #42B983;
        }
      }

      .des-tabs-nav-line {
        width: 30px;
        height: 2px;
        position: absolute;
        background: #42B983;
        bottom: -1px;
        transition: all .3s ease-in-out;
      }
    }

    > .des-tabs-content {
      margin-top: 12px;
    }
  }

  .content-enter-active, .content-leave-active {
    transition: all .2s ease;
  }

  .content-enter-from {
    transform: translateY(5px);
    opacity: 0;
  }

  .content-leave-to {
    transform: translateY(-5px);
    opacity: 0;
  }
</style>
