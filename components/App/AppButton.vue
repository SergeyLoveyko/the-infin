<script setup>
const props = defineProps({ linkClasses: String })
</script>

<template>
  <button :class="props.linkClasses">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>

  .button {
    cursor: pointer;
    width: 223px;
    height: 90px;
    font-size: 12px;
    font-weight: 400;
    border-radius: 50px;
    border: 1px solid #a2a2a2;
    background: none;
    text-transform: uppercase;
    transition: all 0.3s;

    &__black-small {
      font-weight: 500;
      color: #ffffff;
      background-color: #121212;
    }

    &__black-big {
      width: 297px;
      font-size: 14px;
      font-weight: 500;
      color: #ffffff;
      background-color: #121212;
    }

    &:hover {
      border: 1px solid #ffcd00;
      color: #121212;
      background-color: #ffcd00;
    }

    &__white {
      width: 260px;
      font-weight: 500;
      border: 1px solid #ffffff;
      background-color: #ffffff;
      transition: all 0.3s;

      &:hover {
        border: 1px solid #121212;
        color: #ffffff;
        background-color: #121212;
      }
    } 
  }

</style>