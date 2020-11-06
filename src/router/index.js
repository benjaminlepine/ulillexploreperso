import Vue from 'vue'
import VueRouter from 'vue-router'
import Ambassador from '../views/Ambassador.vue'
import Buddy from '../views/Buddy.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/ambassador', name: 'Ambassador', component: Ambassador},
  {path: '/buddy', name: 'Buddy', component: Buddy},
  {path: '*', component: Home }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
