<template>
  <div>
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
