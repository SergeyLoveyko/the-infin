<script setup>
const items = [
  {
    title: 'The old way',
    text: 'Workers compete with their peers for recognition from bosses who also don’t like this dynamic.',
    image: 'people-one'
  },
  {
    title: 'The INFIN way',
    text: 'Colleagues dynamically observe and rank each other’s contributions in a confidential, anonymous manner. The INFIN then calculates ownable, individual value and automatically distributes peer-reviewed recognition and rewards (while giving execs a clear picture of individual ROI).',
    image: 'people-two'
  }
]
</script>

<template>
  <div class="wrapper">
    <section class="choose">
      <div class="choose__title">
        <AppTitleMore class="title">Why choose the INFIN</AppTitleMore>
      </div>
      <div class="choose__content">
        <AppChooseContentItem v-for="item in items" :key="item" :item="item"/>
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