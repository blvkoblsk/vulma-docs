<template lang='pug'>
  div
    vulma-button(v-for='locale in locales', :key='locale.code', @click.native='$i18n.locale = locale.code', color='link', size='small') {{locale.lang}}
</template>

<script>
import { locales } from '@/i18n'

export default {
  name: 'locale-selector',
  data() {
    return {
      locales
    }
  }
}
</script>
