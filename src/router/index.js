import { createRouter, createWebHistory } from 'kdu-router'
import HomeView from '../views/HomeView.kdu'
import AboutView from '../views/AboutView.kdu'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
