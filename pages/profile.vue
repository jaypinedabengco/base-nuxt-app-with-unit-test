<template lang="pug">
    section.section
        div.container
            h2.title My Profile
            div.content
                p
                    strong Username: 
                    | {{ loggedInUser.username }}
                p
                    strong Email: 
                    | {{ loggedInUser.email }}
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(['loggedInUser'])
    }
}
</script>