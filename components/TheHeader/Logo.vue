<script setup>
const config = useRuntimeConfig()
</script>

<template>
  <div>
    <a href="#">
      <img :src="`${config.app.baseURL}image/logo.svg`" alt="Logo Infin">
    </a>
  </div>
</template>