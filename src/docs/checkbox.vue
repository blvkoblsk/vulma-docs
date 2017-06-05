<template lang='pug'>
  doc(title='Checkbox', :tags='tags')
    example(:description="$t('example')", demo='checkbox/checkbox1')
</template>

<script>
export default {
  name: 'doc-checkbox',
  computed: {
    tags: function () {
      return [
        {
          name: 'vulma-checkbox'
        }
      ]
    }
  }
}
</script>
