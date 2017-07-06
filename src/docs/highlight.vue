<template lang='pug'>
  doc(title='Highlight', :tags='tags')
    example(:description="$t('example')", demo='highlight/highlight1')
</template>

<script>
export default {
  name: 'doc-highlight',
  computed: {
    tags: function () {
      return [
        {
          name: 'vulma-highlight',
          props: [
            { name: 'text', type: 'String', default: '', description: this.$t('docs.highlight.props.text') },
            { name: 'term', type: 'String', default: '', description: this.$t('docs.highlight.props.term') },
            { name: 'ignore-case', type: 'Boolean', default: 'true', description: this.$t('docs.highlight.props.ignore-case') },
            { name: 'ignore-accents', type: 'Boolean', default: 'true', description: this.$t('docs.highlight.props.ignore-accents') }
          ]
        }
      ]
    }
  }
}
</script>
