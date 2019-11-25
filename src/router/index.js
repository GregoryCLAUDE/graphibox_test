import Vue from 'vue'
import Router from 'vue-router'
import Navbar from '@/components/navbar'
import Home from '@/components/Home'
import Contact from '@/components/Contact'
import News from '@/components/News'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    }, {
      path: '/Contact',
      component: Contact
    }, {
      path: 'News',
      component : News
    }
  ]
})
