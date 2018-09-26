<template>
  <div>
    <div class="suggestion-title">欢迎您给我留下宝贵的意见</div>
    <textarea class="suggestion-input" v-model="suggestion"></textarea>
    <button type="primary" class="submit-btn" @click="submitSuggestion">提交</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      suggestion: ''
    }
  },
  methods: {
    submitSuggestion: function () {
      if (this.suggestion.trim() === '') {
        wx.showModal({
          title: '提示',
          content: '请留下您的宝贵意见再提交',
          showCancel: false
        })
        return
      }
      wx.request({
        url: 'https://www.hezhaoyin.com/suggestion',
        // url: 'https://localhost/suggestion',
        method: 'POST',
        data: {
          content: this.suggestion
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: (res) => {
          if (res.data.m === 0) {
            wx.showModal({
              title: '谢谢',
              content: '提交成功，我会抽空看您的宝贵意见的~',
              showCancel: false,
              success: (res) => {
                this.suggestion = ''
                wx.navigateBack()
              }
            })
          } else {
            wx.showToast({
              title: '服务器暂时很忙哟, 等等再试吧',
              icon: 'none'
            })
          }
        },
        fail: function () {
          wx.showToast({ title: '服务器暂时很忙哟, 等等再试吧', icon: 'none' })
        }
      })
    }
  }
}
</script>

<style>
.suggestion-title{
  text-align: center;
  font-size: 30rpx;
  font-weight: bold;
  margin: 30rpx 0;
}

.suggestion-input{
  display: block;
  margin: 0 auto;
  width: 90%;
  height: 300rpx;
  border: 4px solid #ccc;
}

.submit-btn{
  width: 80%;
  margin: 50rpx auto;
}
</style>
