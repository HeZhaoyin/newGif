<template>
  <div class="main">
    <swiper :autoplay="true"  class="swiper-main" :previous-margin="'60rpx'" :next-margin="'60rpx'" :circular="true" @change="swiperChange">
      <div v-for="(img, index) in imgUrls" :key="img">
        <swiper-item>
          <img :src="img" alt="" class="swiper-image" :style="{ transform: index!==bannerIndex?'scale(0.9, 0.9)':'scale(1,1)'}">
        </swiper-item>
      </div>
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    imgUrls: Array
  },
  data () {
    return {
      bannerIndex: 0
    }
  },
  methods: {
    swiperChange: function (e) {
      this.bannerIndex = e.mp.detail.current
    }
  }
}
</script>

<style>
.swiper-main {
  height: 400rpx;
}

.main {
  width: 100%;
  height: 400rpx;
}

.swiper-image {
  width: 100%;
  height: 100%;
  transition: all .3s linear;
  display: block;
}
</style>

