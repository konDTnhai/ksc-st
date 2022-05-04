import { createRouter, createWebHistory } from 'vue-router/dist/vue-router.esm-bundler'
import index from "./views/index.vue"

export default () => createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/tmp',
      name: 'tmpview',
      component: () => import('./views/_templateview.vue')
    },
    /*{
      path: '/tmp',
      name: 'tmpview',
      component: () => import('./views/_templateview.vue')
    },*/
  ]
})

