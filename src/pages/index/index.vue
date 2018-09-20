<template>
  <div class="container">
    <gif-swiper :imgArr="hotGifUrlArr"></gif-swiper>
    <div class="search-box">
      <input type="text" class="search-input" name="" @input="keywordChange" v-model="keyword" placeholder="输入关键词搜索(暂未启用)">
    </div>
    <div class="category-list-box">
      <card :category="category" ref="category" v-for="category in categoryList" :key="category.tplid" :text="category.name" :imgSrc="category.thumbnail"></card>
      <div class="empty-category" v-if="categoryList.length % 2 !== 0"></div>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'
import store from '@/store/store'
import gifSwiper from '@/components/gifSwiper'

export default {
  data () {
    return {
      categoryList: [],
      keyword: '',
      hotGifUrlArr: [
        {
          'tplid': 1,
          'contents': '好啊##$@?$?@$##就算你是一流工程师##$@?$?@$##就算你出报告再完美##$@?$?@$##我叫你改报告你就要改##$@?$?@$##毕竟我是客户##$@?$?@$##客户了不起啊##$@?$?@$##sorry 客户真的了不起##$@?$?@$##以后叫他天天改报告##$@?$?@$##天天改 天天改',
          'gifDemoUrl': 'https://www.hezhaoyin.com/demo/gif/1.gif',
          'gifType': 1,
          'name': 'sorry为所欲为（来源：TVB电视剧《读心神探》）',
          'thumbnail': 'https://www.hezhaoyin.com/demo/thumbnail/1.jpg'
        },
        {
          'tplid': 2,
          'contents': '我就是饿死##$@?$?@$##死外边 从这跳下去##$@?$?@$##也不会吃你们一点东西##$@?$?@$##真香',
          'gifDemoUrl': 'https://www.hezhaoyin.com/demo/gif/2.gif',
          'gifType': 2,
          'name': '我就是饿死（来源：《变形记》第八季之《远山的抉择》）',
          'thumbnail': 'https://www.hezhaoyin.com/demo/thumbnail/2.jpg'
        },
        {
          'tplid': 3,
          'contents': '没有钱啊 肯定要做的啊##$@?$?@$##不做的话没有钱用##$@?$?@$##那你不会去打工啊##$@?$?@$##有手有脚的##$@?$?@$##打工是不可能打工的##$@?$?@$##这辈子不可能打工的',
          'gifDemoUrl': 'https://www.hezhaoyin.com/demo/gif/3.gif',
          'gifType': 3,
          'name': '打工这辈子是不可能打工的（来源：窃格瓦拉 打工）',
          'thumbnail': 'https://www.hezhaoyin.com/demo/thumbnail/3.png'
        },
        {
          'tplid': 4,
          'contents': '没想到##$@?$?@$##你竟说出如此粗鄙之语',
          'gifDemoUrl': 'https://www.hezhaoyin.com/demo/gif/4.gif',
          'gifType': 4,
          'name': '你竟说出如此粗鄙之语（来源：诸葛孔明《三国演义》）',
          'thumbnail': 'https://www.hezhaoyin.com/demo/thumbnail/4.png'
        },
        {
          'tplid': 5,
          'contents': '金坷垃好处都有啥##$@?$?@$##谁说对了就给他##$@?$?@$##肥料掺了金坷垃##$@?$?@$##不流失 不蒸发 零浪费##$@?$?@$##肥料掺了金坷垃##$@?$?@$##能吸收两米下的氮磷钾',
          'gifDemoUrl': 'https://www.hezhaoyin.com/demo/gif/5.gif',
          'gifType': 5,
          'name': '金坷垃好处都有啥 谁说对了都给他（来源：金坷垃广告）',
          'thumbnail': 'https://www.hezhaoyin.com/demo/thumbnail/5.png'
        }
      ]
    }
  },

  components: {
    card,
    gifSwiper
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
          store.commit('setCategoryList', this.categoryList)
          console.log(this.categoryList)
        }
      })
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
