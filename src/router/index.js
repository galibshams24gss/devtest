import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '@/components/page/NotFound'
import Task from '@/components/fed/Task'
//import Taskbackup from '@/components/fed/Taskbackup'
import Basic from '@/components/fed/Basic'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/', 
    name: 'Task', 
    component: Task 
  },
  { 
    path: '/basic', 
    name: 'Basic', 
    component: Basic
  },
  { 
    path: '/notfound', 
    name: 'NotFound', 
    component: NotFound
  },
  { 
    path: '*', 
    name: 'All', 
    component: Task
  }
]

const Router = new VueRouter({
  mode: 'history',
  routes
})

export default Router