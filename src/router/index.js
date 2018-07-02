import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home/home'
// import Home from '@/components/home'
//按需加载
// const meHome = resolve => require(['~/components/home/me-home'], resolve)


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'   //默认路径
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
  ]
})