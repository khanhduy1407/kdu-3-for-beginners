import { createRouter, createWebHistory } from 'kdu-router'
import HomeView from '../views/HomeView.kdu'
import Details from '../views/Details.kdu'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/post/:id',
    name: 'details',
    component: Details,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
