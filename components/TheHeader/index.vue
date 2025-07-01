<script setup>
import { headerData } from '@/stores/header'
</script>

<template>
  <header class="header">
    <div class="container">
      <TheHeaderLogo />
      <AppNav :items="headerData.nuvItems"/>
      <AppButton link-classes="button">{{ headerData.buttonText }}</AppButton>
    </div>
  </header>
</template>

<style lang="scss" scoped>

  .header {
    position: sticky;
    top: 0;
    z-index: 50;
    background-color: #c1c1c1;
    box-shadow: 0 1px 5px rgba(112, 112, 112, 0.1);
  }
  
  .container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 30px 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

</style>