<template lang='pug'>
  vulma-drawer(ref='drawer')
    vulma-drawerheader(simple='true', title='Vulma Docs')
    vulma-menu
      .menu-label {{$t('guide')}}
      vulma-menuitem(route='/setup') {{$t('setup')}}
      .menu-label CSS
      vulma-menuitem {{$t('colors')}} (todo)
      .menu-label {{$t('components')}}
      vulma-menugroup(:title="$t('basic')")
        vulma-menuitem(route='/docs/avatar') Avatar
        vulma-menuitem(route='/docs/button') Button
        vulma-menuitem(route='/docs/highlight') Highlight
      vulma-menugroup(:title="$t('layout')")
        vulma-menuitem(route='/docs/drawer') Drawer
        vulma-menuitem(route='/docs/menu') Menu
        vulma-menuitem(route='/docs/navbar') Navbar
      vulma-menugroup(:title="$t('containers')")
        vulma-menuitem(route='/docs/collapsible') Collapsible
        vulma-menuitem(route='/docs/modal') Modal
        vulma-menuitem(route='/docs/panel') Panel
        vulma-menuitem(route='/docs/tabs') Tabs
      vulma-menugroup(:title="$t('forms')")
        vulma-menuitem(route='/docs/checkbox') Checkbox
        vulma-menuitem(route='/docs/datepicker') Datepicker
        vulma-menuitem(route='/docs/form') Form & Validation (todo)
        vulma-menuitem(route='/docs/input') Input
        vulma-menuitem(route='/docs/radio') Radio
        vulma-menuitem(route='/docs/select') Select
      vulma-menugroup(:title="$t('data')")
        vulma-menuitem(route='/docs/chart') Chart (todo)
        vulma-menuitem(route='/docs/datatable') Datatable
</template>

<script>
export default {
  name: 'drawer',
  methods: {
    open: function () {
      this.$refs.drawer.open()
    }
  }
}
</script>
