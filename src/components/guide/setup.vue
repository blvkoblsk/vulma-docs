<template lang='pug'>
  .content
    h1 {{$t('setup_instructions.prerequisites')}}
    h4 {{$t('setup_instructions.install_vuecli')}}
    pre(v-highlightjs='').is-paddingless: code.shell
      | $ npm i -g vue-cli
    h1 {{$t('setup_instructions.create_project')}}
    h4 {{$t('setup_instructions.using_webpack_template')}}
    pre(v-highlightjs='').is-paddingless: code.shell
      | $ vue init webpack my-project
      | $ cd my-project
      | $ npm i
    h1 {{$t('setup_instructions.add_vulma_to_project')}}
    h4 {{$t('setup_instructions.install')}}
    pre(v-highlightjs='').is-paddingless: code.shell
      | $ npm i -S vulma
    h4 {{$t('setup_instructions.change_mainjs')}}
    pre(v-highlightjs='').is-paddingless: code.javascript
      | import Vulma from 'vulma'
      | Vue.use(Vulma)
    small.is-pulled-right {{$t('setup_instructions.temporary_step')}}
    h4 {{$t('setup_instructions.include_vulma_babel_loader')}}
    pre(v-highlightjs='').is-paddingless: code.javascript
      | {
      |   test: /\.js$/,
      |   loader: 'babel-loader',
      |   include: [resolve('src'), resolve('test'), resolve('node_modules/vulma')]
      | }
    h1 {{$t('setup_instructions.test_it')}}
    pre(v-highlightjs='').is-paddingless: code.shell
      | $ npm run dev
    h1 {{$t('setup_instructions.done')}}
</template>

<script>
export default {
  name: 'setup'
}
</script>
