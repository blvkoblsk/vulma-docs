<template lang='pug'>
  vulma-drawer(ref='drawer')
    vulma-drawerheader(simple='true', title='Vulma Docs')
    vulma-menu
      .menu-label {{$t('start')}}
      vulma-menuitem {{$t('setup')}} (todo)
      .menu-label CSS
      vulma-menuitem {{$t('colors')}} (todo)
      .menu-label {{$t('components')}}
      vulma-menugroup(:title="$t('basic')")
        vulma-menuitem(route='/docs/button') Button
      vulma-menugroup(:title="$t('layout')")
        vulma-menuitem(route='/docs/drawer') Drawer
        vulma-menuitem(route='/docs/menu') Menu
        vulma-menuitem(route='/docs/navbar') Navbar
      vulma-menugroup(:title="$t('containers')")
        vulma-menuitem(route='/docs/collapsible') Collapsible (todo)
        vulma-menuitem(route='/docs/dialog') Dialog (todo)
        vulma-menuitem(route='/docs/panel') Panel (todo)
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
        vulma-menuitem(route='/docs/datatable') Datatable (todo)
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
