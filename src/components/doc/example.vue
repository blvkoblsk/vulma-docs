<template lang='pug'>
  .box
    .columns
      .column.left
        .content
          .level
            .level-left
              .content.is-large.text-primary {{description}}
            .level-right
              vulma-button(color='link', :route='`/demo/${demo}`', open-new-tab) {{$t('view_demo_in_new_tab')}}
          vulma-tabs
            vulma-tab(title='template', v-if='html')
              pre(v-highlightjs='html').is-paddingless
                code.html
            vulma-tab(title='script', v-if='js')
              pre(v-highlightjs='js').is-paddingless
                code.javascript
            vulma-tab(title='style', v-if='css')
              pre(v-highlightjs='css').is-paddingless
                code.css
          slot
      .column.right.is-1.is-paddingless.is-hidden-mobile
        iframe(:src='`/#/demo/${demo}`')
</template>

<style lang='sass' scoped>
  .left
    overflow: auto
  .right
    width: 340px
    height: 590px
    iframe
      width: 100%
      height: 100%
      border-style: solid
      border-color: black
      border-width: 30px 10px
      border-radius: 10px
  pre
    max-height: 450px
</style>

<script>
export default {
  name: 'example',
  props: {
    description: String,
    code: String,
    demo: String
  },
  data() {
    return {
      html: require(`raw-loader!@/demo/${this.demo}.html`),
      js: require(`raw-loader!@/demo/${this.demo}.js`),
      css: require(`!raw-loader!@/demo/${this.demo}.css`)
    }
  }
}
</script>
