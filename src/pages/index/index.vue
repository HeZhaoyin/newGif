<template>
  <div class="container">
    <div class="category-list-box">
      <card ref="category" v-for="category in categoryList" :key="category.tplid" :text="category.name" :imgSrc="category.thumbnail"></card>
      <div class="empty-category" v-if="categoryList.length % 2 !== 0"></div>
    </div>
    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      categoryList: []
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
    getUserInfo () {
      // 调用登录接口
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
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
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
</style>
