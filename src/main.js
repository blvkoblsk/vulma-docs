import Vue from 'vue'
import i18n from './i18n'
import App from './App'
import router from './router'
import Vulma from 'vulma'
import './global'
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/railscasts.css'

Vue.config.productionTip = false

Vue.use(Vulma)
Vue.use(VueHighlightJS)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  template: '<App/>',
  components: { App }
})
