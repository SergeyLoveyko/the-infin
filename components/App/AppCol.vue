<script setup>
defineProps({
  span: {
    type: Number,
    default: ''
  }
})
</script>

<template>
  <div :class="`col-${span}`">
    <slot></slot>
  </div>
</template>