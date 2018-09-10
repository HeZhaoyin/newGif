<template>
  <div class="card" @click="goDetail">
    <div class="box">
      <img mode="widthFix" class="img-thum" v-if="imgSrc" :src="imgSrc" alt="">
      <p class="card-title">{{text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['text', 'imgSrc'],
  data () {
    return {
    }
  },
  methods: {
    goDetail ($event) {
      console.log($event)
      this.isOpen = true
    }
  }
}
</script>

<style>
.card {
  width: 50%;
  padding: 10rpx;
  box-sizing: border-box;
  transition: all .2s linear;
  background: #fff;
}

.box{
  border-radius: 20rpx;
  box-shadow: 0 5rpx 5rpx #ccc;
  overflow: hidden;
}

.img-thum{
  width: 100%;
}

.card-title{
  text-align: center;
  height: 120rpx;
  font-size: 26rpx;
}
</style>
