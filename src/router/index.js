import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TaskListView from '../views/TaskListView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: TaskListView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
