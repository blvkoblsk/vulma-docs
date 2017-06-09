<template lang='pug'>
  doc(title='Panel', :tags='tags')
    example(:description="$t('example')", demo='panel/panel1')
</template>

<script>
export default {
  name: 'doc-panel',
  computed: {
    tags: function () {
      return [
        {
          name: 'vulma-panel',
          props: [
            { name: 'icon', type: 'String', default: '', description: this.$t('icon_class') },
            { name: 'title', type: 'String', default: '', description: this.$t('title') }
          ]
        }
      ]
    }
  }
}
</script>
