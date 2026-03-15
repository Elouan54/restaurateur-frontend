import { createRouter, createWebHistory } from 'vue-router'

import DashboardView from '../views/DashboardView.vue'
import RestaurantsView from '../views/RestaurantsView.vue'
import LoginView from '../views/LoginView.vue'

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
    },
    {
      path: '/login',
      component: LoginView
    }
  ]
})

router.beforeEach((to, from, next) => {

  const token = localStorage.getItem('token')

  if (!token && to.path !== '/login') {
    next('/login')
  } else {
    next()
  }

})

export default router