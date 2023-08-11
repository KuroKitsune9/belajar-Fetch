import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import CategoryComponent from '../views/CategoryComponent.vue'
import SingleProduct from "../views/SingleProduct.vue";
import Login from '../views/Login.vue';
import CategoryDetail from '../views/CategoryDetail.vue';
// import SingleSurah from '../views/SingleSurah.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "products",
      component: ProductsView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/category',
      name: 'category',
      component: CategoryComponent
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: "/product/:id",
      name: "SingleProduct",
      component: SingleProduct,
    },
    {
      path: "/Surah",
      name: 'surah',
      component: () => import('../views/Surah.vue')
    },
    {
      path: "/surah/:id",
      name: "SingleSurah",
      component: () => import('../views/SingleSurah.vue')
    },
    {
      path: '/category/:category_nama',
      name: 'CategoryDetail',
      component: CategoryDetail,
      props : true
    }
  ]
})

export default router
