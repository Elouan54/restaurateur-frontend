import { createRouter, createWebHistory } from 'vue-router'

import DashboardView from '../views/DashboardView.vue'
import RestaurantsView from '../views/RestaurantsView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: DashboardView
    },
    {
      path: '/restaurants',
      component: RestaurantsView
    }
  ]
})

export default router