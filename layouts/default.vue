<template lang="pug">
  div
    Navbar
    section.main-content.columns
        SideNavigation.is-2
        div.container.column.is-10
            nuxt
</template>

<script>
import Navbar from '@/components/Navbar'
import SideNavigation from '@/components/SideNavigation'

export default {
  middleware: 'auth', 
  components: {
    Navbar,
    SideNavigation
  }
}
</script>