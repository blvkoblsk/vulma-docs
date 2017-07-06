<template lang='pug'>
  doc(title='Datepicker', :tags='tags')
    example(:description="$t('example')", demo='datepicker/datepicker1')
</template>

<script>
export default {
  name: 'doc-datepicker',
  computed: {
    tags: function () {
      return [
        {
          name: 'vulma-datepicker',
          props: [
            { name: 'label', type: 'String', default: '', description: this.$t('field_label') },
            { name: 'locale', type: 'String', default: this.$t('browser_language'), description: this.$t('locale') },
            { name: 'first-day-of-week', type: 'Number', default: '0', description: this.$t('docs.datepicker.props.first-day-of-week') },
            { name: 'highlight-weekend', type: 'Boolean', default: 'true', description: this.$t('docs.datepicker.props.highlight-weekend') },
            { name: 'color', type: 'String', default: '"primary"', description: this.$t('bulma_color') },
            { name: 'min', type: 'Date', default: this.$t('docs.datepicker.props.min.default'), description: this.$t('docs.datepicker.props.min.description') },
            { name: 'min', type: 'Date', default: this.$t('docs.datepicker.props.max.default'), description: this.$t('docs.datepicker.props.max.description') },
            { name: 'auto-select-today', type: 'Boolean', default: 'true', description: this.$t('docs.datepicker.props.auto-select-today') },
            { name: 'show-close-button', type: 'Boolean', default: 'true', description: this.$t('docs.datepicker.props.show-close-button') },
            { name: 'i18n', type: 'Object', default: '', description: this.$t('docs.datepicker.props.i18n') },
            { name: 'size', type: 'String', default: '', description: this.$t('bulma_size') }
          ]
        }
      ]
    }
  }
}
</script>
