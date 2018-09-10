<template>
  <div class="container">
    <div class="search-box">
      <input type="text" class="search-input" name="" @input="keywordChange" v-model="keyword" placeholder="输入关键词搜索">
    </div>
    <div class="category-list-box">
      <card ref="category" v-for="category in categoryList" :key="category.tplid" :text="category.name" :imgSrc="category.thumbnail"></card>
      <div class="empty-category" v-if="categoryList.length % 2 !== 0"></div>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      categoryList: [],
      keyword: ''
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getData () {
      wx.request({
        url: 'https://www.hezhaoyin.com/gif/category',
        method: 'GET',
        success: (res) => {
          this.categoryList = res.data.d
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    },
    keywordChange () {
      console.log(this.keyword)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getData()
  }
}
</script>

<style scoped>
.category-list-box{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
}
.empty-category{
  width: 50%;
}

.search-box{
  width: 100%;
}

.search-input{
  width: 90%;
  margin: 0 auto;
  height: 50rpx;
  border-radius: 25rpx;
  border: 1rpx solid gray;
  padding: 0 10rpx;
  box-sizing: border-box;
  font-size: 28rpx;
}
</style>
