import { createRouter, createWebHistory } from 'kdu-router'
import HomeView from '../views/HomeView.kdu'
import AboutView from '../views/AboutView.kdu'
import Jobs from '../views/jobs/Jobs.kdu'

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
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
