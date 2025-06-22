<script setup>
const config = useRuntimeConfig()
import { videoData } from '@/stores/video'
</script>

<template>
  <div class="wrapper">
    <section class="video">
      <div class="video__btn">
          {{ videoData.buttonText }}
          <div class="video__btn-icon">
            <img 
              :src="`${config.app.baseURL}image/icon-play.png`"
              alt="icon play"
            >
          </div>
      </div>
      <video 
        class="video__video" src="#" 
        :poster="`${config.app.baseURL}image/image-video.jpg`">
      </video>
    </section>
  </div>
</template>

<style lang="scss" scoped>

  .video {
    position: relative;
    padding: 130px 0;
  }

  .video__video {
    width: 100%;
    border-radius: 30px;
  }

  .video__btn {
    position: absolute;
    display: flex;
    justify-content: space-between;
    padding: 12px 12px 12px 40px;
    width: 185px;
    height: 90px;
    font-weight: 500;
    color: #ffffff;
    background-color: #121212;
    align-items: center;
    border-radius: 50px;
    left: 50%;
    transform: translateX(-50%);
    bottom: 165px;
    cursor: pointer;
    text-transform: uppercase;
    z-index: 5;
    transition: all 0.3s;

    &-icon {
      width: 66px;
      height: 66px;
      background-color: #ffcd00;
      border-radius: 50px;
      align-items: center;

      img {
        width: 11px;
        height: 16px;
        transform: translate(30px, 25px);
      }
    }

    &:hover {
      color: #ffcd00;
      opacity: 75%;
    }
  }

</style>