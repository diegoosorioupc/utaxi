import Vue from 'vue'
import VueRouter from 'vue-router'
import FreeViews from '../views/FreeViews/Navegation.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: FreeViews,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/FreeViews/Home.vue')
      },
      {
        path: '/Home',
        name: 'Home',
        component: () => import('../views/FreeViews/Home.vue')
      },
      {
        path: '/Login',
        name: 'Login',
        component: () => import('../views/FreeViews/Login.vue')
      }
    ]

  },
  {
    path: '/Client',
    component: () => import('../views/Client/Client.vue'),
    children: [
      {
        path: '',
        name: 'Home-Client',
        component: () => import('../views/Client/Home.vue')
      },
      {
        path:'',
        name: 'Home-Client',
        component: () => import('../views/Client/Home.vue')
      },
      {
        path:'/profile',
        name:'Profile',
        component: () => import('../views/Client/Profile.vue')
      },
      {
        path:'/my_routes',
        name:'MyRoutes',
        component: () => import('../views/Client/my-routes.vue')
      },
      {
        path:"/about",
        name:'About',
        component: () => import('../views/Client/About.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
