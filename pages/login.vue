<template lang="pug">
    section.section
        div.container
            div.columns
                div.column.is-4.is-offset-4
                    h2.title.has-text-centered Welcome Back!
                    Notification(:message="error" v-if="error")
                    form(method="post" @submit.prevent="login")
                        div.field
                            label.label Email
                            div.control
                                input.input(type="email" name="email" v-model="email")
                        div.field
                            label.label Password
                            div.control
                                input.input(type="password" name="password" v-model="password")
                        div.control
                            button.button.is-dark.is-fullwidth(type="submit") Log In
                    div.has-text-centered(style="margin-top:20px")
                        p 
                            | Don't have an account? 
                            nuxt-link(to="/register") Register
</template>
<script>
import Notification from '~/components/Notification'

export default {
    layout: 'guest',
    components: {
        Notification,
    },

    data () {
        return {
            email: '',
            password: '',
            error: null
        }
    },

    methods: {
        async login () {
            try {
                await this.$auth.loginWith('local', {
                    data: {
                        email: this.email,
                        password: this.password
                    }
                })
                this.$router.push('/')
            } catch (e) {
                if ( e.response ) {
                    this.error = e.response.data.message
                } else {
                    this.error = 'please check auth login'
                }
                    
            }
        }
    }
}
</script>