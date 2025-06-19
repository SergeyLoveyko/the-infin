<script setup>
const props = defineProps({ 
  item: {
    title: String,
    text: String,
    image: String
  }
})
</script>

<template>
  <div class="container">
    <div class="container__title">
      <span>{{ props.item.title }}</span>
    </div>
    <div class="container__text">
      <p>
        {{ props.item.text }}
      </p>
    </div>
    <img :src="`/_nuxt/assets/image/${props.item.image}.jpg`" alt="people foto">
  </div>
</template>

<style lang="scss" scoped>
  
  .container {
    display: flex;
    border-top: solid 1px #a7a7a7;
    padding: 30px 18px 30px 0px;

    img {
      border-radius: 20px;
    }
  }

  .container__title {
    width: 130px;

    span {
      font-size: 16px;
      opacity: 40%;
    }
  }

  .container__text {
    width: 432px;
    margin-right: 140px;

    p {
      font-size: 20px;
      line-height: 1.3;
    }
  }

</style>