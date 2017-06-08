<template lang='pug'>
  doc(title='Collapsible', :tags='tags')
    example(:description="$t('example')", demo='collapsible/collapsible1')
</template>

<script>
export default {
  name: 'doc-collapsible',
  computed: {
    tags: function () {
      return [
        {
          name: 'vulma-collapsible',
          props: [
            { name: 'expandable', type: 'Boolean', default: 'false', description: this.$t('docs.collapsible.vulma-collapsible.props.expandable') }
          ]
        },
        {
          name: 'vulma-collapsible-item',
          props: [
            { name: 'icon', type: 'String', default: '', description: this.$t('icon_class') },
            { name: 'title', type: 'String', default: '', description: this.$t('title') },
            { name: 'start-opened', type: 'Boolean', default: 'false', description: this.$t('docs.collapsible.vulma-collapsible-item.props.start-opened') }
          ]
        }
      ]
    }
  }
}
</script>
