<template lang='pug'>
  doc(title='Modal', :tags='tags')
    example(:description="$t('example')", demo='modal/modal1')
</template>

<script>
export default {
  name: 'doc-modal',
  computed: {
    tags: function () {
      return [
        {
          name: 'vulma-modal',
          props: [
            { name: 'is-dialog', type: 'Boolean', default: 'false', description: this.$t('docs.modal.props.is-dialog') },
            { name: 'icon', type: 'String', default: '', description: this.$t('icon_class') },
            { name: 'title', type: 'String', default: '', description: this.$t('title') },
            { name: 'close-on-click-outside', type: 'Boolean', default: 'false', description: this.$t('docs.modal.props.close-on-click-outside') },
            { name: 'show-close-button', type: 'Boolean', default: 'true', description: this.$t('docs.modal.props.show-close-button') }
          ]
        }
      ]
    }
  }
}
</script>
