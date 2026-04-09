import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from '../views/SearchView.vue'
import BarDetailView from '../views/BarDetailView.vue'
import FavoritesView from '../views/FavoritesView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import HelpView from '../views/HelpView.vue'
import BusinessView from '../views/BusinessView.vue'
import AboutView from '../views/AboutView.vue'
import CareersView from '../views/CareersView.vue'
import PressView from '../views/PressView.vue'
import BlogView from '../views/BlogView.vue'
import TermsView from '../views/TermsView.vue'
import PrivacyView from '../views/PrivacyView.vue'
import CookiesView from '../views/CookiesView.vue'
import ContactView from '../views/ContactView.vue'
import MapView from '../views/MapView.vue'
import SitemapView from '../views/SitemapView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView
  },
  {
    path: '/bar/:id',
    name: 'bar-detail',
    component: BarDetailView,
    props: true
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: FavoritesView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/help',
    name: 'help',
    component: HelpView
  },
  {
    path: '/business',
    name: 'business',
    component: BusinessView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/careers',
    name: 'careers',
    component: CareersView
  },
  {
    path: '/press',
    name: 'press',
    component: PressView
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  {
    path: '/terms',
    name: 'terms',
    component: TermsView
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: PrivacyView
  },
  {
    path: '/cookies',
    name: 'cookies',
    component: CookiesView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/map',
    name: 'map',
    component: MapView
  },
  {
    path: '/sitemap',
    name: 'sitemap',
    component: SitemapView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

export default router
