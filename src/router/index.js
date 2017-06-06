import Vue from 'vue'
import Router from 'vue-router'
import docs from '@/docs'

const component = path => () => System.import(`@/components/${path}.vue`)

Vue.use(Router)

let routes = [
  { path: '/', component: component('home/index') },
  { path: '/setup', component: component('guide/setup') }
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
