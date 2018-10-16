<template lang="pug">
    section.section
        div.container
            div.columns
                div.column.is-4.is-offset-4
                    h2.title.has-text-centered Register!
                    Notification(:message="error" v-if="error")
                    form(method="post" @submit.prevent="register")
                        div.field
                            label.label Username
                            div.control
                                input.input(type="text" name="username" v-model="username" required)
                        div.field
                            label.label Email
                            div.control
                                input.input(type="email" name="email" v-model="email" required)
                        div.field
                            label.label Password
                            div.control
                                input.input(type="password" name="password" v-model="password" required)
                        div.control
                            button.button.is-dark.is-fullwidth(type="submit") Register
                    div.has-text-centered(style="margin-top:20px") 
                        | Already got an account? 
                        nuxt-link(to="/login") Login
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
            username: '',
            email: '',
            password: '',
            error: null
        }
    },

    methods: {
        async register () {
            try {
                await this.$axios.post('register', {
                    username: this.username,
                    email: this.email,
                    password: this.password
                })

                await this.$auth.loginWith('local', {
                    data: {
                        email: this.email,
                        password: this.password
                    },
                })

                this.$router.push('/')
            } catch (e) {
                this.error = e.response.data.message
            }
        }
    }
}
</script>