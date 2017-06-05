<template lang='pug'>
  doc(title='Button', :tags='tags')
    example(:description="$t('example')", demo='button/button1')
</template>

<script>
export default {
  name: 'doc-button',
  computed: {
    tags: function () {
      return [
        {
          name: 'vulma-button',
          props: [
            { name: 'color', type: 'String', default: '', description: this.$t('bulma_color') },
            { name: 'size', type: 'String', default: '', description: this.$t('bulma_size') },
            { name: 'icon', type: 'String', default: '', description: this.$t('icon_class') },
            { name: 'route', type: 'String, Object', default: '', description: this.$t('route') },
            { name: 'href', type: 'String', default: '', description: this.$t('href') },
            { name: 'open-new-tab', type: 'Boolean', default: 'false', description: this.$t('open_new_tab') }
          ],
          events: [
            { name: 'click', trigger: this.$t('docs.button.events.click.trigger'), returnType: '', returnDescription: '' }
          ]
        }
      ]
    }
  }
}
</script>
