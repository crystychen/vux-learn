<template>
  <div id="app">
    <view-box>
    <router-view/>
    <tabbar icon-class="tabbar-active">
      <tabbar-item selected link="/">
        <img slot="icon" src="./assets/icon_home.png" >
        <img slot="icon-active" src="./assets/icon_home_active.png" >
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/group">
        <img slot="icon" src="./assets/group.png" >
        <img slot="icon-active" src="./assets/group_active.png" >
        <span slot="label">分类</span>
      </tabbar-item>
      <tabbar-item show-dot link="/cart">
        <img slot="icon" src="./assets/icon_cart.png" >
        <img slot="icon-active" src="./assets/icon_cart_active.png" >
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item badge="2" link="/psncenter">
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
export default {
  name: `App`,
  components: {
    Tabbar,
    TabbarItem,
    ViewBox
  },
  data () {
    return {
      title: `小店微商城`
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
