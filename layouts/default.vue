<template lang="pug">
  div
    nav.navbar.header.has-shadow.is-primary(
        role="navigation" 
        aria-label="main navigation")
        div.navbar-brand
            a.navbar-item(href="/")
                img(src="~assets/buefy.png" alt="Home" height="28")
            div.navbar-burger
                span
                span
                span
    section.main-content.columns
        side-navigation.is-2
        div.container.column.is-10
            nuxt
</template>

<script>
import SideNavigation from '@/components/SideNavigation'

export default {
  components: {
    'side-navigation': SideNavigation
  }
}
</script>