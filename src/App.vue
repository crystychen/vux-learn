<template>
  <div id="app">
    <view-box>
    <router-view/>
    <tabbar icon-class="tabbar-active" @on-index-change="onIndexChange" v-if="tabbarShow">
      <tabbar-item :selected="$route.path === '/'" link="/">
        <img slot="icon" src="./assets/icon_home.png" >
        <img slot="icon-active" src="./assets/icon_home_active.png" >
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item :selected="$route.path === '/group'" link="/group">
        <img slot="icon" src="./assets/group.png" >
        <img slot="icon-active" src="./assets/group_active.png" >
        <span slot="label">分类</span>
      </tabbar-item>
      <tabbar-item show-dot :selected="$route.path === '/cart'" link="/cart">
        <img slot="icon" src="./assets/icon_cart.png" >
        <img slot="icon-active" src="./assets/icon_cart_active.png" >
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item badge="2" :selected="$route.path === '/psncenter'" link="/psncenter">
        <img slot="icon" src="./assets/icon_member.png" >
        <img slot="icon-active" src="./assets/icon_member_active.png" >
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
    </view-box>
  </div>
</template>
<script>
import { ViewBox, Tabbar, TabbarItem } from 'vux'
// import { mapGetters } from 'vuex'
export default {
  name: `App`,
  components: {
    Tabbar,
    TabbarItem,
    ViewBox
  },
  data () {
    return {
      // title: `小店微商城`
      // currentTab: 0
    }
  },
  // computed: mapGetters([
  //   // 从getters中获取
  //   'tabbarShow',
  //   'tabIndex'
  // ]),
  computed: {
    tabbarShow () {
      return this.$store.state.tabbarShow
    },
    tabIndex () {
      return this.$store.state.tabIndex
    }
  },
  // 监听,当路由发生变化的时候执行
  watch: {
    $route (to, from) {
      // console.log(to, from)
      if (to.path === '/' || to.path === '/home' || to.path === '/group' || to.path === '/cart' || to.path === '/psncenter') {
        /**
         * $store 来自Store对象
         * dispatch 向actions发起请求
         */
        this.$store.dispatch('showTabBar')
      } else {
        this.$store.dispatch('hideTabBar')
      }
    }
  },
  methods: {
    onIndexChange (newIndex, oldIndex) {
      console.log(newIndex, oldIndex)
      this.currentTab = newIndex
      // this.$store.commit('changeTabIndex', newIndex)
    }
  }
}
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  background-color: #EFEFF4;
}
p,h1,h2,h3,h4,h5,h6,span {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
a {
  text-decoration: none;
}
/* 导航css样式 */
.weui-tabbar__item.weui-bar__item_on .weui-tabbar__label span{
    color: red;
}
</style>
