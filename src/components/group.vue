<template>
  <div class="hello">
    <x-header :title="title" :left-options="{showBack: false}"></x-header>
  </div>
</template>

<script>

import { XHeader } from 'vux'

export default {
  name: 'group',
  components: {
    XHeader
  },
  data () {
    return {
      title: '分类'
    }
  }
}
</script>

<style lang="less">

</style>
