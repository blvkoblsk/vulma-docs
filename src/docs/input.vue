<template lang='pug'>
  doc(title='Input', :tags='tags')
    example(:description="$t('example')", demo='input/input1')
</template>

<script>
export default {
  name: 'doc-input',
  computed: {
    tags: function () {
      return [
        {
          name: 'vulma-input',
          props: [
            { name: 'type', type: 'String', default: '"text"', description: this.$t('docs.input.props.type') },
            { name: 'label', type: 'String', default: '', description: this.$t('field_label') },
            { name: 'placeholder', type: 'String', default: '', description: this.$t('placeholder') },
            { name: 'read-only', type: 'Boolean', default: 'false', description: this.$t('read_only') },
            { name: 'size', type: 'String', default: '', description: this.$t('bulma_size') },
            { name: 'icon-left', type: 'String', default: '', description: this.$t('docs.input.props.icon-left') },
            { name: 'icon-right', type: 'String', default: '', description: this.$t('docs.input.props.icon-right') }
          ],
          events: [
            { name: 'focus', trigger: this.$t('docs.input.events.focus.trigger'), returnType: '', returnDescription: '' }
          ]
        }
      ]
    }
  }
}
</script>
