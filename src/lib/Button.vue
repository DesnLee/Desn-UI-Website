<template>
  <button :class = "classList" :disabled = "disabled" class = "des-button">
    <span>
      <span v-if = "loading" class = "des-button-loading">
        <span class = "loading1"></span>
        <span class = "loading2"></span>
        <span class = "loading3"></span>
      </span>
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
    loading: { type: Boolean, default: false },
  });

  const classList = [
    `des-button-theme-${ props.theme }`,
    `des-button-size-${ props.size }`,
    `des-button-level-${ props.level }`,
    { [`des-button-loading`]: props.loading },
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
    justify-content: space-between;
    align-items: center;
    border: 1px solid #DDD;
    color: #404244;
    cursor: pointer;
    background: #FFF;

    > span {
      display: inline-flex;
      align-items: center;
    }

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

    &.des-button-loading {
      cursor: not-allowed;

      > span > .des-button-loading {
        position: relative;

        > span {
          position: absolute;
          display: inline-block;
          top: 0;
          left: 0;
          border-radius: 50%;
          background: inherit;
          content: "";
          width: 100%;
          height: 100%;
          animation: ball-scale-multiple 2.1s infinite;

          &.loading1 {
            animation-delay: -.7s;
          }

          &.loading2 {
            animation-delay: -1.4s;

          }

          &.loading3 {
            animation-delay: -2.1s;
          }
        }
      }
    }

    &.des-button-size-small {
      > span > .des-button-loading {
        width: $btn-h-small/2;
        height: $btn-h-small/2;
        margin-right: 2px;
      }
    }

    &.des-button-size-normal {
      > span > .des-button-loading {
        width: $btn-h-normal/2;
        height: $btn-h-normal/2;
        margin-right: 3px;
      }
    }

    &.des-button-size-large {
      > span > .des-button-loading {
        width: $btn-h-large/2;
        height: $btn-h-large/2;
        margin-right: 4px;
      }
    }

    &.des-button-loading.des-button-theme-button {
      background: #42B98399;
      border: none;

      > span > .des-button-loading > span {
        background: #FFFFFFCC;
      }

      &:hover {
        background: #42B98399;
      }
    }

    &.des-button-loading.des-button-theme-link {
      color: #42B98399;

      > span > .des-button-loading > span {
        background: #42B98399;
      }

      &:hover > span::after {
        width: 0;
      }
    }

    &.des-button-loading.des-button-theme-text {
      color: #C0C4CC;

      > span > .des-button-loading > span {
        background: #C0C4CC;
      }

      &:hover {
        background: transparent;
      }
    }
  }

  @keyframes ball-scale-multiple {
    0% {
      transform: scale(0.0);
      opacity: 0;
    }
    15% {
      opacity: .72;
    }
    100% {
      transform: scale(1.0);
      opacity: 0;
    }
  }
</style>
