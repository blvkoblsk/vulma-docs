<template lang='pug'>
  doc(title='Avatar', :tags='tags')
    example(:description="$t('example')", demo='avatar/avatar1')
</template>

<script>
export default {
  name: 'doc-avatar',
  computed: {
    tags: function () {
      return [
        {
          name: 'vulma-avatar',
          props: [
            { name: 'size-px', type: 'Number', default: '48', description: this.$t('docs.avatar.props.size-px') },
            { name: 'format', type: 'String', default: '"circle"', description: this.$t('docs.avatar.props.format') },
            { name: 'src', type: 'String', default: '', description: this.$t('source') },
            { name: 'animate', type: 'Boolean', default: 'false', description: this.$t('docs.avatar.props.animate') }
          ]
        }
      ]
    }
  }
}
</script>
