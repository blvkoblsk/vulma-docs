<template lang='pug'>
  doc(title='Drawer', :tags='tags')
    example(:description="$t('example')", demo='drawer/drawer1')
</template>

<script>
export default {
  name: 'doc-drawer',
  computed: {
    tags: function () {
      return [
        {
          name: 'vulma-drawer',
          methods: [
            { name: 'open', description: this.$t('docs.drawer.vulma-drawer.methods.open'), parameters: '' },
            { name: 'close', description: this.$t('docs.drawer.vulma-drawer.methods.close'), parameters: '' },
            { name: 'toggle', description: this.$t('docs.drawer.vulma-drawer.methods.toggle'), parameters: '' }
          ]
        },
        {
          name: 'vulma-drawerheader',
          props: [
            { name: 'simple', type: 'Boolean', default: 'false', description: this.$t('docs.drawer.vulma-drawerheader.props.simple') },
            { name: 'title', type: 'String', default: '', description: this.$t('docs.drawer.vulma-drawerheader.props.title') },
            { name: 'avatar', type: 'String', default: '', description: this.$t('docs.drawer.vulma-drawerheader.props.avatar') },
            { name: 'name', type: 'String', default: '', description: this.$t('docs.drawer.vulma-drawerheader.props.name') },
            { name: 'email', type: 'String', default: '', description: this.$t('docs.drawer.vulma-drawerheader.props.email') },
            { name: 'color', type: 'String', default: '"primary"', description: this.$t('docs.drawer.vulma-drawerheader.props.color') }
          ]
        }
      ]
    }
  }
}
</script>
