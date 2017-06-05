<template lang='pug'>
  div
    router-view(v-if='isDemo')
    div(v-else)
      navbar(@menu-clicked='$refs.drawer.open()')
      drawer(ref='drawer')
      section.section.padding-top
        vulma-select.i18n.is-pulled-right(v-model='$i18n.locale', :src='languages', text='language', value='locale', size='small', icon='fa-globe')
        router-view
</template>

<style lang='sass' scoped>
  .i18n
    position: absolute
    top: 50px
    right: 5px
</style>

<style lang='sass' scoped>
  @import '~bulma'

  .padding-top
    margin-top: $nav-height !important
</style>

<script>
import Navbar from './navbar'
import Drawer from './drawer'

export default {
  name: 'layout',
  components: {
    Navbar,
    Drawer
  },
  data() {
    return {
      languages: [
        { locale: 'en', language: 'English' },
        { locale: 'pt', language: 'Português' }
      ]
    }
  },
  computed: {
    isDemo: function () {
      return this.$route.path.startsWith('/demo/')
    }
  }
}
</script>
