<template lang='pug'>
  vulma-navbar(
    show-menu-button,
    show-shadow,
    brand-logo='/static/logo.png',
    @menu-clicked="$emit('menu-clicked')")
    vulma-navitem(slot='right', icon='fa-github', :is-tab='false', href='https://github.com/oswaldofreitas/vulma', open-new-tab='true').is-hidden-mobile
    vulma-navitem(slot='right', icon='fa-twitter', :is-tab='false', href='https://twitter.com/VulmaUI', open-new-tab='true').is-hidden-mobile
    vulma-navitem(slot='right', icon='fa-slack', :is-tab='false', href='https://vulma.slack.com', open-new-tab='true').is-hidden-mobile
</template>

<script>
export default {
  name: 'navbar'
}
</script>
