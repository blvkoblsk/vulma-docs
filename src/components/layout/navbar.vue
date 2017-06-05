<template lang='pug'>
  vulma-navbar(
    show-menu-button,
    show-shadow,
    brand-logo='/static/logo.png',
    @menu-clicked="$emit('menu-clicked')")
    vulma-navitem(slot='right', icon='fa-github', :is-tab='false').is-hidden-mobile
    vulma-navitem(slot='right', icon='fa-twitter', :is-tab='false').is-hidden-mobile
</template>

<script>
export default {
  name: 'navbar'
}
</script>
