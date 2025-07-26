<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const items = computed(() => {
  return ['0', '1'].map(key => ({
    title: t(`choose.items.${key}.title`),
    text: t(`choose.items.${key}.text`),
    image: t(`choose.items.${key}.image`),
  }))
})
</script>

<template>
  <div class="wrapper">
    <section class="choose">
      <AppRow class="justify-space-between">
        <AppCol class="choose__title" :span="56">
          <AppTitleMore class="title">
            {{ t('choose.title') }}
          </AppTitleMore>
        </AppCol>
        <AppCol class="choose__content" :span="16">
          <TheChooseContentItem
            v-for="(item, index) in items"
            :key="index"
            :item="item"
          />
        </AppCol>
      </AppRow>
    </section>
  </div>
</template>

<style lang="scss" scoped>

  .choose {
    // display: flex;
    // justify-content: space-between;
    padding: 0 0 130px 18px;
  }

  // .choose__title {
  //   width: 360px;
  // }

  .title {
    position: relative;
    top: -10px;
  }

</style>