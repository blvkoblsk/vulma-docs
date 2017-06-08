<template lang='pug'>
  section.hero.is-medium.is-primary.is-bold
    .hero-body
      .container
        h1.title Vue + Bulma = Vulma
        h2.subtitle {{$t('home_page.vue_ui_components')}}
</template>

<script>
export default {
  name: 'home'
}
</script>
