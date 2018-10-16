<template lang="pug">
  div
    Navbar
    section.main-content.columns
        div.container.column.is-12
            nuxt
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  middleware: 'guest', 
  components: {
    Navbar,
  }
}
</script>