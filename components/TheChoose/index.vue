<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { chooseData } from '@/stores/choose'

const { locale } = useI18n()

const localizedItems = computed(() => 
  chooseData.items.map(item => ({
    title: item.title[locale.value],
    text: item.text[locale.value],
    image: item.image
  }))
)

const localizedTitle = computed(() => chooseData.sectionTitle[locale.value])
</script>

<template>
  <div class="wrapper">
    <section class="choose">
      <div class="choose__title">
        <AppTitleMore class="title">
          {{ localizedTitle }}
        </AppTitleMore>
      </div>
      <div class="choose__content">
        <TheChooseContentItem
          v-for="(item, index) in localizedItems"
          :key="index"
          :item="item"
        />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>

  .choose {
    display: flex;
    justify-content: space-between;
    padding: 0 0 130px 18px;
  }

  .choose__title {
    width: 360px;
  }

  .title {
    position: relative;
    top: -10px;
  }

</style>