import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '@/pages/home/index.vue'
import AboutView from '@/pages/about/index.vue'
import ContactVIew from '@/pages/contact/index.vue'
import SectionView from '@/pages/sections/index.vue'

const routes = [
  { path: '/', component: HomeView, name:'Home', meta:{title:'home-page'} },
  { path: '/about', component: AboutView, name:'About', meta:{title:'about-us'}},
  { path: '/contact_us', component: ContactVIew, name:'Contact', meta:{title:'contact-us'}},
  { path: '/section', component:SectionView, name:'section', meta:{title:'section'}}
//   { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const defaultTitle = 'my school app';
  document.title = to.meta.title || defaultTitle;
  next();
});

export default router