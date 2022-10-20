import { createRouter, createWebHistory } from 'kdu-router'
import HomeView from '../views/HomeView.kdu'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
