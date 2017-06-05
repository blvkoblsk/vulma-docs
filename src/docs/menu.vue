<template lang='pug'>
  doc(title='Menu', :tags='tags')
    example(:description="$t('example')", demo='menu/menu1')
</template>

<script>
export default {
  name: 'doc-menu',
  computed: {
    tags: function () {
      return [
        {
          name: 'vulma-menu'
        },
        {
          name: 'vulma-menugroup',
          props: [
            { name: 'title', type: 'String', default: '', description: this.$t('title') }
          ]
        },
        {
          name: 'vulma-menuitem',
          props: [
            { name: 'icon', type: 'String', default: '', description: this.$t('icon_class') },
            { name: 'route', type: 'String, Object', default: '', description: this.$t('route') },
            { name: 'href', type: 'String', default: '', description: this.$t('href') },
            { name: 'open-new-tab', type: 'Boolean', default: 'false', description: this.$t('open_new_tab') }
          ]
        }
      ]
    }
  }
}
</script>
