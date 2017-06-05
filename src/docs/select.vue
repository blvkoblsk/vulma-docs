<template lang='pug'>
  doc(title='Select', :tags='tags')
    example(:description="$t('example')", demo='select/select1')
</template>

<script>
export default {
  name: 'doc-select',
  computed: {
    tags: function () {
      return [
        {
          name: 'vulma-select',
          props: [
            { name: 'label', type: 'String', default: '', description: this.$t('field_label') },
            { name: 'placeholder', type: 'String', default: '"Select a value"', description: this.$t('placeholder') },
            { name: 'src', type: 'Array', default: '[]', description: this.$t('source_array') },
            { name: 'group', type: 'String', default: '', description: this.$t('group_property') },
            { name: 'text', type: 'String', default: '', description: this.$t('text_property') },
            { name: 'value', type: 'String', default: '', description: this.$t('value_property') },
            { name: 'max-selected', type: 'Number', default: '1', description: this.$t('docs.select.props.max-selected') },
            { name: 'max-text-items', type: 'Number', default: '1', description: this.$t('docs.select.props.max-text-items') },
            { name: 'selected-text', type: 'String', default: '"{0} items selected"', description: this.$t('docs.select.props.selected-text') },
            { name: 'enable-search', type: 'Boolean', default: 'false', description: this.$t('docs.select.props.enable-search') },
            { name: 'icon', type: 'String', default: '', description: this.$t('icon_class') },
            { name: 'size', type: 'String', default: '', description: this.$t('bulma_size') }
          ]
        }
      ]
    }
  }
}
</script>
