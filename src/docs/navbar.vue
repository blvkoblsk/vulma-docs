<template lang='pug'>
  doc(title='Navbar', :tags='tags')
    example(:description="$t('example')", demo='navbar/navbar1')
      .content
        | {{$t('docs.navbar.example.sidebar_example')}}
        router-link(to='/docs/drawer')  {{$t('docs.navbar.example.drawer_link')}}
</template>

<script>
export default {
  name: 'doc-navbar',
  computed: {
    tags: function () {
      return [
        {
          name: 'vulma-navbar',
          props: [
            { name: 'show-menu-button', type: 'Boolean', default: 'false', description: this.$t('docs.navbar.vulma-navbar.props.show-menu-button') },
            { name: 'brand-name', type: 'String', default: '', description: this.$t('docs.navbar.vulma-navbar.props.brand-name') },
            { name: 'brand-logo', type: 'String', default: '', description: this.$t('docs.navbar.vulma-navbar.props.brand-logo') },
            { name: 'show-shadow', type: 'Boolean', default: 'false', description: this.$t('docs.navbar.vulma-navbar.props.show-shadow') },
            { name: 'fixed', type: 'Boolean', default: 'true', description: this.$t('docs.navbar.vulma-navbar.props.fixed') }
          ],
          events: [
            { name: 'menu-clicked', trigger: this.$t('docs.navbar.vulma-navbar.events.menu-clicked.trigger'), returnType: '', returnDescription: '' }
          ]
        },
        {
          name: 'vulma-navitem',
          props: [
            { name: 'active', type: 'Boolean', default: 'false', description: this.$t('docs.navbar.vulma-navitem.props.active') },
            { name: 'is-tab', type: 'Boolean', default: 'true', description: this.$t('docs.navbar.vulma-navitem.props.is-tab') },
            { name: 'icon', type: 'String', default: '', description: this.$t('icon_class') }
          ]
        }
      ]
    }
  }
}
</script>
