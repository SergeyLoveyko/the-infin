<script setup>
const props = defineProps({
  date: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <AppRow class="hero__mobile mobile">
    <!-- <div class="hero__mobile mobile"> -->
      <AppCol class="mobile__content" :span="52">
        <!-- <div class="mobile__content"> -->
          <span>{{ date.textOne }}</span>
          <span>{{ date.textTwo }}</span>
        <!-- </div> -->
      </AppCol>
      <AppCol :span="63">
        <div class="mobile__image"></div>
      </AppCol>
    <!-- </div> -->
  </AppRow>
</template>

<style lang="scss" scoped>

.hero__mobile {
  margin-bottom: 128px;
}

.mobile__content {
  // width: 140px;
  // margin-right: 75px;
  
  & span {
    display: flex;
    font-size: 12px;
    line-height: 1.3;
    color: #7e7e7e;
  }

}

.mobile__image {
  // width: 201px;
  // height: 160px;
  aspect-ratio: 16 / 12;
  width: 100%;
  background-image: url("/assets/image/hero-app.jpg");
  background-repeat: no-repeat;
  background-position: top;
  background-size: 160%;
  border-radius: 20px;
}

</style>