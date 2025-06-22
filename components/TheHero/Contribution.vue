<script setup>
const config = useRuntimeConfig()
const props = defineProps({
  date: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="hero__contribution contribution">
    <div class="contribution__text">
      <p>{{ date.text }}</p>
    </div>
    <div class="contribution__title">
      <h2>{{ date.title }}</h2>
      <img :src="`${config.app.baseURL}image/group-stars.png`" alt="group stars">
    </div>
    <div class="contribution__btn">
      <AppButton :link-classes="`button ${date.buttonStyle}`">
        {{ date.buttonText }}
      </AppButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  .hero__contribution {
    display: flex;
  }

  .contribution__text {
    max-width: 115px;
    margin-right: 32px;

    p {
      font-size: 12px;
      line-height: 1.4;
    }
  }

  .contribution__title {
    position: relative;
    max-width: 905px;
    margin-right: auto;

    h2 {
      font-size: 88px;
      line-height: 0.9;
      font-weight: 400;
      text-transform: uppercase;
    }

    img {
      position: absolute;
      top: -155px;
      right: -75px;
    }
  }

  .contribution__btn {
    align-content: end;
  }

</style>