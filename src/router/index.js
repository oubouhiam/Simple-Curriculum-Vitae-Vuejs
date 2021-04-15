import { createRouter, createWebHistory } from 'vue-router'
import Create from '../views/Create.vue'
import Telecharger from '../views/Telecharger.vue'
const routes = [
  {
    path: '/',
    name: 'Create',
    component: Create
  },
  {
    path: '/Telecharger',
    name: 'Telecharger',
    component: Telecharger
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
