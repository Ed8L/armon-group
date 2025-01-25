import Vue from 'vue'
import Router from 'vue-router'
import i18n from './i18n'

const Home = () => import('./views/Home.vue')
const About = () => import('./views/About.vue')
const Contact = () => import('./views/Contact.vue')
const Products = () => import('./views/Products.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: `/${i18n.locale}`
    },
    {
      path: '/:lang',
      component: {
        render(c) {
          return c('router-view')
        }
      },
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: 'about',
          name: 'about us',
          component: About
        },
        {
          path: 'contact',
          name: 'contact us',
          component: Contact
        },
        {
          path: 'products',
          name: 'products',
          component: Products
        }
      ]
    }
  ]
})
