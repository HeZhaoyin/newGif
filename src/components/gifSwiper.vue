<template>
  <div class="main">
    <swiper class="swiper-main" :previous-margin="'60rpx'" :next-margin="'60rpx'" :circular="true" >
      <div v-for="img in imgUrls" :key="img">
        <swiper-item>
          <img :src="img" alt="" class="swiper-image">
        </swiper-item>
      </div>
    </swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgUrls: [
        'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ]
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
  width: 97%;
  height: 100%;
}
</style>

