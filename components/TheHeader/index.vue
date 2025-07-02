<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { locale, locales, setLocale } = useI18n()
import { headerData } from '@/stores/header'

const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})

const localizedNav = computed(() => 
  headerData.nuvItems.map(item => item[locale.value])
)

const localizedButton = computed(() => headerData.buttonText[locale.value])
</script>

<template>
  <header class="header">
    <div class="container">
      <TheHeaderLogo />
      <AppNav :items="localizedNav"/>
      <div>
        <!-- <AppButton link-classes="button">{{ localizedButton }}</AppButton> -->
        <AppButton
          link-classes="button button_lan"
          href="#" 
          v-for="locale in availableLocales" 
          :key="locale.code" 
          @click.prevent.stop="setLocale(locale.code)"
        >
          {{ locale.name }}
        </AppButton>
        <AppButton link-classes="button">{{ localizedButton }}</AppButton>
      </div>
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
    padding: 30px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .button_lan {
    width: 105px;
    margin-right: 20px;
  }

</style>