// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios' // 引入axios
import store from './store' // 状态管理
import { Divider, Icon, XButton, LoadMore } from 'vux'

Vue.config.productionTip = false
Vue.component('divider', Divider)
Vue.component('icon', Icon)
Vue.component('x-button', XButton)
Vue.component('load-more', LoadMore)
Vue.prototype.$ajax = axios // 修改Vue的原型属性

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 把store对象提供给"store"选项,这可以把store的实例注入所有的子组件
  store,
  components: { App },
  template: '<App/>'
})
