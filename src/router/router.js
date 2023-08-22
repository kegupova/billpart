import { createRouter, createWebHistory } from 'vue-router'

import AddPersons from "@/components/addPersons.vue";
import AddItems from "@/components/addItems.vue";
import ResultPage from "@/components/resultPage.vue";


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
  {
    path: '/result',
    component: ResultPage
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
