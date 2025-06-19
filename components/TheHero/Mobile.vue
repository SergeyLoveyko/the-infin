<template>
  <div class="hero__mobile mobile">
    <div class="mobile__content">
      <span>Web +</span>
      <span>Mobile app</span>
    </div>
    <div class="mobile__image"></div>
  </div>
</template>

<style lang="scss" scoped>

.hero__mobile {
  display: flex;
  margin-bottom: 128px;
}

.mobile__content {
  margin-right: 75px;
  
  & span {
    display: flex;
    font-size: 12px;
    line-height: 1.3;
    color: #7e7e7e;
  }

}

.mobile__image {
  width: 201px;
  height: 160px;
  background-image: url("/assets/image/hero-app.jpg");
  background-repeat: no-repeat;
  background-position: top;
  background-size: 160%;
  border-radius: 20px;
}

</style>