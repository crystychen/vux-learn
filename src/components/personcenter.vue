<template>
  <div class="hello">
    <x-header :title="title" :left-options="{showBack: false}"></x-header>
  </div>
</template>

<script>

import { XHeader } from 'vux'

export default {
  name: 'personcenter',
  components: {
    XHeader
  },
  data () {
    return {
      title: '我的'
    }
  }
}
</script>

<style scoped>

</style>
