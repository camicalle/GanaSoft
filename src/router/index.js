import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //Not Found
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFoundView.vue')
    },

    // Landing Page
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/questions',
      name: 'questions',
      component: () => import('../views/QuestionsView.vue')
    },

    // Authentication
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/authentication/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/authentication/RegisterView.vue')
    },

    // Admin
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/admin/DashboardView.vue')
    },
    {
      path: '/animals',
      name: 'animals',
      component: () => import('../views/admin/animals/AnimalsView.vue')
    },
    {
      path: '/farms',
      name: 'farms',
      component: () => import('../views/admin/farms/FarmsView.vue')
    }
  ]
})

export default router
