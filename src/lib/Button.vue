<template>
  <button :class = "classList" :disabled = "disabled" class = "des-button">
    <span>
      <slot />
    </span>
  </button>
</template>

<script lang = "ts" setup>
  const props = defineProps({
    theme: { type: String, default: 'button' },
    size: { type: String, default: 'normal' },
    level: { type: String, default: 'primary' },
    disabled: { type: Boolean, default: false },
  });

  const classList = [
    `des-button-theme-${ props.theme }`,
    `des-button-size-${ props.size }`,
    `des-button-level-${ props.level }`,
  ];
</script>

<style lang = "scss">
  $btn-h-normal: 32px;
  $btn-h-small: 24px;
  $btn-h-large: 40px;

  .des-button {
    box-sizing: border-box;
    display: inline-flex;
    white-space: nowrap;
    justify-content: center;
    align-items: center;
    border: 1px solid #DDD;
    color: #404244;
    cursor: pointer;
    background: #FFF;

    &.des-button-size-small {
      font-size: 12px;
      height: $btn-h-small;
      border-radius: 3px;
      padding: {
        left: $btn-h-small/3;
        right: $btn-h-small/3;
      }
    }

    &.des-button-size-normal {
      font-size: 14px;
      height: $btn-h-normal;
      border-radius: 4px;
      padding: {
        left: $btn-h-normal/3;
        right: $btn-h-normal/3;
      }
    }

    &.des-button-size-large {
      font-size: 16px;
      height: $btn-h-large;
      border-radius: 5px;
      padding: {
        left: $btn-h-large/3;
        right: $btn-h-large/3;
      }
    }

    &.des-button-theme-link {
      background: transparent;
      border: 1px solid transparent;
      color: #42B983;
      font-weight: bold;

      > span {
        position: relative;

        &::after {
          position: absolute;
          left: 0;
          bottom: -2px;
          content: "";
          width: 0;
          height: 2px;
          background: #42B983;
          transition: width .3s ease-in-out;
        }
      }
    }

    &.des-button-theme-text {
      background: transparent;
      border: 1px solid transparent;
    }

    &.des-button-theme-button:hover {
      color: #42B983;
      border: 1px solid #42B983;
    }

    &.des-button-theme-link:hover {
      > span::after {
        width: 100%;
      }
    }

    &.des-button-theme-text:hover {
      background: #00000008;
      color: #42B983;
    }

    &.des-button-theme-button.des-button-level-primary {
      border: 1px solid #42B983;
      background: #42B983;
      color: #FFFFFFEE;
      transition: all .3s ease-in-out;

      &:hover {
        background: #42B983CC;
      }
    }

    &.des-button-theme-button.des-button-level-dangerous {
      border: 1px solid #E25;
      background: #E25;
      color: #FFFFFFEE;
      transition: all .3s ease-in-out;

      &:hover {
        background: #EE2255AA;
      }
    }

    &.des-button-theme-link.des-button-level-dangerous {
      color: #E25;

      & > span::after {
        background: #E25;
      }
    }

    &.des-button-theme-text.des-button-level-primary {
      color: #42B983;
    }

    &.des-button-theme-text.des-button-level-lesser {
      color: #606266;
    }

    &.des-button-theme-text.des-button-level-dangerous {
      color: #E25;
    }

    &.des-button-theme-button[disabled] {
      border: none;
      background: #C0C4CC;
      cursor: not-allowed;
      
      &:hover {
        background: #C0C4CC;
      }
    }

    &.des-button-theme-link[disabled] {
      color: #909399;
      cursor: not-allowed;

      > span::after {
        background: #C0C4CC;
      }
    }

    &.des-button-theme-text[disabled] {
      color: #909399;
      cursor: not-allowed;

      &:hover {
        background: transparent;
      }
    }
  }
</style>
