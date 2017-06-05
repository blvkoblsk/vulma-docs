<template lang='pug'>
  doc(title='Tabs', :tags='tags')
    example(:description="$t('example')", demo='tabs/tabs1')
</template>

<script>
export default {
  name: 'doc-tabs',
  computed: {
    tags: function () {
      return [
        {
          name: 'vulma-tabs',
          props: [
            { name: 'hide-one-tab', type: 'Boolean', default: 'false', description: this.$t('docs.tabs.vulma-tabs.props.hide-one-tab') }
          ],
          methods: [
            { name: 'selectTab', description: this.$t('docs.tabs.vulma-tabs.methods.selectTab.description'), parameters: this.$t('docs.tabs.vulma-tabs.methods.selectTab.parameters') }
          ],
          events: [
            { name: 'tab-selected', trigger: this.$t('docs.tabs.vulma-tabs.events.tab-selected.trigger'), returnType: 'Number', returnDescription: this.$t('docs.tabs.vulma-tabs.events.tab-selected.return_description') }
          ]
        },
        {
          name: 'vulma-tab',
          props: [
            { name: 'title', type: 'String', default: '', description: this.$t('title') }
          ]
        }
      ]
    }
  }
}
</script>
