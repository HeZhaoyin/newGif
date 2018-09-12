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
  data () {
    return {
      category: {}
    }
  },
  mounted () {
    console.log(store.state.nowCategory)
    this.category = store.state.nowCategory
  },
  methods: {

  }
}
</script>

<style>

</style>
