<template>
  <div class="main">
    <swiper :autoplay="true" class="swiper-main" :previous-margin="'60rpx'" :next-margin="'60rpx'" :circular="true" @change="swiperChange">
      <div v-for="(img, index) in imgArr" :key="img" @click="goDetail(index)">
        <swiper-item>
          <div class="hot-main" :style="{ transform: index!==bannerIndex?'scale(0.9, 0.9)':'scale(1,1)'}">
            <img mode="aspectFill" :src="img.thumbnail" alt="" class="swiper-image">
            <div class="hot-desc">{{img.name}}</div>
          </div>
        </swiper-item>
      </div>
    </swiper>
  </div>
</template>

<script>
import store from '@/store/store'
export default {
  props: {
    imgArr: Array
  },
  data () {
    return {
      bannerIndex: 0
    }
  },
  methods: {
    swiperChange: function (e) {
      this.bannerIndex = e.mp.detail.current
    },
    goDetail: function (index) {
      store.commit('setNowCategory', this.imgArr[index])
      const url = '../make/main'
      wx.navigateTo({ url })
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

