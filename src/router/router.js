import { createRouter, createWebHistory } from 'vue-router'

import AddPersons from "@/components/addPersons.vue";
import AddItems from "@/components/addItems.vue";


const routes = [
  {
    path: '/',
    name: 'AddPersons',
    component: AddPersons
  },
  {
    path: '/add-items',
    name: 'AddItems',
    component: AddItems
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
