<template>
<div>
  <div>
    {{ category }}
  </div>
  <input class="content-input" v-for="(content, index) in contentArr" :key="index" :placeholder="content" placeholder-class="content-input-placeholder" type="text" name="" v-model="materialArr[index]">
</div>
</template>

<script>
import store from '@/store/store'

export default {
  data () {
    return {
      category: {},
      contentArr: [],
      materialArr: []
    }
  },
  mounted () {
    console.log(store.state.nowCategory)
    this.category = store.state.nowCategory
    this.contentArr = this.category.contents.split('##$@?$?@$##')
    console.log(this.contentArr)
  },
  methods: {

  }
}
</script>

<style>
.content-input{
  box-sizing: border-box;
  padding: 5rpx 10rpx;
  width: 90%;
  border: 1px solid #e5e5e5;
  margin: 20rpx auto;
  font-size: 14px;
}

.content-input-placeholder{
  color: #ccc;
}
</style>
