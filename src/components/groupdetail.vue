<template>
  <div class="hello">
    <x-header :title="$route.query.id" :left-options="{showBack: true}"></x-header>
  </div>
</template>

<script>

import { XHeader } from 'vux'

export default {
  name: 'groupdetail',
  components: {
    XHeader
  },
  data () {
    return {
    }
  },
  created () {
    console.log(this.$route)
  }
}
</script>

<style scoped>

</style>
