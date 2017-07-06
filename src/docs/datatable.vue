<template lang='pug'>
  doc(title='Datatable', :tags='tags')
    example(:description="$t('example')", demo='datatable/datatable1')
</template>

<script>
export default {
  name: 'doc-datatable',
  computed: {
    tags: function () {
      return [
        {
          name: 'vulma-datatable',
          props: [
            { name: 'src', type: 'Array', default: '[]', description: this.$t('source_array') },
            { name: 'columns', type: 'Array', default: '[]', description: this.$t('docs.datatable.props.columns') },
            { name: 'columns.prop', type: 'String', default: '', description: this.$t('docs.datatable.props.columns_prop') },
            { name: 'columns.type', type: 'Function', default: 'String', description: this.$t('docs.datatable.props.columns_type') },
            { name: 'columns.decimals', type: 'Number', default: '', description: this.$t('docs.datatable.props.columns_decimals') },
            { name: 'columns.wrapper', type: 'Function', default: '', description: this.$t('docs.datatable.props.columns_wrapper') },
            { name: 'columns.label', type: 'String', default: 'columns.prop', description: this.$t('docs.datatable.props.columns_label') },
            { name: 'columns.fixedLeft', type: 'Boolean', default: 'false', description: this.$t('docs.datatable.props.columns_fixedLeft') },
            { name: 'columns.fixedRight', type: 'Boolean', default: 'false', description: this.$t('docs.datatable.props.columns_fixedRight') },
            { name: 'columns.textAlign', type: 'String', default: '"left"', description: this.$t('docs.datatable.props.columns_textAlign') },
            { name: 'columns.sort', type: 'Boolean', default: 'sort', description: this.$t('docs.datatable.props.columns_sort') },
            { name: 'columns.defaultSort', type: 'Boolean', default: 'false', description: this.$t('docs.datatable.props.columns_defaultSort') },
            { name: 'columns.filter', type: 'Boolean', default: 'filter', description: this.$t('docs.datatable.props.columns_filter') },
            { name: 'columns.group', type: 'Number', default: '', description: this.$t('docs.datatable.props.columns_group') },
            { name: 'columns.slot', type: 'String', default: 'columns.prop', description: this.$t('docs.datatable.props.columns_slot') },
            { name: 'columns-selector', type: 'Boolean', default: 'false', description: this.$t('docs.datatable.props.columns-selector') },
            { name: 'condensed', type: 'Boolean', default: 'false', description: this.$t('docs.datatable.props.condensed') },
            { name: 'groups-expanded', type: 'Boolean', default: 'false', description: this.$t('docs.datatable.props.groups-expanded') },
            { name: 'hide-group-columns', type: 'Boolean', default: 'false', description: this.$t('docs.datatable.props.hide-group-columns') },
            { name: 'sort', type: 'Boolean', default: 'false', description: this.$t('docs.datatable.props.sort') },
            { name: 'search', type: 'Boolean', default: 'false', description: this.$t('docs.datatable.props.search') },
            { name: 'filter', type: 'Boolean', default: 'false', description: this.$t('docs.datatable.props.filter') },
            { name: 'pagination', type: 'Object', default: '', description: this.$t('docs.datatable.props.pagination') },
            { name: 'pagination.enabled', type: 'Boolean', default: 'false', description: this.$t('docs.datatable.props.pagination_enabled') },
            { name: 'pagination.pageSize', type: 'Number', default: '10', description: this.$t('docs.datatable.props.pagination_pageSize') },
            { name: 'pagination.pageSizes', type: 'Array', default: '[5, 10, 20, 50, 100]', description: this.$t('docs.datatable.props.pagination_pageSizes') },
            { name: 'pagination.canShowAll', type: 'Boolean', default: 'true', description: this.$t('docs.datatable.props.pagination_canShowAll') },
            { name: 'locale', type: 'String', default: this.$t('browser_language'), description: this.$t('locale') },
            { name: 'excel', type: 'Boolean', default: 'false', description: this.$t('docs.datatable.props.excel') },
            { name: 'i18n', type: 'Object', default: '', description: this.$t('i18n') },
            { name: 'i18n.selectColumns', type: 'String', default: '"Select columns"', description: '' },
            { name: 'i18n.xColumnsSelected', type: 'String', default: '"{0} columns selected"', description: '' },
            { name: 'i18n.noData', type: 'String', default: '"No data"', description: '' },
            { name: 'i18n.noResults', type: 'String', default: '"No results"', description: '' },
            { name: 'i18n.filters.filterButton', type: 'String', default: '"Filter"', description: '' },
            { name: 'i18n.filters.removeAllFilters', type: 'String', default: '"Remove All Filters"', description: '' },
            { name: 'i18n.filters.addFilterBy', type: 'String', default: '"Add Filter By"', description: '' },
            { name: 'i18n.filters.selectAColumn', type: 'String', default: '"Select a column"', description: '' },
            { name: 'i18n.filters.selectAFilterType', type: 'String', default: '"Select a filter type"', description: '' },
            { name: 'i18n.filters.today', type: 'String', default: '"Today"', description: '' },
            { name: 'i18n.filters.add', type: 'String', default: '"Add"', description: '' },
            { name: 'i18n.filters.currentFilters', type: 'String', default: '"Current Filters"', description: '' },
            { name: 'i18n.filters.conditions.all', type: 'String', default: '"All conditions"', description: '' },
            { name: 'i18n.filters.conditions.any', type: 'String', default: '"Any condition"', description: '' },
            { name: 'i18n.filters.types.equals', type: 'String', default: '"Equals"', description: '' },
            { name: 'i18n.filters.types.doesNotEqual', type: 'String', default: '"Does Not Equal"', description: '' },
            { name: 'i18n.filters.types.greatherThan', type: 'String', default: '"Greater Than"', description: '' },
            { name: 'i18n.filters.types.greatherThanOrEqualTo', type: 'String', default: '"Greather Than or Equal To"', description: '' },
            { name: 'i18n.filters.types.lessThan', type: 'String', default: '"Less Than"', description: '' },
            { name: 'i18n.filters.types.lessThanOrEqualTo', type: 'String', default: '"Less Than or Equal To"', description: '' },
            { name: 'i18n.filters.types.beginsWith', type: 'String', default: '"Begins With"', description: '' },
            { name: 'i18n.filters.types.doesNotBeginsWith', type: 'String', default: '"Does Not Begins With"', description: '' },
            { name: 'i18n.filters.types.endsWith', type: 'String', default: '"Ends With"', description: '' },
            { name: 'i18n.filters.types.doesNotEndWith', type: 'String', default: '"Does Not End With"', description: '' },
            { name: 'i18n.filters.types.contains', type: 'String', default: '"Contains"', description: '' },
            { name: 'i18n.filters.types.doesNotContain', type: 'String', default: '"Does Not Contain"', description: '' },
            { name: 'i18n.filters.boolean.true', type: 'String', default: '"True"', description: '' },
            { name: 'i18n.filters.boolean.false', type: 'String', default: '"False"', description: '' },
            { name: 'i18n.pagination.pageSize', type: 'String', default: '"Page size"', description: '' },
            { name: 'i18n.pagination.showAll', type: 'String', default: '"Show All"', description: '' }
          ],
          events: [
            { name: 'row-click', trigger: this.$t('docs.datatable.events.row-click.trigger'), returnType: 'Object', returnDescription: this.$t('docs.datatable.events.row-click.return_description') }
          ]
        }
      ]
    }
  }
}
</script>
