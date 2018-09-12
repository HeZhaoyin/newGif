<template>
<div>
  <div>
    {{ category }}
  </div>
</div>
</template>

<script>
import store from '@/store/store'

export default {
  mounted () {
    console.log(store.state.nowCategory)
  },
  computed: {
    category: function () {
      return JSON.stringify(store.state.nowCategory)
    }
  },
  methods: {

  }
}
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}

.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
