import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index.vue'
import docs from '@/docs'

Vue.use(Router)

let routes = [
  { path: '/', component: Home }
]

docs.forEach(doc => {
  routes.push({
    path: `/docs/${doc.component}`,
    component: () => System.import(`@/docs/${doc.component}.vue`)
  })
  for (let i = 1; i <= doc.demos; i++) {
    let path = `${doc.component}/${doc.component}${i}`
    routes.push({
      path: `/demo/${path}`,
      component: () => System.import(`@/demo/${path}.vue`)
    })
  }
})

export default new Router({ routes })
