<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { heroData } from '@/stores/hero'

const { locale } = useI18n()

const localizedMobile = computed(() => ({
  textOne: heroData.heroMobile.textOne[locale.value],
  textTwo: heroData.heroMobile.textTwo[locale.value]
}))

const localizedContribution = computed(() => ({
  title: heroData.heroContribution.title[locale.value],
  text: heroData.heroContribution.text[locale.value],
  buttonText: heroData.heroContribution.buttonText[locale.value]
}))
</script>

<template>
  <div class="wrapper">
    <section class="hero">
      <TheHeroMobile :date="localizedMobile"/>
      <TheHeroContribution 
        :date="localizedContribution"
        buttonClass="button__black-small"
      />
    </section>
  </div>
</template>

<style lang="scss" scoped>

  .hero {
    padding: 106px 18px 30px 18px;
  }

</style>