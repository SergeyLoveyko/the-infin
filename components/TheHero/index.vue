<script setup>
import { heroData } from '@/stores/hero'
</script>

<template>
  <div class="wrapper">
    <section class="hero">
      <TheHeroMobile :date="heroData.heroMobile"/>
      <TheHeroContribution :date="heroData.heroContribution"/>
    </section>
  </div>
</template>

<style lang="scss" scoped>

  .hero {
    padding: 106px 18px 30px 18px;
  }

</style>