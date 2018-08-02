<template>
  <div class="hello">
    <x-header :title="title" :left-options="{showBack: false}"></x-header>
    <div class="content" v-if="isEmpty">
      <img src="../assets/icon_cart_empty.png" alt="">
      <p>购物车还是空的</p>
      <x-button mini class="shopbtn" @click.native="goToIndex" type="primary">去逛逛</x-button>
    </div>
  </div>
</template>

<script>

import { XHeader } from 'vux'

export default {
  name: 'cart',
  components: {
    XHeader
  },
  data () {
    return {
      isEmpty: true,
      title: '购物车'
    }
  },
  methods: {
    goToIndex () {
    }
  }
}
</script>

<style scoped>
.content {
  padding: 20px;
}
.shopbtn {
  margin-top: 10px;
  background: orangered;
}
</style>
