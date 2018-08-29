<template>
  <div class="card" @click="goDetail" :class="isOpen ? 'cardopen' : ''">
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
      isOpen: false
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

.cardopen{
  color: red;
  position: absolute;
  width: 50vw;
  transform: translate(-50%,-50%);
  animation: openCard .5s linear forwards;
}

@keyframes openCard {
  0%{
    width: 50vw;
  }
  100%{
    top: 0;
    left: 0;
    transform: translate(0,0);
    width: 100vw;
    height: 100vh;
    position: fixed;
  }
}

</style>
