import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
   redirect:"/home"
  },
  {
    path: '/home',
    name: 'home',
    component: () => import("../views/Home.vue")
    
  },
  {
    path: '/my',
    component: () => import("../views/My.vue")
    
  },  {
    path: '/find',
    name: 'home',
    component: () => import("../views/Find.vue")
    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
