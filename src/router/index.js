import CounterView from '@/views/CounterView.vue'
import CountriesView from '@/views/CountriesView.vue'
import CountrieView from '@/views/CountrieView.vue'
import PokeApiView from '@/views/PokeApiView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/counter',
    name: 'counter',
    component: CounterView
  },
  {
    path: '/countries',
    name: 'countries',
    component: CountriesView
  },
  {
    path: '/countrie/:name',
    name: 'countrie',
    props: true,
    component: CountrieView
  },
  {
    path: '/pokeapi',
    name: 'pokeapi',
    component: PokeApiView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
