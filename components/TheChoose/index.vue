<script setup>
import { chooseData } from '@/stores/choose'
</script>

<template>
  <div class="wrapper">
    <section class="choose">
      <div class="choose__title">
        <AppTitleMore class="title">
          {{ chooseData.sectionTitle }}
        </AppTitleMore>
      </div>
      <div class="choose__content">
        <TheChooseContentItem
          v-for="(item, index) in chooseData.items"
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