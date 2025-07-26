<script setup>
const config = useRuntimeConfig()
const props = defineProps({
  date: {
    type: Object,
    required: true
  },
  buttonClass: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="hero__contribution contribution">
    <div class="contribution__text">
      <p>{{ date.text }}</p>
    </div>
    <div class="contribution__title">
      <h2>
        {{ date.title }}
        <img :src="`${config.app.baseURL}image/group-stars.png`" alt="group stars">
      </h2>
    </div>
    <div class="contribution__btn">
      <AppButton :link-classes="`button ${buttonClass}`">
        {{ date.button }}
      </AppButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  .hero__contribution {
    display: flex;
  }

  .contribution__text {
    max-width: 105px;
    margin-right: 32px;

    p {
      font-size: 12px;
      line-height: 1.4;
    }
  }

  .contribution__title {
    position: relative;
    max-width: 69%;
    margin-right: auto;

    h2 {
      font-size: clamp(36px, 6vw + 0.05rem, 88px);
      line-height: 0.9;
      font-weight: 400;
      text-transform: uppercase;

      img {
        position: absolute;
        top: -2.5em;
        right: -0.9em;
        width: 5em;
        max-width: 100%;
      }
    }

  }

  .contribution__btn {
    align-content: end;
  }

</style>