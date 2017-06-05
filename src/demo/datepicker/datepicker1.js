import LocaleSelector from '@/components/doc/locale-selector'

export default {
  name: 'demo-datepicker1',
  components: {
    LocaleSelector
  },
  data() {
    return {
      birthday: new Date()
    }
  }
}
