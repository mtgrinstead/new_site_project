import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import about_me from './views/about_me.vue'
import blogs from './views/blogs.vue'
import projects from './views/projects.vue'
import languages from './views/languages.vue'


const routes = [
    {path: "/about_me", name: "about_me", component: about_me},
    {path: "/blogs", name: "blogs", component: blogs},
    {path: "/projects", name: "projects", component: projects},
    {path: "/languages", name: "languages", component: languages},
]

const app = createApp(App)

app.use(createPinia())
app.use(router)


app.mount('#app')