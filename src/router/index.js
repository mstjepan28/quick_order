import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
  /*-----------------------------------------------------*/
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/signup.vue')
  },
  /*-----------------------------------------------------*/
  {
    path: '/',
    name: 'main_menu',
    component: () => import('../views/main_menu.vue')
  },
  /*-----------------------------------------------------*/
  {
    path: '/food',
    name: 'food',
    component: () => import('../views/food.vue'),
    children:[
      {
        path: '',
        name: 'food_options',
        component: () => import('../views/food_options.vue')
      },
      {
        path: '/food_selection/:i',
        name: 'food_selection',
        component: () => import('../views/food_selection.vue')
      }
    ]
  },
  /*-----------------------------------------------------*/
  {
    path: '/drinks',
    name: 'drinks',
    component: () => import('../views/drinks.vue'),
    children:[
      {
        path: '',
        name: 'drinks_options',
        component: () => import('../views/drinks_options.vue')
      },
      {
        path: '/drinks_selection/:i',
        name: 'drinks_selection',
        component: () => import('../views/drinks_selection.vue')
      },
    ]
  },
  /*-----------------------------------------------------*/
  {
    path: '/my_order',
    name: 'my_order',
    component: () => import('../views/my_order.vue')
  },
  {
    path: '/most_ordered',
    name: 'most_ordered',
    component: () => import('../views/most_ordered.vue'),
    children:[
      {
        path: '',
        name: 'most_ordered_food',
        component: () => import('../views/most_ordered_food.vue')
      },
      {
        path: '/most_ordered_drinks',
        name: 'most_ordered_drinks',
        component: () => import('../views/most_ordered_drinks.vue')
      }
    ]
  },
  /*-----------------------------------------------------*/
  {
    path: '/help',
    name: 'help',
    component: () => import('../views/help.vue')
  },
  /*-----------------------------------------------------*/
  {
    path: '/terms_conditions',
    name: 'terms_conditions',
    component: () => import('../views/terms_conditions.vue')
  },
  /*-----------------------------------------------------*/
  {
    path: '/food_info/:id',
    name: 'food_info',
    component: () => import('../views/food_info.vue')
  },
  /*-----------------------------------------------------*/
  {
    path: '/calls',
    name: 'calls',
    component: () => import('../views/calls.vue')
  },
  /*-----------------------------------------------------*/
  {
    path: '/orders/:i',
    name: 'orders',
    component: () => import('../views/orders.vue'),
  },
  /*-----------------------------------------------------*/
  {
    path: '/order_info/:id',
    name: 'order_info',
    component: () => import('../views/order_info.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
