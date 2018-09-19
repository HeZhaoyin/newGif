<template>
  <div class="main">
    <swiper :autoplay="true"  class="swiper-main" :previous-margin="'60rpx'" :next-margin="'60rpx'" :circular="true" @change="swiperChange">
      <div v-for="(img, index) in imgUrls" :key="img">
        <swiper-item>
          <div class="hot-main" :style="{ transform: index!==bannerIndex?'scale(0.9, 0.9)':'scale(1,1)'}">
            <img mode="aspectFill" :src="img" alt="" class="swiper-image">
            <div class="hot-desc">罚款来得及看见京东方来看风刀</div>
          </div>
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

.hot-main{
  width: 100%;
  height: 100%;
  transition: all .3s linear;
}

.swiper-image {
  width: 100%;
  height: 100%;
  display: block;
}

.hot-desc{
  width: 100%;
  height: 70rpx;
  position: absolute;
  bottom: 0;
  left: 0;
  background: rgba(255,255,255,0.7);
  color: #000;
  text-align: center;
  font-weight: bold;
  line-height: 70rpx;
  font-size: 16px;
}
</style>

