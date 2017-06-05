<template lang='pug'>
  div
    h1.title.is-1 {{title}}
    slot
    .box
      .content.is-large.text-primary
        .icon: i.fa.fa-code
        | {{$t('tags')}}
      ul
        li(v-for='tag in tags').is-primary {{tag.name}}
    .box
      .content.is-large.text-primary :{{$t('properties')}}
      vulma-tabs
        vulma-tab(v-for='tag in tags', :key='tag.name', :title='tag.name', v-if='tag.props && tag.props.length')
          table.table
            thead
              tr
                th {{$t('name')}}
                th {{$t('type')}}
                th {{$t('default_value')}}
                th {{$t('description')}}
            tbody
              tr(v-for='prop in tag.props', :key='prop.name')
                th {{prop.name}}
                td {{prop.type}}
                td {{prop.default}}
                td {{prop.description}}
    .box
      .content.is-large.text-primary {{$t('methods')}}()
      vulma-tabs
        vulma-tab(v-for='tag in tags', :key='tag.name', :title='tag.name', v-if='tag.methods && tag.methods.length')
          table.table
            thead
              tr
                th {{$t('name')}}
                th {{$t('description')}}
                th {{$t('parameters')}}
            tbody
              tr(v-for='method in tag.methods', :key='method.name')
                th {{method.name}}
                td {{method.description}}
                td {{method.parameters}}
    .box
      .content.is-large.text-primary @{{$t('events')}}
      vulma-tabs
        vulma-tab(v-for='tag in tags', :key='tag.name', :title='tag.name', v-if='tag.events && tag.events.length')
          table.table
            thead
              tr
                th {{$t('name')}}
                th {{$t('trigger')}}
                th {{$t('return_type')}}
                th {{$t('return_description')}}
            tbody
              tr(v-for='event in tag.events', :key='event.name')
                th {{event.name}}
                td {{event.trigger}}
                td {{event.returnType}}
                td {{event.returnDescription}}
</template>

<style lang='sass' scoped>
  @import '~bulma'

  .table
    font-size: $size-7
</style>

<script>
export default {
  name: 'doc',
  props: {
    title: String,
    tags: Array
  }
}
</script>
