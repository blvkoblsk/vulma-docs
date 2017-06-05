import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './en'
import pt from './pt'

Vue.use(VueI18n)

export default new VueI18n({
  locale: navigator.language.split('-')[0],
  fallbackLocale: 'en',
  messages: {
    en,
    pt
  }
})

const locales = [
  { code: 'en', lang: 'English' },
  { code: 'pt', lang: 'Português' }
]

export { locales }
