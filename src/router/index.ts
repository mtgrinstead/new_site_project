import { createRouter, createWebHistory } from 'vue-router'
import about_me from '@/views/about_me.vue'
import blogs from '@/views/blogs.vue'
import projects from '@/views/projects.vue'
import languages from '@/views/languages.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about_me',
      name: 'about_me',
      component: about_me
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: blogs
    },
    {
      path: '/projects',
      name: 'projects',
      component: projects
    },
    {
      path: '/languages',
      name: 'languages',
      component: languages
    }
  ]
})

export default router
