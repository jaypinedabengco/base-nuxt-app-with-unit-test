<template lang="pug">
    nav.navbar.is-light
        div.container
            div.navbar-brand
                nuxt-link.navbar-item(to="/") Nuxt Auth
                button.button.navbar-burger
                    span
                    span
                    span
            div.navbar-menu
                div.navbar-end
                    div.navbar-item.has-dropdown.is-hoverable(v-if="isAuthenticated")
                        a.navbar-link {{ loggedInUser.username }}
                        div.navbar-dropdown
                            nuxt-link.navbar-item(to="/profile") My Profile
                            hr.navbar-divider
                            a.navbar-item(@click="logout") Logout
                    template(v-else)
                        nuxt-link.navbar-item(to="/register") Register
                        nuxt-link.navbar-item(to="/login") Log In
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(['isAuthenticated', 'loggedInUser'])
    },
    methods: {
        async logout () {
            await this.$auth.logout();
        }
    }
}
</script>
