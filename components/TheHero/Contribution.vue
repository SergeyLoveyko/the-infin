<template>
  <div class="hero__contribution contribution">
    <div class="contribution__text">
      <p>A market-based <br /> assessment of your <br /> contribution.</p>
    </div>
    <div class="contribution__title">
      <h2>To know your true value,  Help others understand theirs.</h2>
      <img src="/assets/image/group-stars.png" alt="group stars">
    </div>
    <div class="contribution__btn">
      <AppButton link-classes="button button__black-small">Schedule a demo</AppButton>
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