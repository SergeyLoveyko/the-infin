<script setup>
const config = useRuntimeConfig()
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="container">
    <div class="container__content">
      <div class="container__title">
        <span>{{ item.title }}</span>
      </div>
      <div class="container__text">
        <p>
          {{ item.text }}
        </p>
      </div>
    </div>
    <div class="container__image">
      <img :src="`${config.app.baseURL}image/${item.image}.jpg`" alt="people foto">
    </div>
  </div>
</template>

<style lang="scss" scoped>
  
  .container {
    display: flex;
    justify-content: space-between;
    border-top: solid 1px #a7a7a7;
    padding: 30px 18px 30px 0px;

    &__content {
      display: flex;
      width: 60%;
    }

    img {
      // width: 223px;
      // height: 223px;
      width: 100%;
      border-radius: 20px;
    }
  }

  .container__title {
    width: 24%;
    // width: 130px;
    padding-right: 10px;

    span {
      font-size: 16px;
      opacity: 80%;
    }
  }

  .container__text {
    // width: 432px;
    width: 76%;
    // margin-right: 140px;

    p {
      font-size: 20px;
      line-height: 1.3;
    }

  }

</style>