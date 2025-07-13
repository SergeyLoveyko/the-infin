<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const mobile = computed(() => ({
  textOne: t('hero.mobile.textOne'),
  textTwo: t('hero.mobile.textTwo')
}))

const contribution = computed(() => ({
  title: t('hero.contribution.title'),
  text: t('hero.contribution.text'),
  button: t('hero.contribution.button')
}))
</script>

<template>
  <div class="wrapper">
    <section class="hero">
      <TheHeroMobile :date="mobile"/>
      <TheHeroContribution 
        :date="contribution"
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