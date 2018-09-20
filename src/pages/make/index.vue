<template>
<div>
  <div>
    <img mode="widthFix" class="demo-img" :src="category.gifDemoUrl" alt="">
  </div>
  <input class="content-input" v-for="(content, index) in contentArr" :key="index" :placeholder="content" placeholder-class="content-input-placeholder" type="text" name="" v-model="materialArr[index]">
  <button type="primary" class="confirm-btn" @click="makeGif">生成</button>
  <modal cancel-text="取消" title="生成成功" :hidden="hiddenModal" @cancel="modalCancel">
    <img mode="widthFix" :src="modalImgUrl" alt="" @click="previewGif">
    <div>
      <p class="guide-title">GIF保存指引：</p>
      <p>1、点击上方图片进入预览模式</p>
      <p>2、进入预览模式后长按图片进行保存</p>
    </div>
  </modal>
</div>
</template>

<script>
import store from '@/store/store'

export default {
  data () {
    return {
      category: {},
      contentArr: [],
      materialArr: [],
      hiddenModal: true,
      modalImgUrl: ''
    }
  },
  mounted () {
    console.log(store.state.nowCategory)
    this.category = store.state.nowCategory
    this.contentArr = this.category.contents.split('##$@?$?@$##')
    console.log(this.contentArr)
  },
  methods: {
    makeGif: function () {
      let data = []
      for (let i = 0; i < this.contentArr.length; i++) {
        if (this.materialArr[i]) {
          data[i] = this.materialArr[i]
        } else {
          data[i] = this.contentArr[i]
        }
      }
      wx.request({
        url: 'https://www.hezhaoyin.com/gif/make',
        method: 'POST',
        data: {
          from: 1,
          tplid: this.category.tplid,
          quality: 1,
          content: data.join('##$@?$?@$##')
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: (res) => {
          wx.hideLoading()
          if (res.data.m === 0) {
            this.modalImgUrl = res.data.d.gifurl
            this.hiddenModal = false
          } else {
            wx.showToast({
              title: '服务器暂时很忙哟, 等等再试吧',
              icon: 'none'
            })
          }
        },
        fail: function () {
          wx.hideLoading()
          wx.showToast({ title: '服务器暂时很忙哟, 等等再试吧', icon: 'none' })
        }
      })
    },
    modalCancel: function () {
      this.hiddenModal = true
    },
    previewGif: function () {
      wx.previewImage({
        urls: [ this.modalImgUrl ]
      })
    }
  }
}
</script>

<style>
.demo-img {
  width: 100%;
}

.content-input {
  box-sizing: border-box;
  padding: 5rpx 10rpx;
  width: 90%;
  height: 60rpx;
  line-height: 60rpx;
  border: 1px solid #969696;
  margin: 20rpx auto;
  font-size: 26rpx;
  border-radius: 10px;
}

.content-input-placeholder {
  color: #ccc;
}

.confirm-btn {
  width: 60%;
}

.guide-title{
  font-weight: bold;
}
</style>
