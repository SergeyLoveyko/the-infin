<script setup>
import { headerData } from '@/stores/header'
</script>

<template>
  <header class="header">
    <TheHeaderLogo />
    <AppNav :items="headerData.nuvItems"/>
    <AppButton link-classes="button">{{ headerData.buttonText }}</AppButton>
  </header>
</template>

<style lang="scss" scoped>

  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 106px;
  }

</style>