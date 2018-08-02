<template>
  <div class="hello">
    <x-header :title="title" :left-options="{showBack: true}"></x-header>
    {{$route.query.id}}
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
      title: ''
    }
  },
  created () {
    console.log(this.$route)
  }
}
</script>

<style scoped>

</style>
