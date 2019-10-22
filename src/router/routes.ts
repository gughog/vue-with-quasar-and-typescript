import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    component: () => import('pages/Home.vue')
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
