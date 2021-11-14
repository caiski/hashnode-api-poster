import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/success',
    name: 'Success',
    component: () => import(/* webpackChunkName: "authenticated" */ '../views/Success.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "authenticated" */ '../views/Home.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let { isLoggedIn } = store.getters

  if(to.name !== 'Login' && !isLoggedIn) next({ name: 'Login' })
  else next()
})

export default router
