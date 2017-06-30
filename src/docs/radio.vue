<template lang='pug'>
  doc(title='Radio', :tags='tags')
    example(:description="$t('example')", demo='radio/radio1')
</template>

<script>
export default {
  name: 'doc-radio',
  computed: {
    tags: function () {
      return [
        {
          name: 'vulma-radio',
          props: [
            { name: 'label', type: 'String', default: '', description: this.$t('field_label') },
            { name: 'src', type: 'Array', default: '', description: this.$t('source_array') },
            { name: 'text', type: 'String', default: '', description: this.$t('text_property') },
            { name: 'value', type: 'String', default: '', description: this.$t('value_property') },
            { name: 'size', type: 'String', default: '', description: this.$t('bulma_size') }
          ]
        }
      ]
    }
  }
}
</script>
