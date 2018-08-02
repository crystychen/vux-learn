import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import group from '@/components/group'
import cart from '@/components/cart'
import psncenter from '@/components/personcenter'
import groupdetail from '@/components/groupdetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/group',
      name: 'group',
      component: group
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/psncenter',
      name: 'psncenter',
      component: psncenter
    },
    {
      path: '/groupdetail',
      name: 'groupdetail',
      component: groupdetail
    }
  ]
})
