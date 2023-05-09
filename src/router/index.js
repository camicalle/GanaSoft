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
      component: () => import('../views/admin/DashboardView.vue'),
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/animals',
      name: 'animals',
      component: () => import('../views/admin/animals/AnimalsView.vue'),
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/farms',
      name: 'farms',
      component: () => import('../views/admin/farms/FarmsView.vue'),
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/pesos',
      name: 'pesos',
      component: () => import('../views/admin/pesos/PesosView.vue'),
      meta: {
        requiresAuth: true,
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const requiredRole = to.meta.requiredRole;
  const isAuthenticated = localStorage.getItem('user');
  const userRole = isAuthenticated ? parseInt(JSON.parse(isAuthenticated).rol) : null;
  if (!requiresAuth && isAuthenticated && to.name === 'login') {
    next('/dashboard');
  } else if (requiresAuth && !isAuthenticated) {
    next('/')
  } else if (requiredRole && requiredRole.length > 0 && (!isAuthenticated || !requiredRole.includes(userRole))) {
    next('/notfound')
  } else {
    next()
  }
})

export default router
