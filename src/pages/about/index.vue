<template>
  <div>
    <!-- <div class="about-content">因为平时还要上班，可能暂时还没太多时间更新这个小程序，但是我会坚持的，大家如果有什么建议，可以点击下面的按钮，提交给我，大家如果有什么素材想要的话，也可以跟我说一下</div> -->
    <button class="go-btn" type="primary" @click="goSuggestion">提提意见~</button>
    
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    goSuggestion: function () {
      const url = '../suggestion/main'
      wx.navigateTo({ url })
    }
  }
}
</script>

<style>
/* .about-content{
  font-size: 28rpx;
  margin: 0 50rpx;
} */

.go-btn{
  width: 80%;
  margin: 50rpx auto;
}
</style>
